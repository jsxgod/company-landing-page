import React from 'react'
import { Link } from 'react-scroll'
import { Button, Container } from '../../globalStyles'
import { InfoColumn, InfoRow, InfoSec, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements'

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
    img,
    alt,
    start,
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
                            <Link to="sign-up" spy={true} smooth={true} duration={1000}>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
        </>
    )
}

export default InfoSection
