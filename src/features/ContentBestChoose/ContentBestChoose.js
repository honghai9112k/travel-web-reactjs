import React from 'react';
import HSlick from '../../componets/HSlick/HSlick'
import styled from 'styled-components';
import HHeader from '../../componets/HHeader/HHeader';
import { HButton } from '../../componets/HButton/HButton';
import Logo1 from '../../assets/imgs/icon-options/icon-around.png'
import Logo2 from '../../assets/imgs/icon-options/icon-boat.png'
import Logo3 from '../../assets/imgs/icon-options/icon-landmark.png'

const ContainerContent = styled.section`
    width: 1200px;
    margin: auto;
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
    transition: width 0.4s ease-in-out;

`

const Content = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 76px;
    justify-content: space-around;
    @media screen and (max-width: 75em)  {    
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin:auto ;
    }
`

//Left content
const LeftContent = styled.div`
    width: 33.33333%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 15px;
    text-align: left !important;
    
    h3 {
        color: #9a9a9a;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 2px;
        font-weight: normal;
    }
    p {
        text-align: left;
        letter-spacing: 1px;
        font-size: 14px;
        color: #9a9a9a;
        line-height: 27px;
        max-width: 910px;
        
    } 
    @media screen and (max-width: 75em) {    
        width:100%;
        margin:auto ;
    }
    transition: width 0.4s ease-in-out;
    
`
const Piece = styled.div`
    h1 {
        font-size: 30px;
        line-height: 30px;
        color: #555555;
        color: #555555;
        font-weight: normal;
        
        span {
            font-weight: normal;
            letter-spacing: 1px;
            margin-right: 10px;
        }
    }
    margin: 20px 0 ;

`
const Header = styled.div`
    display:flex;
    flex-wrap: wrap;
`


// Slick
const SlickContainent = styled.div`
    position: relative;
    margin-right:15px;
    width: fit-content;
    @media screen and (max-width: 75em) {
    margin-right:0;
    }
    @media screen and (max-width: 75em) and (min-width: 60em) {    
        width:929px;
        padding-top: 60px;
    }
    @media screen and (max-width: 59.9375em) and (min-width: 48em) {    
        padding-top: 60px;
        width:717px;
    }
    @media screen and (max-width: 47.9375em) and (min-width: 30em) {    
        padding-top: 60px;
        width:429px;
    }
    @media screen and (max-width: 29.9375em) {    
        padding-top: 60px;
        width:269px;
    }
    transition: all 0.4s ease-in-out;

`

const BeforeComponent = styled.div`
    width: 114px;
    height: 122px;
    h1 {
        font-size: 35px;
        line-height: 35px;
        letter-spacing: 1px;
        color: #ffffff;
        font-weight: normal;
    }
    h6 {
        color: #ffffff;
        letter-spacing: 2px;
        font-size: 13px;
        line-height: 13px;
        font-weight: normal;
    }
    background-color: #14b9d5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: relative;
    &:not(.not-after):after {
        position: absolute;
        content: "/";
        top: 30px;
        right: -12px;
        font-size: 60px;
        color: #000;
        opacity: 0.05;
        z-index: 9;
        line-height: 60px;
        font-weight: 200;
    }
    @media screen and (max-width: 75em)  {    
        width: 25%;
        &:not(.not-after):after {
            display: none;
        }
    }
    @media screen and (max-width: 29.9375em) {    
        width:269px;
        text-align:center;
    }
    transition: width 0.4s ease-in-out;

`

const BeforeSlick = styled.div`
    position: absolute;
    display: flex;
    bottom: -50px;
    left: 150px;
        
    @media screen and (max-width: 75em) and (min-width: 60em) {    
        width:929px;
        bottom: -100px;
        left: 0;
    }
    @media screen and (max-width: 59.9375em) and (min-width: 48em) {    
        width:717px;
        bottom: -100px;
        left: 0;
    }
    @media screen and (max-width: 47.9375em) and (min-width: 30em) {    
        width:429px;
        bottom: -100px;
        left: 0;
    }
    @media screen and (max-width: 29.9375em) {    
        width:269px;
        flex-direction: column;
        bottom: -470px;
        left: 0;
        
    }
    transition: all 0.4s ease-in-out;

`
// Option
const LogoOptions = styled.div`
    width: 100%;
    display: flex;
    margin: auto;
    padding-top: 35px;
    @media screen and (max-width: 75em) {    
        margin-top:100px ;
        flex-direction: column;

    }
    @media screen and (max-width: 29.9375em) { 
        margin-top:500px ;
        
    }
    transition: all 0.4s ease-in-out;

`

const Option = styled.div`
    display: flex;
    width: 100%;
    margin:0 15px ;
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`

const Text = styled.div`
    float: left;
    p {
        font-size: 14px;
        color: #9a9a9a;
        line-height: 24px;
        letter-spacing: 1px;
        float: left;
        margin: 0 0 20px;
    }

    a {
        font-size: 14px;
        line-height: 14px;
        border-radius: 0px;
        border: 0px solid;
        color: #14b9d5;
        text-decoration: none;

    }
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`

const ContentBestChoose = () => {


    return (
        <ContainerContent>
            <Content>
                <LeftContent>
                    <h3>NORTH AMERICA</h3>
                    <Header>
                        <HHeader color="black" size="36px">The Best </HHeader>
                        <HHeader colorUnder="blue" color="black" isUnder="true" size="36px">Beaches</HHeader>
                    </Header>
                    <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin rhoncus urna dictum neque molestie ultricies mauris ac.
                        <br></br>
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin rhoncus urna dictum neque molestie ultricies mauris ac.</p>
                    <Piece>
                        <h1>
                            <span style={{ color: "#dadada", textDecoration: "line-through" }} >800</span>
                            500 $
                            <span style={{ fontSize: "14px", marginLeft: "10px" }}>/ FOR PERSON</span>
                        </h1>
                    </Piece>

                    <HButton size="big" type="greenblue" colorText="white">BOOK NOW</HButton>

                </LeftContent>
                <SlickContainent>
                    <HSlick ></HSlick>
                    {/* <HSlick widthImg="750px" heightImg="410px" ></HSlick>
Dùng customHook
                    */}
                    <BeforeSlick>
                        <BeforeComponent>
                            <h1>000</h1>
                            <h6>DAYS</h6>
                        </BeforeComponent>
                        <BeforeComponent>
                            <h1>00</h1>
                            <h6>HOURS</h6>
                        </BeforeComponent>
                        <BeforeComponent>
                            <h1>00</h1>
                            <h6>MINUTES</h6>
                        </BeforeComponent>
                        <BeforeComponent className="not-after">
                            <h1>00</h1>
                            <h6>SECONDS</h6>
                        </BeforeComponent>
                    </BeforeSlick>
                </SlickContainent>
            </Content>
            <LogoOptions>
                <Option>
                    <Logo src={Logo1}></Logo>
                    <Text>
                        <HHeader color="black" size="24px">World Tour</HHeader>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <a href="/">View More</a>
                    </Text>
                </Option>
                <Option>
                    <Logo src={Logo2}></Logo>
                    <Text>
                        <HHeader color="black" size="24px">Cruises</HHeader>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <a href="/">View More</a>
                    </Text>
                </Option>
                <Option>
                    <Logo src={Logo3}></Logo>
                    <Text>
                        <HHeader color="black" size="24px">Best Tours</HHeader>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <a href="/">View More</a>
                    </Text>
                </Option>
            </LogoOptions>
        </ContainerContent>

    );
}

export default ContentBestChoose;
