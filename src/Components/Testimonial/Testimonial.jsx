import React,{ useRef } from 'react'
import './Testimonial.css'
import test1 from '../../assets/test1.webp'
import test2 from '../../assets/test2.webp'
import test3 from '../../assets/test3.webp'
import test4 from '../../assets/test4.webp'
import test5 from '../../assets/test5.webp'
import narrow from '../../assets/arrow.png'
import barrow from '../../assets/arrow1.png'

function Testimonial()
{
    const slider1 = useRef();
    let tx=0;
    const slidefor = () =>{
        if(tx>-50)
        {
            tx-=25;
        }
        slider1.current.style.transform = `translateX(${tx}%)`;
    }

    const slideback = () =>{
        if(tx<0)
        {
            tx+=25;
        }
        slider1.current.style.transform = `translateX(${tx}%)`;
    }
    return(
        <div className='testimonials'>
            <h1 className='testh'>TESTIMONIALS</h1>
            <div className='testimonial'>
                <img src={narrow} alt='narrow' className='next-btn' onClick={slidefor}></img>
                <img src={barrow} alt='barrow' className='back-btn' onClick={slideback}></img>
                <div className='slider'>
                    <ul ref={slider1}>
                        <li>
                            <div className='slide'>
                                <div className='user'>
                                    <img src={test1}></img>
                                    <h3>Emily Johnson 1</h3>
                                    <span>Solo Traveler</span>
                                </div>
                                <p>From booking to traveling, Travelora made everything so seamless. Highly recommended for a stress-free trip!</p>
                            </div>
                        </li>
                        <li>
                            <div className='slide'>
                                <div className='user'>
                                    <img src={test2}></img>
                                    <h3>James Williams 2</h3>
                                    <span>Adventure Seeker</span>
                                </div>
                                <p>
                                Travelora exceeded all my expectations! Every destination was beautiful, and their attention to detail was impressive.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='slide'>
                                <div className='user'>
                                    <img src={test3}></img>
                                    <h3>Sophia Davis 3</h3>
                                    <span>Family Traveler</span>
                                </div>
                                <p>
                                Travelora offered the best deals on tickets and accommodations. My family had an amazing time, and we saved a lot!
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='slide'>
                                <div className='user'>
                                    <img src={test4}></img>
                                    <h3>Michael Brown 4</h3>
                                    <span>Travel Enthusiast</span>
                                </div>
                                <p>
                                From booking to traveling, Travelora made everything so seamless. Highly recommended for a stress-free trip! 
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Testimonial