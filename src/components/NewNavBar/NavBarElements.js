import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: linear-gradient(90deg,rgb(65, 63, 82) 0%, rgb(25, 25, 34) 100%);
    height:80px;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: .8s all ease;
    }

`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size 1.2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;

    :hover {
        text-decoration: none;
        color: #fff;
    }
`

export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width: 768px){
        color: #fff;
        display:block;
        position:absolute;
        top:15px;
        right:30px;
        transfrom: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    color: #fff;
    display:flex;
    align-items: center;
    list-style: none;
    text-align:center;
    margin-right: -22px;
    margin-top: 10px;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
   color: #fff;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   
   &.active{
       border-bottom: 3px solid #01bf71;
   }
`