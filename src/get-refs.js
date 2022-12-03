export default refs = () => {
  return {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.btn'),
    inputEl: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
  };
};
