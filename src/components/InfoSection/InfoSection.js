import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { InfoColumn, InfoRow, InfoSec, TextWrapper, TopLine, Heading, Subtitle } from './InfoSection.elements';

const InfoSection = ({
    primary,
    darkMode, 
    imgStart, 
    lightTopLine,
    topLine,
    lightText,
    headline,
    lightTextDesc,
    description,
    buttonLabel,
}) => {
    /*let [darkMode, setDarkMode] = useState(true);*/


    return (
        <>
        <InfoSec darkMode={darkMode}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to='/sign-up'>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
        </>
    )
}

export default InfoSection
