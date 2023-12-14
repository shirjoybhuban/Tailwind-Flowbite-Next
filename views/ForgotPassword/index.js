import React, { useEffect, useState } from 'react';
// import MasterLayout from 'layout/masterLayout';
// import Header from "components/header";
import Image from 'next/image';
import style from './ForgotPassword.module.scss';
// import buttonStyle from "../../components/button/Button.module.scss";
import bg_image from '../../public/images/hero.svg';
// import { CustomTextField } from "components/customTextField";
import Link from 'next/link';
// import Button from "components/button";
import { useDispatch, useSelector } from 'react-redux';
import { XHR_STATE } from 'utility/constants';
import { authenticationDispatcher } from 'pages/api/redux-toolkit/authentication/authenticationSlice';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import { Title } from 'components/layouts/common/Title';
import { Button, Spinner, TextInput } from 'flowbite-react';
import { handleErrorMessage } from 'utility/utilityFunctions';
import { useForm } from 'react-hook-form';
import { Divider } from 'components/layouts/common/Divider';

export const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [apiError, setApiError] = useState('');
  const [apiSuccess, setApiSuccess] = useState('');

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
  } = useForm({ mode: 'onBlur' });
  /**
   * Submits the form data on server once the form is filled
   *
   * @param {event} e - Form event which contains all the form object with user filled values.
   * @returns {object} Provides Response & Erros state.
   */
  const onSubmit = async (data) => {
    setIsLoading(true);
    let userEmail = {
      email: data.email,
    };
    console.log({ userEmail });
    dispatch(
      authenticationDispatcher.forgotPassword(userEmail, {
        success: (response) => {
          setApiError('');
          setApiSuccess(response?.message);
          setIsLoading(false);
          return response;
        },
        error: (error) => {
          setIsLoading(false);
          setApiSuccess('');
          setApiError(error?.data?.message);
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
              className={`text-[40px] leading-[52px] text-secondary-950 mb-8 font-bold`}>
              The #1 Choice <br />
              for Business Shipping
            </h1>
            <Image src={bg_image} alt="Hero-Image" width={'380'} />
          </div>
          <Divider />
          <div className="public-layout-right">
            <Title heading="Forgot Password" />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full md:w-[60%]">
              <div className="grid grid-cols-1 gap-4 mt-7">
                <div className="mb-2 block">
                  <TextInput
                    className="border-gray-300"
                    id="email"
                    name="email"
                    type="email"
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
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Please enter valid email address',
                      },
                      validate: {
                        notAccepted: (value) => {
                          let invalidEmailTypes = [
                            'gmail.com',
                            'gmail.ca',
                            'googlmail.com',
                            'googlmail.ca',
                            'hotmail.com',
                            'hotmail.ca',
                            'outlook.com',
                            'outlook.ca',
                            'yahoo.com',
                            'yahoo.ca',
                            'live.com',
                            'live.ca',
                            'icloud.com',
                            'icloud.ca',
                            'ymail.com',
                            'ymail.ca',
                          ];
                          var emailArray = value.split('@');
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
                disabled={isLoading}
                size="md"
                color="primary"
                className={`w-full mt-4 mb-3`}
                type="submit">
                <span className="text-md font-bold">
                  {isLoading && (
                    <Spinner aria-label="Loader" className="mx-2" />
                  )}
                  {`Reset`}
                </span>
              </Button>
              {apiError !== '' ? (
              <p className="w-full text-red-500 text-center px-0 py-2.5 inline-block mb-2">
                {apiError}
              </p>
            ) : null}
              <div className={`text-center inline-block mb-9`}>
                {apiSuccess !== '' ? <p className='text-primary-700 font-semibold text-lg'>{apiSuccess}</p> : null}
              </div>
            </form>
            <p className={`text-center mt-0 text-lg font-semibold`}>
              Don't have an account yet?
              <Link className="text-shipGreen-400 font-semibold ml-2" href="/signup">
                Sign Up
              </Link>{' '}
              Or{' '}
              <Link className="text-shipGreen-400 font-semibold" href="/">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
