import { Link } from 'react-router-dom';

// importation des images
import logoKoopa from '../../assets/logo/RoyaumeKoopa.png';
import logoChampi from '../../assets/logo/RoyaumeChampi.png';

// styles
import styles from '../../styles/components/charaCard.module.scss';

function charaCard({
   nom,
   prenom,
   prenomComplet,
   espece,
   royaumeKoopa,
   image,
   id,
}) {
   return (
      <Link className={styles.card} to={`/evilkingdomohfot/personnage/${id}`}>
         <img
            src={image}
            alt={`${prenom}, un ${espece}.`}
            draggable="false"
            className={styles.card__img}
         />
         <div className={styles.cardWrap}>
            <h3 className={styles.title}>{prenom}</h3>
            <div className={styles.description}>
               <p>
                  <span className={styles.description__highlight}>
                     Prénom(s)
                  </span>{' '}
                  : {prenomComplet}
               </p>
               <p>
                  <span className={styles.description__highlight}>Nom(s)</span>{' '}
                  : {nom}
               </p>
               <p>
                  <span className={styles.description__highlight}>Espèce</span>{' '}
                  : {espece}
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

export default charaCard;
