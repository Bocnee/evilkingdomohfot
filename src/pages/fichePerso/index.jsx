import { useParams } from 'react-router-dom';
import { characterList } from '../../datas/characterList';

import titleStyle from '../../styles/utils/pagesTitle.module.scss';
import pagesWrap from '../../styles/utils/pagesWrap.module.scss';

function FichePerso() {
   const { id } = useParams();
   const chara = characterList.find((chara) => chara.id === id);
   return (
      <div className={pagesWrap.pagesWrap}>
         <h3 className={titleStyle.pageTitle}>{chara.name}</h3>
      </div>
   );
}

export default FichePerso;
