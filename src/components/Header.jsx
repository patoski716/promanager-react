import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types';


const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    // <Nav.Link href=""><Link to="/Dashboard" className='ojo text-light' style={{textDecoration:'none'}}>Login</Link></Nav.Link>
    
    <Nav.Link href="#">
      
      <Link to="#" onClick={logout} className='ojo text-light' style={{textDecoration:'none'}}>Logout</Link>
    
    </Nav.Link>
    
    );

const guestLinks = (
    <Fragment>
        <Nav.Link href=""><Link to="/register" className='ojo text-light' style={{textDecoration:'none'}}>Register</Link></Nav.Link>
          <Nav.Link href=""><Link to="/login" className='ojo text-light' style={{textDecoration:'none'}}>Login</Link></Nav.Link>
    </Fragment>
);
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand href="/"><span className='text-purple'>Project</span> Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            </Nav>
            <Nav>
            <Nav.Link href="" ><Link to='/' className='ojo text-light' style={{textDecoration:'none'}}>Home</Link></Nav.Link>
            { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);