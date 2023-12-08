import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './Login.module.scss';
import bg_image from '../../public/images/hero.svg';
import google_icon from '../../public/images/google.svg';
import microsoft_icon from '../../public/images/microsoft.svg';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { authenticationDispatcher, resetLoginWithEmailPassword } from 'pages/api/redux-toolkit/authentication/authenticationSlice';
import { useRouter } from 'next/router';
import { XHR_STATE } from 'utility/constants';;
import Head from 'next/head'

export const LoginPage = () => {
    const [loading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const { loginWithEmailPassword } = useSelector(state => state.authenticationSlice);
    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [apiError, setApiError] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    //const cookies = new Cookies();
    const formDetails = [
        {
            type: "email",
            name: "email",
            placeholder: "Email",
            required: true,
            sizing: "100%"
        },
        {
            type: "password",
            name: "password",
            placeholder: "Password",
            required: true,
            sizing: "100%"
        },
        {
            type: "checkbox",
            name: "remember",
            label: "Remember Me",
            placeholder: "Remember Me",
            required: false
        }
    ];

    /**
     * Sets the Token & checks whether user is authenticated or not
     */
    // useEffect(() => {
    //     const token = cookies.get('shipSimpleToken') ? cookies.get('shipSimpleToken') : null;
    //     token ? router.push('/dashboard/build-shipment') : router.push('/');
    // }, []);

    /**
     * Updates about the various phases of endpoints i.e. In Progress, Complete & Aslepp.
     */
    useEffect(() => {
        if (loginWithEmailPassword.loading === XHR_STATE.IN_PROGRESS) {
            setIsLoading(true);
        }
        if (
            loginWithEmailPassword.response !== null &&
            loginWithEmailPassword.error === "" &&
            loginWithEmailPassword.loading === XHR_STATE.COMPLETE
        ) {
            setIsLoading(false);
        }
    }, [loginWithEmailPassword]);

    /**
     * Checks if all required fields are filled.
     */
    useEffect(() => {
        const hasEmptyRequiredFields = formDetails
            .filter(field => field.required)
            .some(field => !formData[field.name]);
        setIsSubmitDisabled(hasEmptyRequiredFields);
        const isPasswordValid = formData.password && formData.password.length > 7;
        setIsSubmitDisabled(hasEmptyRequiredFields || !isPasswordValid);
    }, [formDetails, formData]);

    /**
     * Performs validation based on the field name and value
     *
     * @param {event} e - Input field event.
     * @returns {string} Provides error messages based on input field error.
     */
    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            if (value !== '' && !value.includes('@')) {
                setFormErrors({ ...formErrors, email: 'Email is invalid' });
            } else if (value === '') {
                setFormErrors({ ...formErrors, email: 'Email is required' });
            } else {
                setFormErrors({ ...formErrors, [name]: '' });
            }
        } else if (name === 'password') {
            if (value !== '' && value.length < 8) {
                setFormErrors({ ...formErrors, password: 'Password must be at least 8 characters' });
            } else if (value === '') {
                setFormErrors({ ...formErrors, password: 'Password is required' });
            } else {
                setFormErrors({ ...formErrors, [name]: '' });
            }
        } else {
            setFormErrors({ ...formErrors, [name]: '' });
        }
    };

    /**
    * Submits the form data on server once the form is filled
    *
    * @param {event} e - Form event which contains all the form object with user filled values.
    * @returns {object} Provides Response & Erros state.
    */
    const handleSubmit = async (event) => {
        event.preventDefault();
        setApiError('');
        let userCredentials = {
            "email": formData.email,
            "password": formData.password,
            "password_confirmation": formData.password
        }
        dispatch(authenticationDispatcher.loginWithEmailPassword(userCredentials, {
            success: (response) => {
                if (response?.token) {
                    dispatch(resetLoginWithEmailPassword());

                    // cookies.remove('shipSimpleToken');
                    // cookies.remove('user');
                    // cookies.remove("userId", { path: '/' });
                    // cookies.set('shipSimpleToken', response.token, {path:'/', maxAge: 31556926});
                    // cookies.set('user', response.user, {path:'/'});
                    // cookies.set('userId', response.user.id, {path:'/'});

                    if(response?.user?.email_verified_at){
                        setTimeout(() => {
                            router.push("/dashboard/build-shipment");
                        }, 1000);
                    }else{
                        setIsLoading(false);
                        setTimeout(() => {
                            router.push("/verifyAccount");
                        }, 1000);
                        //setApiError('Email not verified, Please check your email and verify it');
                    }
                }
                setFormData({});
                return response;
            },
            error: (error) => {
                setIsLoading(false);
                if(error.status === 302){
                    setApiError(`Server did not respond for ${formData.email}`);
                }else{
                    setApiError(error.data.message);
                }
            }
        }));
    };

    /**
    * Sets the value of the input field
    *
    * @param {index} index - Index of the Input field.
    * @param {object} e - Input field event.
    * @returns {string} Sets the value of each input field in their respective name.
    */
    const handleChange = (index, event) => {
        if (event.target.type === 'checkbox') {
            setFormData({ ...formData, [event.target.name]: event.target.checked });
        } else {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }
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
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript> */}
            <div className={style.container}>
                <div className={`${style.left_contents} hidden sm:hidden md:hidden lg:block`}>
                    <Image src={bg_image} alt="Hero-Image" />
                </div>
                <div className={style.divider}></div>
                <div className={`${style.right_contents} px-5 sm:px-10 md:px-15 lg:px-20 w-full sm:w-full md:w-4/5 lg:w-1/2`}>
                    {/* <Header heading='Welcome Back' /> */}
                    {/* <form onSubmit={handleSubmit}>
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
                        <Link href="/forgotPassword" className={style.link}>Forgot Password?</Link>
                        <div className={style.action_button}>
                            <Button icon="" type="submit" title="Login" loading={loading} disabled={isSubmitDisabled} buttonType={!isSubmitDisabled ? `${buttonStyle.primary_button} ${buttonStyle.btn_large}` : `${buttonStyle.disabled_button} ${buttonStyle.btn_large}`} />
                        </div>
                        <div className={`${style.error} inline-block`}>
                            {apiError !== '' ? <p>{apiError}</p> : null}
                        </div>
                        <div style={{display: 'none'}}>
                            <p className={style.login_options}>or login with</p>
                            <div className={style.action_buttons}>
                                <Button icon={google_icon} type="button" title="Google" buttonType={`${buttonStyle.secondary_button} ${buttonStyle.btn_half}`} />
                                <Button icon={microsoft_icon} type="button" title="Microsoft" buttonType={`${buttonStyle.secondary_button} ${buttonStyle.btn_half}`} />
                            </div>
                        </div>
                        <p className={style.signup_request}>Don't have an account yet? <Link href="/signup">Sign Up</Link></p>
                    </form> */}
                </div>
            </div>
        </>
    )
}