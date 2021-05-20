import Layout from '../../components/layout'
import Card from '../../components/card'
import Row from '../../components/row'
import Col from '../../components/col'
import Heading from '../../components/heading'
import {getPeopleList} from '../../lib/api'

export async function getStaticProps() {
    const person = await getPeopleList();
    return {
        props: { person },
    }
}

export default function Locations ({person}) {
    return (
        <Layout>
            <Heading type='h1'>Locations</Heading>
            <p>Check out our store across the country.</p>
            <Row>
                {person.edges.map((edge, index) => {
                const {node} = edge;
                    return (
                        <Col sm={6} md={4} lg={3} key={index}>
                            <Card node={node} returnPage="people"/>  
                        </Col>
                    )
                })}
            </Row>
        </Layout>
    )
}

