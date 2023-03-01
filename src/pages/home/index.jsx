// React
import { useEffect } from 'react';

// Styles
import titleStyle from '../../styles/utils/pagesTitle.module.scss';
import pagesWrap from '../../styles/utils/pagesWrap.module.scss';
import styles from '../../styles/pages/home.module.scss';

// Images Caroussel
// import Boo from '../../assets/imagescarousel/boo.png';
// import BowserJrBaby from '../../assets/imagescarousel/bowserjrbaby.png';
// import kaonboo from '../../assets/imagescarousel/kaonboo.png';
// import Kaoryl from '../../assets/imagescarousel/kaoryl.png';
// import Lotpie from '../../assets/imagescarousel/lotpie.png';

function Home() {
   useEffect(() => {
      document.title = `EKoHFoT | Accueil`;
   });
   return (
      <div className={`${pagesWrap.pagesWrap} ${styles.pagesWrap}`}>
         <div className={styles.citationWrap}>
            <h3
               className={`${titleStyle.pageTitle} ${styles.citationWrap__title}`}>
               Evil Kingdom or Hidden Face of Truth
            </h3>
            <div className={styles.citation}>
               <p className={styles.citation__para}>
                  Une énième défaite contre le Royaume Champignon força Bowser à
                  prendre une décision radicale pour mettre en sécurité son
                  fils. En parallèle, Kaoryl est un Koopa Troopa de 15 ans, qui
                  rêve de devenir le bras droit du roi, mais il ne sait pas
                  comment s’y prendre. Les deux sont loin de s’imaginer ceux qui
                  les attendent.
               </p>
               <p className={styles.citation__para}>
                  Suivez les aventures de ces deux inconnus, et bien plus
                  encore.
               </p>
            </div>
         </div>
         <div className={styles.carouselWrap}>À venir...</div>
      </div>
   );
}

export default Home;
