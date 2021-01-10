import React from 'react'
import { Cards } from '../../components';
import { Element } from 'react-scroll';

const SignUpPage = () => {
    return (
        <>
           <Element name="cards">
                <Cards />
           </Element>
        </>
    )
}

export default SignUpPage