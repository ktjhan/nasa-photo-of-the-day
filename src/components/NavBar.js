import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavOne = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="https://github.com/ktjhan">Github</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.youtube.com/watch?v=YWeqHMLT27o">De-Stresser</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://linkedin.com/in/ktjhan">LinkedIn</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavOne;
