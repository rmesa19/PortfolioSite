import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: rgb(2, 41, 51);
    height:80px;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size: .8rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom 2px solid #4bfabd;

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
    transition-duration: 0.2s;
    transition-timing-function: ease-out;

    :hover {
        text-decoration: none;
        color: #4bfabd;
        
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

    :hover {
        text-decoration: none;
        color: #4bfabd;
        border-bottom: 3px solid #01bf71;
        transition-property: left right;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
        
    }
    
    &.active{
        border-bottom: 3px solid #01bf71;
    }

`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
   
   &.active{
       border-bottom: 3px solid #01bf71;
   }

   :hover {
    text-decoration: none;
    color: #4bfabd;
    transition-property: left right;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
    }


`