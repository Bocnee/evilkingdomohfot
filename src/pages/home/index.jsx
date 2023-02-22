/* React */
import { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

/* Styles */
import { PageTitle } from '../../utils/atoms/PageTitle';
import { HomeWrap } from '../../utils/styles/pages/Home';
import { CitationnTitleWrap } from '../../utils/styles/pages/Home';
import { CitationWrap } from '../../utils/styles/pages/Home';
import { Citation } from '../../utils/styles/pages/Home';
import { ImagesWrap } from '../../utils/styles/pages/Home';
import { CarouselWrap } from '../../utils/styles/pages/Home';
import { Images } from '../../utils/styles/pages/Home';

/* Images Carousel */
import Boo from '../../assets/imagescarousel/boo.png';
import BowserJrBaby from '../../assets/imagescarousel/bowserjrbaby.png';
import kaonboo from '../../assets/imagescarousel/kaonboo.png';
import Kaoryl from '../../assets/imagescarousel/kaoryl.png';
import Lotpie from '../../assets/imagescarousel/lotpie.png';

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
