import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Section_5.css"
import { faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/fontawesome-free-solid'

export default function Section_5() {
    return (
    <section className='section5'>
        <div className='GIT'>GET IN TOUCH</div>
        <div className='section5Container'>
            <form>
                <div className='nameSection'>
                    <div className='formElement'>
                        <label>Your First Name</label>
                        <input placeholder='First Name' className='input' type="text" />
                    </div>
                    <div className='formElement'>
                        <label>Your Last Name</label>
                        <input placeholder='Last Name ' className='input' type="text" />
                    </div>
                </div>
                <div className='formElement'>
                    <label>Your Email</label>
                    <input placeholder='Email' className='input' type="email" />    
                </div>
                <div className='formElement'>
                    <label>Your Message</label>
                    <textarea placeholder='Message' type="message"  className='message'/>    
                </div>
                <div className='submitDiv'>
                    <button className='submit'>SEND</button> 
                </div>
            </form>
            <div className='CTA'>
                <a target={"_blank"} href="https://twitter.com/audiofficial?lang=e" className='CTAelement'>
                    <FontAwesomeIcon className='icon' icon={faTwitter} />
                    <div>twitter.com/AUDI</div>
                </a>
                <a target={"_blank"} href="https://www.facebook.com/audiofficial" className='CTAelement'>
                    <FontAwesomeIcon className='icon' icon={faFacebook} />
                    <div>facebook.com/AUDI</div>
                </a>
                <a target={"_blank"} href="https://www.facebook.com/audiofficial" className='CTAelement'>
                    <FontAwesomeIcon className='icon' icon={faEnvelope} />
                    <div>gmail.com/AUDI</div>
                </a>
                <a target={"_blank"} href="https://www.facebook.com/audiofficial" className='CTAelement'>
                    <FontAwesomeIcon className='icon rotate' icon={faPhone} />
                    <div>+0800 699 888</div>
                </a>
            </div>
        </div>
    </section>
  )
}
