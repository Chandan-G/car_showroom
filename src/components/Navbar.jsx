import React from 'react'

function Navbar() {
    return (
        <>
           <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid ms-5">
                <a className="navbar-brand" href="/">Agile AutoWorks</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Booking</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Car</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
           </div> 
        </>
    )
}

export default Navbar
