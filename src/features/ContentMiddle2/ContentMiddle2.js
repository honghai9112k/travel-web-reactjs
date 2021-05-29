import React from 'react';
import styled, {css} from 'styled-components'
import HHeader from '../../componets/HHeader/HHeader';
import { HButton } from '../../componets/HButton/HButton';
import Background1 from '../../assets/imgs/backgroundMiddle/left-parallax-5-filter.jpg' 
import Background2 from '../../assets/imgs/backgroundMiddle/right-parallax-6-filter.jpg' 

const BaseBackground= css`
    background-size: cover;
    background-repeat: no-repeat;
    overflow:hidden;
    background-position:center center;
    width: 100%;
    height: 100%;
    margin: auto ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:auto;
    text-align: center;
    align-items: center;
`

const MiddleContainer = styled.section`
    display: flex;
    width: 100%;
    height: 268px;
    margin-bottom: 76px;
    @media screen and (max-width: 75em) {    
        flex-direction: column;
        align-items: center;
        height: 536px;
    }
`

const MiddleLeft = styled.div`
    background-image: url(${Background1});
    ${BaseBackground}
`
const MiddleRight = styled.div`
    background-image: url(${Background2});
    ${BaseBackground}
`
const Text = styled.div`
    width: 100%;
    text-align: center;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Decs = styled.h3`
    color: #fff;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    font-weight: normal;
`

const Header =styled(HHeader)`
    width:auto !important;
`

const Button = styled.div`
    width: 100%;
    margin-top:30px ;
`


const ContentMiddle2 = () => {
    return (
        <MiddleContainer>
            <MiddleLeft>
                <Text>
                    <Decs>01. LAST MINUTE</Decs>
                    <Header color="white" isUnder="" size="36px" > Discover Cities </Header>
                </Text>
                <Button>
                    <HButton size="big" type="white" colorText="greenblue">DETAILS</HButton>
                </Button>
            </MiddleLeft>

            <MiddleRight>
                <Text>
                    <Decs>02. PROMOTIONS</Decs>
                    <Header color="white" isUnder="" size="36px"> Discover Nature </Header>
                </Text>
                <Button>
                    <HButton size="big" type="white" colorText="brower">DETAILS</HButton>
                </Button>
            </MiddleRight>

        </MiddleContainer>
    );
}

export default ContentMiddle2;
