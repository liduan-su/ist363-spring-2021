import Head from 'next/head'
import Button from '../components/button'
import Heading from '../components/heading'
import Image from 'next/image'
import Section from '../components/section'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <Image
          src="/images/making-coffee.jpg" 
          width={857}
          height={450}
          alt='Making coffee'
        / >
        <Heading type="h1">Menu</Heading>
        <p>The highest quality coffees from farms around the world, freshly roasted by hand to bring out every nuance, so you can taste the craft in every cup.</p>
        <Button label="View Menu" href="/menu" type="primary"/>
      </Section>
      <Section>
        <Image
          src="/images/location.jpg" 
          width={783}
          height={450}
          alt='a Starbucks location'
        / >
        <Heading type="h1">Locations</Heading>
        <p>Find a Starbucks location near your and pick up your favorite coffee and food items today.</p>
        <Button label="View Locations" href="/locations" type="primary"/>
      </Section>
    </Layout>
  )
}