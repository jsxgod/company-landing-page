import React from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon} from './Navbar.elements';

export const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon/>
                        COMPANY
                </NavLogo>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
