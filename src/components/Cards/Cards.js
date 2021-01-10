import React from 'react'
import { IconContext } from 'react-icons/lib'

import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';

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
} from './Cards.elements';

const Cards = () => {
    return (
      <IconContext.Provider value={{ color: '#a9b3c1', size: 64}}>
        <CardsSection>
          <CardsWrapper>
            <CardsHeading>Our Services</CardsHeading>
            <CardsContainer>
              <Card to="sign-up" spy={true} smooth={true} duration={500}>
                <CardInfo>
                  <CardIcon>
                    <GiRock />
                  </CardIcon>
                  <CardPlan>Starter Pack</CardPlan>
                  <CardCost>$99.99</CardCost>
                  <CardLength>per month</CardLength>
                  <CardFeatures>
                    <CardFeature>100 New Users</CardFeature>
                    <CardFeature>$10,000 Budget</CardFeature>
                    <CardFeature>Retargeting analytics</CardFeature>
                  </CardFeatures>
                  <Button primary>Choose Plan</Button>
                </CardInfo>
              </Card>
              <Card to="sign-up" spy={true} smooth={true} duration={500}>
                <CardInfo>
                  <CardIcon>
                    <GiCrystalBars />
                  </CardIcon>
                  <CardPlan>Gold Rush</CardPlan>
                  <CardCost>$299.99</CardCost>
                  <CardLength>per month</CardLength>
                  <CardFeatures>
                    <CardFeature>1000 New Users</CardFeature>
                    <CardFeature>$50,000 Budget</CardFeature>
                    <CardFeature>Lead Gen Analytics</CardFeature>
                  </CardFeatures>
                  <Button primary>Choose Plan</Button>
                </CardInfo>
              </Card>
              <Card to="sign-up" spy={true} smooth={true} duration={500}>
                <CardInfo>
                  <CardIcon>
                    <GiCutDiamond />
                  </CardIcon>
                  <CardPlan>Diamond Kings</CardPlan>
                  <CardCost>$999.99</CardCost>
                  <CardLength>per month</CardLength>
                  <CardFeatures>
                    <CardFeature>Unlimited Users</CardFeature>
                    <CardFeature>Unlimited Budget</CardFeature>
                    <CardFeature>24/7 Support</CardFeature>
                  </CardFeatures>
                  <Button primary>Choose Plan</Button>
                </CardInfo>
              </Card>
            </CardsContainer>
          </CardsWrapper>
        </CardsSection>
      </IconContext.Provider>
    )
}

export default Cards
