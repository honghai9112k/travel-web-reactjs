import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {menuData} from '../../data/MenuData';
import { HButton } from '../../componets/HButton/HButton';
import {RiArrowRightSFill} from 'react-icons/ri'
import SideBar from '../SideBar/SideBar';


const Logo = styled(Link)`
    /* margin: 0 0 0 70px; */
`;


const NavBarContainer = styled.section`
    display:flex;
    position:relative;
    width:100%;
    background-color:rgba(0,0,0,0.3);
    align-items:center;
    padding: 30px 0px;
    z-index: 1000;
    justify-content: space-evenly;
    @media screen and (max-width: 75em) {
        display: grid;
    }
    
`;


const ListContainer = styled.ul`
    display:flex;
    list-style-type:none;
    align-items:center;
    /* margin: 0 0 0 80px; */
    min-width: 884px;
    padding-inline-start:0px;
    @media screen and (max-width: 75em) {
        display: none !important;
    }

`;

//Base Css
const BaseItem=css`
    position:relative;
    padding:18px;
    cursor:pointer;
    display:flex;
    align-items:center;
    color:#a3a3a3;
    font-weight:500;
`

const BaseList=css`
    position:absolute;
    background-color:#fff;
    min-width: 180px;
    list-style-type:none;
    box-shadow:1px 1px 2px #f1f1f1 ;
    z-index: 100;
    &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    transition:all 0.1s ease-in-out;

    display: none;
`


const ChildrenList = styled.ul`
    ${BaseList}
    left:calc(100% + 2px);
    top:0;
    
`

const MainList = styled.ul`
    ${BaseList}

    padding-inline-start:0px;
    margin-top:15px;
    
    &:before{
        content:"";
        position: absolute;
        top: -10px;
        width: 0;
        height: 0;
        border-left: 13px solid transparent;
        border-right: 13px solid transparent;
        border-bottom: 15px solid #fff;
    };
    &:after{
        content:"";
        position: absolute;
        top: -15px;
        width: 90px;
        height: 16px;
        background-color: transparent;       
    };

`

const ItemParent = styled.li`
    ${BaseItem}
    justify-content:space-between;
    background-color:#fff;
    padding: 14px;
    border-radius: 4px;

    &:not(:last-child){
        border-bottom: 1px solid #f1f1f1;
    };

    &:hover{
        background-color: #f9f9f9;

        &>${ChildrenList}{
            display: block;
        }
    } 
        
    /* transition:all 0.1s ease-in-out; */

`

const LinkItem = styled(Link)`
    ${BaseItem}
    font-size: 15px;
    line-height: 14px;
    letter-spacing: 2px;
    text-decoration: none;

    &:not(:last-child){
        border-bottom: 1px solid #f1f1f1
    };
    &:hover{
        border-radius: 4px;
        background-color: #f9f9f9;
    };
`


const RootItem = styled.li`
    padding:5px 20px;
    font-weight:400;
    cursor:pointer;
    font-size:15px;
    position: relative;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
    &:hover {
        color: #ccc;
    }
    &:hover ${MainList}{
        display:flex;
        flex-direction:column;
        
    } ;

`
const LinkRootItem = styled(Link)`
    font-weight:400;
    cursor:pointer;
    font-size:15px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
    &:hover {
        color: #ccc;
    }
    text-decoration: none;
`

const ArrowRightIcon = styled(RiArrowRightSFill)`
    height: 16px;
    width: 16px;
    fill:currentColor;

`
// H??m ????? quy t???o list menu. 
// ---Tr?????ng h???p 1: index= 0 -> th???c hi???n l???nh esle 
// + map qua list data base c???a 1 danh m???c vd: home
// + G???p type== 'link' th?? return th??? <Link/> n???u g???p type== 'parent'
// + tr??? v??? index = index + 1 ????? ch???y tr?????ng h???p 2
// ---Tr?????ng h???p 2: g???p type = 'parent' :
// + T???o th??? ul ch???a c??c item c???a parent
// + sau ???? x??t t????ng t??? tr?????ng h???p 1
 
const RecursiveNav = ({ data, index }) => {
    if (data === undefined)
        return null

    if (index !== 0) {
        return (
            <>
                <ChildrenList>
                    {/* T???o ra th??? ul*/}
                    {data.map((item, index) => {

                        return (
                            <div key= {index}>
                                {item.type === "link" ? <LinkItem to = {item.link} >{item.title}</LinkItem> :
                                    <ItemParent>
                                        {item.title}
                                        <ArrowRightIcon/>
                                        <RecursiveNav data={item.children} index={index + 1} />
                                    </ItemParent>}
                            </div>
                        )
                    })}
                </ChildrenList>
            </>)
    }
    else {
        return (
            <>
                {data.map((item, index) => {
                    return (
                        <div key= {index}>
                            {item.type === "link" ? <LinkItem to = {item.link}>{item.title}</LinkItem> :
                                <ItemParent>
                                    {item.title}
                                    <ArrowRightIcon/>
                                    <RecursiveNav data={item.children} index={index + 1} />
                                    {/* N???u g???p type=='parent' -> G???i l???i RecursiveNav -> index != 0 -> v??o tr?????ng h???p tr??n*/}
                                </ItemParent>}
                        </div>
                    )

                })}
            </>
        )
    }

}

// Th??? t???: ListContainer= ul ---> RootItem= li (L?? c??c danh m???c ban ?????u c???p 0) ---> MainList = ul (ch???a c??c item c???p 1)
// ---> trong MainList g???i h??m ????? quy ---> 
// TH1: map qua n???u type == 'link' th?? ---> LinkItem = <Link></Link>
// TH2: map qua n???u type == 'parent' th?? ---> ItemParent = ul (ch???a c??c item c???p 2)---> map ti???p... n???u ch???a ti???p
// type== parent th?? s??? c?? c???p 3...(????? quy). 

const rootItemData = [
    {id:"home", content:"HOME" ,hasChildren: "", link:"/"},
    {id:"packages", content:"PACKAGES", hasChildren: "yes", link:"/" },
    {id:"shop", content:"SHOP", hasChildren: "yes", link:"/" },
    {id:"aboutUs", content:"ABOUT US", hasChildren: "yes", link:"/" },
    {id:"pages", content:"PAGES", hasChildren: "yes", link:"/" },
    {id:"news", content:"NEWS", hasChildren: "yes", link:"/" },
    {id:"contact", content:"CONTACT", hasChildren: "yes", link:"/" },
]

export const NavBar = (props) => {

    // const { currentTab } = props
    // const [selectedTab, setSelectedTab] = useState(currentTab)

    // const handleOver = selectTab => event => {
    //     setSelectedTab(selectTab);
    // }

    // const handleMouseOut = (event) => {
    //     setSelectedTab(currentTab);
    // }
    

    return (
        <>
        
         <NavBarContainer>
                    <Logo to="/" ><img style={{height:"38px", width: "160px"}} src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/logo.png" /></Logo>

                    <ListContainer>
                        {rootItemData.map((item,index)=>{
                            return (
                                <RootItem 
                                    // active={currentTab === item.id }
                                    // onMouseOver={handleOver(item.id)}
                                    // onMouseLeave={handleMouseOut}
                                    key={index}
                                >
                                    <LinkRootItem to = {item.link}>{item.content}</LinkRootItem>
                                    
                                    {item.hasChildren && 
                                        <MainList >
                                            <RecursiveNav data={menuData[item.id]} index={0} />
                                        </MainList>
                                    }

                                </RootItem>
                            )
                        })}

                        <HButton size="normal" type="violet" style={{marginRight: "24px", padding:"11px 15px"}} colorText="white">BOOK NOW</HButton>
                    
                    </ListContainer> 

                    <SideBar></SideBar>   
                            
              </NavBarContainer>  
        
        </>

    )



}