// react components
import { NavLink, useLocation } from 'react-router-dom';

// styles
import styles from '../../styles/components/header.module.scss';

function Header() {
   const pathname = useLocation().pathname;
   return (
      <header>
         <div className={styles.headerWrap}>
            <h1 className={styles.title}>
               Evil Kingdom or Hidden Face of Truth
            </h1>
            <h2 className={`${styles.title} ${styles.title__subtitle}`}>
               Une fanfiction Mario
            </h2>
            <nav className={styles.navPrincipal}>
               <NavLink
                  to="/evilkingdomohfot/"
                  className={`${
                     pathname === '/evilkingdomohfot/'
                        ? `${styles.navLink} ${styles.navLink__active}`
                        : styles.navLink
                  }`}>
                  Accueil
               </NavLink>
               <NavLink
                  to="/evilkingdomohfot/personnages"
                  className={
                     pathname === '/evilkingdomohfot/personnages' ||
                     pathname === `/evilkingdomohfot/personnages/`
                        ? `${styles.navLink} ${styles.navLink__active}`
                        : styles.navLink
                  }>
                  Personnages
               </NavLink>
               <NavLink
                  to="/evilkingdomohfot/histoire"
                  className={`${
                     pathname === '/evilkingdomohfot/histoire'
                        ? `${styles.navLink} ${styles.navLink__active}`
                        : styles.navLink
                  }`}>
                  Histoire
               </NavLink>
               <NavLink
                  to="/evilkingdomohfot/lieux"
                  className={`${
                     pathname === '/evilkingdomohfot/lieux'
                        ? `${styles.navLink} ${styles.navLink__active}`
                        : styles.navLink
                  }`}>
                  Lieux
               </NavLink>
            </nav>
         </div>
      </header>
   );
}

export default Header;
