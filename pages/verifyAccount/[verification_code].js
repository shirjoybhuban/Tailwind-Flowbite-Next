import Head from 'next/head';
import { VerifyAccount } from 'views/VerifyAccount';

const VerifyAccountPage = () => {
    return (
        <div>
            <Head>
                <title>Verify Account - ShipSimple</title>
            </Head>
            <VerifyAccount />
        </div>
    )
}
export default VerifyAccountPage;