import React from "react";
import {FaBars} from 'react-icons/fa'
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavBarElements'

const NavBar = ({toggle}) =>{
    return(
        <>
        <Nav>
            <NavBarContainer>
                <NavLogo to='/'>Rodolph Mesadieu's Portfolio</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>AboutMe</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='resume'>Resume</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'>ContactMe</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavBarContainer>
        </Nav>
        </>
    )
};

export default NavBar;