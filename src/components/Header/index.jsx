import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/Colors';
import classes from '../../utils/atoms/navItem.module.scss';

const HeaderWrap = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${colors.backgroundLight};
   padding: 10px 50px 10px 50px;
   margin: 0px 50px 0px 50px;
   border-radius: 0 0 25px 25px;
`;

const Title = styled.h1`
   font-family: handlee;
   text-align: center;
   width: 100%;
`;

const Subtitle = styled.h2`
   font-family: handlee;
   text-align: center;
   color: ${colors.textlight};
   font-size: 1rem;
   width: 100%;
   padding-bottom: 30px;
   border-bottom: 1px solid;
`;

const Nav = styled.nav`
   display: flex;
   justify-content: space-around;
   width: 100%;
   margin-bottom: 30px;
   margin-top: 20px;
`;

function Header() {
   const pathname = useLocation().pathname;
   return (
      <HeaderWrap>
         <Title>Evil Kingdom or Hidden Face of Truth</Title>
         <Subtitle>Une fanfiction Mario</Subtitle>
         <Nav>
            <NavLink
               to="/evilkingdomohfot/"
               className={`${
                  pathname === '/evilkingdomohfot/'
                     ? classes.header__navLink__active
                     : classes.header__navLink
               }`}>
               Accueil
            </NavLink>
            <NavLink
               to="/evilkingdomohfot/personnages"
               className={`${
                  pathname === '/evilkingdomohfot/personnages'
                     ? classes.header__navLink__active
                     : classes.header__navLink
               }`}>
               Personnages
            </NavLink>
            <NavLink
               to="/evilkingdomohfot/histoire"
               className={`${
                  pathname === '/evilkingdomohfot/histoire'
                     ? classes.header__navLink__active
                     : classes.header__navLink
               }`}>
               Histoire
            </NavLink>
            <NavLink
               to="/evilkingdomohfot/lieux"
               className={`${
                  pathname === '/evilkingdomohfot/lieux'
                     ? classes.header__navLink__active
                     : classes.header__navLink
               }`}>
               Lieux
            </NavLink>
         </Nav>
      </HeaderWrap>
   );
}

export default Header;
