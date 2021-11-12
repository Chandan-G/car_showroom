import React from 'react'

function Contact() {
    return (
        <>
           <div className = "container contact__container mt-5">
            <h1>Contact Us</h1>
            <div className = "container d-flex contactUS__container mt-5 mb-2">
                <div className = "contact__form">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className = "address__container">
                        <h3>Agile AutoWorks</h3>
                        <h6>Office.no.4, First floor,</h6>
                        <h6>Lalbagh Commercial Complex,</h6>
                        <h6>Lalbagh, Mangalore - 575003</h6>
                        <h6>Phone: 0824-123456</h6>
                        <h6>Mobile : +918967543024</h6>
                    </div>
                </div> 
           </div>
        </>
    )
}

export default Contact
