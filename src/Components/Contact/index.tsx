import React from "react";
import { contactField } from "../../Utils/constants";
import '../Contact/contact.scss'

export interface ContactProps{
    name?:string
    toggle?:boolean
}

export const Contact = (props:ContactProps) => {
    return(
        <div 
        className="contact" 
        id="contact" 
        data-toggle={props.toggle}
        >
            <div className="contact-sidebar">
                <h3 className="contact-sidebar__heading">
                    Let's get in touch
                </h3>
                <p className="contact-sidebar__subheading">
                    We're open for any suggestion or just to have a chat
                </p>
                {contactField.map((element,index) => {
                    return(
                        <div className="contact-sidebar__info-container" key={index + 1}>
                            <div className="contact-sidebar__icon-wrapper">
                                <i className={`${element.className}`}></i>
                            </div>
                            <div className="contact-sidebar__info">
                                {element.name}: <span>{element.content}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="contact__form">
                <h3>Get in touch</h3>
                
            </div>
        </div>
    )
}