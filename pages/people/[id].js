import Layout from '../../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import Section from '../../components/section';
import Card from '../../components/card';
import Row from '../../components/row';
import Col from '../../components/col';
import Heading from '../../components/heading';
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
            <Link href='/people'>
                <a>Back to menu</a>
            </Link>
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
