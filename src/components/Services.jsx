import React from 'react'
import img1 from '../images/serviceimg1.jpg'
import img2 from '../images/serviceimg3.jpg'
import img3 from '../images/serviceimg2.jpg'
function Services() {
    return (
        <>
           <div className = "services__container container text-center mt-5">
                <h1>Services</h1>
                <div className = "services__card-container d-flex mt-5">
                    <div className = "services__card">
                        <img className = "services__card-img" src = {img1} alt = {img1}></img>
                        <div className="services__card-content">
                            <h4>Maintenance</h4>
                            <p>Agile AutoWorks provides a best in class car service and maitenance to it's customers in budget in Mangalore. We are team of fully qualified employees whose goal is to reach upto the mark of customer..</p>
                        </div>
                    </div>
                    <div className = "services__card">
                        <img className = "services__card-img" src = {img2} alt = {img2}></img>
                        <div className="services__card-content">
                            <h4>Sales</h4>
                            <p>If your planning to purchase a new car and don't know what to do with old one visit our workshop. We promise you are not get a better offer than us. Here you can also exchange your old car with used car....</p>
                        </div>
                    </div>
                    <div className = "services__card">
                        <img className = "services__card-img" src = {img3} alt = {img3}></img>
                        <div className="services__card-content">
                            <h4>Modification</h4>
                            <p>Agile AutoWorkd modification service eradicates stubborn and impure contaminants from the car’s surface and help restore its showroom finish and a sleek, smooth appearance and also performance improvement...</p>
                        </div>
                    </div>
                </div>
           </div> 
        </>
    )
}

export default Services
