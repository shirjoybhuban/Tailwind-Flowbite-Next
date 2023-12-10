import React, { useEffect, useState } from 'react';
import MasterLayout from 'layout/masterLayout';
import Header from 'components/header';
import Image from 'next/image';
import style from './ForgotPassword.module.scss';
import buttonStyle from '../../components/button/Button.module.scss';
import bg_image from '../../public/images/hero.svg';
import { CustomTextField } from 'components/customTextField';
import Link from 'next/link';
import Button from 'components/button';
import { useDispatch, useSelector } from 'react-redux';
import { XHR_STATE } from 'utility/constants';
import { authenticationDispatcher } from 'pages/api/redux-toolkit/authentication/authenticationSlice';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';

export const ForgotPasswordPage = () => {

    const formDetails = [
        {
            type: "email",
            name: "email",
            placeholder: "E-mail",
            required: true,
            sizing: "100%"
        },
    ];
    const [loading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});
    const [apiError, setApiError] = useState("");
    const [apiSuccess, setApiSuccess] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const { forgotPassword } = useSelector(state => state.authenticationSlice);
    const [currentToken, setCurrentToken] = useState();
    const router = useRouter();
    const cookies = new Cookies();

    /**
     * Sets the Token & checks whether user is authenticated or not
     */
    useEffect(() => {
        const token = cookies.get('shipSimpleToken') ? cookies.get('shipSimpleToken') : null;
        setCurrentToken(token);
        token ? router.push('/dashboard/build-shipment') : router.push('/forgotPassword');
        setApiError("");
        setApiSuccess("");
    }, []);

    /**
     * Checks if all required fields are filled.
     */
    useEffect(() => {
        const hasEmptyRequiredFields = formDetails
            .filter(field => field.required)
            .some(field => !formData[field.name] || !formData[field.name].includes('@'));
        setIsSubmitDisabled(hasEmptyRequiredFields);
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
        setIsLoading(true);
        event.preventDefault();
        setApiError('');
        let userEmail = {
            "email": formData.email,
        }
        dispatch(authenticationDispatcher.forgotPassword(userEmail, currentToken, {
            success: (response) => {
                setApiSuccess(response?.message);
                setFormData({});
                setIsLoading(false);
                return response;
            },
            error: (error) => {
                setIsLoading(false);
                setApiError(error?.data?.message);
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
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <>
            <MasterLayout />
            <div className={style.container}>
                <div className={`${style.left_contents} hidden sm:hidden md:hidden lg:block`}>
                    <Image src={bg_image} alt="Hero-Image" />
                </div>
                <div className={style.divider}></div>
                <div className={`${style.right_contents} px-5 sm:px-10 md:px-15 lg:px-20 w-full sm:w-full md:w-4/5 lg:w-1/2`}>
                    <Header heading='Forgot Password' />
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
                            <Button icon="" type="submit" title="Reset" loading={loading} disabled={isSubmitDisabled} buttonType={!isSubmitDisabled ? `${buttonStyle.primary_button} ${buttonStyle.btn_large}` : `${buttonStyle.disabled_button} ${buttonStyle.btn_large}`} />
                        </div>
                        <div className={`${style.error} inline-block`}>
                            {apiError !== '' ? <p>{apiError}</p> : null}
                        </div>
                        <div className={`${style.success} inline-block`}>
                            {apiSuccess !== '' ? <p>{apiSuccess}</p> : null}
                        </div>
                        <p className={style.signup_request}>Don't have an account yet? <Link href="/signup">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}