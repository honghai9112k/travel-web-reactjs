import React from 'react';
import { HTypologiesItem } from '../../componets/HTypologiesItem/HTypologiesItem';
import styled from 'styled-components';
import Typo1 from '../../assets/imgs/typologies/t-relax.png'
import Typo2 from '../../assets/imgs/typologies/t-cultural.png'
import Typo3 from '../../assets/imgs/typologies/t-sport.png'
import Typo4 from '../../assets/imgs/typologies/t-history.png'



const TopoContainer = styled.div`
    display: flex;
    width: 30%;
    text-align: center;
    justify-content: center;
    @media screen and (max-width: 1078px) {
        flex-direction: column;
        text-align: center;
        
        &:only-child {
            width: 90%;
            margin: 12px 0;
        }
    }
    transition: all 0.3s ease-in-out;
`
const TopoItem = styled(HTypologiesItem)`
`
const TypologiesContainer = () => {
    return (
        <TopoContainer>    
            <TopoItem link={Typo1} name='RELAX'></TopoItem>
            <TopoItem link={Typo2} name='CULTURAL'></TopoItem>
            <TopoItem link={Typo3} name='SPORT'></TopoItem>
            <TopoItem link={Typo4} name='HISTORY'></TopoItem>
        </TopoContainer>
    );
};

export default TypologiesContainer
 
