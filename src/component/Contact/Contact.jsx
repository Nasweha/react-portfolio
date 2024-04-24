import React from 'react'
import './Contac.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    return (

        <div>
            <div className='section-title' id='contact'><h3>Contact Me</h3></div>
            <div className='row contact'>
                <div className='col-2'></div>

                <div className='col-md-4  contact-data'>
                    <h4 style={{textAlign:'center' ,color:'white'}}>Get In Touch</h4>
                    <p className='contact-des'>Open to exciting software job opportunities! Let's talk about how I can be a great fit for your team. Get in touch today to start the conversation! </p>

                    <div className='contact-info'>
                        <div className='info-item'>
                            <FontAwesomeIcon icon={faEnvelope} className='info-icon' />

                            <div>

                                <span className='info-title'>Mail me</span>
                                <h6 className='info-desc'>nasweha@gamil.com</h6>
                            </div>
                        </div>

                        <div className='info-item'>
                            <FontAwesomeIcon icon={faEnvelope} className='info-icon' />

                            <div>

                                <span className='info-title'>Call me</span>
                                <h6 className='info-desc'>7994363459</h6>
                            </div>
                        </div>

                    </div>

                    <div className='contact-social'>
                        <a href="" className='contact-social-link'>
                            <FontAwesomeIcon icon={faWhatsapp} className='icon' />
                        </a>
                        <a href="" className='contact-social-link'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="" className='contact-social-link'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="" className='contact-social-link'>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>


                </div>
                <div className='col-md-4 contact-form'>
                    <form action="" className='contact__form'>
                        <div className='form-input-group'>
                            <div className='form-input-div'>
                                <input type="text" placeholder='your name' className='form-control' />


                            </div>
                            <div className='form-input-div'>
                                <input type="email" placeholder='your email' className='form-control' />

                            </div>
                            <div className='form-input-div'>
                                <input type="phone" placeholder='your phone' className='form-control' />

                            </div>
                            <div className='form-input-data'>
                                <textarea name="" placeholder='your message' id="" cols="20" rows="5" className='form-control'></textarea>
                            </div>

                            <button className='button '> send message</button>
                        <span className='button-icon contact-button-icon'>

                        </span>
                        </div>



                    </form>

                </div>
                <div className='col-2'></div>

            </div>
        </div>
    )
}

export default Contact