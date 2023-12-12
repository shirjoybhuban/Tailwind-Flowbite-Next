import Image from "next/image";
import { useState } from "react";
import bg_image from "../../public/images/hero.svg";
import style from "./Login.module.scss";

import { Button, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { authenticationDispatcher } from "pages/api/redux-toolkit/authentication/authenticationSlice";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
  // const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { loginWithEmailPassword } = useSelector(
    (state) => state.authenticationSlice
  );
  const router = useRouter();
  // const [formData, setFormData] = useState({});
  const [apiError, setApiError] = useState("");
  // const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  // const [formErrors, setFormErrors] = useState({});
  // const cookies = new Cookies();
  const [seePassword, setSeePassword] = useState(false);

  const formDetails = [
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      required: true,
      sizing: "100%",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      required: true,
      sizing: "100%",
    },
    {
      type: "checkbox",
      name: "remember",
      label: "Remember Me",
      placeholder: "Remember Me",
      required: false,
    },
  ];

  // /**
  //  * Sets the Token & checks whether user is authenticated or not
  //  */
  // useEffect(() => {
  //     const token = cookies.get('shipSimpleToken') ? cookies.get('shipSimpleToken') : null;
  //     token ? router.push('/dashboard/build-shipment') : router.push('/');
  // }, []);

  // /**
  //  * Updates about the various phases of endpoints i.e. In Progress, Complete & Aslepp.
  //  */
  // useEffect(() => {
  //     if (loginWithEmailPassword.loading === XHR_STATE.IN_PROGRESS) {
  //         setIsLoading(true);
  //     }
  //     if (
  //         loginWithEmailPassword.response !== null &&
  //         loginWithEmailPassword.error === "" &&
  //         loginWithEmailPassword.loading === XHR_STATE.COMPLETE
  //     ) {
  //         setIsLoading(false);
  //     }
  // }, [loginWithEmailPassword]);

  // /**
  //  * Checks if all required fields are filled.
  //  */
  // useEffect(() => {
  //     const hasEmptyRequiredFields = formDetails
  //         .filter(field => field.required)
  //         .some(field => !formData[field.name]);
  //     setIsSubmitDisabled(hasEmptyRequiredFields);
  //     const isPasswordValid = formData.password && formData.password.length > 7;
  //     setIsSubmitDisabled(hasEmptyRequiredFields || !isPasswordValid);
  // }, [formDetails, formData]);

  // /**
  //  * Performs validation based on the field name and value
  //  *
  //  * @param {event} e - Input field event.
  //  * @returns {string} Provides error messages based on input field error.
  //  */
  // const handleInputBlur = (e) => {
  //     const { name, value } = e.target;
  //     if (name === 'email') {
  //         if (value !== '' && !value.includes('@')) {
  //             setFormErrors({ ...formErrors, email: 'Email is invalid' });
  //         } else if (value === '') {
  //             setFormErrors({ ...formErrors, email: 'Email is required' });
  //         } else {
  //             setFormErrors({ ...formErrors, [name]: '' });
  //         }
  //     } else if (name === 'password') {
  //         if (value !== '' && value.length < 8) {
  //             setFormErrors({ ...formErrors, password: 'Password must be at least 8 characters' });
  //         } else if (value === '') {
  //             setFormErrors({ ...formErrors, password: 'Password is required' });
  //         } else {
  //             setFormErrors({ ...formErrors, [name]: '' });
  //         }
  //     } else {
  //         setFormErrors({ ...formErrors, [name]: '' });
  //     }
  // };

  // /**
  // * Submits the form data on server once the form is filled
  // *
  // * @param {event} e - Form event which contains all the form object with user filled values.
  // * @returns {object} Provides Response & Erros state.

  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    setValue,
    setError,
    reset,
    control,
  } = useForm({ mode: "onBlur" });

  console.log({ isValid });
  const onSubmit = async (data) => {
    // event.preventDefault();
    setApiError("");
    let userCredentials = {
      email: data.email,
      password: data.password,
      password_confirmation: data.password,
    };

    dispatch(
      authenticationDispatcher.loginWithEmailPassword(userCredentials, {
        success: (response) => {
          //   if (response?.token) {
          //     dispatch(resetLoginWithEmailPassword());

          //     cookies.remove("shipSimpleToken");
          //     cookies.remove("user");
          //     cookies.remove("userId", { path: "/" });
          //     cookies.set("shipSimpleToken", response.token, {
          //       path: "/",
          //       maxAge: 31556926,
          //     });
          //     cookies.set("user", response.user, { path: "/" });
          //     cookies.set("userId", response.user.id, { path: "/" });

          //     if (response?.user?.email_verified_at) {
          //       setTimeout(() => {
          //         router.push("/dashboard/build-shipment");
          //       }, 1000);
          //     } else {
          //       setIsLoading(false);
          //       setTimeout(() => {
          //         router.push("/verifyAccount");
          //       }, 1000);
          //       //setApiError('Email not verified, Please check your email and verify it');
          //     }
          //   }
          //   setFormData({});
          return response;
        },
        error: (error) => {
          setIsLoading(false);
          if (error.status === 302) {
            setApiError(`Server did not respond for ${data.email}`);
          } else {
            setApiError(error.data.message);
          }
        },
      })
    );
  };

  // /**
  // * Sets the value of the input field
  // *
  // * @param {index} index - Index of the Input field.
  // * @param {object} e - Input field event.
  // * @returns {string} Sets the value of each input field in their respective name.
  // */
  const handleChange = (index, event) => {
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleErrorMessage = (errors, name) => {
    if (name in errors) {
      return errors[name]?.message;
    }
    return "";
  };
  return (
    <>
      <div className={style.container}>
        <div
          className={`${style.left_contents} hidden sm:hidden md:hidden lg:block`}
        >
          <Image src={bg_image} alt="Hero-Image" />
        </div>
        <div
          className={`${style.divider} hidden sm:hidden md:hidden lg:block`}
        ></div>
        <div
          className={`${style.right_contents} px-5 sm:px-10 md:px-15 lg:px-20 w-full sm:w-full md:w-4/5 lg:w-1/2`}
        >
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-[#08085E] inline-block text-[1.8rem] font-bold">
              Welcome Back
            </h1>
            <div className="bg-primary-500 h-0.5 w-[45px] mt-1"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
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
            </div>
            <div>
              <div className="flex justify-between items-center mt-1 mb-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="rememberme"
                    color={"green"}
                    {...register("remberme")}
                  />
                  <Label htmlFor="rememberme">Remember Me</Label>
                </div>
                <Link href="/forgotPassword" className={``}>
                  Forgot Password?
                </Link>
              </div>
            </div>
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
                {isSubmitting ? "Logging In..." : `Log In`}
              </span>
            </Button>
          </form>
          <div className={`${style.error} inline-block`}>
            {apiError !== "" ? (
              <p className="text-red-500">{apiError}</p>
            ) : null}
          </div>

          <p className={`text-center mt-2 text-lg font-semibold`}>
            Don't have an account yet?{" "}
            <Link className="text-shipGreen-400 font-semibold" href="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
