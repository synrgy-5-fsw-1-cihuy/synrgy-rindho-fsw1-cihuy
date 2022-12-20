import CarCards from "../../components/landing/CarCards"
import CarFilter from "../../components/landing/CarFilterForm"
import HeroComponent from "../../components/landing/Hero"
import Landing from "./../../layouts/landing/default"

const Cars = () => {
    return (
        <Landing>
            <HeroComponent />
            <CarFilter />
            <CarCards />
        </Landing>
    )
}

export default Cars