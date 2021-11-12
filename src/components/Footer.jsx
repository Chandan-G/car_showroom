import React from 'react'

function footer() {
    return (
        <>
           <div className="footer mt-5">
                <div className="footer__links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Booking</a></li>
                    <li><a href="/">Contacts</a></li>
                    <li><a href="/">Cars</a></li>
                </div>
                <div className="footer__socialLinks">
                    <i class="far fa-envelope"></i>
                    <i class="fas fa-phone"></i>
                    <i class="fab fa-instagram"></i>
                </div>
            </div> 
        </>
    )
}

export default footer
