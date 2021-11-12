import React from 'react'
import ImageSlider from './ImageSlider'

function Homepage() {
    return (
        // <div className="d-flex justify-content-center align-items-center" style = {{maxWidth: "100vw", height: "90vh"}}>
        //     <div className = "homepage__conatiner text-center" style = {{padding : "5rem"}}>
        //         <h1>Agile AutoWorks</h1>
        //         <h6>move with ease</h6>
        //         <button type="button" className="btn btn-light">Light</button>
        //     </div>
        //     <ImageSlider/>
        // </div>
        <>
            <div className="home__container">
                <div className="home__container-block">
                    {/* this is just a test */}
                    <h1>Agile Autoworks</h1>
                    <h6>Move with ease</h6>
                    <button type="button" class="home__container-btn">Book an appointment</button>
                </div>
                <ImageSlider/>
            </div>
        </>
    )
}

export default Homepage
