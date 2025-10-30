import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import { bookContext } from '../App';
import { FaEnvelope, FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const { handlemobileDropdownItemClick } = useContext(bookContext);

  return (
    <Container fluid style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
      <Row>
        <Col md={3} className='mt-5 pt-5'>
          <Navbar.Brand as={NavLink} to="/" className='custom-design'>
            <h5 className='text-light fst-italic'><span className='fs-2'>📖</span ><span className=' fw-semibold'>Book Finder</span></h5>
          </Navbar.Brand>
        </Col>
        <Col md={3}>
          <h4 className='my-4 text-start'>Book Store</h4>
          <Nav className='d-flex flex-column text-start'>
            <Nav.Link as={NavLink} to="/" className='nav-link custom-nav-link' onClick={handlemobileDropdownItemClick}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/favorite" className='nav-link custom-nav-link' onClick={handlemobileDropdownItemClick}>Favotite</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className='nav-link custom-nav-link' onClick={handlemobileDropdownItemClick}>About</Nav.Link>
          </Nav>
        </Col>
        <Col md={3}>
        <h4 className='my-4 text-start'>Contact Us</h4>
              <Nav className='book-link d-flex flex-column text-start'>
                <address><FaMapMarkerAlt size={24} />  <a href='tel:+91 12345 67890' className='text-decoration-none text-light'>123 Tech Street, City, India</a></address>
                <address><FaPhoneAlt size={24} />  <a href='tel:+91 12345 67890' className='text-decoration-none text-light'>+91 97545 56756</a></address>
                <address><FaEnvelope size={24} />  <a href='mailto:support@bookstore.com' className='text-decoration-none text-light'>support@bookstore.com</a></address>
                <address><FaGlobe size={24}/>  <a href='www.bookstore.com' className='text-decoration-none text-light'>www.bookstore.com</a></address>
              </Nav>
        </Col>
        <Col md={3}>
        <h4 className='my-4 text-start'>Follow Us</h4>
              <div className='link text-start'>
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><i className='fa fa-facebook text-light mx-2 fs-3'><FaFacebook /></i></a>
                <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><i className='fa fa-instagram text-light mx-2 fs-3'><FaInstagram /></i></a>
                <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'><i className='fa fa-linkedin text-light mx-2 fs-3'><FaLinkedin /></i></a>
              </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} className='text-center mt-5' >
          <p>Designed By &copy; Chireshtha V</p>
        </Col>
      </Row>

    </Container>
  )
}

export default Footer
