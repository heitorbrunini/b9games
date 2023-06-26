import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './NavBar.css'
import SideNav from "./SideNav"
import { Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi';
import React, { useState } from 'react';

function NavBar() {

  const [nameGame, setName] = useState(null);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  border-bottom border-bottom-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" id="logo" href="/">B9 GAMES</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>

            </li>
          </ul>

          <form className="d-flex" role="search">
            <InputGroup size='md'>
              <Input color={'white'} onChange={(e) => setName(e.target.value)} placeholder='Pesquisar ...' />
              <InputRightElement width='4.5rem'>
                <Button colorScheme='green' variant='outline' onClick={() => console.log(nameGame)}>
                  <FiSearch />
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>

        </div>

        <div class="d-flex">
          <button class="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-label="Toggle navigation">
            <SideNav />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;