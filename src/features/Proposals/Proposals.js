import React from 'react';
import styled from 'styled-components';
import HHeader from '../../componets/HHeader/HHeader';
import HPackage from '../../componets/HPackage/HPackage';


const ProposalContainner = styled.section`
    width: 1200px;
    margin: auto;
    font-family: 'Poppins', sans-serif;
    
    padding-bottom: 44px;
    @media screen and (max-width: 75em)  {    
        max-width: 100%;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

`

const Decs = styled.h3`
    color: #9a9a9a;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    font-weight: normal;
    margin: 58px 0 0 0;
`
const ProposalsContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
    width: 100%;
    @media screen and (max-width: 75em)  {    
        flex-direction: column ;
    }
`


const Proposals = () => {
    return (
        <ProposalContainner>
                <Decs>OUT PROPOSALS</Decs>
            <Header>
                <HHeader color="black" size="36px">OUR</HHeader>
                <HHeader colorUnder= "greenblue" color="black" isUnder="true" size="36px">DESTINATIONS</HHeader>
            </Header>
            <ProposalsContent>
                <HPackage type= "main" styled={{marginBottom:"30px"}}></HPackage>
                <HPackage type= "main" styled={{marginBottom:"30px"}}></HPackage>
                <HPackage type= "main" styled={{marginBottom:"30px"}}></HPackage>
                <HPackage type= "main" styled={{marginBottom:"30px"}}></HPackage>
                <HPackage type= "main" styled={{marginBottom:"30px"}}></HPackage>
                <HPackage type= "main" styled={{marginBottom:"30px"}}></HPackage>
                

            </ProposalsContent>
        </ProposalContainner>
    );
}

export default Proposals;
