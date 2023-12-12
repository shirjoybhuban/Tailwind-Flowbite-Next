import Layout from 'components/layouts/Layout';
import Head from 'next/head';
import { VerifyAccount } from 'views/VerifyAccount';

const VerifyAccountPage = () => {
  return (
    <Layout>
      <>
        <Head>
          <title>Verify Account - ShipSimple</title>
        </Head>
        <VerifyAccount />
      </>
    </Layout>
  );
};
export default VerifyAccountPage;
