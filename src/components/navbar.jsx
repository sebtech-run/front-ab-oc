import React from 'react';
import Logo from "../assets/argentBankLogo.png";

import '../styles/components/navbar.css';

const Navbar = () => {
    return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="./index.html">
        <img
          class="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="./sign-in.html">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    );
};

export default Navbar;