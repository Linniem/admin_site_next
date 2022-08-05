import Head from 'next/head';
import { useLoginInfo } from '../components/loginInfoContext';

export default function Home() {
    const userInfo = useLoginInfo();

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <h1>Welcom, {userInfo.userName} </h1>
            <h1>This is index page(Dashboard).</h1>
        </>
    );
}
