import React from 'react';
import {BottomText, Container, Content,ContentWrapper,FooterBtn, FooterLinks, LinksSubtitle, LinkWrapper,Title} from "./style";

const Footer = () => {
    return (
        <Container>
            <ContentWrapper>
            <Content>
                <Title>
                    <span>We Make </span>
                    <span>Brand Work</span>
                </Title>
                <FooterBtn>
                   <span className='btn-name'>
                    Get in touch
                   </span>
                   <span class="link-arrow-icon"> →</span>
                </FooterBtn>
            </Content>
            <Content>
                <LinkWrapper>
                <LinksSubtitle>SOCIAL</LinksSubtitle>
                <FooterLinks>Linkedin</FooterLinks>
                <FooterLinks>Instagram</FooterLinks>
                <FooterLinks>Facebook</FooterLinks>
                <FooterLinks>Twitter</FooterLinks>
                <FooterLinks>Spotify</FooterLinks>
                </LinkWrapper>

                <LinkWrapper>
                <LinksSubtitle>AROUND</LinksSubtitle>
                <FooterLinks>Work</FooterLinks>
                <FooterLinks>Services</FooterLinks>
                <FooterLinks>Approach</FooterLinks>
                <FooterLinks>Thinking</FooterLinks>
                <FooterLinks>About</FooterLinks>
                <FooterLinks>Careers</FooterLinks>
                <FooterLinks>Contact</FooterLinks>

                </LinkWrapper>
            </Content>
            </ContentWrapper>
            <BottomText> 
            ©  Saffron Brand Consultants 2022 
                <span>Privacy Policy</span>
                <span>Cookies Policy</span>
            </BottomText>
        </Container>
    );
};

export default Footer;