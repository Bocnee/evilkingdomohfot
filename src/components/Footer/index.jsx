import styled from 'styled-components';
import colors from '../../utils/styles/Colors';

const FooterWrap = styled.footer`
   background-color: ${colors.backgroundLight};
   margin: 50px 50px 0px 50px;
   padding: 40px;
`;

const FooterText = styled.p`
   color: ${colors.textlight};
   text-align: center;
   font-size: 1.1rem;
`;

function Footer() {
   return (
      <FooterWrap>
         <FooterText>
            L'univers de Mario ne m'appartient pas, ce projet n'est aucunement
            rénuméré d'une quelconque façon.
            <br />
            Si vous êtes amené à payer pour EKoHFoT, c'est que l'iniative ne
            vient pas de moi, donc prenez garde aux arnaques.
         </FooterText>
      </FooterWrap>
   );
}

export default Footer;
