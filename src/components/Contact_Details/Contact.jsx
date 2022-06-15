import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (
        <div className='contact-details'>

            {/* profile pic */}
            <div className='contact-details-diplay-pic' >

                <img src="https://app.gramoday.net/static/media/defaultUserDp.3e1b0347.svg
" alt="profile-pic" />
            </div>

            {/* contact details info */}
            <div className='contact-details-info'>

                <div className='contact-details-info-bio'>

                    <span className='contact-details-info-name'>ZABIULLA</span>
                    <span className='contact-details-info-location'>
                        Bangalore , Karnataka
                    </span>
                    <span className='contact-details-info-language'>Speaks English</span>

                </div>
                <div className='contact-details-buttons'>
                    <button className='action-button action-button-md'
                        style={{ backgroundColor: "rgb(1,163,157)" }}
                    >
                        <img src="https://app.gramoday.net/static/media/connect.a12a1b85.svg" alt="connect" />
                        <span style={{ color: "rgb(255,255,255)" }}>Connect</span>
                    </button>
                    <button
                        className='action-button action-button-md'
                        style={{ backgroundColor: "rgb(255,255,255)", border: "1px solid rgb(1, 163, 157)" }}
                    >
                        <img src="	https://app.gramoday.net/static/media/contact.ba3c3141.svg" alt="contact" />

                        <span style={{ color: "rgb(1, 163, 157)" }}>Contact</span>

                    </button>

                </div>



            </div>

            <div className='share-profile'>

                 <button className='share-button share-button-sm'>
                   
                    <img src="	https://app.gramoday.net/static/media/whatsappLogo.ef512021.svg" alt="Share" />
                    <span>Share</span>

                 </button>
            </div>


        </div>
    )
}

export default Contact