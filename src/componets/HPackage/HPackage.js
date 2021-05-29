import React from 'react';
import styled, {css} from 'styled-components';
import { HButton } from '../HButton/HButton';
import logoAsia from '../../assets/imgs/logoplaces/hongkong.png'
import Asia from '../../assets/imgs/packages/destination-8.jpg'


const BaseFlex = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const PackageContainer = styled.section`
    position: relative;
    margin: ${props => props.type === "main" ? "0 15px 32px" :"auto" };
    @media screen and (max-width: 75em)  {    
        margin: 0 auto 32px;
    }
    width: ${props => props.type === "main" ? "auto" :"fit-content" };
`

const MainPack =styled.div`
    width: ${props => props.type === "main" ? "366px" :"261px" };
    height: ${props => props.type === "main" ? "366px" :"261px" };
    @media screen and (max-width: 75em) and (min-width: 60em) {    
        height: 929px;
        width:929px;
    }
    @media screen and (max-width: 59.9375em) and (min-width: 48em) {    
        height: 717px;
        width:717px;
    }
    @media screen and (max-width: 47.9375em) and (min-width: 30em) {    
        height: 429px;
        width:429px;
    }
    @media screen and (max-width: 29.9375em) {    
        height: 269px;
        width:269px;
    }
    transition: all 0.4s ease-in-out;

`

const Img = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    overflow:hidden;
    background-position:center center;
`

const Content = styled.div`
    ${BaseFlex}
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 35px;
    margin:30px 0 0 30px;

`

const Text = styled.div`
    margin: 0 0 30px 30px;
`
const Decs = styled.h6`
    font-weight: normal;
    letter-spacing: 2px;
    color: #fff ;
    font-size: 13px;
    line-height: 13px;
    margin-top: 10px;
`
const Header = styled.h3`
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    letter-spacing: 0px;
    font-weight: bold;
    color: #fff ;
    
`

const HoverPack = styled.div`
    ${BaseFlex}
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;
    opacity: 0;
    top:0;
    background-color: #14b9d5;
    align-items: center;
    h3 {
        letter-spacing: 0;
        color: #fff;
         margin-bottom: 12px;
    }
    &:hover {
            opacity: 1;
    }
    transition: 0.6s ease-in-out;
`

const LinkList = styled.ul`
    ${BaseFlex}
    align-items:center;
    margin-bottom: 20px;
`
const LinkPlaces = styled.a`
    font-size: 14px;
    line-height: 27px;
    text-decoration: none;
    letter-spacing: 1px;
    color: #fff;
    &:hover {
        opacity: 0.9;
    }
`

const HPackage = (props) => {
    const {type} = props;

    return (
        <PackageContainer>
            <MainPack type={type}>
                <Img src={Asia}></Img>
                <Content>
                    <Logo src={logoAsia}></Logo>
                    <Text>
                       <Header>Asia</Header>
                        <Decs>2 PACKAGE</Decs> 
                    </Text>
                </Content>    
            </MainPack>

            <HoverPack>
                <h3>Packages</h3>
                <LinkList>    
                    <LinkPlaces href="">Hong Kong</LinkPlaces>
                    <LinkPlaces href="" >Phuket</LinkPlaces>
                </LinkList>
                <HButton size="normal" type="white"colorText="blue">VIEW DESTINATION</HButton>
            </HoverPack>

        </PackageContainer>
    );
}

export default HPackage;
// <HPackage type="main"></HPackage>
