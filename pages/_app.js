import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const getLayout =
        Component.getLayout || ((page) => <Layout>{page}</Layout>);

    return getLayout(
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
