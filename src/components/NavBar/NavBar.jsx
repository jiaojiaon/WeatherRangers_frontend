import React from 'react';
import { Nav, navbar, Stack } from 'react-bootstrap';
import "../../index.css"

export default function NavBar() {
  return (
    <div className="wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img
            alt=""
            src="/images/weatherlogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <a className="navbar-brand" href="/">Weather Rangers</a>

          <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* MenuDropDown */}
            <span className="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/favorites">Favorite</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Form">Check Weather</a>
              </li>
              {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/login">Login</a></li>
                  <li><a class="dropdown-item" href="/">Home</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
          <Stack direction="horizontal" gap="2" className="mt-4">

            <button id="btn-el" type='button' className="btn btn-primary ms-auto">
              <a class="nav-link" href="/login">Login</a></button>
            {/* <LoginControl /> */}
            <button id="btn-el" type='button' className="btn btn-primary ms-auto">
              <a class="nav-link" href="/">Logout</a></button>
            <button id="btn-el" type='button' className="btn btn-outline-secondary ms-auto">
              <a class="nav-link" href="/Registration">Registration</a></button>
          </Stack>

        </div>
      </nav>
    </div>


  );
}
