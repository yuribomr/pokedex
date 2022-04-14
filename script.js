var quantidade = document.querySelector(".searchBar");
var pokemonBox = document.querySelector(".pokemon-cards");
var searchBar = document.querySelector(".searchBar");

var pokemons = [];

searchBar.addEventListener("keyup", (e)=>{

    const searchString = e.target.value.toLowerCase();

    const filteredPokemons = pokemons.filter((pokemon) =>{
        return (
            pokemon.name.toLowerCase().includes(searchString)
        );
    });
    console.log(filteredPokemons)
    displayPokemons(filteredPokemons);
})

const loadPokemons = async () =>{
    try{
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
        allPokemons = await res.json();
        
        allPokemons.results.map((val) =>{
            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                pokemons.push({name:val.name,img:pokemonSingle.sprites.front_default});
                displayPokemons(pokemons);
            })
        })
        
    }catch(err){
        console.log(err);
    }
}


const displayPokemons = (pokemons) => {
    const htmlString = pokemons
    .map((val) => {
        return `
        <div class="pokemon-box">
        <img src="${val.img}">
            <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
        </div>
        `;
    })
    .join('');

    pokemonBox.innerHTML = htmlString;
}

loadPokemons();


