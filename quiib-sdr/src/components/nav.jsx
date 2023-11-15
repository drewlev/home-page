import logo from '../assets/logo.svg';
import "./nav.css"

function Nav() {
    return (
        <div className='nav'>
            <div className='nav-elements'>
                <img src={logo} alt="Quiib Logo" />
                <div className='nav-links'>
                    <a href="..">Why Quiib</a>
                    <a href="..">For Empoyers</a>
                    <a href="..">Cohort Schedule</a>
                    <a href="..">Resources</a>
                </div>
                <div className='auth-buttons'>
                    <a href="/apply" className='clear-button button'>Sign In</a>
                    <a href="/apply" className='dark-button button' >Apply</a>
                </div>
            </div>

        </div>
       
    )

}
export default Nav