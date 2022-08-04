import { LoginInfoProvider } from '../components/loginInfoContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <LoginInfoProvider>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <Component {...pageProps} />
            </LoginInfoProvider>
        </>
    );
}

export default MyApp;
