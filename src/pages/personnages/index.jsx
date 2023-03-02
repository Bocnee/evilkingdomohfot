// pour les fiches personnages
import { characterList } from '../../datas/characterList';
import CharaCard from '../../components/CharaCard';

// react
import { useEffect } from 'react';

// styles
import titleStyle from '../../styles/utils/pagesTitle.module.scss';
import pagesWrap from '../../styles/utils/pagesWrap.module.scss';
import styles from '../../styles/pages/personnages.module.scss';

function Personnages() {
   useEffect(() => {
      document.title = `EKoHFoT | Personnages`;
   });
   return (
      <div className={pagesWrap.pagesWrap}>
         <h3 className={titleStyle.pageTitle}>Personnages</h3>
         <div className={styles.cardWrap}>
            {characterList.map((chara) => (
               <CharaCard
                  id={chara.id}
                  key={chara.id}
                  prenom={chara.prenom}
                  nom={chara.nom}
                  prenomComplet={chara.prenomComplet}
                  espece={chara.espece}
                  image={chara.img}
                  royaumeKoopa={chara.royaumeKoopa}
               />
            ))}
         </div>
      </div>
   );
}

export default Personnages;
