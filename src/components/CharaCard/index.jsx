import logoKoopa from '../../assets/logo/RoyaumeKoopa.png';
import logoChampi from '../../assets/logo/RoyaumeChampi.png';

import { Card } from '../../utils/styles/components/CharaCard';
import { CardImg } from '../../utils/styles/components/CharaCard';
import { CardDiv } from '../../utils/styles/components/CharaCard';
import { CardTitle } from '../../utils/styles/components/CharaCard';
import { CardDescription } from '../../utils/styles/components/CharaCard';
import { CardPara } from '../../utils/styles/components/CharaCard';
import { CardHighlight } from '../../utils/styles/components/CharaCard';
import { CardAffiliation } from '../../utils/styles/components/CharaCard';

function charaCard({
   nom,
   prenom,
   prenomComplet,
   espece,
   royaumeKoopa,
   image,
}) {
   return (
      <Card>
         <CardImg
            draggable="false"
            src={image}
            alt={`Photo de ${prenom}, un ${espece}.`}
         />
         <CardDiv>
            <CardTitle>{prenom}</CardTitle>
            <CardDescription>
               <CardPara>
                  <CardHighlight>Prénom(s)</CardHighlight> : {prenomComplet}
               </CardPara>
               <CardPara>
                  <CardHighlight>Nom(s)</CardHighlight> : {nom}
               </CardPara>
               <CardPara>
                  <CardHighlight>Espèce</CardHighlight> : {espece}
               </CardPara>
               <CardAffiliation>
                  {' '}
                  {royaumeKoopa ? (
                     <img src={logoKoopa} alt={`${prenom}, un ${espece}`} />
                  ) : (
                     <img src={logoChampi} alt={`${prenom}, un ${espece}`} />
                  )}
               </CardAffiliation>
            </CardDescription>
         </CardDiv>
      </Card>
   );
}

export default charaCard;
