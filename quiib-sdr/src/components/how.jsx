import photo1 from "../assets/how/how1.png"
import photo2 from "../assets/how/how2.png"
import "./how.css"

function HowItWorks() {


    return (
        <div className="how">
            <h1>How It Works</h1>
            <div className="how-grid">
            <img src={photo1}/>
            <p>
                We attract talented individuals, provide them with comprehensive sales training,
                match them with growing sales orgs and build career lasting relationships.
            </p>
            
            <p>
                Learn from Experienced SDRs from real companies. In live Calls and recorded content that allows.
                You to learn at your own pace while getting the tailored help you need
            </p>
            <img src={photo2}/>
            </div>

        </div>
       

    )
}

export default HowItWorks