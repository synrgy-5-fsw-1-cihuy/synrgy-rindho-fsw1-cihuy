import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import OwlCarousel from "react-owl-carousel"

const owlResponsive = {
    600: {
        items: 2
    }
}
let owlNavPrev = <div className="circle-icon circle-icon-outline-success mt-3 mx-4"><FontAwesomeIcon className="fs-5" icon={faAngleLeft} /></div>
let owlNavNext = <div className="circle-icon circle-icon-outline-success mt-3 mx-4"><FontAwesomeIcon className="fs-5" icon={faAngleRight} /></div>

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="text-center pt-5">
                <h2 className="pt-5">Testimonial</h2>
                <p className="fs-5 mt-3 mb-4">Berbagai review positif dari para pelanggan kami</p>
                <OwlCarousel className='owl-theme' margin={30} center={true} items={1} loop={true} nav={true} responsive={owlResponsive} navText={[owlNavPrev, owlNavNext]} >

                    <div className="bg-light item">
                        <div className="container py-5 px-5">
                            <div className="row">
                                <div className="col-12 col-lg-3 align-self-center">
                                    <img src="./pictures/testimonial-avatar.svg" className="rounded-circle img-fluid w-50 mx-auto mb-4" alt="Avatar" />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <div className="text-center text-lg-start text-warning mb-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p className="text-start mb-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p className="text-start fw-bold">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        </section>
    )
}

export default Testimonial