import React from 'react'
import { InfoBox, InfoContainer, InfoTitle, ListItem, SkillBox, SkillList } from './InfoSectionElements'
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
                <SkillBox>
                <SkillList>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>Java</li>
                    <li>HTML/CSS</li>
                </SkillList>
                <SkillList>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Express JS</li>
                </SkillList>
                <SkillList>
                    <li>API Integration</li>
                    <li>REACT Webapp Creation</li>
                    <li>Database Integration</li>
                </SkillList>
                </SkillBox>
            </InfoBox>
        
            </InfoContainer>  
        </>
    )
}

export default InfoSection
