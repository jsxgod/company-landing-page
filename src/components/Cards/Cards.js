import React from 'react'
import { IconContext } from 'react-icons/lib'

import { Button } from '../../globalStyles';
import { GiQueenCrown, GiCutDiamond } from 'react-icons/gi';

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
  GiRocketStyled,
} from './Cards.elements';
import { usePlan } from '../plan';

const Cards = () => {
  const [plan, setPlan] = usePlan();


  const togglePlan = (plan) => {
    setPlan(plan);
}

    return (
      <IconContext.Provider value={{ color: '#a9b3c1', size: 64}}>
        <CardsSection>
          <CardsWrapper>
            <CardsHeading>Our Plans</CardsHeading>
            <CardsContainer>
              <Card onClick={() => togglePlan('starter')} isChosen={plan === 'starter' ? true : false}>
                <CardInfo>
                  <CardIcon>
                    <GiRocketStyled color={plan === 'starter' ? '#242424' : ''} />
                  </CardIcon>
                  <CardPlan isChosen={plan === 'starter' ? true : false}>Starter</CardPlan>
                  <CardCost isChosen={plan === 'starter' ? true : false}>$99.99</CardCost>
                  <CardLength isChosen={plan === 'starter' ? true : false}>per month</CardLength>
                  <CardFeatures>
                    <CardFeature isChosen={plan === 'starter' ? true : false}>100 New Users</CardFeature>
                    <CardFeature isChosen={plan === 'starter' ? true : false}>$10,000 Budget</CardFeature>
                    <CardFeature isChosen={plan === 'starter' ? true : false}>Retargeting analytics</CardFeature>
                  </CardFeatures>
                  <CardBtnLink to="sign-up" spy={true} smooth={true} duration={500}>
                  <Button primary onClick={() => plan === 'starter' ? ()=>{} : togglePlan('starter')}>Choose Plan</Button>
                  </CardBtnLink>
                </CardInfo>
              </Card>
              <Card onClick={() => togglePlan('advanced')} isChosen={plan === 'advanced' ? true : false}>
                <CardInfo>
                  <CardIcon>
                    <GiQueenCrown color={plan === 'advanced' ? '#242424' : ''} />
                  </CardIcon>
                  <CardPlan isChosen={plan === 'advanced' ? true : false}>Advanced</CardPlan>
                  <CardCost isChosen={plan === 'advanced' ? true : false}>$499.99</CardCost>
                  <CardLength isChosen={plan === 'advanced' ? true : false}>per month</CardLength>
                  <CardFeatures>
                    <CardFeature isChosen={plan === 'advanced' ? true : false}>10,000 New Users</CardFeature>
                    <CardFeature isChosen={plan === 'advanced' ? true : false}>$100,000 Budget</CardFeature>
                    <CardFeature isChosen={plan === 'advanced' ? true : false}>Lead Gen Analytics</CardFeature>
                  </CardFeatures>
                  <CardBtnLink to="sign-up" spy={true} smooth={true} duration={500}>
                    <Button primary onClick={() => plan === 'advanced' ? ()=>{} : togglePlan('advanced')}>Choose Plan</Button>
                  </CardBtnLink>
                </CardInfo>
              </Card>
              <Card onClick={() => togglePlan('premium')} isChosen={plan === 'premium' ? true : false}>
                <CardInfo>
                  <CardIcon>
                    <GiCutDiamond color={plan === 'premium' ? '#242424' : ''}/>
                  </CardIcon>
                  <CardPlan isChosen={plan === 'premium' ? true : false}>Premium</CardPlan>
                  <CardCost isChosen={plan === 'premium' ? true : false}>$1999.99</CardCost>
                  <CardLength isChosen={plan === 'premium' ? true : false}>per month</CardLength>
                  <CardFeatures>
                    <CardFeature>
                      <NeonText isChosen={plan === 'premium' ? true : false}>Unlimited Users</NeonText>
                    </CardFeature>
                    <CardFeature>
                      <NeonText isChosen={plan === 'premium' ? true : false}>Unlimited Budget</NeonText>
                    </CardFeature>
                    <CardFeature>
                      <NeonText isChosen={plan === 'premium' ? true : false}>24/7 Support</NeonText>
                    </CardFeature>
                  </CardFeatures>
                  <CardBtnLink to="sign-up" spy={true} smooth={true} duration={500}>
                    <Button primary onClick={() => plan === 'premium' ? ()=>{} : togglePlan('premium')}>Choose Plan</Button>
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
