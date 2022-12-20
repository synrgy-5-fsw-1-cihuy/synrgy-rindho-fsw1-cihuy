import { faClock, faThumbsUp } from "@fortawesome/free-regular-svg-icons"
import { faAward, faTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WhyUs = () => {
    return (
        <section id="why-us">
            <div className="container pt-5">
                <div className="row pt-5 gy-2 gy-lg-0">
                    <div className="col-12">
                        <h2>Why Us?</h2>
                        <p className="fs-5 mt-3 mb-4">Mengapa harus pilih Binar Car Rental?</p>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="circle-icon circle-icon-warning">
                                    <FontAwesomeIcon className="fs-5" icon={faThumbsUp} />
                                </div>
                                <h5 className="mt-3">Mobil Lengkap</h5>
                                <p className="fs-5 mt-3">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="circle-icon circle-icon-danger">
                                    <FontAwesomeIcon className="fs-5" icon={faTag} />    
                                </div>
                                <h5 className="mt-3">Harga Murah</h5>
                                <p className="fs-5 mt-3">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="circle-icon circle-icon-primary">
                                    <FontAwesomeIcon className="fs-5" icon={faClock} />    
                                </div>
                                <h5 className="mt-3">Layanan 24 Jam</h5>
                                <p className="fs-5 mt-3">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="circle-icon circle-icon-success">
                                    <FontAwesomeIcon className="fs-5" icon={faAward} />
                                </div>
                                <h5 className="mt-3">Sopir Profesional</h5>
                                <p className="fs-5 mt-3">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs