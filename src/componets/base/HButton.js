import React, { useState } from 'react';
import { Link } from '@material-ui/core';
import styled from 'styled-components';


const colorData = [
  {id:'violet', color:'#ba71da'},
  {id:'white', color:'#fff'},
  {id:'greenblue', color:'#1bbc9b'},
  {id:'yellow', color:'#ffd205'},
  {id:'ping', color:'#f76570'},
]

const paddingData = [
  {size:'small', pd:'10px 3px'},
  {size:'normal', pd:'12px 14px'},
  {size:'big', pd:'14px 73px'},
]

export const HButton = styled(Link)`
    background-color: ${props => colorData.find((color,index) => color.id === props.type ).color  };
    color: ${props => props.type=='white'?'#000':'#fff' } !important;
    border-radius: 6px;
    margin:10px 0;
    height: 100%;
    min-width:100px;
    text-decoration: none !important;
    cursor: pointer;
    padding:  ${props => paddingData.find((padding,index) => padding.size === props.size ).pd  };
    font-weight: normal;
    border-radius: 39px;
    line-height: 14px;
    letter-spacing: 2px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    &:hover {
      opacity: 0.8;
    }
`