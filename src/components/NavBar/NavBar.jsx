import React from 'react';
import { Nav, Navbar, Container, Stack } from 'react-bootstrap';



export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img
            alt=""
            src="/images/weatherlogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <a class="navbar-brand" href="#">Weather Rangers</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/favorites">Favorite</a>
              </li>
            </ul>
          </div>
          <Stack direction="horizontal" gap="2" className="mt-4">
            <button type='button' className="btn btn-primary ms-auto">Login</button>
            <button type='button' className="btn btn-outline-secondary ms-auto">Join Us</button>
          </Stack>

        </div>
      </nav>
      {/* <Navbar bg="light" expand='sm' variant="light">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="/images/weatherlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Weather rangers
          </Navbar.Brand>          
            <Nav>
              <Nav.Link herf='/' className='text-left'>Home</Nav.Link>
              <Nav.Link herf='/'>Favorite</Nav.Link>
              <form className="form-inline my-2 my-lg-0 text-left">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button  type="submit">Search</button>
              </form>
            </Nav>
        
          </Container>
    </Navbar> */}
    </>


  );
}
