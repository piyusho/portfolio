import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgMenuHotdog, CgClose } from 'react-icons/cg';
import { NavMenuStyles } from './styles';

function NavMenu() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <NavMenuStyles>
        <div
          className='mobile-menu-icon'
          onClick={() => setShowNav(!showNav)}
          role='button'
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}>
          <CgMenuHotdog />
        </div>

        <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
          <div
            className='closeNavIcon'
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}>
            <CgClose />
          </div>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to='/about'>About</NavLink>
          </li>

          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>

          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </NavMenuStyles>
    </div>
  );
}

export default NavMenu;
