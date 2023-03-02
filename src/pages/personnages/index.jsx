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
            {characterList
               .sort((a, b) => (a.name > b.name ? 1 : -1))
               .map((chara) => (
                  <CharaCard
                     id={chara.id}
                     key={chara.id}
                     name={chara.name}
                     surname={chara.surname}
                     fullname={chara.fullname}
                     specie={chara.specie}
                     image={chara.imgCart}
                     royaumeKoopa={chara.royaumeKoopa}
                  />
               ))}
         </div>
      </div>
   );
}

export default Personnages;
