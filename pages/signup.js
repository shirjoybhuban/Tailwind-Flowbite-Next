import Layout from 'components/layouts/Layout';
import Head from 'next/head';
import { SignUpPage } from 'views/SignUp';

const SignUp = () => {
  return (
    <Layout>
      <>
        <Head>
          <title>SignUp - ShipSimple</title>
        </Head>
        <SignUpPage />
      </>
    </Layout>
  );
};
export default SignUp;
