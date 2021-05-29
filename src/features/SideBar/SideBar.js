import React from 'react';
import styled from 'styled-components';
import HCardPlace from '../../componets/HCard/HCardPlace'
import Berlin from '../../assets/imgs/places/Berlin.jpg' 
import HongKong from '../../assets/imgs/places/hongkong.jpg' 
import Sanfrancisco from '../../assets/imgs/places/sanfrancisco.jpg' 
import Amsterdam from '../../assets/imgs/places/amsterdam.jpg' 
import Tuscany from '../../assets/imgs/places/tuscany.jpg' 
import Phuket from '../../assets/imgs/places/phuket.jpg' 

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {VscMenu}  from 'react-icons/vsc';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './style.css'
import useIsMobile from '../../core/useIsMobile'
import HHeader from '../../componets/HHeader/HHeader';
import {menuData} from '../../data/MenuData';
import {AiFillCaretDown} from 'react-icons/ai'
import HPackage from '../../componets/HPackage/HPackage';


const SideBarContainer = styled.div`
    background-color: rgb(255, 255, 255);
    width:  ${props => props.isMobile ? "300px" : "350px"};
    position: fixed;
    z-index: 1000;
    top: 0;
    height: 100vh;
    overflow-y: scroll;
    transition: right 1s ease-in-out, opacity 1s ease-in-out ;
`
const MenuBarIcon = styled(VscMenu)`
    position: relative;
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    color: #fff;
    &:hover {
        opacity: 0.8 ;
    }
    
    /* margin: 4px 64px 5px 0; */
    @media screen and (max-width: 1200px) {
        margin: 0 0 -20px 75px;
    }
    transition: margin 0.2s;
    
`

const CloseIcon = styled(AiOutlineCloseCircle)`
    top : ${props => props.isMobile ? "15px": "10px"};
    right: ${props => props.isMobile ? "15px": "10px"};
    margin: auto;
    cursor: pointer;
    font-size: ${props => props.isMobile ? "23px": "30px"};
    fill: ${props => props.isMobile ? "#fff": "#a3a3a3"};
    position: absolute;
    &:hover {
        fill: #393939;;
    }
`
const SideBarContent = styled.div`
    background-color: ${props => props.isMobile ? "rgb(85, 85, 85)": "#fff"};
`
const Header = styled.div`
    p {
        color: #9a9a9a;
        text-align: center;
        font-size: 14px;
        letter-spacing: 2px;
        font-weight: normal;
        margin:0 0 -15px 0;
    }
    margin-top: 26px ;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Packages = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:0 0 40px 22px;
`

//SideBar Mobile

const ChildrenList =styled.ul`
    margin-left:20px ;
    /* position: absolute; */
`
const ItemParent = styled.li`
    /* position: relative; */
    margin-left:20px ;
    list-style-type: none;
`
const LinkItem = styled.a`
    cursor: pointer;
    margin-left:20px ;
    font-size: 14px;
    line-height: 35px;
    &:hover {
        opacity: 0.8;
    }
`
const RootItem = styled.li`
    font-size: 24px;
    line-height: 24px;
    color: #fff;
    font-weight: bold;
    list-style-type: none;
    letter-spacing: 0px;
    margin: 0 0 30px 42px;
    &:last-child {
        margin: 0 0 0 42px;
    }
    &:first-child {
        padding: 40px 0 0 0;
    }
`
const MainList = styled.ul`
    font-size: 14px;
    line-height: 35px;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 2px;
    
`
const ArrowDownIcon = styled(AiFillCaretDown)`
    height: 15px;
    width: 15px;
    fill:currentColor;

`
// Đệ quy

const RecursiveNav = ({data, index}) => {
    if(data===undefined) return null

    if(index != 0) {
        return (
            <>
                <ChildrenList>
                    {/* Tạo ra thẻ ul*/}
                    {data.map((item, index) => {

                        return (
                            <div key= {index}>
                                {item.type === "link" ? <LinkItem>{item.title}</LinkItem> :
                                    <ItemParent>
                                        {item.title}
                                        <ArrowDownIcon/>
                                        <RecursiveNav data={item.children} index={index + 1} />
                                    </ItemParent>}
                            </div>
                        )
                    })}
                </ChildrenList>
            </>)
    }
    if(index==0) {
        return (
            <>
                    {data.map((item, index) => {

                        return (
                            <div key= {index}>
                                {item.type === "link" ? <LinkItem>{item.title}</LinkItem> :
                                    <ItemParent>
                                        {item.title}
                                        <ArrowDownIcon/>
                                        <RecursiveNav data={item.children} index={index + 1} />
                                    </ItemParent>}
                            </div>
                        )
                    })}
            </>)
    }
}

const rootItemData = [
    {id:"home", content:"HOME" ,hasChildren: ""},
    {id:"packages", content:"PACKAGES", hasChildren: "yes" },
    {id:"shop", content:"SHOP", hasChildren: "yes" },
    {id:"aboutUs", content:"ABOUT US", hasChildren: "yes" },
    {id:"pages", content:"PAGES", hasChildren: "yes" },
    {id:"news", content:"NEWS", hasChildren: "yes" },
    {id:"contact", content:"CONTACT", hasChildren: "yes" },
]

//return
const SideBar = () => {
    const { isMobile } = useIsMobile();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
        };

    const handleClickAway = () => {
        setOpen(false);
    };


    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div>
                <MenuBarIcon onClick={handleClick}/> 
        
                <SideBarContainer className= {`${open ? "nav open" : "nav"} `} isMobile={isMobile}>

                    <CloseIcon onClick={handleClickAway} isMobile={isMobile}></CloseIcon>

                {/* respon */}
                {isMobile 
                ? 
                    <SideBarContent isMobile={isMobile}>
                        {rootItemData.map((item,index)=>{
                            return (
                                <RootItem key={index}>
                                    {item.content}
                                    {item.hasChildren && 
                                        <MainList >
                                            <RecursiveNav data={menuData[item.id]} index={0} />
                                        </MainList>
                                    }

                                </RootItem>
                            )
                        })}
                    </SideBarContent>
                :
                    <SideBarContent  isMobile={isMobile}>
                        <Header>
                            <p>BEST</p>
                            <HHeader colorUnder= "yellow" color="black" isUnder="true" size="25px">PACKAGES</HHeader>
                        </Header>

                        <Packages>
                            <HCardPlace 
                                linkImg= {Berlin} 
                                colorMain="yellow" 
                                costAfterSale="700 $"
                                size="small"
                                continent="Europe"
                            >Berlin</HCardPlace>
                            <HCardPlace 
                                linkImg= {HongKong} 
                                colorMain="pink" 
                                isSale="true"
                                costAfterSale="500 $"
                                preCost="1000"
                                size="small"
                                continent="Asia"
                            >Hong Kong</HCardPlace>
                            <HCardPlace 
                                linkImg= {Sanfrancisco} 
                                colorMain="violet"
                                costAfterSale="400 $"
                                size="small"
                                continent="United States"
                            >San Francisco</HCardPlace>
                        </Packages>

                            <HPackage type =""></HPackage>

                        <Header>
                            <p>LAST</p>
                            <HHeader colorUnder= "brower" color="black" isUnder="true" size="25px">MINUTES</HHeader>
                        </Header>
                        <Packages>
                            <HCardPlace 
                                linkImg= {Tuscany} 
                                colorMain="greenblue" 
                                costAfterSale="730 $"
                                size="small"
                                continent="Italy"
                            >Berlin</HCardPlace>
                            <HCardPlace 
                                linkImg= {Amsterdam} 
                                colorMain="brower" 
                                isSale="true"
                                costAfterSale="1500 $"
                                size="small"
                                continent="Netherlands"
                            >Hong Kong</HCardPlace>
                            <HCardPlace 
                                linkImg= {Phuket} 
                                colorMain="blue"
                                costAfterSale="1200 $"
                                size="small"
                                continent="Thailandia"
                            >San Francisco</HCardPlace>
                        </Packages>
                            
                    </SideBarContent>
                }
                </SideBarContainer>
                
            </div>    
        </ClickAwayListener>
    );
}

export default SideBar;
