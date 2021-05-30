import { Link } from '@material-ui/core';
import styled from 'styled-components';
import { ColorData } from '../../data/ColorData'

const paddingData = [
  { size: 'tiny', pd: '3px 20px' },
  { size: 'small', pd: '8px 16px' },
  { size: 'normal', pd: '8px 16px' },
  { size: 'big', pd: '14px 73px' },
]



export const HButton = styled(Link)`
    background-color: ${props => ColorData.find((item, index) => item.id === props.type).color};
    color: ${props => ColorData.find((item, index) => item.id === props.colorText).color} !important;
    border-radius: 6px;
    margin: ${props => props.size === "tiny" ? "0" : "10px 0"};
    /* height: 100%; */
    min-width:100px;
    text-decoration: none !important;
    cursor: pointer;
    padding:  ${props => paddingData.find((padding, index) => padding.size === props.size).pd};
    font-weight: normal;
    border-radius: 39px;
    line-height: 14px;
    letter-spacing: ${props => props.size === "tiny" ? "0" : "2px"};
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    &:hover {
      opacity: 0.8;
    }
    text-align: center;
`
{/* <HButton size="tiny" type="white" colorText="white">Detail</HButton> */ }