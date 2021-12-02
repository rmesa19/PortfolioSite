import React from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './HeroElements'
const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, My Name is Rudy</HeroH1>
                <HeroP>Welcome to my portfolio site</HeroP>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
