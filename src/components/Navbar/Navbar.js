import React, {useState} from 'react';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerMenuIcon
} from './Navbar.elements';

import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

export const Navbar = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => {
        setClick(!click);
    }

    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon/>
                            COMPANY
                    </NavLogo>
                    <HamburgerMenuIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </HamburgerMenuIcon>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default Navbar
