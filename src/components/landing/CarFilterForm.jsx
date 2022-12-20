import { useRef } from "react"
import { useDispatch } from "react-redux"
import { resetFilter, setFilter } from "../../stores/slices/cars"

const CarFilter = () => {
    const date = useRef()
    const time = useRef()
    const capacity = useRef()

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()

        
        const filterVar = {}
        
        if(date.current.value == '') {
            alert('Tanggal ambil harus diisi!')
            return
        }
        
        filterVar.date = date.current.value
        
        if(time.current.value == 'default') {
            alert('Waktu ambil harus diisi!')
            return
        }
        
        filterVar.time = time.current.value

        if(capacity.current.value != '') {
            filterVar.capacity = capacity.current.value
        } else {
            filterVar.capacity = ""
        }
        
        dispatch(setFilter(filterVar))
    }

    const resetHandler = () => {
        dispatch(resetFilter)
    }

    return (
        <section className="shape-search bg-white pt-5" id="search">
            <div className="container px-4 py">
                <form className="row search-inner bg-white p-2" onSubmit={submitHandler}>
                    <div className="col-12 col-lg p-2">
                        <label className="form-label">
                            Tipe Driver
                        </label>
                        <select className="form-select" name="tipe-driver">
                            <option value="default">Pilih Tipe Driver</option>
                            <option value="1">Dengan Sopir</option>
                            <option value="2">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    </div>
                    <div className="col-12 col-lg p-2">
                        <label className="form-label">
                            Tanggal
                            <i className="fa fa-calendar"></i>
                        </label>
                        <input className="form-control" type="date" placeholder="Pilih Tanggal" ref={date} />
                    </div>
                    <div className="col-12 col-lg p-2">
                        <label className="form-label">
                            Waktu Jemput/Ambil
                            <i className="fa fa-clock-o"></i>
                        </label>
                        <select className="form-select" ref={time}>
                            <option value="default">Pilih waktu jemput</option>
                            <option>08:00</option>
                            <option>09:00</option>
                            <option>10:00</option>
                            <option>11:00</option>
                            <option>12:00</option>
                        </select>
                    </div>
                    <div className="col-12 col-lg p-2">
                        <label className="form-label">
                            Jumlah Penumpang (optional)
                            <i className="fa fa-user"></i>
                        </label>
                        <input className="form-control" type="number" placeholder="Jumlah Penumpang" ref={capacity} />
                    </div>
                    <div className="col-12 col-lg p-2 d-grid">
                        <button className="btn btn-success text-white" type="submit">Cari Mobil</button>
                        <button className="btn btn-warning text-white" type="reset" onClick={resetHandler}>Reset Filter</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CarFilter