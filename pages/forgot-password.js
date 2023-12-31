import Layout from "components/layouts/Layout";
import Head from "next/head";
import { ForgotPasswordPage } from "views/ForgotPassword";

const ForgotPassword = () => {
  return (
    <Layout>
      <>
        <Head>
          <title>SignUp - ShipSimple</title>
        </Head>
        <ForgotPasswordPage />
      </>
    </Layout>
  );
};
export default ForgotPassword;
