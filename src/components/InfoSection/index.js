import React from 'react'
import { InfoBox, InfoContainer, InfoTitle, ListItem, SkillList } from './InfoSectionElements'
import { HeroPicture } from '../HeroSection/HeroElements'
import Image from '../../images/cover_photo2.png'
import { Skillset } from '../Information/Information' 


const InfoSection = () => {
    return (
        <>
            <InfoContainer>
            <InfoTitle>About Me</InfoTitle>
            <InfoBox>
                Currently a Master's Candidate for a Degree in Computer Science at Northeastern University, I 
                am passionate about building functional, smooth web applications,
                honing my design skillset, and cultivating my experiences within the tech community.
                The technologies I work with include but are not limited to:
            </InfoBox>
            <SkillList>
                <li>Hi</li>
            {Skillset.map((skill, i) => <ListItem key={i}>{skill}</ListItem>)}
            </SkillList>
            </InfoContainer>  
        </>
    )
}

export default InfoSection
