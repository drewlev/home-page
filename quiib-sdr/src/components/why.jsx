import "./why.css"
import SubtitleSection from "./SubtitleSection"

const ProcessBox = ({ number, title, description, icon }) => {
    return (
        <div className="process-box">
            <div className="icon-container" style={{ backgroundImage: `url(${icon})` }}>
                {/* Icon can be a background image or an img tag depending on your preference */}
            </div>
            <h2>{number}. {title}</h2>
            <p>{description}</p>
        </div>
    );
};

const ProcessSection = () => {
    const processSteps = [
        {
            number: '1',
            title: 'Strategy',
            description: 'We work together to come up with the initial strategy. From there, we A/B test our way to a repeatable sales process',
       
        },
        {
            number: '2',
            title: 'Hunt Leads',
            description: 'Sometimes we can grab stuff off LinkedIn and it\'s not that big of a deal. We do spend a bit of time cleaning these lists and, of course, validating email addresses to keep bounce rates low.',
     
        },
        {
            number: '3',
            title: 'Send & Measure',
            description: 'Every week we try to get into a cadence of a new batch of leads and a new A/B test. Fresh insights are delivered in our weekly report. We also check your inbox twice a day for responses.',
        
        }
    ];

    return (
        <div className="process-section">
            <SubtitleSection
                title="Our Process"
                subtitle="No Magic Involved©"
                content={`That's right. There's no magic. It's just a stupid amount of hard work done for you.<br/><br/>
                        Each week, we get into a cadence of sending an A/B test to a new batch of leads. Imagine, insights, and meetings just magically appear... and all you had to do was hop on a relatively painless 30 minute call.`}
            />

            <div className="process-grid">
                {processSteps.map((step, index) => (
                    <ProcessBox key={index} {...step} />
                ))}
            </div>
        </div>
    );
};


export default ProcessSection;