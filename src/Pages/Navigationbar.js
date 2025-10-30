import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../Styles/Navigationbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes, FaBars } from 'react-icons/fa'
import useToggleBtn from '../Hooks/useToggleBtn';
import { bookContext } from '../App';


const Navigationbar = () => {
  const { isToggled, handleToggle } = useToggleBtn();
  const {togglerRef, handlemobileDropdownItemClick} = useContext(bookContext);
  return (
    <Navbar expand='md' className="fs-5 fixed-top custom-navbar">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className='custom-design'>
          <h5 className='text-light fst-italic'><span className='fs-2'>📖</span ><span className=' fw-semibold'>Book Finder</span></h5>
        </Navbar.Brand>
        <Navbar.Toggle ref={togglerRef} aria-controls='navbar-nav' className='custom-navbar-toggler' onClick={handleToggle}>
          {isToggled ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>
        <Navbar.Collapse id='navbar-nav' className='navbar-collapse'>
          <Nav className='ms-auto fs-6 w-75 d-flex justify-content-end align-items-center'>
            <Nav.Link as={NavLink} to="/" className='nav-link custom-nav-link' onClick={handlemobileDropdownItemClick}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/favorite" className='nav-link custom-nav-link' onClick={handlemobileDropdownItemClick}>Favotite</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className='nav-link custom-nav-link' onClick={handlemobileDropdownItemClick}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Navigationbar
