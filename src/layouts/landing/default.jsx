import Footer from "../../components/landing/Footer"
import NavbarComponent from "../../components/landing/Navbar"
import "./../../assets/scss/landing.scss"

const Landing = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            { children }
            <Footer />
        </>
    )
}

export default Landing