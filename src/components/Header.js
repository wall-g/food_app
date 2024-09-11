
import { Link } from "react-router-dom"; 

const Header = () => {
    return (
        <div className="header">
            <h3>foodPoint.com</h3>
            <div className="links">
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default Header;