import people from  "../assets/people.jpeg"
import "./offerbox.css"
function OfferBox() {

    return (
        <div className="offerbox">
            <img src={people}/>
            <h2>Guaranteed offer</h2>
            <p>If you don’t get a job offer after attending all our sessions and giving a reasonable effort we will write you a check for $1,000</p>
        </div>

    )
}

export default OfferBox