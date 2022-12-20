import styled from "styled-components"

const Img = styled.img`
    height: 250px;
    object-fit: cover
`

const CarCard = ({ car }) => {
    return (
        <div className="col-12 col-lg-4">
            <div className="card p-3 mt-4">
                <Img src={car.image} className="card-img-top car-img" alt="..." />
                    <div className="mt-3 d-grid">
                        <h5>{car.manufacture} {car.model} / {car.type}</h5>
                        <h4>Rp. {car.rentPerDay} / hari</h4>
                        <p>
                            {car.description}
                        </p>
                        <p>
                            <span className="fa-solid fa-users"></span>
                            {car.capacity} Orang
                        </p>
                        <p>
                            <span className="fa-solid fa-gear"></span>
                            {car.transmission}
                        </p>
                        <p>
                            <span className="fa-solid fa-calendar"></span>
                            Tahun {car.year}
                        </p>
                        <a href="#" className="btn btn-success text-white">Pilih Mobil</a>
                    </div>
            </div>
        </div>
    )
}

export default CarCard