import React from 'react';
import styled, {css} from 'styled-components';
import HHeader from '../../componets/HHeader/HHeader';
import { HButton } from '../../componets/HButton/HButton';
import Background from '../../assets/imgs/background-parallax-search-2.jpg' 


const MiddleContainer = styled.section`
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    overflow:hidden;
    background-position:center center;
    width: 100%;
    margin: auto ;
    min-height: 234px;
    display: flex;
    justify-content: center;
    margin-bottom: 76px;
    @media screen and (max-width: 75em) {    
        height: 320px;
        flex-direction: column;
        align-items: center;
    }
`
// const BackgroundImg = styled.img``

const HeaderContainer = styled.div`
    /* width: 100%; */
    text-align: center;
    align-items: center;
    margin: auto 80px;
    @media screen and (max-width: 75em) {    
        display: flex;
        margin-top:80px;
        flex-wrap: wrap;
        justify-content: center;
    }
    transition: all 0.4s ease-in-out;

`

const UnderHeader = styled.div`
    display:flex;
    height: fit-content;
    @media screen and (max-width: 75em) {    
        margin-left: 8px;
    }
`

const Button = styled.div`
    /* width: 100%; */
    text-align: center;
    align-items: center;
    margin: auto 80px;
    @media screen and (max-width: 75em) {    
        display: flex;
        margin-bottom: 100px;
    }
`


const ContentMiddle = () => {
    return (
        <MiddleContainer>
            <HeaderContainer>
                <HHeader color="white" isUnder="" size="45px">Your </HHeader>
                <UnderHeader>
                    <HHeader color="white" isUnder="" size="50px"> Next </HHeader>
                    <HHeader colorUnder= "pink" color="white" isUnder="true" size="50px">Holiday</HHeader>
                </UnderHeader>
            </HeaderContainer>
            <Button>
                <HButton size="big" type="white" colorText="pink">VIEW ALL PACKAGES</HButton>
            </Button>
        </MiddleContainer>
    );
}

export default ContentMiddle;
