const NavbarComponent = () => {
    return (
        <nav className="fixed-top navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="./">Challenge 2</a>
                <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-challenge-2" aria-controls="navbar-challenge-2" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-challenge-2">
                    <div className="d-flex mx-2 justify-content-between align-items-center my-2">
                        <h5 className="mb-0">BCR</h5>
                        <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-challenge-2" aria-controls="navbar-challenge-2" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fas fa-xmark"></span>
                        </button>
                    </div>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#our-services">Our Service</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#why-us">Why Us</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#testimonial">Testimonial</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#faq">FAQ</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="btn btn-success text-light" href="#">Register</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-overlay navbar-toggler" data-bs-target="#navbar-challenge-2"></div>
            </div>
        </nav>
    )
}

export default NavbarComponent