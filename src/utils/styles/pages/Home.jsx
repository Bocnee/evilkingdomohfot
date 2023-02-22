import styled from 'styled-components';
import colors from '../Colors';
import { Carousel } from 'react-responsive-carousel';

export const HomeWrap = styled.div`
   margin: 50px 50px 0px 50px;
   display: flex;
   gap: 60px;
   margin-top: 50px;
   justify-content: center;
`;

export const CitationnTitleWrap = styled.div`
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

export const CitationWrap = styled.div`
   text-align: justify;
`;

export const Citation = styled.p`
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

export const ImagesWrap = styled.div`
   width: 800px;
   margin: auto;
   background-color: width;
`;

export const Images = styled.img`
   object-fit: cover;
`;

export const CarouselWrap = styled(Carousel)`
   object-fit: cover;
`;
