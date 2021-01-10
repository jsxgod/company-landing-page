import React from 'react'
import {InfoSection, Cards} from '../../components';
import {infoSectionDataOne, infoSectionDataTwo, infoSectionDataThree} from './Data';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <>
            <Element name="home">
                <InfoSection {...infoSectionDataOne} /> 
            </Element>

            <Element name="services">
                <InfoSection {...infoSectionDataTwo}/> 
            </Element>
           
           <Element name="cards">
                <Cards />
           </Element>

           <Element name="clients">
                <InfoSection {...infoSectionDataThree}/>
           </Element>
        </>
    )
}

export default Home
