import React from 'react';
import styled from 'styled-components';


const ItemComponent = styled.a`
    background-color: rgba(0,0,0,0.21) ;
    padding: 8px 20px;
    margin: 6px 16px;
    text-decoration: none;

`
const ImgItem = styled.img`
   height: 50px;
    width: 50px;
    margin: 10px 12px 3px;
`
const NameItem = styled.h6`
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 20px;
    letter-spacing: 4px;
    font-weight: 500;
    margin-left: 6px;
` 

export const HTypologiesItem = (props) => {
    const {link,name} =props
    return (
        <ItemComponent href="">
            <ImgItem src={link}></ImgItem>
            <NameItem>{name}</NameItem>
        </ItemComponent>
    );
};

