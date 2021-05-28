import React from 'react';
import  HCardPlace  from '../../componets/HCard/HCardPlace';
import styled from 'styled-components';
import HHeader from '../../componets/HHeader/HHeader';
import logoBerlin from '../../assets/imgs/logoplaces/berlin.png'
import logoHongKong from '../../assets/imgs/logoplaces/hongkong.png'
import logoSan from '../../assets/imgs/logoplaces/sanfrancisco.png'
import Berlin from '../../assets/imgs/places/Berlin.jpg' 
import HongKong from '../../assets/imgs/places/hongkong.jpg' 
import sanfrancisco from '../../assets/imgs/places/sanfrancisco.jpg' 


const PackagesContainer = styled.div`
    height: 862px;
    width: 1200px;
    margin: auto;
    font-family: 'Poppins', sans-serif;
    max-width: 100%;
`
const Header = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`
const Decs = styled.h3`
    color: #9a9a9a;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    font-weight: normal;
    margin: 58px 0 20px 0;

`

const PackagesRule = styled.section`
    display: flex;
    background-color: #fff;
    float: left;
    justify-content: center;
    flex-wrap: wrap;
`

 const Packages = () => {
    return (
        <PackagesContainer>
            <Decs>PROMOTIONS</Decs>
            <Header>
                <HHeader color="black" isUnder="" size="36px">OUR</HHeader>
                <HHeader colorUnder= "greenblue" color="black" isUnder="true" size="36px">PACKAGES</HHeader>
            </Header>
            <PackagesRule>
                <HCardPlace 
                    linkImg= {Berlin} 
                    linkIcon={logoBerlin} 
                    colorMain="yellow" 
                    costAfterSale="700 $"
                    size="normal"
                    continent="Europe"
                >Berlin</HCardPlace>
                <HCardPlace 
                    linkImg= {HongKong} 
                    linkIcon={logoHongKong}
                    colorMain="pink" 
                    isSale="true"
                    costAfterSale="500 $"
                    preCost="1000"
                    size="normal"
                    continent="Asia"
                >Hong Kong</HCardPlace>
                <HCardPlace 
                    linkImg= {sanfrancisco} 
                    linkIcon={logoSan}
                    colorMain="violet"
                    costAfterSale="400 $"
                    size="normal"
                    continent="United States"
                >San Francisco</HCardPlace>

            </PackagesRule>
            
        </PackagesContainer>
    );
};
export default Packages;


 
