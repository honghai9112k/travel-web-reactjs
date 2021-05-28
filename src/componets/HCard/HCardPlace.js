import React from 'react';
import styled,{css} from "styled-components"
import {HButton} from "../HButton/HButton"
import {MdPlace} from 'react-icons/md'
import {ColorData} from '../../data/ColorData'



const BaseContainer =css`
    background-color: #fff;
    float: left;
    font-family: 'Poppins', sans-serif;
 `
const CardContainer = styled.div`
    ${BaseContainer}
    margin:0 15px 32px;
    border: 1px solid #f1f1f1;
    max-width: 368px;
`

const CardImg = styled.div`
    height:231px ;
    width:100%;
    position: relative;
`

const Img =styled.img`
    height:231px ;
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    overflow:hidden;
    background-position:center center;
    
`

const Logo = styled.a`
        position: absolute;
        border-radius: 100%;
        padding: 12.6px 12px 5px;
        right: 20px;
        bottom: -25px;
        text-decoration: none;
    img {
        width: 26px;
        height:26px;
        color: #9a9a9a;
        border: 0;
        top: 12px;
    }
`
//Card content

const CardContent = styled.div`
    margin:30px;
`
// Header content
const HeaderContainer = styled.div`
    width: 100%;
`
const HeaderName =styled.h3`
    color: #555555;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
`
const LinkPlace =styled.a`
    text-decoration: none;
    display: flex;
    width: 100%;
    padding-top: 8px;
    margin: 0 0 20px 0;
`
const HeaderPlace =styled.h5`
    color: #9a9a9a;
    font-weight: normal;
    letter-spacing: 2px;
    font-size: 15px;
    line-height: 15px;
`
const IconPlace = styled(MdPlace)`
    fill: #9a9a9a;
`
// Content
const Content = styled.div`
    position: relative;
    
    &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background-color: #f1f1f1;
        top: 0;
    }
    
`

const TypoAndCost = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 10px;
    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background-color: #f1f1f1;
        bottom: 0;
    }
    text-align: center;
    align-items: center;
`

const TypoContainer =styled.div`
    
`
const Text = styled.div`
    display: flex;
    margin:15px 0 10px 0;
    h6 {
        color: #555555;
        font-weight: normal;
        letter-spacing: 3px;
        font-size: 13px;
        line-height: 16px;
    };
    span {
        border-radius: 30px;
        line-height: 14px;
        font-size: 10px;
        padding: 2px 8px;
        color: #fff !important;
        letter-spacing: 1px;
        padding: 1px 8px;
        margin: 16px 0 0px -24px;
   }

`
// Cost
const Cost =styled.span`
    color: #555555;
    font-weight: normal;
    font-size: 25px;
    line-height: 25px;
`
const CostSale = styled.span`
    color: #9a9a9a;
    text-decoration: line-through;
    font-size: 20px;
    line-height: 20px;
    margin-right: 4px;
    font-weight: normal;
    letter-spacing: 1px;
`

const Desc =styled.p`
    color: #9a9a9a;
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 1px;
    margin: 15px 0 25px 2px;
`

// Card small
const CardContainerSmall = styled.div`
    ${BaseContainer}
    width: 262px;
    height: 100px;
    display: flex;
    margin: 15px;
`
const CardImgSmall = styled.div`
    height:100px ;
    width:100px;

`
const ImgSmall =styled.img`
    height:100px ;
    width:100px;
    background-size: cover;
    background-repeat: no-repeat;
    overflow:hidden;
    background-position:center center;   
`
const CardContentSmall = styled.div`
    margin-left: 32px;
`
const HeaderNameSmall =styled.h3`
    color: #555555;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    margin-top: 5px;
`
// export
 const HCardPlace= (props) => {
    const {
        linkImg,
        linkIcon, 
        colorMain, 
        preCost,
        costAfterSale,
        size,
        children,
        continent    
    } = props

    const colorCard = ColorData.find((item, index) => colorMain === item.id);
    
{/* <HCardPlace 
    linkImg= {HongKong} 
    linkIcon={logoHongKong}
    colorMain="pink" 
    isSale="true"
    costAfterSale="500 $"
    preCost="1000"
    size="normal"
>Hong Kong</HCardPlace> */}
  return (
  <>
      { props.size === "small" ?
            <CardContainerSmall>    
                <CardImgSmall>
                    <ImgSmall src={linkImg} ></ImgSmall>
                </CardImgSmall>

                <CardContentSmall>
                    <HeaderContainer>
                        <HeaderNameSmall>{children}</HeaderNameSmall>
                        <LinkPlace href="/">
                            <IconPlace></IconPlace>
                            <HeaderPlace>{continent}</HeaderPlace>
                        </LinkPlace>
                        <HButton size="tiny" type={colorMain} style={{background: `linear-gradient(to right, ${colorCard.color} 0%, ${colorCard.colorLinear} 100%)`}}>FROM {costAfterSale}</HButton>
                    </HeaderContainer>
                </CardContentSmall>
            </CardContainerSmall>
    :
    <CardContainer>    
        <CardImg>
            <Img src={linkImg} ></Img>
            <Logo href='/' 
                style= {{background: `linear-gradient(to right, ${colorCard.color} 0%, ${colorCard.colorLinear} 100%)` }}
            >
                <img src={linkIcon} ></img>
            </Logo>
        </CardImg>

        <CardContent>
            <HeaderContainer>
                <HeaderName>{children}</HeaderName>
                <LinkPlace href="/">
                    <IconPlace></IconPlace>
                    <HeaderPlace>Europe</HeaderPlace>
                </LinkPlace>
            </HeaderContainer>
            <Content>
                <TypoAndCost>
                    <TypoContainer>
                        <Text>
                            <h6 style={{textAlign:'left'}}>CULTURAL<br/>RELAX </h6>
                            <span style={{backgroundColor:colorCard.color }}>+ 1</span>
                        </Text>
                    </TypoContainer>
                    <Cost>
                        {preCost && <CostSale > {preCost} </CostSale>}
                        {costAfterSale}    
                    </Cost>
                </TypoAndCost>  
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.</Desc>
            </Content>
            <HButton size="small" type={colorMain} style={{marginRight: "24px"}}>DETAILS</HButton>
        </CardContent>

    </CardContainer>
    }
 </>   
  );
}
export default HCardPlace