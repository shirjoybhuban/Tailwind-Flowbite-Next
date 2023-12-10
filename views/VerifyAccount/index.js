import Image from "next/image";
import style from "./VerifyAccount.module.scss";
import bg_image from "../../public/images/hero.svg";
import party from "../../public/images/party.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authenticationDispatcher } from "pages/api/redux-toolkit/authentication/authenticationSlice";
import { usersDispatcher } from "pages/api/redux-toolkit/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

export const VerifyAccount = () => {

    // const router = useRouter();
    // const [id, setId] = useState();
    // const [hash, setHash] = useState();
    // const dispatch = useDispatch();
    // const [loading, setIsLoading] = useState(false);
    // const { verifyEmail } = useSelector(state => state.authenticationSlice);
    // const [isEmailVerified, setIsEmailVerified] = useState(false);
    // const cookie = new Cookies();
    // const { verification_code } = router.query;


    // /**
    // * It gets the URL from the browser and extracts the userId & hashId from it.
    // */
    // useEffect(() => {
    //     const url = decodeURIComponent(router.asPath).split("verify/");
    //     if(url[0].includes('verify_url')){
    //         const [id, hash] = url && url[1]?.split("/");
    //         if (id && hash) {
    //             setId(id);
    //             setHash(hash);
    //         }
    //     }else{
    //         setIsLoading(false);
    //     }
    // });

    // /**
    // * Sets the Token & checks whether user is authenticated or not
    // */
    // useEffect(() => {
    //     setIsLoading(true);
    //     const token = cookie.get("shipSimpleToken");
    //     const user = cookie.get("user");

    //     if(typeof user !== 'undefined' && typeof user?.first_name == 'string' && typeof user?.email_verified_at == 'string') {
    //         router.push('/alreadyVerified');
    //         return;
    //     }

    //     if (verification_code) {

    //         dispatch(authenticationDispatcher.verifyEmail(verification_code, {

    //             success: (response) => {

    //                 const token = response.token;
    //                 cookie.set('shipSimpleToken', token, {path: '/'});
    //                 const id = response.id;

    //                 setIsLoading(false);
    //                 setIsEmailVerified(true);

    //                 dispatch(usersDispatcher.updateUserProfile(id, true, token, {
    //                     success: (response) => {

    //                         if (response) {
    //                             cookie.remove('user');
    //                             cookie.set('user', response, {path: '/'});
    //                         }
    //                         if(typeof response !== 'undefined' && typeof response?.first_name == 'string' && typeof response?.email_verified_at == 'string') {
    //                             router.push('/alreadyVerified');
    //                         } else {
    //                              router.push('/onboarding');
    //                         }

    //                     }
    //                 }));
    //                 return response;
    //             },
    //             error: (error) => {
    //                 setIsLoading(false);
    //                 return error;
    //             }
    //         }));
    //     }
    // }, [id, hash, verification_code]);

    // /**
    // * Resends Verification Mail
    // */
    // const resendVerificationEmail = () => {
    //     setIsLoading(true);
    //     const token = cookie.get("shipSimpleToken");
    //     dispatch(authenticationDispatcher.resendVerificationEmail(token, {
    //         success: (response) => {
    //             setIsLoading(false);
    //             return response;
    //         },
    //         error: (error) => {
    //             setIsLoading(false);
    //             return error;
    //         }
    //     }));
    // }

    return <>
        {/*<Head>
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
                <Image src={bg_image} alt="Hero-Image" />
            </div>
            <div className={`${style.divider} hidden sm:hidden md:hidden lg:block`}></div>
            {/* <div className={`${style.right_contents} px-5 sm:px-10 md:px-15 lg:px-20 w-full sm:w-full md:w-4/5 lg:w-1/2`}>
                <div className={style.content}>
                    <p className={style.label}>Check your email to verify your account</p>
                    <p className={style.label}><b>and let's get this party started!</b></p>
                    <Image src={party} alt={party} />
                    {loading ? <div className={style.verification}>
                        <Spinner /> <span className={style.verifying}>Verifying Email</span>
                    </div> : null}
                    {isEmailVerified ? <p className={style.verified}>Email Successfully Verified</p> : <>
                        <p className={style.resend}>Haven't received the email?</p>
                        <p className={style.resend_sub}>Be sure to check your junk mail/spam folders <br/> or click 'Resend' to resend the link.</p>
                        <div className={style.action_buttons}>
                            <Button title={'Resend'} disabled={loading} buttonType={loading ? `${buttonStyle.disabled_button} ${buttonStyle.btn}` : `${buttonStyle.tertiary_button} ${buttonStyle.btn}`} onClick={resendVerificationEmail}/>
                        </div>
                    </>
                    }
                </div>
            </div> */}
        </div>
    </>
}
