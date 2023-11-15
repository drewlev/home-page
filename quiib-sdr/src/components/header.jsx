import photo1 from "../assets/profiles/1.jpg"
import photo2 from "../assets/profiles/2.jpg"
import photo3 from "../assets/profiles/3.jpg"
import photo4 from "../assets/profiles/4.jpg"
import "./header.css"
import { useState, useEffect } from "react"

const photos = [photo1, photo2, photo3, photo4]



function Header() {
    const words = ["Closing","Earning","Selling"]
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000);  // Change the word every 2 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="header">
            <h1>It’s Time to Start</h1>
            <h1 className="word">{words[currentIndex]}</h1>
            <h2>We hunt leads & crush your outbound cold emails. <br/>
                Accelerate customer insights and book more meetings.
                Book A Meeting
            </h2>
            <div className='auth-buttons'>
                    <a href="/apply" className='clear-button button'>Sign In</a>
                    <a href="/apply" className='dark-button button' >Apply</a>
            </div>

            
            
        </div>

    )

}
export default Header