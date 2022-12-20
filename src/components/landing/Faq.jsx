const Faq = () => {
    return (
        <section id="faq">
            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-12 col-lg-6">
                        <h2>Frequently Asked Question</h2>
                        <p className="fs-5 mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="question d-grid mb-3">
                            <button className="d-flex justify-content-between align-items-center border bg-light p-3 fs-5">
                                Apa saja syarat yang dibutuhkan?
                                <span><i className="fa-solid fa-angle-down"></i></span>
                            </button>
                            <div className="answer border bg-light p-3 fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolorem doloremque neque cum quaerat eligendi ipsum libero possimus ipsam beatae enim id illo iure, cupiditate vel dignissimos blanditiis tempora deleniti.</div>
                        </div>
                        <div className="question d-grid mb-3">
                            <button className="d-flex justify-content-between align-items-center border bg-light p-3 fs-5">
                                Berapa hari minimal sewa mobil lepas kunci?
                                <span><i className="fa-solid fa-angle-down"></i></span>
                            </button>
                            <div className="answer border bg-light p-3 fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolorem doloremque neque cum quaerat eligendi ipsum libero possimus ipsam beatae enim id illo iure, cupiditate vel dignissimos blanditiis tempora deleniti.</div>
                        </div>
                        <div className="question d-grid mb-3">
                            <button className="d-flex justify-content-between align-items-center border bg-light p-3 fs-5">
                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                <span><i className="fa-solid fa-angle-down"></i></span>
                            </button>
                            <div className="answer border bg-light p-3 fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolorem doloremque neque cum quaerat eligendi ipsum libero possimus ipsam beatae enim id illo iure, cupiditate vel dignissimos blanditiis tempora deleniti.</div>
                        </div>
                        <div className="question d-grid mb-3">
                            <button className="d-flex justify-content-between align-items-center border bg-light p-3 fs-5">
                                Apakah Ada biaya antar-jemput?
                                <span><i className="fa-solid fa-angle-down"></i></span>
                            </button>
                            <div className="answer border bg-light p-3 fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolorem doloremque neque cum quaerat eligendi ipsum libero possimus ipsam beatae enim id illo iure, cupiditate vel dignissimos blanditiis tempora deleniti.</div>
                        </div>
                        <div className="question d-grid mb-3">
                            <button className="d-flex justify-content-between align-items-center border bg-light p-3 fs-5">
                                Bagaimana jika terjadi kecelakaan
                                <span><i className="fa-solid fa-angle-down"></i></span>
                            </button>
                            <div className="answer border bg-light p-3 fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolorem doloremque neque cum quaerat eligendi ipsum libero possimus ipsam beatae enim id illo iure, cupiditate vel dignissimos blanditiis tempora deleniti.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq