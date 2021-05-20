import Layout, {siteTitle} from "../components/layout";
import Head from 'next/head'

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle} - Contact </title>
            </Head>
            <h1>Contact</h1>
            <p>Contact information to be fill</p>
        </Layout>
    )
}