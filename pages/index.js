import Layout from 'components/layouts/Layout';
import Head from 'next/head';
import { LoginPage } from 'views/Login';

export default function Home() {
  return (
    <Layout>
    <>
      <Head>
        <title>Login - Ship Simple</title>
        <meta name="description" content="Ship Simple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginPage/>
    </>
    </Layout>
  );
}
