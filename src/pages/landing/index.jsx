import Ads from "../../components/landing/Ads"
import Faq from "../../components/landing/Faq"
import HeroComponent from "../../components/landing/Hero"
import OurServices from "../../components/landing/OurServices"
import Testimonial from "../../components/landing/Testimonial"
import WhyUs from "../../components/landing/WhyUs"
import Landing from "./../../layouts/landing/default"

const Index = () => {
    return (
        <Landing>
            <HeroComponent />
            <OurServices />
            <WhyUs />
            <Testimonial />
            <Ads />
            <Faq />
        </Landing>
    )
}

export default Index