import React from 'react'
import './Home.css'
import arrow from '../../assets/arrow.png'
function Home()
{
    return(
        <div className='Home' id='Home'>
            <div class="Home-text">
                <h1>Embark on Unforgettable Journeys 🗼</h1>
                <p>
                Discover the beauty of the world with our curated travel experiences. Whether you seek thrilling adventures, 
                serene escapes, or cultural explorations, we have the perfect destination for you. Let us turn your travel dreams 
                into reality with seamless planning and personalized itineraries that promise memories to last a lifetime.</p>
                <button class='btn'>Explore More<img src={arrow} alt='Arrow' className='arrow'></img></button>
            </div>
            
        </div>
    )
}

export default Home