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
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [button, setButton] = useState(true);
    const [theme, themeToggler] = useTheme();

    const hideMobileMenu = () => {
        console.log(theme);
        if(mobileMenuOpened){
            setMobileMenuOpened(false);
        }
    }
    
    const handleSetHomePage = () => {
        if(mobileMenuOpened) {
            setMobileMenuOpened(false);
        } else {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            }
            window.location.href = "/";
        }
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
                    <NavLogo to="/" onClick={handleSetHomePage}>
                        <NavIcon />
                            COMPANY
                    </NavLogo >
                    <HamburgerMenuIcon onClick={() => {setMobileMenuOpened(!mobileMenuOpened)}}>
                        {mobileMenuOpened ? <FaTimes/> : <FaBars/>}
                    </HamburgerMenuIcon>
                    <NavMenu onClick={hideMobileMenu} click={mobileMenuOpened}>
                        <NavItem onClick={toggleTheme}>
                            <NavLinks to="" onClick={toggleTheme}>
                                <NavThemeIcon/>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={handleSetHomePage} to="home" spy={true} smooth={true} duration={500} delay={mobileMenuOpened ?  400 : 0}>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" spy={true} smooth={true} duration={500} delay={mobileMenuOpened ?  400 : 0}>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="cards" spy={true} smooth={true} duration={500} delay={mobileMenuOpened ?  400 : 0} >
                                Plans
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="clients" spy={true} smooth={true} duration={500} delay={mobileMenuOpened ?  400 : 0}>
                                Clients
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="sign-up">
                                    <Button primary={true}>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="sign-up">
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
