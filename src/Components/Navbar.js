const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
            <div className="container">
                <a href="/" className="navbar-brand">Brindle Smoothies</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="/menu" className="nav-link">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;