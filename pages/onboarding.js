import Layout from 'components/layouts/Layout';
import Head from 'next/head';
import { OnboardingPage } from 'views/Onboarding';

const SignUp = () => {
  return (
    <Layout>
      <>
        <Head>
          <title>Onboarding - ShipSimple</title>
        </Head>
        <OnboardingPage />
      </>
    </Layout>
  );
};
export default SignUp;
