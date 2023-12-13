import { Button } from 'flowbite-react';
import party from '../../public/images/party.png';
import Image from 'next/image';
import { authenticationDispatcher } from 'pages/api/redux-toolkit/authentication/authenticationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Constants, XHR_STATE } from 'utility/constants';
import toast from 'react-hot-toast';

const ResendEmail = ({ userId }) => {
  const dispatch = useDispatch();
  const { resendVerificationEmail } = useSelector(
    (state) => state.authenticationSlice
  );
  const resendEmail = () => {
    userId && dispatch(
      authenticationDispatcher.resendVerificationEmail(12312, {
        success: (response) => {
          toast.success("A new link for account verification has been sent.");
          return response;
        },
        error: (error) => {
          toast.error(Constants.DEFAULT_ERROR_TEXT);
          return error;
        },
      })
    );
  };
  return (
    <div>
      <div className="flex flex-row items-center justify-center text-center  bg-white rounded-xl box-border m-0 md:m-5 h-4/5 px-5 sm:px-10 md:px-15 lg:px-20 pt-14 pb-14 w-full">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl px-0 py-3">
            Check your email to verify your account
          </p>
          <p className="text-2xl px-0 py-1">
            <b>and let's get this party started!</b>
          </p>
          <Image src={party} alt="Hero-Image" />
          <p className="text-base font-semibold px-0 py-3">
            Haven't received the email?
          </p>
          <p className="text-sm mb-5">
            Be sure to check your junk mail/spam folders <br /> or click
            'Resend' to resend the link.
          </p>
          <Button
            disabled={!userId || resendVerificationEmail.loading === XHR_STATE.IN_PROGRESS}
            size="md"
            color="primary"
            onClick={resendEmail}
            isProcessing={
              resendVerificationEmail.loading === XHR_STATE.IN_PROGRESS
            }>
            <span className="text-md font-bold">Resend</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResendEmail;
