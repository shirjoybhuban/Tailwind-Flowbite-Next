import Image from 'next/image';
import style from './VerifyAccount.module.scss';
import bg_image from '../../public/images/hero.svg';
import party from '../../public/images/party.png';
import warning from '../../public/images/warning.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { authenticationDispatcher } from 'pages/api/redux-toolkit/authentication/authenticationSlice';
import { usersDispatcher } from 'pages/api/redux-toolkit/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'flowbite-react';

export const VerifyAccount = () => {
  const router = useRouter();
  // const [id, setId] = useState();
  // const [hash, setHash] = useState();
  const dispatch = useDispatch();
  const [loading, setIsLoading] = useState(true);
  const { verifyEmail } = useSelector((state) => state.authenticationSlice);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  // const cookie = new Cookies();
  const { verification_code } = router.query;

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

  /**
   * Sets the Token & checks whether user is authenticated or not
   */
  useEffect(() => {

    // if (
    //   typeof user !== 'undefined' &&
    //   typeof user?.first_name == 'string' &&
    //   typeof user?.email_verified_at == 'string'
    // ) {
    //   router.push('/alreadyVerified');
    //   return;
    // }

    if (verification_code) {
      dispatch(
        authenticationDispatcher.verifyEmail(verification_code, {
          success: (response) => {
            console.log(response);
            setIsEmailVerified(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
            // const token = response.token;
            // cookie.set('shipSimpleToken', token, {path: '/'});
            // const id = response.id;

            // setIsLoading(false);
            // setIsEmailVerified(true);

            // dispatch(usersDispatcher.updateUserProfile(id, true, token, {
            //     success: (response) => {

            //         if (response) {
            //             cookie.remove('user');
            //             cookie.set('user', response, {path: '/'});
            //         }
            //         if(typeof response !== 'undefined' && typeof response?.first_name == 'string' && typeof response?.email_verified_at == 'string') {
            //             router.push('/alreadyVerified');
            //         } else {
            //              router.push('/onboarding');
            //         }

            //     }
            // }));
            return response;
          },
          error: (error) => {
            setIsLoading(false);
            return error;
          },
        })
      );
    }
  }, [verification_code]);

  return (
    <>
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
        <div
          className={`${style.left_contents} hidden sm:hidden md:hidden lg:block`}>
          <h1
            className={`text-[44px] leading-[52px] text-[#08085E] mb-[30px] font-bold`}>
            The #1 Choice <br />
            for Business Shipping
          </h1>
          <Image src={bg_image} alt="Hero-Image" width={'300'} />
        </div>
        <div
          className={`${style.divider} hidden sm:hidden md:hidden lg:block`}></div>
        <div>
          <div className="flex flex-row items-center justify-center bg-white rounded-xl box-border m-5 h-4/5 px-5 sm:px-10 md:px-15 lg:px-20 pt-14 pb-14 w-full">
            {loading ? (
              <div className="flex flex-col items-center justify-center">
                <Spinner size="xl" />
                <p className="text-2xl text-secondary-950 px-0 py-1 font-semibold text-center mt-5">
                  While your account is being verified, <br />
                  kindly keep the tab open.
                </p>
              </div>
            ) : isEmailVerified ? (
              <div className="flex flex-col items-center justify-center">
                <Image src={party} alt="Hero-Image" />
                <p className="text-2xl text-secondary-950 px-0 py-1 font-bold mt-5">
                  Account Successfully Verified
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <Image src={warning} alt="Hero-Image" />
                <p className="text-xl text-red-600 px-0 py-1 font-semibold mt-5">
                  Something went wrong. Please try again later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
