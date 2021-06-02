import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/imgs/footer-img.jpg'
import LogoImg from '../../assets/imgs/logo-color.png'
import { HButton } from '../../componets/HButton/HButton';
import HTextField from '../../componets/HTextField/HTextField';
import HHeader from '../../componets/HHeader/HHeader';
import { AiOutlineTwitter, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'
import { FaVimeoV } from 'react-icons/fa'
import { BiChevronRight } from 'react-icons/bi'


const Container = styled.section`
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    overflow:hidden;
    background-position:center center;
`
const HeaderContainer = styled.div`
        padding: 80px 0 64px 0 ;
        width: 1170px;
        margin: auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        @media screen and (max-width: 75em) {        
            flex-direction:column ;
        }
        @media screen and (max-width: 75em) and (min-width: 60em) {        
            width:929px;    
        }
        @media screen and (max-width: 59.9375em) and (min-width: 48em) {    
            width:717px;
        }
        @media screen and (max-width: 47.9375em) and (min-width: 30em) {    
        
            width:429px;
        }
        @media screen and (max-width: 29.9375em) {    
            width:269px;
        }
    transition: all 0.4s ease-in-out;
`

const Send = styled.div`
    align-items: center;
    display: flex;
    @media screen and (max-width: 75em) {        
        width: 100%;
    }
    @media screen and (max-width: 47.9375em){    
        flex-direction:column;
    }
    

`

const ButtonDiv = styled.div`
    margin-left :30px;
    display: flex;
    @media screen and (max-width: 47.9375em){    
        margin: 20px 0 0 0;
        width: 100%;
    }
`

const Button = styled(HButton)`
    padding: 16px 35px;

    @media screen and (max-width: 75em){    
        padding: 16px 100px;
    }
    @media screen and (max-width: 47.9375em){    
        width: inherit;
    }
    
`

// const TextFiled = styled(HTextField)`
//     width: 100%;
// `

const Header = styled.div`
  letter-spacing: 0 !important;
  float: left;
  @media screen and (max-width: 75em) {        
        width: 100%;
    }
    
`

const HeaderDecs = styled.h3`
    color: #9a9a9a;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    font-weight: normal;
    width: fit-content;
    margin-bottom: 6px;
    
    @media screen and (max-width: 29.9375em){    
        margin:  0 auto 6px ;
    }
`

// Content
const ContentContainer = styled.div`
        width: 1170px;        
        margin: auto;
        background-color: #fff;
        @media screen and (max-width: 75em) and (min-width: 60em) {    
            width:929px;    
        }
        @media screen and (max-width: 59.9375em) and (min-width: 48em) {    
            width:717px;
        }
        @media screen and (max-width: 47.9375em) and (min-width: 30em) {    
            width:429px;
        }
        @media screen and (max-width: 29.9375em) {       
            width:269px;
        }
    transition: all 0.4s ease-in-out;
        
`
const UpContent = styled.div`
    display: flex;
    padding: 35px 30px;
    width: 100%;
    justify-content: space-between; 
    @media screen and (max-width: 75em) {        
            flex-direction:column ;
        }

`

//Right
const Decs = styled.div`
    width:100%;
    margin: 10px 0px 0 18px;
`

const LogoMain = styled.img`
    width: 150px;
    margin: 10px 0 25px 0;
`

const DecsText = styled.p`
    color: #9a9a9a;
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 1;
    margin-bottom: 25px;
`

const ContactLogo = styled.div`
    margin-bottom: 10px;
`

// Left
const ParentList = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    @media screen and (max-width: 75em) {        
            flex-direction:column ;
    }
`

const Component = styled.div`
    padding: 0 15px;
    min-width: 150px;
`

const HeaderComponents = styled.h6`
    color: #555555;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    font-weight: bold;
    margin: 25px 0 35px 0 ;
`

const List = styled.ul`
    list-style-type: none;
`

const Item = styled.li``

const TextItem = styled.p`
    color: #9a9a9a;
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 1px;
`

// Down
const DownContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #14b9d5;
    margin-bottom: 80px;
    @media screen and (max-width: 75em) {        
            flex-direction:column ;
            text-align: center;
            align-items: center;
        }
`

const NameDiv = styled.div`
    padding: 20px;
`

const NameWeb = styled.h6`
    color: #ffffff;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 2px;
    font-weight: normal;
`

const MadeByDiv = styled.div`
    padding: 20px;
    
`


const Footer = () => {

    const AgencysData = [
        { id: 1, name: "Services" },
        { id: 2, name: "Insurancee" },
        { id: 3, name: "Agency" },
        { id: 4, name: "Tourism" },
        { id: 5, name: "Payment" },
    ]

    const PartnersData = [
        { id: 1, name: "Booking" },
        { id: 2, name: "RentalCar" },
        { id: 3, name: "HostelWorld" },
        { id: 4, name: "Trivago" },
        { id: 5, name: "TripAdvisor" },
    ]

    const LastMituteData = [
        { id: 1, name: "London" },
        { id: 2, name: "California" },
        { id: 3, name: "Indonesia" },
        { id: 4, name: "Europe" },
        { id: 5, name: "Oceania" },
    ]


    return (
        <Container>
            <HeaderContainer>
                <Header>
                    <HeaderDecs>KEEP IN TOUCH</HeaderDecs>
                    <HHeader color="black" isUnder="" size="36px">Travel with Us</HHeader>
                </Header>
                <Send>
                    <HTextField />
                    <ButtonDiv>
                        <Button
                            size="big"
                            type="blue"
                            colorText="white"
                            style={{

                            }}
                        >SEND</Button>
                    </ButtonDiv>
                </Send>
            </HeaderContainer>
            <ContentContainer>
                <UpContent>
                    <Decs>
                        <LogoMain src={LogoImg}></LogoMain>
                        <DecsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Curabitur ut diam et nibh condimentum venenatis eu ac magnasin. Quisque interdum est mauris, eget ullamcorper.</DecsText>
                        <ContactLogo>
                            <AiOutlineTwitter style={{ fontSize: "26px", color: "#555", margin: "0 12px 0 0" }} />
                            <AiFillYoutube style={{ fontSize: "26px", color: "#555", margin: "0 12px 0 0" }} />
                            <AiFillFacebook style={{ fontSize: "26px", color: "#555", margin: "0 12px 0 0" }} />
                            <FaVimeoV style={{ fontSize: "26px", color: "#555", margin: "0 12px 0 0" }} />
                        </ContactLogo>
                    </Decs>


                    <ParentList>
                        <Component>
                            <HeaderComponents>OUR AGENCY</HeaderComponents>
                            <List>
                                {AgencysData.map((item, index) => {
                                    return (
                                        <Item key={index}>
                                            <TextItem><BiChevronRight style={{ fontSize: "20px", margin: "0 0 -5px" }} /> {item.name}</TextItem>
                                        </Item>
                                    )
                                })}
                            </List>
                        </Component>

                        <Component>
                            <HeaderComponents>PARTNERS</HeaderComponents>
                            <List>
                                {PartnersData.map((item, index) => {
                                    return (
                                        <Item key={index}>
                                            <TextItem><BiChevronRight style={{ fontSize: "20px", margin: "0 0 -5px" }} /> {item.name}</TextItem>
                                        </Item>
                                    )
                                })}
                            </List>
                        </Component>

                        <Component>
                            <HeaderComponents>LAST MINUTE</HeaderComponents>
                            <List>
                                {LastMituteData.map((item, index) => {
                                    return (
                                        <Item key={index}>
                                            <TextItem><BiChevronRight style={{ fontSize: "20px", margin: "0 0 -5px" }} /> {item.name}</TextItem>
                                        </Item>
                                    )
                                })}
                            </List>
                        </Component>
                    </ParentList>


                </UpContent>

                <DownContent>

                    <NameDiv>
                        <NameWeb>THE BEST WORDPRESS TRAVEL THEME</NameWeb>
                    </NameDiv>
                    <MadeByDiv>
                        <NameWeb>COPYRIGHT NICDARK THEMES 2018</NameWeb>
                    </MadeByDiv>

                </DownContent>
            </ContentContainer>
        </Container>
    );
}

export default Footer;
