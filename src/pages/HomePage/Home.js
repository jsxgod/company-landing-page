import React from 'react'
import {InfoSection, Cards} from '../../components';
import {infoSectionDataOne, infoSectionDataTwo, infoSectionDataThree} from './Data';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <>
            <Element name="info-section-1">
                <InfoSection {...infoSectionDataOne} /> 
            </Element>

            <Element name="info-section-2">
                <InfoSection {...infoSectionDataTwo}/> 
            </Element>
           
           <Element name="cards">
                <Cards />
           </Element>

           <Element name="info-section-3">
                <InfoSection {...infoSectionDataThree}/>
           </Element>
        </>
    )
}

export default Home
