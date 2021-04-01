import './styles.css';
import './fetchCountries.js'
import template from './template.hbs';

const refs = {
  cardBox: document.querySelector('.card-box'),
  inputForm: document.querySelector('.form-input')
}

fetch('https://restcountries.eu/rest/v2/name/Canada')
        .then(response => {
            return response.json();
        }).then(countryRender)
           .catch(error => {
             console.log(error)
           });
        



function countryRender(country) {
  const markup = template(country[0]);
  refs.cardBox.innerHTML = markup;
}

const debounce = require('lodash.debounce');

const input = addEventListener('input', search)

function search(e) {
  console.log(e.data);
}



