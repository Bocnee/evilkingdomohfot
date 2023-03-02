import booImg from '../assets/characterImg/boo.png';
import cassandreImg from '../assets/characterImg/cassandre.png';
import juniorImg from '../assets/characterImg/junior.png';
import kaorylImg from '../assets/characterImg/kaoryl.png';
import lotpieImg from '../assets/characterImg/lotpie.png';

export const characterList = [
   {
      prenom: 'Boo',
      nom: '???',
      id: 'boo',
      prenomComplet: '???',
      surnoms: 'Boo',
      affiliation: 'Royaume Koopa',
      royaumeKoopa: true,
      espece: 'Boo',
      img: booImg,
   },
   {
      prenom: "Mass' Cassandre",
      nom: 'Maskass',
      id: 'cassandre',
      prenomComplet: 'Cassandre',
      surnoms: 'Cass',
      affiliation: 'Royaume Koopa',
      espece: 'Maskass',
      img: cassandreImg,
   },
   {
      prenom: 'Bowser Jr.',
      nom: 'Koopa',
      id: 'bowserjr',
      prenomComplet: 'Bowser Junior',
      surnoms: 'Junior',
      affiliation: 'Royaume Koopa',
      espece: 'Koopa Draconien',
      royaumeKoopa: true,
      img: juniorImg,
   },
   {
      prenom: 'Kaoryl',
      nom: 'Draft',
      id: 'kaoryl',
      prenomComplet: 'Kaoryl',
      surnoms: "Kao'",
      affiliation: 'Royaume Koopa',
      espece: 'Koopa Troopa',
      royaumeKoopa: true,
      img: kaorylImg,
   },
   {
      prenom: 'Lotpie',
      nom: 'van Hasten',
      id: 'lotpie',
      prenomComplet: 'Lother-Pinhas',
      surnoms: 'Lotpie, L.P., Lother',
      affiliation: 'Royaume Koopa',
      espece: 'Koopa Paratroopa',
      img: lotpieImg,
      royaumeKoopa: true,
   },
];
