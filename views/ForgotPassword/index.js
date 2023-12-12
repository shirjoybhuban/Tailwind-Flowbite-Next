import React, { useEffect, useState } from "react";
// import MasterLayout from 'layout/masterLayout';
// import Header from "components/header";
import Image from "next/image";
import style from "./ForgotPassword.module.scss";
// import buttonStyle from "../../components/button/Button.module.scss";
import bg_image from "../../public/images/hero.svg";
// import { CustomTextField } from "components/customTextField";
import Link from "next/link";
// import Button from "components/button";
import { useDispatch, useSelector } from "react-redux";
import { XHR_STATE } from "utility/constants";
import { authenticationDispatcher } from "pages/api/redux-toolkit/authentication/authenticationSlice";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import { Title } from "components/layouts/common/Title";
import { Button, Spinner, TextInput } from "flowbite-react";
import { handleErrorMessage } from "utility/utilityFunctions";
import { useForm } from "react-hook-form";
import { Divider } from "components/layouts/common/Divider";

export const ForgotPasswordPage = () => {
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");

  const { forgotPassword } = useSelector((state) => state.authenticationSlice);
  const [currentToken, setCurrentToken] = useState();
  const router = useRouter();
  const cookies = new Cookies();
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    setValue,
    setError,
    reset,
    control,
  } = useForm({ mode: "onBlur" });
  /**
   * Sets the Token & checks whether user is authenticated or not
   */
  useEffect(() => {
    const token = cookies.get("shipSimpleToken")
      ? cookies.get("shipSimpleToken")
      : null;
    setCurrentToken(token);
    token
      ? router.push("/dashboard/build-shipment")
      : router.push("/forgot-password");
    setApiError("");
    setApiSuccess("");
  }, []);

  /**
   * Submits the form data on server once the form is filled
   *
   * @param {event} e - Form event which contains all the form object with user filled values.
   * @returns {object} Provides Response & Erros state.
   */
  const onSubmit = async (data) => {
    setIsLoading(true);

    setApiError("");
    let userEmail = {
      email: data.email,
    };
    // console.log({ userEmail });
    // dispatch(
    //   authenticationDispatcher.forgotPassword(userEmail, currentToken, {
    //     success: (response) => {
    //       setApiSuccess(response?.message);
    //       setFormData({});
    //       setIsLoading(false);
    //       return response;
    //     },
    //     error: (error) => {
    //       setIsLoading(false);
    //       setApiError(error?.data?.message);
    //     },
    //   })
    // );
  };

  /**
   * Sets the value of the input field
   *
   * @param {index} index - Index of the Input field.
   * @param {object} e - Input field event.
   * @returns {string} Sets the value of each input field in their respective name.
   */

  return (
    <>
      {/* <MasterLayout /> */}
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
          <Title heading="Forgot Password" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4">
              <div className="mb-2 block">
                <TextInput
                  className="border-gray-300"
                  id="email"
                  name="email"
                  type="email"
                  color={
                    handleErrorMessage(errors, "email") ? "failure" : "primary"
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
                      },
                    },
                  })}
                />
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
                {`Reset`}
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
          <p className={`text-center mt-0 text-lg font-semibold`}>
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
