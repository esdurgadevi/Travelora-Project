import React from 'react'
import './Desti.css'
import Desti1 from '../../assets/Desti1.webp'
import Desti2 from '../../assets/Desti2.webp'
import Desti3 from '../../assets/Desti3.webp'


function Desti()
{
    return(
        <div className='Destis'>
            <div className='Desti'>
                <img src={Desti1} alt='place'></img>
                <div className='caption'>
                    <h3>Paris</h3>
                    <p>City of Love Discover romance in the streets of Paris.</p>
                    <button className='btn'>Details</button>
                </div>
            </div>
            <div className='Desti'>
                <img src={Desti2} alt='place'></img>
                <div className='caption'>
                    <h3>Japan</h3>
                    <p>Land of the Rising Sun Explore the vibrant culture of Japan</p>
                    <button className='btn'>Details</button>
                </div>
            </div>
            <div className='Desti'>
                <img src={Desti3} alt='place'></img>
                <div className='caption'>
                    <h3>Maldives</h3>
                    <p>Tropical Paradise Relax on the pristine beaches of the Maldives</p>
                    <button className='btn'>Details</button>
                </div>
            </div>
        </div>
    )
}

export default Desti