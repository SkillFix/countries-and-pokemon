import './sass/index.scss';
import API from './fetchPokemon';
import getRefs from './get-refs';
const refs = getRefs();

refs.searchForm.addEventListener('click', onSearch);
refs.inputEl.addEventListener('keydown', e => {
  if (e.key !== 'Enter') {
    return;
  }
  onSearch();
});

function onSearch(e) {
  inputValue = refs.inputEl.value;

  API.fetchPokemon(inputValue)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally((refs.inputEl.value = ''));
}

function renderPokemonCard(pokemon) {
  const { name, sprites, weight, height, abilities } = pokemon;

  const abilityEl = abilities
    .map(el => `<li class="list-group-item">${el.ability.name}</li>`)
    .join('');

  const markup = `<div class="js-card">
        <div class="card-img-top">
            <img src="${sprites.front_default}" alt="${name}">
        </div>
        <div class="card-body">
            <h2 class="card-title">Имя: ${name}</h2>
            <p class="card-text">Вес: ${weight}</p>
            <p class="card-text">Рост: ${height}</p>
            <p class="card-text"><b>Умения</b></p>
            <ul class="list-group">
            ${abilityEl}
            </ul>
        </div>
    </div>`;
  refs.cardContainer.innerHTML = markup;
}

function onFetchError() {
  alert('Упс, что-то пошло не так, мы не нашли Вашего покемона');
}
