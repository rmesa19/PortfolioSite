import React from 'react'
import { InfoBox, InfoContainer, InfoTitle } from './InfoSectionElements'
import { HeroPicture } from '../HeroSection/HeroElements'
import Image from '../../images/cover_photo2.png'


const InfoSection = () => {
    return (
        <>
            <InfoContainer>
            <InfoTitle>About Me</InfoTitle>
            <InfoBox>
                Currently a Master's Candidate for a Degree in Computer Science at Northeastern University, I 
                am passionate about building functional, smooth web applications,
                honing my design skillset, and cultivating my experiences within the tech community.
                My expertise extends to, but is not limited to the following: 
            </InfoBox>
            </InfoContainer>  
        </>
    )
}

export default InfoSection
