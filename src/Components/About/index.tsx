import React from "react";
import './about.scss'
import myImg from '../../Images/Royal-manuel (1).png'

export interface AboutMeProps{
    name?:string
    toggle?:boolean
}

export const About = (props:AboutMeProps) => {
    return(
        <div 
            className="about" 
            id="about"
            data-toggle={props.toggle}
        >
            <div className="about__image-container">
                <img 
                    src={myImg} 
                    className="about__image"
                />
            </div>
            <div className="about__description-container">
                <p className="about__description-heading">
                    A Bit About Me
                </p>
                <p className="about__description-subheading">
                    Hi there, I am <strong>Emmanuel Victor,</strong> a Website developer.
                </p>
                <p className="about__description-content">
                    I am specialized in the organic and creative side of 
                    Website Development, focusing on content creation, 
                    search engine optimization, and responsiveness.
                </p>
                <p className="about__description-content">
                    Of all that, I love reading, travelling, exploring places and researching. 
                    I am a fast Learner, able to pick up new skills and learn adapt to new Work experience.
                    I am passionate, multi-talented and expressive with a natural ability to lead.
                </p>
                <p className="about__description-content">
                    I do not like to define myself by the work I have done, but by the new challenges ahead,
                    the skills that can be thought and the person I will become afterwards. I prefer to keep 
                    learning and challenging myself to become better.
                </p>
                <div className="about__button-container">
                    <button 
                        className="about__button--hire"
                        data-toggle={props.toggle}
                    >
                        <a href="">
                            Hire Me
                        </a>
                    </button>
                    <button 
                        className="about__button--download">
                        <a href="">
                            Download CV
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}