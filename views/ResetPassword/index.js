import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './ResetPassword.module.scss';
import bg_image from '../../public/images/hero.svg';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { authenticationDispatcher } from 'pages/api/redux-toolkit/authentication/authenticationSlice';
import { XHR_STATE } from 'utility/constants';

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
    // const [apiError, setApiError] = useState("");
    // const [apiSuccess, setApiSuccess] = useState("");
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
    //     } else if (name === 'password_confirmation') {
    //         if (value !== '' && value.length < 8) {
    //             setFormErrors({ ...formErrors, password_confirmation: 'Password must be at least 8 characters' });
    //         } else if (value === '') {
    //             setFormErrors({ ...formErrors, password_confirmation: 'Password is required' });
    //         } else {
    //             setFormErrors({ ...formErrors, [name]: '' });
    //         }
    //     } else {
    //         setFormErrors({ ...formErrors, [name]: '' });
    //     }
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setIsLoading(true);
    //     setApiError('');
    //     formData.token = resetToken;
    //     dispatch(authenticationDispatcher.resetPassword(formData, currentToken, {
    //         success: (response) => {
    //             let payload = {
    //                 "email": formData.email,
    //                 "password": formData.password
    //             }
    //             login(payload);
    //             setApiSuccess(response.message);
    //             setFormData({});
    //             setIsLoading(false);
    //             return response;
    //         },
    //     }));
    // };

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
                <div className={`${style.left_contents} hidden sm:hidden md:hidden lg:block`}>
                    <Image src={bg_image} alt="Hero-Image" />
                </div>
                <div className={style.divider}></div>
                {/* <div className={`${style.right_contents} px-5 sm:px-10 md:px-15 lg:px-20 w-full sm:w-full md:w-4/5 lg:w-1/2`}>
                    <Header heading='Reset Password' />
                    <p className={style.signin_request}>Or <Link href="/">Log In</Link></p>
                    <form onSubmit={handleSubmit}>
                        {formDetails.map(input => {
                            return <div key={input.name}>
                                <CustomTextField
                                    key={input.name}
                                    id={input.name}
                                    name={input.name}
                                    type={input.type}
                                    label={input.label}
                                    placeholder={input.placeholder}
                                    required={input.required}
                                    value={formData[input.name] || ''}
                                    checked={formData[input.name]}
                                    sizing={input.sizing}
                                    handleChange={handleChange}
                                    handleInputBlur={handleInputBlur}
                                ></CustomTextField>
                                {formErrors[input.name] && <div className={style.input_error}>{formErrors[input.name]}</div>}
                            </div>
                        })}
                        <div className={style.action_button}>
                            <Button icon="" type="submit" title="Update" loading={loading} disabled={isSubmitDisabled} buttonType={!isSubmitDisabled ? `${buttonStyle.primary_button} ${buttonStyle.btn_large}` : `${buttonStyle.disabled_button} ${buttonStyle.btn_large}`} />
                        </div>
                        <p className={`${style.success} inline-block`}>{apiSuccess}</p>
                        <p className={`${style.error} inline-block`}>{apiError}</p>
                        <p className={style.signup_request}>Don't have an account yet? <Link href="/signup">Sign Up</Link></p>
                    </form>
                </div> */}
            </div>
        </>
    )
}