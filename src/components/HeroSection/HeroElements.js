import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 800px;
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
    width: 35vh;
    height: 30vh;
    max-width: 35vh;
    max-height: 30vh;
    z-index: 4;
    border-radius: 5%;
    box-shadow: 1vh 1vh 0px 2px rgba(24, 117, 140, .5); 
    margin: 5vh 0vh;

    @media screen and (max-width: 768px){
        width: 50%;
        height: 50%;
        
    }
    
    @media screen and (max-width: 480px){
        width: 50%;
        height: 50%;
        
    }
    
`

export const HeroName = styled.h1`

    padding-top: 1vh;
    color: #fff;
    font-size: 72px;
    font-weight: 900;
    text-align: left;
     
    :hover {
        text-decoration: none;
        color: #4bfabd;
        transition-property: left right;
        transition-duration: 0.4s;
        transition-timing-function: ease;
    }

    @media screen and (max-width: 768px){
        padding-top: 75px;
        font-size: 40px;
    }
    
    @media screen and (max-width: 480px){
        padding-top: 50px;
        font-size: 32px;
    }
`

export const HeroH1 = styled.h1`

    padding-top: 10vh;
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    text-align: left;
    background: 

    @media screen and (max-width: 768px){
        padding-top: 75px;
        font-size: 40px;
    }
    
    @media screen and (max-width: 480px){
        padding-top: 50px;
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 2vh;
    color: #fff;
    text-align: left;
    font-size: 24px;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
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
    width: 100%;
    background-color: rgba(0, 0, 0, 0.436);

    @media screen and (max-width: 768px){
        align-items: flex-start;
    }
    
    @media screen and (max-width: 480px){
        align-items: flex-start;
    }
`