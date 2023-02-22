import { characterList } from '../../datas/characterList';
import CharaCard from '../../components/CharaCard';
import { useEffect } from 'react';
import styled from 'styled-components';
import { PageTitle } from '../../utils/atoms/PageTitle';

function Personnages() {
   useEffect(() => {
      document.title = `EKoHFoT | Personnages`;
   });

   const PersonnageWrap = styled.div`
      margin: 50px 50px 0px 50px;
   `;

   const CardWrap = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: 30px;
      gap: 30px;
   `;

   return (
      <PersonnageWrap>
         <PageTitle>Personnages</PageTitle>
         <CardWrap>
            {characterList.map((chara) => (
               <CharaCard
                  key={chara.id}
                  prenom={chara.prenom}
                  nom={chara.nom}
                  prenomComplet={chara.prenomComplet}
                  espece={chara.espece}
                  affiliation={chara.affiliation}
                  image={chara.img}
               />
            ))}
         </CardWrap>
      </PersonnageWrap>
   );
}

export default Personnages;
