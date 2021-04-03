import './styles.css';
import './fetchCountries.js'
import card from './card.hbs';
import list from './list.hbs'
import getRefs from './refs.js';
import '@pnotify/core/dist/BrightTheme.css'

const { alert, notice, info, success, error } = require('@pnotify/core');
const refs = getRefs()

function onFetchError(error) {
  console.log(error)
}

function fetchCountries(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).
    then(response => response.json());
}


function countryRender(country) {
  if (country.length > 10 && country.length !== 1) {
    refs.cardBox.innerHTML = "";
    return info("Too many matches found. Please enter a more specific query!")
  }
  if (country.length <= 10 && country.length !== 1) {
    const markupList = list(country)
    refs.cardBox.innerHTML = markupList;
    console.dir(country)
    return
  }
  const markup = card(country[0]);
  refs.cardBox.innerHTML = markup;
  console.log(country)
}

function search(e) {
  const form = e.target
  const searchQuery = form.value;

  fetchCountries(searchQuery)
  .then(countryRender)
  .catch(onFetchError)
};

const debounce = require('lodash.debounce');
refs.inputForm.addEventListener('input', debounce(search,500))






