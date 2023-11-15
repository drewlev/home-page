import OfferBox from "./offerbox"
import "./why.css"
import quiib from "../assets/Quiib-text.svg"
function Why() {

    return (
        <div className="whypage">
            <h1>Why <span><img src={quiib} className="quiib-text"/></span></h1>
            <div className="whygrid">
                <OfferBox/>
                <OfferBox/>
                <OfferBox/>
                <OfferBox/>
            </div>
        </div>

    )
}

export default Why