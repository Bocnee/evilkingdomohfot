import styled from 'styled-components';
import colors from '../../utils/styles/Colors';
import logoKoopa from '../../assets/logo/RoyaumeKoopa.png';

const Card = styled.article`
   width: 40%;
   border-radius: 25px;
   box-shadow: 4px 4px 10px ${colors.textlight}, -10px -10px 4px white;
   transition: all 1s;
   border: 2px solid 
   transform: scale(1);
   position: relative;
   &:after {
      content: 'Cliquez pour en savoir plus';
      opacity: 0;
      text-align: center;
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-item: center;
      height: 0%;
      width: 100%;
      background-color: ${colors.textcolor}90;
      position: absolute;
      top: 0;
      border-radius: 25px;
      transition: all 1s;
      transition-delay: 0.5s;
   }
   &:hover {
      box-shadow: none;
      cursor: pointer;
      transform: scale(0.99);
   }
   &:hover:after {
      height: 100%;
      content: "Cliquez pour en savoir plus";
      opacity: 1;
      color: white;
   }
`;

const CardImg = styled.img`
   width: 100%;
   border-radius: 25px 25px 0 0;
`;

const CardDiv = styled.div`
   margin: 20px;
`;

const CardTitle = styled.h3`
   font-family: handlee;
   font-size: 2rem;
   text-align: center;
   color: ${colors.textlight};
   text-shadow: 1px 1px 1px;
`;

const CardDescription = styled.div`
   margin-top: 20px;
`;

const CardPara = styled.p`
   font-size: 1.2rem;
`;

const CardHighlight = styled.span`
   font-weight: bold;
   color: ${colors.textlight};
`;

const CardAffiliation = styled.div`
   position: absolute;
   bottom: -10px;
   right: 0;
   transform: rotate(30deg);
   & img {
      width: 150px;
      opacity: 0.3;
      postion: absolute;
   }
`;

function charaCard({ nom, prenom, prenomComplet, espece, affiliation, image }) {
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
                  {
                     (affiliation = 'Royaume Koopa' ? (
                        <img
                           draggable="false"
                           src={logoKoopa}
                           alt="Logo du Royaume Koopa"
                        />
                     ) : (
                        (affiliation = 'Royaume Champignon' ? 'gentil' : null)
                     ))
                  }
               </CardAffiliation>
            </CardDescription>
         </CardDiv>
      </Card>
   );
}

export default charaCard;
