import React from 'react';
import styled from 'styled-components';
import useIsScroll from '../../core/hooks/useIsScroll'
import { AiOutlineArrowUp } from 'react-icons/ai'
const Scroll = styled.div`
    position: fixed ;
    z-index: 100000;
    background-color: #141e2f;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    bottom:20px;
    right:20px;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
`

const Icon = styled(AiOutlineArrowUp)`
    margin: 13px 13.5px  ;
    font-size: 18px ;
    width: 18px ;
    height: 18px ;
    fill: rgb(163 177 201) ; 
`

const ScrollToTop = () => {
    const { isScroll } = useIsScroll(600)

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    return (
        <>
            {isScroll && 
                <Scroll onClick={handleClick}>
                    <Icon/>
                </Scroll>
            }
        </>

    );
}

export default ScrollToTop;
