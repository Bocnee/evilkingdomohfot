import { Link } from 'react-router-dom';

// importation des images
import logoKoopa from '../../assets/logo/RoyaumeKoopa.png';
import logoChampi from '../../assets/logo/RoyaumeChampi.png';

// styles
import styles from '../../styles/components/charaCard.module.scss';

function CharaCard({
   name,
   surname,
   fullname,
   specie,
   royaumeKoopa,
   image,
   id,
}) {
   return (
      <Link className={styles.card} to={`/evilkingdomohfot/personnages/${id}`}>
         <img
            src={image}
            alt={`${name}, un ${specie}.`}
            draggable="false"
            className={styles.card__img}
         />
         <div className={styles.cardWrap}>
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.description}>
               <p>
                  <span className={styles.description__highlight}>
                     Prénom(s)
                  </span>{' '}
                  : {fullname}
               </p>
               <p>
                  <span className={styles.description__highlight}>Nom(s)</span>{' '}
                  : {surname}
               </p>
               <p>
                  <span className={styles.description__highlight}>Espèce</span>{' '}
                  : {specie}
               </p>
               <div className={styles.affiliationImg}>
                  {' '}
                  {royaumeKoopa ? (
                     <img
                        className={`${styles.logo__bowser} ${styles.logo}`}
                        src={logoKoopa}
                        alt={`Logo du Royaume Koopa`}
                        draggable="false"
                     />
                  ) : (
                     <img
                        className={`${styles.logo__peach} ${styles.logo}`}
                        src={logoChampi}
                        alt={`Logo du Royaume Champignon`}
                        draggable="false"
                     />
                  )}
               </div>
            </div>
         </div>
      </Link>
   );
}

CharaCard.defaultProps = {
   name: 'À venir...',
   surname: 'À venir...',
   fullname: 'À venir...',
   specie: 'À venir...',
   royaumeKoopa: 'À venir...',
   image: logoKoopa,
};

export default CharaCard;
