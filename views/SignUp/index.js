import { ErrorMessage } from "@hookform/error-message";
import {
  Button,
  Label,
  Radio,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { authenticationDispatcher } from "pages/api/redux-toolkit/authentication/authenticationSlice";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Constants, XHR_STATE } from "utility/constants";
import bg_image from "../../public/images/hero.svg";
import logo from "../../public/images/logo.svg";
import shopify_logo from "../../public/images/shopify_logo.png";
import style from "./SignUp.module.scss";

import { Divider } from "components/layouts/common/Divider";
import { Title } from "components/layouts/common/Title";
import ResendEmail from "components/verify-account/ResendEmail";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { passwordPattern, useFormError } from "utility/formHelper";
import { handleErrorMessage } from "utility/utilityFunctions";
export const SignUpPage = () => {
  const searchParams = useSearchParams();
  const shpfyTkn = searchParams.get("shopify_integration");
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { registerWithEmailPassword } = useSelector(
    (state) => state.authenticationSlice
  );
  const router = useRouter();

  const [apiError, setApiError] = useState("");

  const [seePassword, setSeePassword] = useState(false);
  const [shippingType, setShippingType] = useState("business");
  const [disableSignUpButton, setDisableSignUpButton] = useState(false);
  const [shopifyToken, setShopifyToken] = useState(null);
  const [resendEmail, setResendEmail] = useState(false);
  const [userId, setUserId] = useState(null);
  const cookies = new Cookies();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    setError,
    reset,
    control,
  } = useForm({ mode: "onBlur" });
  // /**
  //  * Updates about the various phases of endpoints i.e. In Progress, Complete & Aslepp.
  //  */
  useEffect(() => {
    setShopifyToken(shpfyTkn);
  }, [shpfyTkn]);

  const { setFormError } = useFormError();

  const onSubmit = async (data) => {
    let userCredentials = {
      company_name: shippingType == "personal" ? "" : data.company_name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password,
      how_hear: data.how_hear,
      no_of_courier: data.no_of_courier,
      shippingType: shippingType,
      shopify_integration: shopifyToken ? shopifyToken : null,
    };

    // console.log({ userCredentials });

    dispatch(
      authenticationDispatcher.registerWithEmailPassword(userCredentials, {
        success: (response) => {
          setUserId(response.user_id);
          setResendEmail(true);
          toast.success("Sign Up Successful");
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

  const handleChangeShippingType = (e) => {
    setShippingType(e.target.value);
  };

  useEffect(() => {
    if (shippingType == "personal") {
      setError("shipping_type", false);
      setValue("company_name", "");
    }
  }, [shippingType]);

  return (
    <div className="public-layout">
      <div className="public-layout-inner">
        <div className="public-layout-left">
          <h1
            className={`text-[40px] leading-[52px] text-secondary-950 mb-8 font-bold`}
          >
            The #1 Choice <br />
            for Business Shipping
          </h1>
          <Image src={bg_image} alt="Hero-Image" width={"380"} />
        </div>
        <Divider />
        {resendEmail && userId ? (
          <ResendEmail userId={userId} />
        ) : (
          <div className="public-layout-right">
            {shopifyToken && (
              <div className="flex justify-center">
                <Image src={logo} alt="Company Logo" />
                <div>
                  <Image
                    src={shopify_logo}
                    alt="Shopify Company Logo"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
              </div>
            )}
            <Title heading="SignUp" />
            <form
              className="w-full md:w-[60%]"
              noValidate
              autoComplete={"off"}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-1 flex-wrap mt-7">
                <div className="flex w-full items-center gap-1 flex-wrap mb-2">
                  <div className="flex flex-col ">
                    <p className="font-semibold mr-3 mb-2">
                      {" "}
                      Are you looking for:
                    </p>
                    <div className="flex gap-5">
                      <div className="flex item-center">
                        <Radio
                          id="business_shipping"
                          name="shipping_type"
                          value="business"
                          checked={shippingType == "business" ? true : false}
                          className={`${style.shipping_radio} mr-2 mt-1`}
                          onClick={handleChangeShippingType}
                          {...register("shipping_type", {
                            required: "Please make a selection",
                          })}
                        />
                        <Label
                          htmlFor="business_shipping"
                          className="cursor-pointer"
                        >
                          Business Shipping
                        </Label>
                      </div>
                      <div className="flex item-center">
                        <Radio
                          id="personal_shipping"
                          name="shipping_type"
                          value="personal"
                          checked={shippingType == "personal" ? true : false}
                          className={`${style.shipping_radio} mr-2 mt-1`}
                          onClick={handleChangeShippingType}
                          {...register("shipping_type", {
                            required: "Required",
                          })}
                        />
                        <Label
                          htmlFor="personal_shipping"
                          className="cursor-pointer"
                        >
                          Personal Shipping
                        </Label>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-red-500 font-bold text-xs ml-1 flex-1`}
                  >
                    <ErrorMessage errors={errors} name="shipping_type" />
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-2 block">
                    <div>
                      <TextInput
                        color={
                          handleErrorMessage(errors, "company_name")
                            ? "failure"
                            : "primary"
                        }
                        id="company_name"
                        name="company_name"
                        type="text"
                        disabled={shippingType === "personal"}
                        placeholder={`Company Name`}
                        {...register("company_name", {
                          validate: {
                            required: (value) => {
                              if (shippingType == "business" && !value)
                                return "Company name is required";
                              return true;
                            },
                          },
                        })}
                        helperText={
                          handleErrorMessage(errors, "company_name") ? (
                            <span className="font-medium text-xs mt-0">
                              {handleErrorMessage(errors, "company_name")}
                            </span>
                          ) : null
                        }
                        className="focus:border-green-500 focus:ring-green-500 shadow-sm border-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-2 block">
                    <TextInput
                      className="border-gray-300"
                      id="email"
                      name="email"
                      type="email"
                      color={
                        handleErrorMessage(errors, "email")
                          ? "failure"
                          : "primary"
                      }
                      placeholder="Email"
                      helperText={
                        handleErrorMessage(errors, "email") ? (
                          <span className="font-medium text-xs mt-0">
                            {handleErrorMessage(errors, "email")}
                          </span>
                        ) : null
                      }
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please enter valid email address",
                        },
                        validate: {
                          notAccepted: (value) => {
                            let invalidEmailTypes = [
                              "gmail.com",
                              "gmail.ca",
                              "googlmail.com",
                              "googlmail.ca",
                              "hotmail.com",
                              "hotmail.ca",
                              "outlook.com",
                              "outlook.ca",
                              "yahoo.com",
                              "yahoo.ca",
                              "live.com",
                              "live.ca",
                              "icloud.com",
                              "icloud.ca",
                              "ymail.com",
                              "ymail.ca",
                            ];
                            var emailArray = value.split("@");
                            var email_stat = invalidEmailTypes.includes(
                              emailArray[1]
                            );
                            if (false) {
                              setDisableSignUpButton(true);
                              return "Email address has not been accepted, if this is in error please call 1-888-210-8910";
                            } else {
                              setDisableSignUpButton(false);
                            }
                          },
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-2 block relative">
                    <TextInput
                      id="password"
                      name="password"
                      type={seePassword ? "text" : "password"}
                      placeholder="Password"
                      color={
                        handleErrorMessage(errors, "password")
                          ? "failure"
                          : "primary"
                      }
                      helperText={
                        handleErrorMessage(errors, "password") ? (
                          <span className="font-medium text-xs mt-0">
                            {handleErrorMessage(errors, "password")}
                          </span>
                        ) : null
                      }
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                        pattern: passwordPattern,
                      })}
                    />

                    <span
                      style={{
                        position: "absolute",
                        top: 12,
                        right: 10,
                        cursor: "pointer",
                      }}
                      onClick={() => setSeePassword(!seePassword)}
                    >
                      {seePassword ? (
                        <AiFillEyeInvisible
                          fontSize={18}
                          className="text-slate-400"
                        />
                      ) : (
                        <AiFillEye fontSize={18} className="text-slate-400" />
                      )}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-2 block">
                    <TextInput
                      id="no_of_courier"
                      name="no_of_courier"
                      type="number"
                      placeholder="How many shipments do you send per week?"
                      {...register("no_of_courier")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-2 block">
                    <Controller
                      render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                      }) => (
                        <Select
                          className="focus:outline-none"
                          style={{
                            border: error ? "0" : "initial",
                            outline: "none",
                          }}
                          color={error ? "failure" : "primary"}
                          id="how_hear"
                          name="how_hear"
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          inputRef={ref}
                        >
                          <option value="">How did you hear about us? </option>
                          <option value="Google">Google</option>
                          <option value="Instagram">Instagram</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Website">Website</option>
                          <option value="Referral">Referral</option>
                          <option value="Other">Other</option>
                        </Select>
                      )}
                      name="how_hear"
                      control={control}
                      rules={{ required: "this is required" }}
                    />

                    {errors?.how_hear ? (
                      <p className="text-red-600 font-medium text-xs mt-2">
                        Please fill how you hear about us
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="text-right float-right mt-3 w-full">
                <Button
                  disabled={
                    registerWithEmailPassword.loading === XHR_STATE.IN_PROGRESS
                  }
                  size="md"
                  color="primary"
                  className={`w-full mb-2`}
                  type="submit"
                >
                  <span className="text-md font-bold">
                    {registerWithEmailPassword.loading ===
                      XHR_STATE.IN_PROGRESS && (
                      <Spinner aria-label="Loader" className="mx-2" />
                    )}
                    Sign Up Now
                  </span>
                </Button>
              </div>
            </form>
            <div>
              {apiError !== "" ? (
                <p className="text-red-500 text-center px-0 py-2.5 inline-block">
                  {apiError}
                </p>
              ) : null}

              <p className={`text-center mt-6`}>
                By registering you agree to our{" "}
                <a
                  href="https://shipsimple.ca/terms-and-conditions/"
                  target="_blank"
                  className={`text-secondary-950 font-semibold underline`}
                  rel="noreferrer"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="https://shipsimple.ca/privacy-policy/"
                  target="_blank"
                  className={`text-secondary-950  font-semibold underline`}
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <p className={`text-center mt-2 text-lg font-semibold`}>
                Already have an account?{" "}
                <Link
                  className="text-shipGreen-400 font-semibold tracking-wider"
                  href="/"
                >
                  Signin
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
