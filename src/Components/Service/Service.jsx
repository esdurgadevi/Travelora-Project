import React from 'react'
import './Service.css'
import im1 from '../../assets/service1.webp'
import im2 from '../../assets/service2.webp'
import im3 from '../../assets/service3.webp'
import im4 from '../../assets/service4.webp'
import im5 from '../../assets/service5.webp'


function Service()
{
    return(
        <div className='services'>
            <h1 className='service_head'>Our Services</h1>
           <div className='service'>
               <div className='card'>
                    <h3>Ticket Offers</h3>
                    <img className='s1' src={im1} alt='alt'></img>
                    <p className='service_p'>Find and book the best deals on flight, train, and bus tickets. Whether you're traveling domestically or internationally, 
                        we've got you covered with flexible options and hassle-free booking.
                    </p>
                </div>
               <div className='card'>
                    <h3>Hotel Booking</h3>
                    <img className='s1' src={im2} alt='alt'></img>
                    <p className='service_p'> Choose from a wide range of hotels, from budget-friendly to luxury stays. Enjoy exclusive deals and seamless booking for a 
                        comfortable and relaxing experience at your destination.
                    </p>
                </div>
               <div className='card'>
                    <h3>Food and Dining Recommendations</h3>
                    <img className='s1' src={im3} alt='alt'></img>
                    <p className='service_p'>Discover the best dining spots during your travels! From local cuisine to fine dining, we provide 
                        recommendations and exclusive deals to make your food experiences memorable.
                    </p>
                </div>
               <div className='card'>
                    <h3>Visa  Assistance</h3>
                    <img className='s1' src={im4} alt='alt'></img>
                    <p className='service_p'>Need help with your travel documents? Our visa assistance services simplify the process, ensuring 
                        you get your visas on time for a stress-free and very safefty productive trip.
                    </p>
                </div>
               <div className='card'>
                    <h3>Multilingual Support</h3>
                    <img className='s1' src={im5} alt='alt'></img>
                    <p className='service_p'>Traveling to a non-native country? No worries! We offer multilingual support to assist you in your preferred language, 
                        making your travel experience smooth and enjoyable.
                    </p>
                </div>
           </div>
        </div>
    )
}

export default Service