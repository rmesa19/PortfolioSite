import React from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroName, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroPicture, HeroText} from './HeroElements'
import Image from '../../images/cover_photo2.png'
import Typical from 'react-typical'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroText>
                <HeroH1>
                <Typical
                    loop={Infinity}
                    steps={[
                                "Hi, my name is", 
                                1000  
                            ]}
                />
                    
                </HeroH1>
                <HeroName>Rudy Mesadieu.</HeroName>
                <HeroPicture src={Image}></HeroPicture>
                <HeroP>
                    I am a New-York based front and backend student developer looking to 
                    expand my opportunities in developing web applications, working with REACT, UX/UI Design,
                    API creation, and software development. {"\n"} 
                    
               </HeroP>
               </HeroText>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
