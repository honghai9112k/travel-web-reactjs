import React from 'react'
import styled, {css} from 'styled-components'
import {ColorData} from '../../data/ColorData'


const BaseHeader=css`
    color: ${props => props.color==='white' ? '#fff' : '#555555' };
    text-align: center;
    font-size: ${props => props.size};
    line-height: 60px;
    letter-spacing: 1px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    width: min-content;
`
const UnderHeader = styled.h1 `
    ${BaseHeader}
    position: relative;
    margin-left: 10px;
    z-index: 10;
    &:after {
        content: "";
        right: 0px;
        width: 206px;
        height: 4px;
        top: 40px;
        z-index: -1;
        position: absolute;
        border-radius: 3px;
        background-color: ${props => ColorData.find((color,index) => color.id === props.colorUnder ).color  };
    }

`
const HeaderText = styled.h1`
    ${BaseHeader}
`

const HHeader=(props)=> {
    const {colorUnder, children, color, isUnder, size } = props

    return (  
        <>
            {isUnder ?
                <UnderHeader colorUnder={colorUnder} color={color} size={size}>{children}</UnderHeader>
                :
                <HeaderText color={color} size={size}>{children}</HeaderText>
            }
        </>
            
    )
}
export default HHeader
    // ex:
    // <HHeader color="black" isUnder="">OUR</HHeader>
    // <HHeader colorUnder= "greenblue" color="black" isUnder="true">PACKAGES</HHeader>
