import Layout, { siteTitle } from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Row from '../../components/row';
import Col from '../../components/col';
import {getPeopleList, getPeopleListBySlug} from '../../lib/api';

export async function getStaticPaths() {
    const allSlugs = await getPeopleList();
    const paths = allSlugs.edges.map(edge => {
        const {slug} = edge.node;
        return {
            params: { 
                id: slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const personItemData = await getPeopleListBySlug (params.id)
    return {
        props: { 
            personItemData
        }
    }
}

export default function peopleItem({personItemData}) {
    const {title, featuredImage, content} = personItemData;
    const {sourceUrl, mediaDetails, altText} = featuredImage.node;
    const {width,height} = mediaDetails;

    return (
        <Layout>
            <Head>
                <title>{siteTitle} - {title} </title>
            </Head>
            <Row>
                <Col>
                    <Link href='/people'>
                        <a>See other team members</a>
                    </Link>
                </Col>
            </Row>
            <Image 
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </Layout>
    )
}
