/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
console.log(params);

const filterParam = {};

const onSelectDriverType = async() => {
    const originalCars = await Binar.listCars(filterParam);
    const resultList = document.getElementById('result');
    filterParam.tipe_driver = document.getElementById('tipe_driver').value;

    resultList.innerHTML = originalCars.forEach((value) => {
        return (`<li data-id="${ value.id }">
        <span>${ value.name }</span>
        <span>${ value.plate }</span>
      </li>`)
    });
    
    console.log(filterParam);
    console.log("DATA :", originalCars);
}

const onSelectBookingDate = () => {
    filterParam.tanggal_booking = document.getElementById('tanggal_booking').value;
    console.log(filterParam);
}

const onSelectTimeBooking = () => {
    filterParam.waktu_booking = document.getElementById('waktu_booking').value;
    console.log(filterParam);
}

const onSelectTotalPassenger = () => {
    filterParam.total_penumpang = document.getElementById('total_penumpang').value;
    console.log(filterParam);
}

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.init().then(app.run);

