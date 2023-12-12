import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./ResetPassword.module.scss";
import bg_image from "../../public/images/hero.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { authenticationDispatcher } from "pages/api/redux-toolkit/authentication/authenticationSlice";
import { XHR_STATE } from "utility/constants";
import { Divider } from "components/layouts/common/Divider";
import { Title } from "components/layouts/common/Title";
import { handleErrorMessage } from "utility/utilityFunctions";
import { useForm } from "react-hook-form";
import { Button, Spinner, TextInput } from "flowbite-react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const ResetPasswordPage = () => {
  // const formDetails = [
  //     {
  //         id: "1",
  //         type: "email",
  //         name: "email",
  //         placeholder: "E-mail",
  //         required: true,
  //         sizing: "100%"
  //     },
  //     {
  //         id: "2",
  //         type: "password",
  //         name: "password",
  //         placeholder: "New Password",
  //         required: true,
  //         sizing: "100%"
  //     },
  //     {
  //         id: "3",
  //         type: "password",
  //         name: "password_confirmation",
  //         placeholder: "Confirm New Password",
  //         required: true,
  //         sizing: "100%"
  //     },
  // ];
  // const [loading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();
  // const { resetPassword } = useSelector(state => state.authenticationSlice);
  // const [formData, setFormData] = useState({});
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

  // const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  // const [formErrors, setFormErrors] = useState({});
  // const [currentToken, setCurrentToken] = useState();
  // const cookies = new Cookies();
  // const router = useRouter();
  // const [resetToken, setResetToken] = useState();

  // /**
  //  * Sets the Token & checks whether user is authenticated or not
  //  */
  // useEffect(() => {
  //     const token = cookies.get('shipSimpleToken');
  //     const resetPasswordToken = router.asPath.split("=")[1].split('&')[0];
  //     setCurrentToken(token);
  //     setResetToken(resetPasswordToken);
  // }, []);

  // /**
  // * Checks if all required fields are filled.
  // */
  // useEffect(() => {
  //     const hasEmptyRequiredFields = formDetails
  //         .filter(field => field.required)
  //         .some(field => !formData[field.name]);
  //     setIsSubmitDisabled(hasEmptyRequiredFields);
  //     const isPasswordValid = formData.password && formData.password.length > 7;
  //     const isPasswordConfirmValid = formData.password_confirmation && formData.password_confirmation.length > 7;
  //     setIsSubmitDisabled(hasEmptyRequiredFields || !isPasswordValid || !isPasswordConfirmValid);
  // }, [formDetails, formData]);

  // /**
  //  * Updates about the various phases of endpoints i.e. In Progress, Complete & Aslepp.
  //  */
  // useEffect(() => {
  //     if (resetPassword.loading === XHR_STATE.IN_PROGRESS) {
  //         setIsLoading(true);
  //     }
  //     if (
  //         resetPassword.response !== null &&
  //         resetPassword.error === "" &&
  //         resetPassword.loading === XHR_STATE.COMPLETE
  //     ) {
  //         setIsLoading(false);
  //     } else if (
  //         resetPassword.error !== "" &&
  //         resetPassword.loading === XHR_STATE.ASLEEP
  //     ) {
  //         setIsLoading(false);
  //         setApiError(resetPassword.error);
  //     }
  // }, [resetPassword]);

  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    setValue,
    setError,
    reset,
    control,
    watch,
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError("");
    data.token = resetToken;
    console.log({ data });
    // dispatch(
    //   authenticationDispatcher.resetPassword(data, currentToken, {
    //     success: (response) => {
    //       let payload = {
    //         email: data.email,
    //         password: data.password,
    //       };
    //       login(payload);
    //       setApiSuccess(response.message);
    //       setFormData({});
    //       setIsLoading(false);
    //       return response;
    //     },
    //   })
    // );
  };

  // const login = (credentials) => {
  //     dispatch(authenticationDispatcher.loginWithEmailPassword(credentials, {
  //         success: (response) => {
  //             if(response?.user?.email_verified_at){
  //                 cookies.remove('shipSimpleToken');
  //                 cookies.remove('user');
  //                 cookies.remove("userId", { path: '/' });
  //                 cookies.set('shipSimpleToken', response.token, {path:'/', maxAge: 86400});
  //                 cookies.set('user', response.user, {path:'/'});
  //                 cookies.set('userId', response.user.id, {path:'/'});
  //                 setTimeout(() => {
  //                     router.push("/dashboard/build-shipment");
  //                 }, 1000);
  //             }else{
  //                 setApiError('Email not verified, Please check your email and verify it');
  //             }
  //             return response;
  //         },
  //     }));
  // }

  // const handleChange = (index, event) => {
  //     setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  return (
    <>
      <div className={style.container}>
        <div
          className={`${style.left_contents} hidden sm:hidden md:hidden lg:block`}
        >
          <Image src={bg_image} alt="Hero-Image" />
        </div>
        <Divider />
        <div
          className={`${style.right_contents} px-5 sm:px-10 md:px-15 lg:px-20 w-full sm:w-full md:w-4/5 lg:w-1/2`}
        >
          <Title heading="Reset Password" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1 flex-wrap">
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
                          // if (false) {
                          //   setDisableSignUpButton(true);
                          //   return "Email address has not been accepted, if this is in error please call 1-888-210-8910";
                          // } else {
                          //   setDisableSignUpButton(false);
                          // }
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
                    type={seePassword ? "password" : "text"}
                    placeholder="New Password"
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
                <div className="mb-2 block relative">
                  <TextInput
                    id="confirm_password"
                    name="confirm_password"
                    type={seeConfirmPassword ? "password" : "text"}
                    placeholder="Confirm New Password"
                    color={
                      handleErrorMessage(errors, "confirm_password")
                        ? "failure"
                        : "primary"
                    }
                    helperText={
                      handleErrorMessage(errors, "confirm_password") ? (
                        <span className="font-medium text-xs mt-0">
                          {/* <span>Oops!</span> */}
                          {handleErrorMessage(errors, "confirm_password")}
                        </span>
                      ) : null
                    }
                    {...register("confirm_password", {
                      required: "Confirmation Password is required",
                      validate: (val) => {
                        if (watch("password") != val) {
                          return "Passwords do no match";
                        }
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
                    onClick={() => setSeeConfirmPassword(!seeConfirmPassword)}
                  >
                    {seeConfirmPassword ? (
                      <AiFillEyeInvisible fontSize={20} />
                    ) : (
                      <AiFillEye fontSize={20} />
                    )}
                  </span>
                </div>
              </div>
            </div>

            <Button
              disabled={isSubmitting}
              size="md"
              color="primary"
              className={`w-full mt-1`}
              type="submit"
            >
              <span className="text-md font-bold">
                {isSubmitting && (
                  <Spinner aria-label="Loader" className="mx-2" />
                )}
                {isSubmitting ? "Updating Password..." : `Update Password`}
              </span>
            </Button>
          </form>
          {apiError !== "" ? (
            <p className="text-red-500 text-center px-0 py-2.5 inline-block">
              {apiError}
            </p>
          ) : null}
          <div className={`${style.success} inline-block`}>
            {apiSuccess !== "" ? <p>{apiSuccess}</p> : null}
          </div>
          <p className={`text-center mt-2 text-lg font-semibold`}>
            Don't have an account yet?{" "}
            <Link className="text-shipGreen-400 font-semibold" href="/signup">
              Sign Up
            </Link>{" "}
            Or{" "}
            <Link className="text-shipGreen-400 font-semibold" href="/">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
