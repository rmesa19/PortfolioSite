import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 840px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const HeroContent = styled.div`
    z-index: 3;
    width:100%;
    height:100%;
    margin: 0px 0px;
    flex-direction: column;
    
    display: flex;
    justify-content: flex-start;
    

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
    
    @media screen and (max-width: 480px){
        flex-direction: column;
    }
    
`

export const HeroPicture = styled.img`
    width: 31vh;
    height: 25vh;
    max-width: 35vh;
    max-height: 30vh;
    z-index: 4;
    border-radius: 50%;
    box-shadow: 1vh 1vh 0px 2px rgba(75, 250, 189, .5); 
    margin-top: 5vh;
    margin-bottom: 10vh;

    @media screen and (max-width: 768px){
        width: 31vh;
        height: 25vh;
        
    }
    
    @media screen and (max-width: 480px){
        width: 31vh;
        height: 25vh;
        
    }
    
`

export const HeroName = styled.h1`

    padding-top: 0vh;
    margin-bottom: 3vh;
    color: #fff;
    font-size: 72px;
    font-weight: 900;
    text-align: left;
    transition-duration: 0.4s;
    transition-timing-function: ease-in;

     
    :hover {
        text-decoration: none;
        color: #4bfabd;
        transition-property: left right;
        transition-duration: 0.4s;
        transition-timing-function: ease;
    }



    @media screen and (max-width: 768px){
        
        font-size: 50px;
    }
    
    @media screen and (max-width: 480px){
        
        font-size: 32px;
    }
`

export const HeroH1 = styled.h1`

    padding-top: 5vh;
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    text-align: left;


    @media screen and (max-width: 768px){
        padding-top: 75px;
        font-size: 24px;
    }
    
    @media screen and (max-width: 480px){
        padding-top: 50px;
        font-size: 24px;
    }
`

export const HeroP = styled.p`
    margin-top: 0vh;
    color: #fff;
    text-align: left;
    font-size: 24px;
    max-width: 800px;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }
    
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 10vh;
    padding-right: 10vh;
    background-color: rgba(0, 0, 0, 0.656);
    width: 100%;

    @media screen and (max-width: 768px){
        align-items: flex-start;
    }
    
    @media screen and (max-width: 480px){
        align-items: flex-start;
    }

`
export const HeroText2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 30vh;
    padding-right: 30vh;
    background-color: rgba(0, 0, 0, 0.656);
    width: 100%;
    height: 100%;
    padding-top: ;

    @media screen and (max-width: 768px){
        align-items: center;
        padding-left: 10vh;
        padding-right: 10vh;
    }
    
    @media screen and (max-width: 480px){
        align-items: center;
        padding-left: 5vh;
        padding-right: 5vh;
    }
`
export const HeroUnderline = styled.p`
    display: inline-block;
    position: relative;
    

    :after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 4px;
        bottom: 0;
        left: 0;
        background-color: #4bfabd;
        transform-origin: bottom right;
        transition: transform 0.6s ease-out;
    }

    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`
