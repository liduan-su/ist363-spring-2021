import Layout, {siteTitle} from "../components/layout";
import Head from 'next/head'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle} - About </title>
            </Head>
            <h1>About</h1>
            <p>This is a simple rebuild of the Starbucks website. This project is intended to be used within the academic settings</p>
        </Layout>
    )
}