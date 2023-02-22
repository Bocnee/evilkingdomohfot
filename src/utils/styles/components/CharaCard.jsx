import styled from 'styled-components';
import colors from '../Colors';

export const Card = styled.article`
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

export const CardImg = styled.img`
   width: 100%;
   border-radius: 25px 25px 0 0;
`;

export const CardDiv = styled.div`
   margin: 20px;
`;

export const CardTitle = styled.h3`
   font-family: handlee;
   font-size: 2rem;
   text-align: center;
   color: ${colors.textlight};
   text-shadow: 1px 1px 1px;
`;

export const CardDescription = styled.div`
   margin-top: 20px;
`;

export const CardPara = styled.p`
   font-size: 1.2rem;
`;

export const CardHighlight = styled.span`
   font-weight: bold;
   color: ${colors.textlight};
`;

export const CardAffiliation = styled.div`
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
