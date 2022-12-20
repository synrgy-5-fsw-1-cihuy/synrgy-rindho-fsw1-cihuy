export const baseUrl = import.meta.env.API_BASE_URL || "https://raw.githubusercontent.com"

export const getAllCars = async () => {
    let url = baseUrl + "/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    const response = await fetch(url)
        .then(res => res.json())
    return response
}