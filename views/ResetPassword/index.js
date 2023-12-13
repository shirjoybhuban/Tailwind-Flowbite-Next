import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './ResetPassword.module.scss';
import bg_image from '../../public/images/hero.svg';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { authenticationDispatcher } from 'pages/api/redux-toolkit/authentication/authenticationSlice';
import { XHR_STATE } from 'utility/constants';
import { Divider } from 'components/layouts/common/Divider';
import { Title } from 'components/layouts/common/Title';
import { handleErrorMessage } from 'utility/utilityFunctions';
import { useForm } from 'react-hook-form';
import { Button, Spinner, TextInput } from 'flowbite-react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useSearchParams } from 'next/navigation';

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
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { resetPassword } = useSelector(state => state.authenticationSlice);
  // const [formData, setFormData] = useState({});
  const [apiError, setApiError] = useState('');
  const [apiSuccess, setApiSuccess] = useState('');
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
  const router = useRouter();
  const queryParams = useSearchParams();
  const resetEmail = queryParams.get('email');
  const resetToken = queryParams.get('resetLink');

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
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError('');
    setApiSuccess('');
    console.log({ data });
    data.token = resetToken;
    data.email = resetEmail;
    dispatch(
      authenticationDispatcher.resetPassword(data, {
        success: (response) => {
          setApiSuccess(response.message);
          setIsLoading(false);
          setTimeout(() => {
            router.push('/');
          }, 800);
          return response;
        },
        error: (error) => {
          setIsLoading(false);
          setApiError(error?.data?.message);
        },
      })
    );
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
      <div className="public-layout">
        <div className="public-layout-inner">
          <div className="public-layout-left">
            <h1
              className={`text-[40px] leading-[52px] text-secondary-950 mb-8 font-bold`}>
              The #1 Choice <br />
              for Business Shipping
            </h1>
            <Image src={bg_image} alt="Hero-Image" width={'380'} />
          </div>
          <Divider />
          <div
            className="public-layout-right">
            <Title heading="Reset Password" />
            <form
              autoComplete={'off'}
              onSubmit={handleSubmit(onSubmit)}
              className="w-full md:w-[60%]">
              <div className="flex flex-col gap-1 flex-wrap mt-7">
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-2 block">
                    <TextInput
                      className="border-gray-300"
                      id="email"
                      name="email"
                      type="email"
                      defaultValue={resetEmail}
                      disabled={true}
                      color={
                        handleErrorMessage(errors, 'email')
                          ? 'failure'
                          : 'primary'
                      }
                      placeholder="Email"
                      helperText={
                        handleErrorMessage(errors, 'email') ? (
                          <span className="font-medium text-xs mt-0">
                            {/* <span>Oops!</span> */}
                            {handleErrorMessage(errors, 'email')}
                          </span>
                        ) : null
                      }
                      {...register('email', {})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-2 block relative">
                    <TextInput
                      id="password"
                      name="password"
                      type={seePassword ? 'password' : 'text'}
                      placeholder="New Password"
                      color={
                        handleErrorMessage(errors, 'password')
                          ? 'failure'
                          : 'primary'
                      }
                      helperText={
                        handleErrorMessage(errors, 'password') ? (
                          <span className="font-medium text-xs mt-0">
                            {/* <span>Oops!</span> */}
                            {handleErrorMessage(errors, 'password')}
                          </span>
                        ) : null
                      }
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters',
                        },
                      })}
                    />

                    <span
                      style={{
                        position: 'absolute',
                        top: 12,
                        right: 10,
                        cursor: 'pointer',
                      }}
                      onClick={() => setSeePassword(!seePassword)}>
                      {seePassword ? (
                        <AiFillEyeInvisible fontSize={18} className='text-slate-400'/>
                      ) : (
                        <AiFillEye fontSize={18} className='text-slate-400'/>
                      )}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-2 block relative">
                    <TextInput
                      id="confirm_password"
                      name="confirm_password"
                      type={seeConfirmPassword ? 'password' : 'text'}
                      placeholder="Confirm New Password"
                      color={
                        handleErrorMessage(errors, 'confirm_password')
                          ? 'failure'
                          : 'primary'
                      }
                      helperText={
                        handleErrorMessage(errors, 'confirm_password') ? (
                          <span className="font-medium text-xs mt-0">
                            {/* <span>Oops!</span> */}
                            {handleErrorMessage(errors, 'confirm_password')}
                          </span>
                        ) : null
                      }
                      {...register('confirm_password', {
                        required: 'Confirmation Password is required',
                        validate: (val) => {
                          if (watch('password') != val) {
                            return 'Passwords do no match';
                          }
                        },
                      })}
                    />

                    <span
                      style={{
                        position: 'absolute',
                        top: 12,
                        right: 10,
                        cursor: 'pointer',
                      }}
                      onClick={() =>
                        setSeeConfirmPassword(!seeConfirmPassword)
                      }>
                      {seeConfirmPassword ? (
                        <AiFillEyeInvisible fontSize={18} className='text-slate-400' />
                      ) : (
                        <AiFillEye fontSize={18} className='text-slate-400' />
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                disabled={isLoading}
                size="md"
                color="primary"
                className={`w-full mt-3 mb-6`}
                type="submit">
                <span className="text-md font-bold">
                  {isLoading && (
                    <Spinner aria-label="Loader" className="mx-2" />
                  )}
                  Update Password
                </span>
              </Button>
            </form>
            {apiError !== '' ? (
              <p className="text-red-500 text-center px-0 py-2.5 inline-block">
                {apiError}
              </p>
            ) : null}
            <div className={`${style.success} inline-block`}>
              {apiSuccess !== '' ? <p>{apiSuccess}</p> : null}
            </div>
            <p className={`text-center text-lg font-semibold`}>
              Don't have an account yet?{' '}
              <Link className="text-shipGreen-400 font-semibold" href="/signup">
                Sign Up
              </Link>{' '}
              Or{' '}
              <Link className="text-shipGreen-400 font-semibold" href="/">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
