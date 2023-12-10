import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './SignUp.module.scss';
import bg_image from '../../public/images/hero.svg';
import logo from '../../public/images/logo.svg';
import shopify_logo from '../../public/images/shopify_logo.png';
import google_icon from '../../public/images/google.svg';
import microsoft_icon from '../../public/images/microsoft.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { XHR_STATE } from 'utility/constants';
import { authenticationDispatcher } from 'pages/api/redux-toolkit/authentication/authenticationSlice';
import Head from 'next/head'
import { TextInput, Select, Checkbox, Label, Button, Spinner, Radio } from "flowbite-react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffectOnce } from "hooks/useEffectOnce";
import { useSearchParams } from 'next/navigation';

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
    // const searchParams = useSearchParams()
    // const shpfyTkn = searchParams.get('shopify_integration');
    // const [loading, setIsLoading] = useState(false);
    // const dispatch = useDispatch();
    // const { registerWithEmailPassword } = useSelector(state => state.authenticationSlice);
    // const router = useRouter();
    // const [formData, setFormData] = useState({});
    // const [apiError, setApiError] = useState("");
    // const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    // const [formErrors, setFormErrors] = useState({});
    // const [seePassword, setSeePassword] = useState(false);
    // const [companyFull, setCompanyFull] = useState(true);
    // const [shippingType, setShippingType] = useState('');
    // const [disableSignUpButton, setDisableSignUpButton] = useState(false);
    // const [shopifyToken, setShopifyToken] = useState(null);
    // const cookies = new Cookies();

    // const { register, formState: { errors }, handleSubmit, setValue, setError, reset } = useForm({mode: 'onBlur'});
    // /**
    //  * Updates about the various phases of endpoints i.e. In Progress, Complete & Aslepp.
    //  */
    // useEffect(() => {
    //     setShopifyToken(shpfyTkn);
    // }, [shpfyTkn])
    
    // useEffect(() => {
    //     if (registerWithEmailPassword.loading === XHR_STATE.IN_PROGRESS) {
    //         setIsLoading(true);
    //     }
    //     if (
    //         registerWithEmailPassword.response !== null &&
    //         registerWithEmailPassword.error === "" &&
    //         registerWithEmailPassword.loading === XHR_STATE.COMPLETE
    //     ) {
    //         setIsLoading(false);
    //     } else if (
    //         registerWithEmailPassword.error !== "" &&
    //         registerWithEmailPassword.loading === XHR_STATE.ASLEEP
    //     ) {
    //         setIsLoading(false);
    //         setApiError(registerWithEmailPassword.error);
    //     }
    // }, [registerWithEmailPassword]);

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
    // const onSubmit = async (data) => {
    //     let userCredentials = {
    //         "company_name": shippingType == 'personal' ? '' : data.company_name,
    //         "email": data.email,
    //         "password": data.password,
    //         "password_confirmation": data.password,
    //         "how_hear": data.how_hear,
    //         "no_of_courier": data.no_of_courier,
    //         "shippingType": shippingType,
    //         "shopify_integration": shopifyToken ? shopifyToken : null,
    //     };
    //     dispatch(authenticationDispatcher.registerWithEmailPassword(userCredentials, {
    //         success: (response) => {
    //             if (response?.token) {
    //                 cookies.remove('shipSimpleToken');
    //                 cookies.remove('user');
    //                 cookies.remove('userId');
    //                 cookies.set('shipSimpleToken', response.token, { path: '/', maxAge: 86400 });
    //                 cookies.set('user', response.user, { path: '/' });
    //                 cookies.set('userId', response.user.id, { path: '/' });
    //                 cookies.set('shippingType', shippingType, { path: '/' });
    //                 router.push('/verifyAccount');
    //             }
    //             setFormData({});
    //             return response;
    //         }
    //     }));
    // };

    // const handleChangeShippingType = (e) => {
    //     setShippingType(e.target.value);
    // }

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
                <div className={`${style.left_contents} hidden sm:hidden md:hidden lg:block`}>
                    <h1 className={style.signup_heading}>The #1 Choice <br/>for Business Shipping</h1>
                    <Image src={bg_image} alt="Hero-Image" width={'300'} />
                </div>
                <div className={`${style.divider} hidden sm:hidden md:hidden lg:block`}></div>
                {/* <div className={`${style.right_contents} px-5 sm:px-10 md:px-15 lg:px-15 w-full sm:w-full md:w-4/5 lg:w-1/2`}>
                    <Header heading='SignUp' />
                    {
                        shopifyToken && 
                        <div className='flex justify-center'>
                            <Image src={logo} alt="Company Logo" />
                            <div>
                                <Image src={shopify_logo} alt="Shopify Company Logo" style={{width:'70px',height:'70px'}}/>
                            </div>
                        </div>
                    }
                    
                    <form noValidate style={{ display: 'block', marginTop: 0}} autoComplete={'off'} onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-2'>
                            <span>Are you looking for: 
                                <span className="item-center mr-3 ml-2">
                                    <Radio
                                        id="personal_shipping"
                                        name="shipping_type"
                                        value="personal"
                                        checked={shippingType == 'personal' ? true : false}
                                        className={`${style.shipping_radio} mr-2`}
                                        onClick={handleChangeShippingType}
                                        {...register("shipping_type", { required: "Please make a selection"  })}
                                    />
                                    <Label htmlFor="personal_shipping">
                                        Personal Shipping
                                    </Label>
                                </span>
                                <span className="item-center">
                                    <Radio
                                        id="business_shipping"
                                        name="shipping_type"
                                        value="business"
                                        checked={shippingType == 'business' ? true : false}
                                        className={`${style.shipping_radio} mr-2`}
                                        onClick={handleChangeShippingType}
                                        {...register("shipping_type", { required: "Please make a selection"  })}
                                    />
                                    <Label htmlFor="business_shipping">
                                        Business Shipping
                                    </Label>
                                </span>
                            </span>
                            <span className={`${utilStyle.errorMessage} ml-3`}><ErrorMessage errors={errors} name="shipping_type" /></span>
                            
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="mb-2 block">
                            <div className={shippingType == 'personal' ? style.company_name_height_none : style.company_name_height}>
                            <TextInput
                                    id="company_name"
                                    name="company_name"
                                    type="text"
                                    disabled={shippingType == 'personal'}
                                    placeholder={`Company Name`}
                                    className={utilStyle.inputFieldSmall}
                                    {...register("company_name", { 
                                        validate: {
                                        required: value => {
                                            if (shippingType == 'business' && !value) return 'Company name is required';
                                            return true;
                                          },
                                        }
                                     })}
                                />
                                 <span className={utilStyle.errorMessage}><ErrorMessage errors={errors} name="company_name" /></span>
                            </div>
                                
                               
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="mb-2 block">
                                <TextInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className={utilStyle.inputFieldSmall}
                                    {...register("email", { 
                                        required: "Email is required",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Please enter valid email address"
                                        },
                                        validate: {
                                            notAccepted: (value) => {
                                                let invalidEmailTypes = ['gmail.com', 'gmail.ca', 'googlmail.com', 'googlmail.ca', 'hotmail.com', 'hotmail.ca', 'outlook.com', 'outlook.ca', 'yahoo.com', 'yahoo.ca', 'live.com', 'live.ca', 'icloud.com', 'icloud.ca', 'ymail.com', 'ymail.ca'];
                                                var emailArray = value.split("@");
                                                var email_stat = invalidEmailTypes.includes(emailArray[1]);
                                                if(false){
                                                    setDisableSignUpButton(true);
                                                    return 'Email address has not been accepted, if this is in error please call 1-888-210-8910';
                                                }else{
                                                    setDisableSignUpButton(false);
                                                }
                                            }
                                        },
                                    })}
                                />
                                <span className={utilStyle.errorMessage}><ErrorMessage errors={errors} name="email" /></span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="mb-2 block relative">
                                <TextInput
                                    id="password"
                                    name="password"
                                    type={seePassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    className={utilStyle.inputFieldSmall}
                                    {...register("password", { 
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters"
                                        }
                                    })}
                                />
                                <span style={{ position: 'absolute', top: 11, right: 10, cursor: 'pointer' }} onClick={() => setSeePassword(!seePassword)}>{seePassword ? <AiFillEyeInvisible fontSize={20} /> : <AiFillEye fontSize={20} />}</span>
                                <span className={utilStyle.errorMessage}><ErrorMessage errors={errors} name="password" /></span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="mb-2 block">
                                <TextInput
                                    id="no_of_courier"
                                    name="no_of_courier"
                                    type="number"
                                    placeholder="How many shipments do you send per week?"
                                    className={utilStyle.inputFieldSmall}
                                    {...register("no_of_courier")}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="mb-2 block">
                                <Select
                                    id="how_hear"
                                    name="how_hear"
                                    required={true}
                                    className={utilStyle.inputFieldSmall}
                                    {...register("how_hear")}
                                >
                                    <option value="">How did you hear about us?</option>
                                    <option value="Google">Google</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Website">Website</option>
                                    <option value="Referral">Referral</option>
                                    <option value="Other">Other</option>
                                </Select>
                            </div>
                        </div>

                        <div className="text-right float-right mt-3 w-full">
                            <Button disabled={loading || disableSignUpButton} className={`${utilStyle.greenButton} w-full`} type='submit'>
                                {loading ? <span className='pr-3'><Spinner className={utilStyle.greenSpinner} aria-label="Spinner" /></span> : null }
                                <span className="text-lg font-bold">
                                    Sign Up Now
                                </span>
                            </Button>
                        </div>

                        <div className={`${style.error} inline-block`}>
                            {apiError !== '' ? <p>{apiError}</p> : null}
                        </div>
                        <div style={{display: 'none'}}>
                            <p className={style.login_options}>or sign up with</p>
                            <div className={style.action_buttons}>
                                <Button icon={google_icon} type="button" title="Google" buttonType={`${buttonStyle.secondary_button} ${buttonStyle.btn_half}`} />
                                <Button icon={microsoft_icon} type="button" title="Microsoft" buttonType={`${buttonStyle.secondary_button} ${buttonStyle.btn_half}`} />
                            </div>
                        </div>
                        <p className={style.terms}>By registering you agree to our <a href='https://shipsimple.ca/terms-and-conditions/' target="_blank" className={style.termsOfService} rel="noreferrer">Terms of Service</a> and <a href='https://shipsimple.ca/privacy-policy/' target="_blank" className={style.termsOfService} rel="noreferrer">Privacy Policy</a>.</p>
                        <p className={style.signup_request}>Already an account? <Link href="/">Login</Link></p>
                    </form>
                </div> */}
            </div>
        </>
    )
}