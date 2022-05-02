var pokemonBox = document.querySelector(".pokemon-cards");
var searchBar = document.querySelector(".searchBar");
var showMore = document.querySelector(".show-more");
var box = document.querySelector(".pokemon-box");
var pokemons = [];
var checkBoxList = document.querySelector(".checkBoxList");
var next = document.querySelector(".nextPage");
var previous = document.querySelector(".previous-page");

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchString);
  });
  displayPokemons(filteredPokemons);
});

const loadPokemons = async () => {
  try {
    var endpoint = "pokemon";
    const res = await fetch(`https://pokeapi.co/api/v2/${endpoint}`);
    allPokemons = await res.json();
    allPokemons.results.map((val) => {
      fetch(val.url)
        .then((response) => response.json())
        .then((pokemonSingle) => {
          pokemons.push({
            name: val.name,
            img: pokemonSingle.sprites.front_default,
            type: pokemonSingle.types[0].type.name,
          });
          displayPokemons(pokemons);
        });
    });
    criarBotaoFiltrar();
  } catch (err) {
    console.log(err);
  }
};

const displayPokemons = (pokemonsUnique) => {
  const htmlString = pokemonsUnique
    .map((val) => {
      return `<div class="pokemon-box ${val.type}">
            <img src="${val.img}">
            <p class="name">${
              val.name.charAt(0).toUpperCase() + val.name.slice(1)
            }</p>
            <p class="type">${val.type} |</p>
        </div>
        `;
    })
    .join("");

  pokemonBox.innerHTML = htmlString;
};

const criarBotaoFiltrar = () => {
  async function typePokemons() {
    const res = await fetch("../json/types.json");
    const response = await res.json();
    html = "";
    response.map((key) => {
      keyCapitalized = key.type.charAt(0).toUpperCase() + key.type.slice(1);
      html = `
                <button onclick="filtrarGeral(this.value)" value="${key.type}"class="${key.type}">${key.type}</button>
            `;
      checkBoxList.innerHTML += html;
    });
  }
  typePokemons();
};

loadPokemons();
