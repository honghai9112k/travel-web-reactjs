import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {menuData} from '../../data/MenuData';
import { HButton } from '../base/HButton';
import {VscMenu}  from 'react-icons/vsc';
import {RiArrowRightSFill} from 'react-icons/ri'
import './NavBar.css';


const Logo = styled(Link)`

`;

const NavBarContainer = styled.section`
    display:flex;
    position:fixed;
    width:100%;
    background-color:rgba(0,0,0,0.3);
    align-items:center;
    padding: 30px 0px;
    z-index: 1000;
    justify-content: space-around;
    @media screen and (max-width: 1078px) {
        display: grid;
    }
`;


const ListContainer = styled.ul`
    display:flex;
    list-style-type:none;
    align-items:center;
    margin: 0 0 0 -50px;
    padding-inline-start:0px;
    @media screen and (max-width: 1078px) {
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
    box-shadow:0px 2px 5px #f1f1f1 ;
    transform: rotateX(-90deg);
    transition:all 0.2s ease-in-out;
    &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    z-index: 100;

`


const ChildrenList = styled.ul`
    ${BaseList}
    left:calc(100% + 2px);
    /* padding:10px; */
    top:0;
    
`

const MainList = styled.ul`
    ${BaseList}
    display:flex;
    flex-direction:column;
    padding-inline-start:0px;
    /* padding:10px; */
    margin-top:15px;
    
    /* overflow: hidden; */
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
    transition:all 0.3s;
    padding: 14px;
    &:not(:last-child){
        border-bottom: 1px solid #f1f1f1;
    };

    &:hover{
        background-color: #f9f9f9;
        transform: rotateX(0deg);

        &>${ChildrenList}{
            transform: rotateX(0);
        }
        border-radius: 4px;

    } 

`

const LinkItem = styled.a`
    ${BaseItem}
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;

    &:not(:last-child){
        border-bottom: 1px red;
    };
    &:hover{
        border-radius: 4px;
        background-color: #f9f9f9;
        transform: rotateX(0deg);
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
    
    &:hover ${MainList}{
        transform: rotateX(0);
    } ;

`
const MenuBarIcon = styled(VscMenu)`
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    transform: translate(-50%, 25%);
    color: #fff;
    &:hover {
        opacity: 0.8 ;
    }
    margin: -14px -4px 8px;
    @media screen and (max-width: 1078px) {
        margin: -6px 0 0 83px;
    }

`
const ArrowRightIcon = styled(RiArrowRightSFill)`
    height: 16px;
    width: 16px;
    fill:currentColor;
`
// Hàm đệ quy tạo list menu. 
// ---Trường hợp 1: index= 0 -> thực hiện lệnh esle 
// + map qua list data base của 1 danh mục vd: home
// + Gặp type== 'link' thì return thẻ <Link/> nếu gặp type== 'parent'
// + trả về index = index + 1 để chạy trường hợp 2
// ---Trường hợp 2: gặp type = 'parent' :
// + Tạo thẻ ul chứa các item của parent
// + sau đó xét tương tự trường hợp 1
 
const RecursiveNav = ({ data, index }) => {
    if (data === undefined)
        return null

    if (index !== 0) {
        return (
            <>
                <ChildrenList>
                    {/* Tạo ra thẻ ul*/}
                    {data.map((item, index) => {

                        return (
                            <>
                                {item.type === "link" ? <LinkItem>{item.title}</LinkItem> :
                                    <ItemParent>
                                        {item.title}
                                        <ArrowRightIcon/>
                                        <RecursiveNav data={item.children} index={index + 1} />
                                    </ItemParent>}
                            </>
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
                        <>
                            {item.type === "link" ? <LinkItem>{item.title}</LinkItem> :
                                <ItemParent>
                                    {item.title}
                                    <ArrowRightIcon/>
                                    <RecursiveNav data={item.children} index={index + 1} />
                                    {/* Nếu gặp type=='parent' -> Gọi lại RecursiveNav -> index != 0 -> vào trường hợp trên*/}
                                </ItemParent>}
                        </>
                    )

                })}
            </>
        )
    }

}

// Thứ tự: ListContainer= ul ---> RootItem= li (Là các danh mục ban đầu cấp 0) ---> MainList = ul (chứa các item cấp 1)
// ---> trong MainList gọi hàm đệ quy ---> 
// TH1: map qua nếu type == 'link' thì ---> LinkItem = <Link></Link>
// TH2: map qua nếu type == 'parent' thì ---> ItemParent = ul (chứa các item cấp 2)---> map tiếp... nếu chứa tiếp
// type== parent thì sẽ có cấp 3...(đệ quy). 


export const NavBar = (props) => {

    const { currentTab } = props
    const [selectedTab, setSelectedTab] = useState(currentTab)

    const handleOver = selectTab => event => {
        setSelectedTab(selectTab);
    }

    const handleMouseOut = (event) => {
        setSelectedTab(currentTab);
    }


    return (
        <>

         <NavBarContainer>
                    <Logo to="/" ><img style={{height:"38px", width: "160px"}} src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/logo.png" /></Logo>

                    <ListContainer>

                        <RootItem 
                            active={currentTab === "home"} 
                            onClick={handleOver("home")}
                            onMouseOver={handleOver(0)}
                        >
                            HOME
                        </RootItem>

                        <RootItem 
                            active={currentTab === "packages"}
                            onMouseOver={handleOver("packages")}
                            onMouseLeave={handleMouseOut}
                        >
                            PACKAGES
                            <MainList className={selectedTab == 0 ? "active" : ""}>
                                <RecursiveNav data={menuData['packages']} index={0} />
                            </MainList>

                        </RootItem>

                        <RootItem 
                            active={currentTab === "shop"}
                            onMouseOver={handleOver("shop")}
                            onMouseLeave={handleMouseOut}
                        >
                            SHOP
                            <MainList className={selectedTab == 0 ? "active" : ""}>
                                <RecursiveNav data={menuData['shop']} index={0} />
                            </MainList>

                        </RootItem>

                        <RootItem 
                            active={currentTab === "aboutUs"}
                            onMouseOver={handleOver("aboutUs")}
                            onMouseLeave={handleMouseOut}
                        >
                            ABOUT US
                            <MainList className={selectedTab == 0 ? "active" : ""}>
                                <RecursiveNav data={menuData['aboutUs']} index={0} />
                            </MainList>

                        </RootItem>

                        <RootItem 
                            active={currentTab === "pages"}
                            onMouseOver={handleOver("pages")}
                            onMouseLeave={handleMouseOut}
                        >
                            PAGES
                            <MainList className={selectedTab == 0 ? "active" : ""}>
                                <RecursiveNav data={menuData['pages']} index={0} />
                            </MainList>

                        </RootItem>

                        <RootItem 
                            active={currentTab === "news"}
                            onMouseOver={handleOver("news")}
                            onMouseLeave={handleMouseOut}
                        >
                            NEWS
                            <MainList className={selectedTab == 0 ? "active" : ""}>
                                <RecursiveNav data={menuData['news']} index={0} />
                            </MainList>

                        </RootItem>

                        <RootItem 
                            active={currentTab === "contact"}
                            onMouseOver={handleOver("contact")}
                            onMouseLeave={handleMouseOut}
                        >
                            CONTACT
                            <MainList className={selectedTab == 0 ? "active" : ""}>
                                <RecursiveNav data={menuData['contact']} index={0} />
                            </MainList>

                        </RootItem>

                        <HButton size="normal" type="violet" style={{marginRight: "24px"}}>BOOK NOW</HButton>
                    </ListContainer> 

                    <MenuBarIcon/> 
              </NavBarContainer>  
        
        </>

    )



}