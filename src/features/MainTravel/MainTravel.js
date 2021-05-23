import React from 'react'
import styled,{css} from "styled-components"
import mainBackground from '../../assets/imgs/mainBackground.jpg' 
import { HSelect } from '../../componets/HSelect/HSelect'
import TypologiesContainer from './TypologiesContainer'
import useIsMobile from '../../core/useIsMobile'




const BackgroundImg=styled.section`
    background-image: url(${mainBackground});
    height: ${(props) => (props.isMobile ? '1408px' : '870px')};
    background-size: cover;
    background-repeat: no-repeat;
    overflow:hidden;
    background-position:center center;
    margin-top: -130px;
    font-family: 'Poppins', sans-serif;
    align-items: center;
    text-align: center;
    position: relative;
    flex-direction: column;
    display: flex;
    justify-content: center;
    transition: all 0.5s ease-ease-in;

`
const HeaderContainer= styled.div`
    margin-top: 90px ;
    z-index: 30;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const BaseHeader=css`
    color: #fff;
    text-align: center;
    font-size: 56px;
    line-height: 60px;
    letter-spacing: 1px;
    font-weight: bold;
`
const HeaderText = styled.h1`
    ${BaseHeader}
`
const HolidayText = styled.h1 `
    ${BaseHeader}
    position: relative;
    margin-left: 16px;
    &:before {
        content: "";
        right: 8px;
        width: 218px;
        height: 6px;
        background-color: #ba71da;
        top: 48px;
        z-index: -1;
        position: absolute;
        border-radius: 3px;
        box-shadow: 0 -1px 2px #ba71da;
    }
`
const ContentText = styled.h6`
    font-size: 22px;
    color: #fff;
    text-align: center;
    line-height: 20px;
    letter-spacing: 4px;
    font-weight: normal;
    margin: 40px 0 65px;
`
const SearchPlace = styled(HSelect)`
    
`
const Typologies = styled.div`
    margin-top: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
`
function MainTravel(props) {
    const { isMobile } = useIsMobile();

    return (
        <>
        <BackgroundImg isMobile={isMobile}>
            <HeaderContainer>
                <HeaderText>Search your next </HeaderText>
                <HolidayText>Holiday</HolidayText>
            </HeaderContainer>
            <ContentText>CHECK OUR BEST PROMOTIONS</ContentText>
            <SearchPlace/>
            <Typologies>
                <TypologiesContainer></TypologiesContainer>
            </Typologies>
        </BackgroundImg>
        </>
    )
}


export default MainTravel

