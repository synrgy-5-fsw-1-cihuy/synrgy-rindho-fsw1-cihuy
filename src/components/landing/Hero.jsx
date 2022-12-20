const HeroComponent = () => {
    return (
        <section className="bg-light pt-5" id="hero">
            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 align-self-center">
                        <h1>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                        <p className="fs-5 mt-4">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <a className="btn btn-success text-light" href="./cars">Mulai Sewa Mobil</a>
                    </div>
                    <div className="col-12 col-lg-6" id="car-picture">
                        <img className="img-fluid" src="./pictures/car.svg" alt="Car" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroComponent