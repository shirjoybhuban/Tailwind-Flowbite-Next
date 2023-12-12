import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./SignUp.module.scss";
import bg_image from "../../public/images/hero.svg";
import logo from "../../public/images/logo.svg";
import shopify_logo from "../../public/images/shopify_logo.png";
import google_icon from "../../public/images/google.svg";
import microsoft_icon from "../../public/images/microsoft.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { XHR_STATE } from "utility/constants";
import { authenticationDispatcher } from "pages/api/redux-toolkit/authentication/authenticationSlice";
import Head from "next/head";
import {
  TextInput,
  Select,
  Checkbox,
  Label,
  Button,
  Spinner,
  Radio,
} from "flowbite-react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller, useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffectOnce } from "hooks/useEffectOnce";
import { useSearchParams } from "next/navigation";

import Cookies from "universal-cookie";
export const SignUpPage = () => {
  // const hasWindow = typeof window !== 'undefined';

  // function getWindowDimensions() {
  //     const width = hasWindow ? window.innerWidth : null;
  //     const height = hasWindow ? window.innerHeight : null;
  //     return {
  //       width,
  //       height,
  //     };
  // }
  const searchParams = useSearchParams();
  const shpfyTkn = searchParams.get("shopify_integration");
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { registerWithEmailPassword } = useSelector(
    (state) => state.authenticationSlice
  );
  const router = useRouter();
  // const [formData, setFormData] = useState({});
  const [apiError, setApiError] = useState("");
  // const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  // const [formErrors, setFormErrors] = useState({});
  const [seePassword, setSeePassword] = useState(false);
  // const [companyFull, setCompanyFull] = useState(true);
  const [shippingType, setShippingType] = useState("");
  const [disableSignUpButton, setDisableSignUpButton] = useState(false);
  const [shopifyToken, setShopifyToken] = useState(null);
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

  useEffect(() => {
    if (registerWithEmailPassword.loading === XHR_STATE.IN_PROGRESS) {
      setIsLoading(true);
    }
    if (
      registerWithEmailPassword.response !== null &&
      registerWithEmailPassword.error === "" &&
      registerWithEmailPassword.loading === XHR_STATE.COMPLETE
    ) {
      setIsLoading(false);
    } else if (
      registerWithEmailPassword.error !== "" &&
      registerWithEmailPassword.loading === XHR_STATE.ASLEEP
    ) {
      setIsLoading(false);
      setApiError(registerWithEmailPassword.error);
    }
  }, [registerWithEmailPassword]);

  // useEffectOnce(() => {
  //     if (hasWindow) {
  //         let screenSize = getWindowDimensions();
  //         if(screenSize.width <= 576){
  //             setCompanyFull(true);
  //         }else{
  //             setCompanyFull(false);
  //         }
  //     }
  // }, []);

  // /**
  //  * Submit function of Profile form
  //  */
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

    console.log({ userCredentials });

    dispatch(
      authenticationDispatcher.registerWithEmailPassword(userCredentials, {
        success: (response) => {
          // if (response?.token) {
          //     cookies.remove('shipSimpleToken');
          //     cookies.remove('user');
          //     cookies.remove('userId');
          //     cookies.set('shipSimpleToken', response.token, { path: '/', maxAge: 86400 });
          //     cookies.set('user', response.user, { path: '/' });
          //     cookies.set('userId', response.user.id, { path: '/' });
          //     cookies.set('shippingType', shippingType, { path: '/' });
          //     router.push('/verifyAccount');
          // }
          // setFormData({});
          // return response;
        },
      })
    );
  };

  const handleChangeShippingType = (e) => {
    setShippingType(e.target.value);
  };

  const handleErrorMessage = (errors, name) => {
    if (name in errors) {
      return errors[name]?.message;
    }
    return "";
  };

  return (
    <>
      {/* <Head>
                <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5JDD9R4');`}}></script>
            </Head>
            <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JDD9R4"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
            <MasterLayout /> */}
      <div className={style.container}>
        <div
          className={`${style.left_contents} hidden sm:hidden md:hidden lg:block`}
        >
          <h1
            className={`text-[44px] leading-[52px] text-[#08085E] mb-[30px] font-bold`}
          >
            The #1 Choice <br />
            for Business Shipping
          </h1>
          <Image src={bg_image} alt="Hero-Image" width={"300"} />
        </div>
        <div
          className={`${style.divider} hidden sm:hidden md:hidden lg:block`}
        ></div>
        <div
          className={`${style.right_contents} lg:ml-12 px-5 sm:px-10 md:px-15 lg:px-15 w-full sm:w-full md:w-4/5 lg:w-1/2`}
        >
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
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-[#08085E] inline-block text-[1.8rem] font-bold">
              SignUp
            </h1>
            <div className="bg-primary-500 h-0.5 w-[45px] mt-1"></div>
          </div>
          <form
            noValidate
            style={{ display: "block", marginTop: 0 }}
            autoComplete={"off"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1 flex-wrap">
              <div className="flex w-full items-center gap-1 flex-wrap mb-1">
                <div className="flex items-center gap-3">
                  <p className="font-semibold"> Are you looking for:</p>
                  <div className="item-center flex">
                    <Radio
                      id="personal_shipping"
                      name="shipping_type"
                      value="personal"
                      checked={shippingType == "personal" ? true : false}
                      className={`${style.shipping_radio} mr-2`}
                      onClick={handleChangeShippingType}
                      {...register("shipping_type", {
                        required: "Please make a selection",
                      })}
                    />
                    <Label
                      htmlFor="personal_shipping"
                      className="cursor-pointer"
                    >
                      Personal Shipping
                    </Label>
                  </div>
                  <div className="flex item-center">
                    <Radio
                      id="business_shipping"
                      name="shipping_type"
                      value="business"
                      checked={shippingType == "business" ? true : false}
                      className={`${style.shipping_radio} mr-2`}
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
                </div>
                <span className={`text-red-500 font-bold text-xs ml-1 flex-1`}>
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
                      disabled={shippingType == "personal"}
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
                            {/* <span>Oops!</span> */}
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
                          {/* <span>Oops!</span> */}
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
                          {/* <span>Oops!</span> */}
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
                      <AiFillEyeInvisible fontSize={20} />
                    ) : (
                      <AiFillEye fontSize={20} />
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
                        // className={`${
                        //   error ? "border-gray-300" : "border-red-400"
                        // }`}
                        className="focus:outline-none"
                        style={{
                          borderColor: error ? "#ef4444" : "#d1d5db",
                          outline: "none",
                        }}
                        id="how_hear"
                        name="how_hear"
                        value={value}
                        onChange={onChange} // send value to hook form
                        onBlur={onBlur} // notify when input is touched
                        inputRef={ref} // wire up the input ref
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
                disabled={isSubmitting}
                size="md"
                color="primary"
                className={`w-full`}
                type="submit"
              >
                <span className="text-md font-bold">
                  {isSubmitting && (
                    <Spinner aria-label="Loader" className="mx-2" />
                  )}
                  {isSubmitting ? "Signing Up..." : `Sign Up Now`}
                </span>
              </Button>
            </div>
          </form>
          <div>
            <div className={`${style.error} inline-block`}>
              {apiError !== "" ? (
                <p className="text-red-500">{apiError}</p>
              ) : null}
            </div>

            <p className={`text-center mt-10`}>
              By registering you agree to our{" "}
              <a
                href="https://shipsimple.ca/terms-and-conditions/"
                target="_blank"
                className={`text-[#08085E] font-semibold underline`}
                rel="noreferrer"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="https://shipsimple.ca/privacy-policy/"
                target="_blank"
                className={`text-[#08085E]  font-semibold underline`}
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
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
