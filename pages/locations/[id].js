import Layout from '../../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import {getAllLocationSlugs, getLocationItemBySlug} from '../../lib/api';


export async function getStaticPaths() {
    const allSlugs = await getAllLocationSlugs();
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
    const locationItemData = await getLocationItemBySlug (params.id)
    return {
        props: { 
            locationItemData
        }
    }
}

export default function LocationItem({locationItemData}) {
    const {title, featuredImage, content} = locationItemData;
    const {sourceUrl, mediaDetails, altText} = featuredImage;
    const {width,height} = mediaDetails;

    return (
        <Layout>
            <Link href='/locations'>
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

