import { Link } from 'react-scroll';
import styled from 'styled-components';

export const CardsSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardsHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const Card = styled(Link)`
  background: #242424;
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  transition: 0.25s ease-out;
  cursor: pointer;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const CardIcon = styled.div`
  margin: 24px 0;
`;

export const CardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const CardCost = styled.h4`
  font-size: 40px;
`;

export const CardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const CardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const CardFeature = styled.li`
  margin-bottom: 10px;
`;