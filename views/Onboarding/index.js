import { useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";

import {
  Button,
  Checkbox,
  Label,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import { Controller, useForm } from "react-hook-form";

import { Divider } from "components/layouts/common/Divider";
import { Title } from "components/layouts/common/Title";
import { usersDispatcher } from 'pages/api/redux-toolkit/users/usersSlice';
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import canadapostApi from "utility/canadapost_api";
import { Constants } from "utility/constants";
import { provinces } from "utility/data";
import { useOnClickOutside } from "utility/useClickOutside";
import { handleErrorMessage } from "utility/utilityFunctions";
import { useFormError } from "utility/formHelper";

export const OnboardingPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    setError,
    reset,
    control,
  } = useForm({ mode: "onBlur" });
  const { userToken } = useSelector((state) => state.usersSlice);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [addressLoading, setAddressLoading] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [addressDropdown, setAddressDropdown] = useState(false);

  const handleChangeStreetAddress = (event) => {
    setSearchTerm(event.target.value);
  };

  const addressSearch = async (strAddress) => {
    const response = await canadapostApi.post("/addver/completions", {
      partialStreet: strAddress,
      countryFilter: "CA",
    });
    return response.data ?? "";
  };

  const selectedAddress = (address) => {
    // setAddressSuggestions([]);
    if (address.address.address) {
      setValue("street1", address.address.address, { shouldValidate: true });
    }
    if (address.address.city) {
      setValue("city", address.address.city, { shouldValidate: true });
    }
    if (address.address.country) {
      setValue("country", address.address.country, { shouldValidate: true });
    }
    if (address.address.pc) {
      setValue("postal_code", address.address.pc, { shouldValidate: true });
    }
    if (address.address.prov) {
      setValue("state", address.address.prov, { shouldValidate: true });
    }
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const delayDebounceFn = setTimeout(async () => {
        setAddressLoading(true);
        const addresses = await addressSearch(searchTerm);
        if (addresses.data.length > 0) {
          setAddressDropdown(true);

          setAddressLoading(false);
          let address = addresses.data.map((address) => {
            return {
              address: address.address,
            };
          });
          setAddressSuggestions(address);
        } else {
          setAddressLoading(false);
          setAddressSuggestions([]);
        }
      }, 500);
      return () => clearTimeout(delayDebounceFn);
    } else {
      setAddressLoading(false);
    }
  }, [searchTerm]);

  const onClearAddress = () => {
    setValue("phone_number", "");
    reset();
  };

  const addressRef = useRef(null);

  const handleClickOutside = () => {
    if (addressDropdown) {
      setAddressDropdown(false);
    }
  };

  useOnClickOutside(addressRef, handleClickOutside);
  const { setFormError } = useFormError();

  const onSubmit = async (data) => {
    console.log({ data });
    setIsLoading(true);
    let formData = {};
    formData.first_name = data.first_name;
    formData.last_name = data.last_name;
    //formData.onboarding = data.onboarding;
    formData.phone_number = data.phone_number;
    formData.company_name = data.company_name;
    formData.street1 = data.street1;
    formData.street2 = data.street1;
    formData.city = data.city;
    formData.country = data.country;
    formData.state = data.state;
    formData.postal_code = data.postal_code;

    dispatch(
      usersDispatcher.createUserProfile(formData, userToken, {
        success: (response) => {
          console.log(response);
          // if (response) {
          //     getClientSecretKey(token);
          //     setFormData({});
          // }
          setIsLoading(false);
          return response;
        },
        error: (err) => {
          if (err.status == 422) {
            setFormError(err?.data?.errors, setError);
          } else {
            toast.error(Constants.DEFAULT_ERROR_TEXT);
          }
        },
      })
    );
  };

  return (
    <div className="public-layout">
      <div className="public-layout-inner">
        <div className="public-layout-left">
          <div className="hidden lg:flex items-center gap-4 flex-col mb-10">
            <div className="iconBg w-32 h-32 text-white flex justify-center items-center text-2xl font-medium rounded-full">
              <BiUser fontSize="80px" />
            </div>

            <div className="w-[60%] flex flex-col text-center">
              <h1 className={`text-5xl text-primary-400 mb-2 font-bold`}>
                My Profile
              </h1>
              <p className="text-ternary-900 font-semibold mt-4 text-xl">
                Complete your profile by filling in your Full Name, Company
                Name, Address, Phone Number.
              </p>
            </div>
          </div>
        </div>
        <Divider />

        <div className="public-layout-right">
          <Title heading="My Profile" />
          <form
            className="w-full md:w-[70%]"
            noValidate
            autoComplete={"off"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1 flex-wrap mt-7">
              <div className="grid grid-cols-2 gap-2">
                <div className="mb-2 block">
                  <div>
                    <TextInput
                      color={
                        handleErrorMessage(errors, "first_name")
                          ? "failure"
                          : "primary"
                      }
                      id="first_name"
                      name="first_name"
                      type="text"
                      placeholder={`First Name`}
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                      helperText={
                        handleErrorMessage(errors, "first_name") ? (
                          <span className="font-medium text-xs mt-0">
                            {handleErrorMessage(errors, "first_name")}
                          </span>
                        ) : null
                      }
                      className="focus:border-green-500 focus:ring-green-500 shadow-sm border-none"
                    />
                  </div>
                </div>
                <div className="mb-2 block">
                  <div>
                    <TextInput
                      color={
                        handleErrorMessage(errors, "last_name")
                          ? "failure"
                          : "primary"
                      }
                      id="last_name"
                      name="last_name"
                      type="text"
                      placeholder={`Last Name`}
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                      helperText={
                        handleErrorMessage(errors, "last_name") ? (
                          <span className="font-medium text-xs mt-0">
                            {handleErrorMessage(errors, "last_name")}
                          </span>
                        ) : null
                      }
                      className="focus:border-green-500 focus:ring-green-500 shadow-sm border-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="mb-2 block relative">
                  <TextInput
                    id="street1"
                    name="street1"
                    type="text"
                    placeholder="Street Address"
                    color={
                      handleErrorMessage(errors, "street1")
                        ? "failure"
                        : "primary"
                    }
                    onClick={(ev) => {
                      ev.preventDefault();
                      ev.stopPropagation();
                      ev.nativeEvent.stopImmediatePropagation();
                      setAddressDropdown(true);
                    }}
                    helperText={
                      handleErrorMessage(errors, "street1") ? (
                        <span className="font-medium text-xs mt-0">
                          {handleErrorMessage(errors, "street1")}
                        </span>
                      ) : null
                    }
                    {...register("street1", {
                      required: "Street Address is required",
                      onChange: (e) => handleChangeStreetAddress(e),
                      onFocus: (ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        ev.nativeEvent.stopImmediatePropagation();

                        setFocused(true);
                      },
                    })}
                    // control={control}
                    // onBlur={(e)=>{
                    //   e.stopPropagation()
                    //   handleClickOutside()
                    // }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 10,
                      cursor: "pointer",
                    }}
                  >
                    {addressLoading ? (
                      <Spinner aria-label="Spinner" color={"success"} />
                    ) : null}
                  </span>

                  {addressSuggestions.length > 0 ? (
                    <ul
                      style={{
                        display: addressDropdown ? "block" : "none",
                      }}
                      className={`absolute shadow-md bg-white rounded box-border list-none max-h-[200px] overflow-auto w-full z-10 m-0 top-12`}
                      ref={addressRef}
                    >
                      {addressSuggestions?.map((address, index) => {
                        return (
                          <li
                            key={index}
                            className={`p-2 cursor-pointer hover:bg-gray-100 text-black`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setAddressDropdown(false);
                              selectedAddress(address);
                            }}
                          >
                            {address.address.address}, {address.address.city},{" "}
                            {address.address.prov}, {address.address.pc}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="mb-2 block">
                  <TextInput
                    id="street2"
                    name="street2"
                    type="text"
                    placeholder="Unit / Suite number"
                    {...register("street2")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-2 block">
                  <TextInput
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                    color={
                      handleErrorMessage(errors, "city") ? "failure" : "primary"
                    }
                    helperText={
                      handleErrorMessage(errors, "city") ? (
                        <span className="font-medium text-xs mt-0">
                          {handleErrorMessage(errors, "city")}
                        </span>
                      ) : null
                    }
                    {...register("city", { required: "City is required" })}
                  />
                </div>
                <div className="mb-2 block">
                  <Controller
                    render={({
                      field: { onChange, onBlur, value, name, ref: stateRef },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <Select
                        className="focus:outline-none"
                        style={{
                          border: error ? "0" : "initial",
                          outline: "none",
                        }}
                        color={error ? "failure" : "primary"}
                        id="state"
                        name="state"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        inputRef={stateRef}
                      >
                        <option value="">Province</option>
                        {provinces.map((province) => (
                          <option key={province.value} value={province.value}>
                            {province.title}
                          </option>
                        ))}
                      </Select>
                    )}
                    name="state"
                    control={control}
                    rules={{ required: true }}
                  />

                  {errors?.state ? (
                    <p className="text-red-600 font-medium text-xs mt-2">
                      Province is required
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-2 block">
                  <TextInput
                    id="postal_code"
                    name="postal_code"
                    type="text"
                    placeholder="Postal Code"
                    color={
                      handleErrorMessage(errors, "postal_code")
                        ? "failure"
                        : "primary"
                    }
                    helperText={
                      handleErrorMessage(errors, "postal_code") ? (
                        <span className="font-medium text-xs mt-0">
                          {handleErrorMessage(errors, "postal_code")}
                        </span>
                      ) : null
                    }
                    {...register("postal_code", {
                      required: "Postal Code is required",
                    })}
                  />
                </div>

                <div className="mb-2 block">
                  <Controller
                    render={({
                      field: { onChange, onBlur, value, name, ref: countryRef },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <Select
                        className="focus:outline-none"
                        style={{
                          border: error ? "0" : "initial",
                          outline: "none",
                        }}
                        color={error ? "failure" : "primary"}
                        id="countries"
                        name="country"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        inputRef={countryRef}
                      >
                        <option value="">Country</option>
                        <option value="CA">Canada</option>
                      </Select>
                    )}
                    name="country"
                    control={control}
                    rules={{ required: true }}
                  />

                  {errors?.country ? (
                    <p className="text-red-600 font-medium text-xs mt-2">
                      Country is required
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="mb-2 block">
                  <InputMask
                    maskChar=""
                    mask="(999) 999-9999"
                    {...register("phone_number", {
                      required: "Phone number is required",
                      minLength: {
                        value: 14,
                        message: "Phone Number should be of 10 digits",
                      },
                    })}
                  >
                    {(inputProps) => (
                      <TextInput
                        {...inputProps}
                        placeholder="Phone Number"
                        name="phone_number"
                        required={true}
                        type="tel"
                        disableunderline="true"
                        color={
                          handleErrorMessage(errors, "phone_number")
                            ? "failure"
                            : "primary"
                        }
                        helperText={
                          handleErrorMessage(errors, "phone_number") ? (
                            <span className="font-medium text-xs mt-0">
                              {handleErrorMessage(errors, "phone_number")}
                            </span>
                          ) : null
                        }
                      />
                    )}
                  </InputMask>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="mb-2 block">
                  <div className="flex items-center gap-2 ">
                    <Checkbox
                      id="residential"
                      color={"primary"}
                      {...register("residential", { required: false })}
                    />
                    <Label
                      htmlFor="residential"
                      className={`text-sm font-semibold cursor-pointer text-secondary-950`}
                    >
                      Residential address
                    </Label>
                  </div>
                </div>
                <div className="mb-2 block">
                  <p
                    className={`text-sm font-semibold cursor-pointer text-secondary-950`}
                    onClick={onClearAddress}
                  >
                    Clear Form
                  </p>
                </div>
              </div>
            </div>

            <div className="text-right float-right mt-3">
              <Button
                disabled={isLoading}
                isProcessing={isLoading}
                size={"md"}
                type="submit"
                color="primary"
              >
                <span className="text-lg font-bold">Done</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
