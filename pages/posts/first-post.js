import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/link';
import Layout from '../../components/layout';

const ProfilePictureComponent = () => (
    <Image 
        src='/images/profile.jpg'
        height = {144}
        width = {144}
        alt = 'My Profile Picture'
        />
)

export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    )
  }