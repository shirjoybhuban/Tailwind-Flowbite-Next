import Layout from 'components/layouts/Layout';
import Head from 'next/head';
import { SignUpPage } from 'views/SignUp';

const SignUp = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>SignUp - ShipSimple</title>
        </Head>
        <SignUpPage />
      </div>
    </Layout>
  );
};
export default SignUp;
