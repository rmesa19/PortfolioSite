import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className='mt-5'>
            <Container>
                <Row>
                    <Col className='p-0' md={3}>
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}
