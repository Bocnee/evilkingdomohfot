import styled from 'styled-components';
import colors from '../Colors';

export const HeaderWrap = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${colors.backgroundLight};
   padding: 10px 50px 10px 50px;
   margin: 0px 50px 0px 50px;
   border-radius: 0 0 25px 25px;
`;

export const Title = styled.h1`
   font-family: handlee;
   text-align: center;
   width: 100%;
`;

export const Subtitle = styled.h2`
   font-family: handlee;
   text-align: center;
   color: ${colors.textlight};
   font-size: 1rem;
   width: 100%;
   padding-bottom: 30px;
   border-bottom: 1px solid;
`;

export const Nav = styled.nav`
   display: flex;
   justify-content: space-around;
   width: 100%;
   margin-bottom: 30px;
   margin-top: 20px;
`;
