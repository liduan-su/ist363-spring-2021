import Heading from '../../components/heading';
import Layout from '../../components/layout';
import Row from '../../components/row';
import Col from '../../components/col'
import Card from '../../components/card'
import {getLocationItems} from '../../lib/api';

export async function getStaticProps() {
    const locations = await getLocationItems();
    return {
        props:{ locations },
    }
}

export default function Locations ({locations}) {
    return (
        <Layout>
            <Heading type='h1'>Locations</Heading>
            <p>Check out our store across the country.</p>
            <Row>
                {locations.edges.map((edge, index) => {
                const {node} = edge;
                
                    return (
                        <Col sm={6} md={4} lg={3} key={index}>
                            <Card node={node} returnPage="locations"/>  
                        </Col>
                    )
                })}
            </Row>
        </Layout>
    )
}