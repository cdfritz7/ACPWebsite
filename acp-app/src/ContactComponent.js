import React, {Component} from "react"

import "./css/Contact.css"

import { SocialIcon } from 'react-social-icons';

class ContactComponent extends Component{
  render(){
    return(
      <div className="contact-big-container">
        <p className="text-24pt page-title">
           Contact Us!
        </p>
        <div className="blue-yellow-bar-center"/>

        <div className="contact-container body-24pt">
          <div className="contact-column">
            <div>
              <p className="contact-method"><SocialIcon network="linkedin" />  <a target="_blank" href="https://www.linkedin.com/company/austin-conservation-project">LinkedIn</a> </p>
              <p className="contact-method"><SocialIcon network="bandsintown" bgColor="#ff5a01"/> <a target="_blank" href="https://utexas.campuslabs.com/engage/organization/austinconservationproject">HornsLink</a> </p>
              <p className="contact-method"><SocialIcon network="instagram" /> <a target="_blank" href="https://www.instagram.com/atx.conservation.project/">Instagram</a> </p>
              <p className="contact-method"><SocialIcon network="email" />  Email us at austinconservationproject@gmail.com</p>
            </div>
          </div>

          <div className="contact-column">
            <div>
              <form
              action="https://formsubmit.co/austinconservationproject@gmail.com"
              method="POST">
                <p className="contact-form-subtitle">Your Email:</p>
                <input
                  type="email"
                  name="email"
                  className="contact-form-input"
                  required/>
                <p className="contact-form-subtitle">Message:</p>
                <textarea
                  type="text"
                  name="text"
                  className="contact-form-input"
                  rows="8"
                  required/>
                <br/>
                <button
                  type="submit"
                  className="my-button my-button-animation">
                  Send!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactComponent;
