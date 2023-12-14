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
import { handleErrorMessage } from "utility/utilityFunctions";
import { Title } from "components/layouts/common/Title";
import { Divider } from "components/layouts/common/Divider";
import { passwordPattern, useFormError } from "utility/formHelper";
import { setUserDetails, setUserToken } from "pages/api/redux-toolkit/users/usersSlice";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [apiError, setApiError] = useState("");
  const cookies = new Cookies();
  const [seePassword, setSeePassword] = useState(false);

  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    setValue,
    setError,
    reset,
    control,
  } = useForm({ mode: "onBlur" });


  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError("");
    let userCredentials = {
      email: data.email,
      password: data.password,
      password_confirmation: data.password,
    };

    dispatch(
      authenticationDispatcher.loginWithEmailPassword(userCredentials, {
        success: (response) => {
          console.log('response',response);
          setIsLoading(false);
          if (response?.token) {
            let user = response.user;
            let userId = response.user.id;
            let accountType = 'buisness';
            let token = response.token;
            let newUser = {...user,account_type : accountType};

            cookies.remove('shipSimpleToken');
            cookies.remove('user');
            cookies.remove('userId');
            cookies.remove('shippingType');
            cookies.set('shipSimpleToken', token, {
              path: '/',
              maxAge: 86400,
            });
            cookies.set('user', newUser, {
              path: '/',
              maxAge: 86400,
            });
            cookies.set('userId', userId, {
              path: '/',
              maxAge: 86400,
            });
            cookies.set('shippingType', accountType, {
              path: '/',
              maxAge: 86400,
            });
            dispatch(setUserDetails(newUser));
            dispatch(setUserToken(token));
            toast.success("Login successful.");
            router.push('/onboarding');
          }
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


  return (
    <>
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
          <div className="public-layout-right">
            <Title heading="Welcome Back" />
            <form
              className="w-full md:w-[60%]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-1 flex-wrap mt-7">
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
                       //pattern:passwordPattern
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
              </div>
              <div>
                <div className="flex justify-between items-center mt-1 mb-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="rememberme"
                      color={"primary"}
                      {...register("remberme")}
                    />
                    <Label
                      htmlFor="rememberme"
                      className="cursor-pointer text-secondary-950"
                    >
                      Remember Me
                    </Label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-secondary-950 text-sm"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <Button
                disabled={isLoading}
                size="md"
                color="primary"
                className={`w-full mb-6 mt-4`}
                type="submit"
              >
                <span className="text-md font-bold">
                  {isLoading && (
                    <Spinner aria-label="Loader" className="mx-2" />
                  )}
                  Sign In
                </span>
              </Button>
            </form>

            {apiError !== "" ? (
              <p className="text-red-500 text-center px-0  inline-block">
                {apiError}
              </p>
            ) : null}

            <p className={`text-center mt-2 text-lg font-semibold`}>
              Don't have an account yet?{" "}
              <Link className="text-shipGreen-400 font-semibold" href="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
