import React from 'react';
import { Nav, Navbar, Container, Stack } from 'react-bootstrap';

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});

//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;

//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         {button}
//       </div>
//     );
//   }
// }


// function LoginButton(props) {
//   return (
//     <button className="btn" onClick={props.onClick}>
//    <a class="nav-link active" href="/login">Login</a></button>

//   );
// }

// function LogoutButton(props) {
//   return (
//     <button className="btn" onClick={props.onClick}>
//     <a class="nav-link active" aria-current="page" href="/">Logout</a></button>

//   );

// }


export default function NavBar() {
  
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light"><br /><br /><br />
        <div class="container-fluid">
          <img
            alt=""
            src="/images/weatherlogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <a className="navbar-brand" href="/">Weather Rangers</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/favorites">Favorite</a>
              </li>
            </ul>
          </div>
          <Stack direction="horizontal" gap="2" className="mt-4">
            
           <button type='button' className="btn btn-primary ms-auto">
            <a class="nav-link" href="/login">Login</a></button> 
            {/* <LoginControl /> */}
            <button type='button' className="btn btn-primary ms-auto">
            <a class="nav-link" href="/">Logout</a></button> 
            <button type='button' className="btn btn-outline-secondary ms-auto"><a class="nav-link" href="/Registration">Registration</a></button>
          </Stack>

        </div>
      </nav>
    </>


  );
}
