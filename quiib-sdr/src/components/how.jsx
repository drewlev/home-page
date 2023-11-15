import photo1 from "../assets/how/how1.png"
import photo2 from "../assets/how/how2.png"
import magnifying from "../assets/magnifying.svg"
import graph from "../assets/graph.svg"
import funnel from "../assets/funnel.svg"
import convert from "../assets/convert.svg"
import SubtitleSection from "./SubtitleSection"

import "./how.css"

function HowItWorks() {
    const InfoFrame = ({ title, description, features, icon }) => {
        return (
            <div className="info-frame-container">
                <div className="icon-container">
                    <img src={icon} alt="Icon" />
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        );
      };

      const frames = [
        {
            title: "Hunting Leads",
            description: "It all starts with great leads. We painstakingly build lists full of prospects that are hyper relevant to the problem you are trying to solve.",
            features: ["Manual Lead Research", "Email Address Validation", "Hand Crafted Lead Targeting"],
            icon: magnifying 
        },
        {
            title: "Hunting Leads",
            description: "It all starts with great leads. We painstakingly build lists full of prospects that are hyper relevant to the problem you are trying to solve.",
            features: ["Manual Lead Research", "Email Address Validation", "Hand Crafted Lead Targeting"],
            icon: graph 
        },
        {
            title: "Hunting Leads",
            description: "It all starts with great leads. We painstakingly build lists full of prospects that are hyper relevant to the problem you are trying to solve.",
            features: ["Manual Lead Research", "Email Address Validation", "Hand Crafted Lead Targeting"],
            icon: convert 
        },
        {
            title: "Hunting Leads",
            description: "It all starts with great leads. We painstakingly build lists full of prospects that are hyper relevant to the problem you are trying to solve.",
            features: ["Manual Lead Research", "Email Address Validation", "Hand Crafted Lead Targeting"],
            icon: funnel
        },
    ]


    return (
        <div className="how">
            <SubtitleSection
            subtitle="Services"
            title="Listen. We know hunting leads &amp;<br/>sending consistent emails &amp; <br/>sucks."
            >
            It's time you got back to closing deals, and raising money.<br/> 
            We'll handle your outbound so you can spend your time where it will be <br/> 
            most impactful.
            </SubtitleSection>

            
            <div className="how-grid">
                {frames.map((frame, index) => (
                    <InfoFrame
                        key={index}
                        title={frame.title}
                        description={frame.description}
                        features={frame.features}
                        icon={frame.icon}
                    />
                ))}
            </div>
        </div>
    );
    
}

export default HowItWorks