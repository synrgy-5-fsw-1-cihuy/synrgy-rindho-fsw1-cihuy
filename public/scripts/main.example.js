/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();
app.init().then(app.run);

const cariButton = document.getElementById('cari_mobil')

cariButton.addEventListener('click', (e) => {
    e.preventDefault()

    const tipeDriver = document.getElementById('tipe_driver')
    const tanggalAmbil = document.getElementById('tanggal_booking')
    const waktuAmbil = document.getElementById('waktu_booking')
    const jumlahPenumpang = document.getElementById('total_penumpang')

    if(tipeDriver.value == 'default') {
        alert('Tipe driver harus diisi!')
        return
    }

    if(tanggalAmbil.value == '') {
        alert('Tanggal ambil harus diisi!')
        return
    }

    if(waktuAmbil.value == 'default') {
        alert('Waktu ambil harus diisi!')
        return
    }

    let tanggalFilter = tanggalAmbil.value+"T"+waktuAmbil.value

    let filter = (value) => {
        let result = Date.parse(tanggalFilter) >= value.availableAt
        if(jumlahPenumpang.value != '') {
            result = result && value.capacity >= parseInt(jumlahPenumpang.value)
        }
        return result
    }

    app.clear()
    app.init(filter).then(app.run);
})