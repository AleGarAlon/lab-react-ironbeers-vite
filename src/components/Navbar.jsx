import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/"> HomePage</Link>
            </nav>
        </div>
    );
}

export default Navbar;