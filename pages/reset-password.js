import Layout from 'components/layouts/Layout';
import Head from 'next/head';
import { ResetPasswordPage } from 'views/ResetPassword';

const ResetPassword = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Reset Password - ShipSimple</title>
        </Head>
        <ResetPasswordPage />
      </div>
    </Layout>
  );
};
export default ResetPassword;
