/* React */
import { useEffect } from 'react';

/* Styles */
import styled from 'styled-components';
import colors from '../../utils/styles/Colors';
import { PageTitle } from '../../utils/atoms/PageTitle';

/* Carousel */
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

/* Images Carousel */
import Boo from '../../assets/imagescarousel/boo.png';
import BowserJrBaby from '../../assets/imagescarousel/bowserjrbaby.png';
import kaonboo from '../../assets/imagescarousel/kaonboo.png';
import Kaoryl from '../../assets/imagescarousel/kaoryl.png';
import Lotpie from '../../assets/imagescarousel/lotpie.png';

const HomeWrap = styled.div`
   margin: 50px 50px 0px 50px;
   display: flex;
   gap: 60px;
   margin-top: 50px;
   justify-content: center;
`;

const CitationnTitleWrap = styled.div`
   width: 1000px;
   & .citationnTitleWrap__div {
      border-radius: 20px 20px 20px 20px;
      box-shadow: 4px 4px 4px ${colors.textlight}, -4px -4px 4px white;
      padding-top: 30px;
      transform: scale(1);
      transition: all 1s;
      &:hover {
         box-shadow: none;
         cursor: pointer;
         transform: scale(0.99);
      }
   }
`;

const CitationWrap = styled.div`
   text-align: justify;
`;

const Citation = styled.p`
   font-size: 1.5rem;
   &:first-child {
      margin: 30px;
      text-indent: 30px;
   }
   &:last-child {
      text-align: center;
      background-color: ${colors.backgroundLight};
      padding: 20px;
      border-radius: 0 0 20px 20px;
   }
   &:first-child:before {
      content: '« ';
      font-size: 1.5rem;
      font-weight: bold;
   }
   &:first-child:after {
      content: ' »';
      font-size: 1.5rem;
      font-weight: bold;
   }
`;

const ImagesWrap = styled.div`
   width: 800px;
   margin: auto;
   background-color: width;
`;

const Images = styled.img`
   object-fit: cover;
`;

const CarouselWrap = styled(Carousel)`
   object-fit: cover;
`;

function Home() {
   useEffect(() => {
      document.title = `EKoHFoT | Accueil`;
   });
   return (
      <HomeWrap>
         <CitationnTitleWrap>
            <div className="citationnTitleWrap__div">
               <PageTitle>Evil Kingdom or Hidden Face of truth ?</PageTitle>
               <CitationWrap>
                  <Citation>
                     Une énième défaite contre le Royaume Champignon força
                     Bowser à prendre une décision radicale pour mettre en
                     sécurité son fils. En parallèle, Kaoryl est un Koopa Troopa
                     de 15 ans, qui rêve de devenir le bras droit du roi, mais
                     il ne sait pas comment s’y prendre. Les deux sont loin de
                     s’imaginer ceux qui les attendent.
                  </Citation>
                  <Citation>
                     Suivez les aventures de ces deux inconnus, et bien plus
                     encore.
                  </Citation>
               </CitationWrap>
            </div>
         </CitationnTitleWrap>
         <ImagesWrap>
            <CarouselWrap
               autoPlay="true"
               infiniteLoop={true}
               interval={5000}
               showStatus={false}
               showIndicators={false}
               showThumbs={false}>
               <div>
                  <Images src={Boo} />
               </div>
               <div>
                  <Images src={BowserJrBaby} />
               </div>
               <div>
                  <Images src={kaonboo} />
               </div>
               <div>
                  <Images src={Kaoryl} />
               </div>
               <div>
                  <Images src={Lotpie} />
               </div>
            </CarouselWrap>
         </ImagesWrap>
      </HomeWrap>
   );
}

export default Home;
