import Head from 'next/head'
import Button from '../components/button'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Liwen Duan</h1>
        <p>A Web Designer</p>
        <Button label="View Portfolio" href="/portfolio" type="primary"/>
        <Button label="View Menu" href="/menu" type="primary"/>
        <Button label="View Locations" href="/locations" type="primary"/>
        <Button label="Meet our Team" href="/people" type="primary"/>
        <Button label="About" href="/about" type="secondary"/>

      </section>
    </Layout>
  )
}