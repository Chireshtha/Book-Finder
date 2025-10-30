import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutimg from '../Images/book1.jpg'
import aboutimg1 from '../Images/book2.jpg'
import '../Styles/AboutPage.css'


const AboutPage = () => {
  return (
    <Container>
      <Row className='my-5'>
        <Col md={6} style={{textAlign:'justify'}}>
        <h4 className='pt-5 text-center'>About Open-Source Books</h4>
        <p className='fs-6 my-5' > 
          This platform provides access to open-source and public-domain books for readers worldwide. Our goal is to promote free learning and knowledge sharing by offering a collection of digital books across various genres.
        </p>
        <p className='fs-6'>Readers can explore literature, fiction, education, history, science, technology, and more — all legally accessible through open-source book databases. We believe books should be available to everyone, supporting a culture of free education and continuous learning.</p>
        </Col>
        <Col md={6} className='d-flex justify-content-center align-items-center'>
        <img src={aboutimg} alt='about img loading' width='600px' height='400px' className='img1 img-fluid'/>
        </Col>
      </Row>
      <Row className='my-5 pt-5'>
        <Col md={6}>
        <img src={aboutimg1} alt='about img loading' width='600px' height='400px' className='img1 img-fluid'/>
        </Col>
        <Col md={6}>
        <h4 className='fw-semibold mb-3 text-center'>About Books and Reading</h4>
        <p className='my-2 fs-6'>Books are one of the greatest sources of learning and personal growth. They broaden our thinking, strengthen imagination, and help us understand the world through knowledge and storytelling. Whether it’s classic literature, modern novels, academic topics, or creative writing, books play a vital role in education and self-development.</p>
        <p className='my-4 fs-6'>With access to open-source and public-domain books, readers can freely explore thousands of titles without limitations. From inspiring biographies and historical studies to science, technology, philosophy, and fantasy stories, every book opens a door to new discoveries.</p>
        <p className='my-3 fs-6'>Books connect generations, preserve human knowledge, and inspire creativity — making them essential companions in every learning journey.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutPage
