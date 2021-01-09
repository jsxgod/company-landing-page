import React from 'react'
import {InfoSection} from '../../components';
import {infoSectionDataOne, infoSectionDataTwo, infoSectionDataThree} from './Data';

const Home = () => {
    return (
        <>
           <InfoSection {...infoSectionDataOne}/> 
           <InfoSection {...infoSectionDataTwo}/> 
           <InfoSection {...infoSectionDataThree}/> 
        </>
    )
}

export default Home
