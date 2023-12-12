import Layout from 'components/layouts/Layout';
import Head from 'next/head';
import { ResetPasswordPage } from 'views/ResetPassword';

const ResetPassword = () => {
  return (
    <Layout>
      <>
        <Head>
          <title>Reset Password - ShipSimple</title>
        </Head>
        <ResetPasswordPage />
      </>
    </Layout>
  );
};
export default ResetPassword;
