import navLogo from "../assets/earth.png"

function Navbar() {
    return (
        <nav className="navbar">
            <img src={navLogo} alt="earth"/>
            <h1>my travel journey</h1>
        </nav>
    )
}

export default Navbar