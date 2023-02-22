import { NavLink, useLocation } from 'react-router-dom';
import classes from '../../utils/atoms/navItem.module.scss';

import { HeaderWrap } from '../../utils/styles/components/Header';
import { Title } from '../../utils/styles/components/Header';
import { Subtitle } from '../../utils/styles/components/Header';
import { Nav } from '../../utils/styles/components/Header';

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
