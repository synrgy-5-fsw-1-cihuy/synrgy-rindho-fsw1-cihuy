import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCars } from "../../services/cars"
import { setCars } from "../../stores/slices/cars"
import { getRandomInt } from "../../utils/math"
import CarCard from "./parts/CarCard"

const randomDate = () => {
    let isPositive = getRandomInt(0, 1) === 1;
    let timeAt = new Date();
    let mutator = getRandomInt(1000000, 100000000);
    let availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator)).toISOString()

    return availableAt
}

const CarCards = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const cars = useSelector((state) => {
        let records = state.cars.records
        let filter = state.cars.filter

        let filterFunc = (value) => {
            let result = true
            if (filter.date != "" && filter.time != "") {
                let tanggalFilter = filter.date + "T" + filter.time
                result = Date.parse(tanggalFilter) >= Date.parse(value.availableAt)
            }
            if (filter.capacity != '') {
                result = result && value.capacity >= parseInt(filter.capacity)
            }
            return result
        }

        let test = records.filter(filterFunc)

        return test
    })

    const allCars = useSelector((state) => state.cars.records)

    useEffect(() => {
        if (allCars.length < 1) {
            setIsLoading(true)
            getAllCars().then((res) => {
                let records = res.map(element => {
                    let availableAt = randomDate()
                    return {
                        ...element,
                        availableAt
                    }
                })
                dispatch(setCars(records))
            })
            setIsLoading(false)
        }
    }, [])

    return (
        <>
            <section className="pt-5">
                <div className="container pt-5">
                    <div id="cars-container" className="row">
                        {isLoading ? (
                            <p className="w-full text-center col-12">
                                <b>Loading...</b>
                            </p>
                        ) : cars.length > 0 ? (
                            <>
                                {cars.map((car) => (
                                    <CarCard key={car.id} car={car} />
                                ))}
                            </>
                        ) : (
                            <p className="w-full text-center col-12">
                                <b>No Car Available</b>
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CarCards