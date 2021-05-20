import React from 'react'
import styled from "styled-components"
import mainBackground from '../../assets/imgs/mainBackground.jpg' 
const BackgroundImg=styled.section`
    background-image: url(${mainBackground});
    height:105vh;
    background-size: cover;
    background-repeat: no-repeat;
    overflow:hidden;
    background-position:center center;
`

function MainTravelBackground(props) {
    return (
        <BackgroundImg>

        </BackgroundImg>
    )
}


export default MainTravelBackground

