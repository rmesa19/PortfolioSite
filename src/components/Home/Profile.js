import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
    return (
        <div className="profile-container">
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='#'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-twitter-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-github-square'></i>
                        </a>
                        </div>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        Hi, I'm <span className='highlighted-text'>Rudy!</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Full Stack Developer", 
                                2000, 
                                "MERN Specialist", 
                                2000,  
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'></span>
                    </span>
                </div>
                <div className='profile-optins'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href='#' download= 'Rudy Mesadieu.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
