import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min"
import "../styles/AntiAdBlock.css";
import type {AppProps} from "next/app";
import Link from "next/link";
import Layout from "../components/Layout";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
