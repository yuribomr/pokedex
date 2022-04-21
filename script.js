var pokemonBox = document.querySelector(".pokemon-cards");
var searchBar = document.querySelector(".searchBar");
var showMore = document.querySelector(".showMore");
var box = document.querySelector(".pokemon-box");
var pokemons = [];
var checkBoxList = document.querySelector(".checkBoxList");

searchBar.addEventListener("keyup", (e) => {

    const searchString = e.target.value.toLowerCase();

    const filteredPokemons = pokemons.filter((pokemon) => {
        return (
            pokemon.name.toLowerCase().includes(searchString)
        );
    });
    displayPokemons(filteredPokemons);
})

const loadPokemons = async () => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`
        )
        allPokemons = await res.json();
        allPokemons.results.map((val) => {
            fetch(val.url)
                .then(response => response.json())
                .then(pokemonSingle => {
                    pokemons.push({ name: val.name, img: pokemonSingle.sprites.front_default, type: pokemonSingle.types[0].type.name });
                    var pokemonsUnique = [...new Set(pokemons)];
                    displayPokemons(pokemons);
                });  
        })
    } catch (err) {
        console.log(err);
    }
}


const displayPokemons = (pokemonsUnique) => {
    const htmlString = pokemonsUnique
        .map((val) => {
                return `<div class="pokemon-box ${val.type}">
            <img src="${val.img}">
            <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
        </div>
        `;
        })
        .join('');

    pokemonBox.innerHTML = htmlString;

}

// FILTROS

function voltarPadrao(){
    displayPokemons(pokemons);
}
function filtrarGrass(){
    var html = "";
    const pokemonsGrass = pokemons.filter(pokemon =>{
        return pokemon.type.includes("grass");
    })
    pokemonsGrass.forEach((val) =>{
        html += `<div style="background-color:#00FF7F" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarFire(){
    var html = "";
    const pokemonsFire = pokemons.filter(pokemon =>{
        return pokemon.type.includes("fire");
    })
    pokemonsFire.forEach((val) =>{
        html += `<div style="background-color:#FF8C00" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
    console.log(pokemonsFire)
}
function filtrarNormal(){
    var html = "";
    const pokemonsNormal = pokemons.filter(pokemon =>{
        return pokemon.type.includes("normal");
    })
    pokemonsNormal.forEach((val) =>{
        html += `<div style="background-color:#FAEBD7" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarFighting(){
    var html = "";
    const pokemonsFighting = pokemons.filter(pokemon =>{
        return pokemon.type.includes("fighting");
    })
    pokemonsFighting.forEach((val) =>{
        html += `<div style="background-color:#800000" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarWater(){
    var html = "";
    const pokemonsWater = pokemons.filter(pokemon =>{
        return pokemon.type.includes("water");
    })
    pokemonsWater.forEach((val) =>{
        html += `<div style="background-color:#00CED1" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarElectric(){
    var html = "";
    const pokemonsElectric = pokemons.filter(pokemon =>{
        return pokemon.type.includes("electric");
    })
    pokemonsElectric.forEach((val) =>{
        html += `<div style="background-color:#FFD700" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarIce(){
    var html = "";
    const pokemonsIce = pokemons.filter(pokemon =>{
        return pokemon.type.includes("ice");
    })
    pokemonsIce.forEach((val) =>{
        html += `<div style="background-color:#ADD8E6" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarPoison(){
    var html = "";
    const pokemonsPoison = pokemons.filter(pokemon =>{
        return pokemon.type.includes("poison");
    })
    pokemonsPoison.forEach((val) =>{
        html += `<div style="background-color:#8B008B" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarGround(){
    var html = "";
    const pokemonsGround = pokemons.filter(pokemon =>{
        return pokemon.type.includes("ground");
    })
    pokemonsGround.forEach((val) =>{
        html += `<div style="background-color:#D2B48C" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarFlying(){
    var html = "";
    const pokemonsFlying = pokemons.filter(pokemon =>{
        return pokemon.type.includes("flying");
    })
    pokemonsFlying.forEach((val) =>{
        html += `<div style="background-color:#708090" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarPsychic(){
    var html = "";
    const pokemonsPsychic = pokemons.filter(pokemon =>{
        return pokemon.type.includes("psychic");
    })
    pokemonsPsychic.forEach((val) =>{
        html += `<div style="background-color:#C71585" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarBug(){
    var html = "";
    const pokemonsBug = pokemons.filter(pokemon =>{
        return pokemon.type.includes("bug");
    })
    pokemonsBug.forEach((val) =>{
        html += `<div style="background-color:#8FBC8F" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarRock(){
    var html = "";
    const pokemonsRock = pokemons.filter(pokemon =>{
        return pokemon.type.includes("rock");
    })
    pokemonsRock.forEach((val) =>{
        html += `<div style="background-color:#FFE4C4" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarGhost(){
    var html = "";
    const pokemonsGhost = pokemons.filter(pokemon =>{
        return pokemon.type.includes("ghost");
    })
    pokemonsGhost.forEach((val) =>{
        html += `<div style="background-color:#4B0082" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarDark(){
    var html = "";
    const pokemonsDark= pokemons.filter(pokemon =>{
        return pokemon.type.includes("dark");
    })
    pokemonsDark.forEach((val) =>{
        html += `<div style="background-color:#4F4F4F" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarDragon(){
    var html = "";
    const pokemonsDragon = pokemons.filter(pokemon =>{
        return pokemon.type.includes("dragon");
    })
    pokemonsDragon.forEach((val) =>{
        html += `<div style="background-color:#836FFF" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarSteel(){
    var html = "";
    const pokemonsSteel = pokemons.filter(pokemon =>{
        return pokemon.type.includes("steel");
    })
    pokemonsSteel.forEach((val) =>{
        html += `<div style="background-color:#B0C4DE" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}
function filtrarFairy(){
    var html = "";
    const pokemonsFairy = pokemons.filter(pokemon =>{
        return pokemon.type.includes("fairy");
    })
    pokemonsFairy.forEach((val) =>{
        html += `<div style="background-color:#FFB6C1" class="pokemon-box">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}



loadPokemons();


