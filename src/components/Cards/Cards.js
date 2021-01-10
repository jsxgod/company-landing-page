import React from 'react'
import { IconContext } from 'react-icons/lib'

import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';

import {
  CardsSection,
  CardsWrapper,
  CardsHeading,
  CardsContainer,
  Card,
  CardInfo,
  CardIcon,
  CardPlan,
  CardCost,
  CardLength,
  CardFeatures,
  CardFeature,
  CardBtnLink,
  NeonText,
} from './Cards.elements';

const Cards = () => {
    return (
      <IconContext.Provider value={{ color: '#a9b3c1', size: 64}}>
        <CardsSection>
          <CardsWrapper>
            <CardsHeading>Our Services</CardsHeading>
            <CardsContainer>
              <Card>
                <CardInfo>
                  <CardIcon>
                    <GiRock />
                  </CardIcon>
                  <CardPlan>Starter</CardPlan>
                  <CardCost>$99.99</CardCost>
                  <CardLength>per month</CardLength>
                  <CardFeatures>
                    <CardFeature>100 New Users</CardFeature>
                    <CardFeature>$10,000 Budget</CardFeature>
                    <CardFeature>Retargeting analytics</CardFeature>
                  </CardFeatures>
                  <CardBtnLink to="sign-up" spy={true} smooth={true} duration={500}>
                  <Button primary>Choose Plan</Button>
                  </CardBtnLink>
                </CardInfo>
              </Card>
              <Card>
                <CardInfo>
                  <CardIcon>
                    <GiCrystalBars />
                  </CardIcon>
                  <CardPlan>Advanced</CardPlan>
                  <CardCost>$299.99</CardCost>
                  <CardLength>per month</CardLength>
                  <CardFeatures>
                    <CardFeature>1000 New Users</CardFeature>
                    <CardFeature>$50,000 Budget</CardFeature>
                    <CardFeature>Lead Gen Analytics</CardFeature>
                  </CardFeatures>
                  <CardBtnLink to="sign-up" spy={true} smooth={true} duration={500}>
                    <Button primary>Choose Plan</Button>
                  </CardBtnLink>
                </CardInfo>
              </Card>
              <Card>
                <CardInfo>
                  <CardIcon>
                    <GiCutDiamond />
                  </CardIcon>
                  <CardPlan>Premium</CardPlan>
                  <CardCost>$1999.99</CardCost>
                  <CardLength>per month</CardLength>
                  <CardFeatures>
                    <CardFeature>
                      <NeonText>Unlimited Users</NeonText>
                    </CardFeature>
                    <CardFeature>
                      <NeonText>Unlimited Budget</NeonText>
                    </CardFeature>
                    <CardFeature>
                      <NeonText>24/7 Support</NeonText>
                    </CardFeature>
                  </CardFeatures>
                  <CardBtnLink to="sign-up" spy={true} smooth={true} duration={500}>
                    <Button primary>Choose Plan</Button>
                  </CardBtnLink>  
                </CardInfo>
              </Card>
            </CardsContainer>
          </CardsWrapper>
        </CardsSection>
      </IconContext.Provider>
    )
}

export default Cards
