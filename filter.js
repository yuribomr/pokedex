function voltarPadrao() {
  displayPokemons(pokemons);
}
function filtrarGeral(value) {
  var html = "";
  const pokemonsG = pokemons.filter((pokemon) => {
    return pokemon.type.includes(value);
  });
  pokemonsG.forEach((val) => {
    html += `<div class="pokemon-box ${val.type}">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
  });
}
