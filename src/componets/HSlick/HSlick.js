import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { css } from 'styled-components'
import Img1 from '../../assets/imgs/slick/package-3.jpg'
import Img2 from '../../assets/imgs/slick/parallax-4-1.jpg'
import Img3 from '../../assets/imgs/slick/parallax-4.jpg'
import './style.css'

const BaseRespon = css`
     @media screen and (max-width: 75em) and (min-width: 60em) {    
        width:929px;
        height: 410px;
    }
    @media screen and (max-width: 59.9375em) and (min-width: 48em) {    
        width:717px;
        height: 393px;
    }
    @media screen and (max-width: 47.9375em) and (min-width: 30em) {    
        width:429px;
        height: 231px;
    }
    @media screen and (max-width: 29.9375em) {    
        width:269px;
        height: 141px;
    }
    transition: all 0.2s ease-in-out;
`

const ImgContainer = styled.div`
    width: 750px ;
    height:410px;
    margin: auto ;
    display: inline-block;
    ${BaseRespon}
`

const Img = styled.img`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 410px;
    visibility: inherit;
    ${BaseRespon}
   
`

const HSlick = (props) => {
    // CustomHook     const {widthImg, heightImg } = props

    const ImgData = [
        { id: 1, src: `${Img1}` },
        { id: 2, src: `${Img2}` },
        { id: 3, src: `${Img3}` },
    ]

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };


    return (
        <ImgContainer>
            <Slider {...settings}>
                {ImgData.map((item, index) => {
                    return (
                        <Img src={item.src} key={index} />
                    )
                })}

            </Slider>
        </ImgContainer>
    );
}

export default HSlick;
