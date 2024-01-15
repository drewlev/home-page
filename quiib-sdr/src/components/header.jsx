import photo1 from "../assets/profiles/1.jpg"
import photo2 from "../assets/profiles/2.jpg"
import photo3 from "../assets/profiles/3.jpg"
import photo4 from "../assets/profiles/4.jpg"
import "./header.css"
import { useState, useEffect } from "react"

const photos = [photo1, photo2, photo3, photo4]
// ccc


function Header() {
    const words = ["Skills","Connections","Oportunites","Jobs",]
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
            <h1>It’s Time to Gain</h1>
            <h1 className="word">{words[currentIndex]}</h1>
            <h2>NO EXPERIENCE OR DEGREE REQUIRED</h2>
            
            <div className="cohort-gradient">
                <div className="cohort-photos">
                    {photos.map((photo, id) => 
                        <div key={id} className="circle-container">
                            <img src={photo}></img>
                        </div>   
                    )}
                </div>



                <a href="https://cal.com/drew-levine-kkooiw/30min?date=2024-01-15&month=2024-01" className="join-cohort button">Join the Cohort</a>
            </div>
        </div>

    )

}
export default Header