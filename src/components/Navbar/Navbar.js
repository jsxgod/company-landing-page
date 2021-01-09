import React, {useState, useEffect} from 'react';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerMenuIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
    NavThemeIcon,
} from './Navbar.elements';

import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useTheme } from '../theme';

export const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [theme, themeToggler] = useTheme();

    const handleClick = () => {
        setClick(!click);
    }

    const hideMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    const toggleTheme = () => {
        themeToggler();
        window.location.reload();
    }

    window.addEventListener('resize', showButton);

    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={hideMobileMenu}>
                        <NavIcon/>
                            COMPANY
                    </NavLogo>
                    <HamburgerMenuIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </HamburgerMenuIcon>
                    <NavMenu onClick={hideMobileMenu} click={click}>
                        <NavItem onClick={toggleTheme}>
                            <NavLinks>
                                <NavThemeIcon/>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services'>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/products'>
                                Products
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary={true}>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button onClick={hideMobileMenu} fontBig primary={false}>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default Navbar;
