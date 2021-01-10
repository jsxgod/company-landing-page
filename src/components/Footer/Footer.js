import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrapper,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './Footer.elements'

const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About Us
                        </FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testemonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Contact Us
                        </FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testemonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Videos
                        </FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testemonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testemonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to='home' spy={true} smooth={true} duration={500}>
                        <SocialIcon/>
                        COMPANY
                    </SocialLogo>
                    <WebsiteRights>COMPANY © 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com' target='_blank' aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com' target='_blank' aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.twitter.com' target='_blank' aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.youtube.com' target='_blank' aria-label="Youtube" rel='noopener noreferrer'>
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterContainer>
        </>
    )
}

export default Footer
