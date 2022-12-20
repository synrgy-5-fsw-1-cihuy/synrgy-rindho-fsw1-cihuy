import { faFacebookF, faInstagram, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <footer className="mt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <p className="fs-5">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p className="fs-5">binarcarrental@gmail.com</p>
                        <p className="fs-5">081-233-334-808</p>
                    </div>
                    <div className="col-12 col-lg-2">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link p-0 mb-3 fs-5 text-dark fw-bold" href="#our-services">Our Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-0 mb-3 fs-5 text-dark fw-bold" href="#why-us">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-0 mb-3 fs-5 text-dark fw-bold" href="#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-0 mb-3 fs-5 text-dark fw-bold" href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-4">
                        <p className="fs-5">Connect with us</p>
                        <div className="d-flex mb-3">
                            <div className="me-3">
                                <a href="#"><div className="circle-icon circle-icon-primary">
                                    <FontAwesomeIcon className="fs-5" icon={faFacebookF} />
                                </div></a>
                            </div>
                            <div className="me-3">
                                <a href="#"><div className="circle-icon circle-icon-primary">
                                    <FontAwesomeIcon className="fs-5" icon={faInstagram} />
                                </div></a>
                            </div>
                            <div className="me-3">
                                <a href="#"><div className="circle-icon circle-icon-primary">
                                    <FontAwesomeIcon className="fs-5" icon={faTwitter} />
                                </div></a>
                            </div>
                            <div className="me-3">
                                <a href="#"><div className="circle-icon circle-icon-primary">
                                    <FontAwesomeIcon className="fs-5" icon={faEnvelope} />
                                </div></a>
                            </div>
                            <div className="me-3">
                                <a href="#"><div className="circle-icon circle-icon-primary">
                                    <FontAwesomeIcon className="fs-5" icon={faTwitch} />
                                </div></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2">
                        <p className="fs-5">Copyright Binar 2022</p>
                        <h3>Challenge 2</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer