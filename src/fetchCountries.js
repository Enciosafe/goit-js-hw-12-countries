export default

    // дефолтный экспорт фунции возвращающий массив стран
function fetchCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => {
            return response.json();
        }).then(countries => { console.log(countries) })
        .catch(error => {
            console.log(error)
        });
}

fetchCountries()
    