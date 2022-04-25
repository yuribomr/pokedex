function voltarPadrao(){
    displayPokemons(pokemons);
}
function filtrarGrass(){
    var html = "";
    const pokemonsGrass = pokemons.filter(pokemon =>{
        return pokemon.type.includes("grass");
    })
    pokemonsGrass.forEach((val) =>{
        html += `<div class="pokemon-box grass">
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
        html += `<div class="pokemon-box fire">
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
        html += `<div class="pokemon-box normal">
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
        html += `<div class="pokemon-box fighting">
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
        html += `<div class="pokemon-box water">
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
        html += `<div class="pokemon-box electric">
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
        html += `<div class="pokemon-box ice">
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
        html += `<div class="pokemon-box poison">
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
        html += `<div class="pokemon-box ground">
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
        html += `<div class="pokemon-box flying">
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
        html += `<div class="pokemon-box psychic">
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
        html += `<div class="pokemon-box bug">
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
        html += `<div class="pokemon-box rock">
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
        html += `<div class="pokemon-box ghost">
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
        html += `<div class="pokemon-box dark">
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
        html += `<div class="pokemon-box dragon">
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
        html += `<div class="pokemon-box steel">
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
        html += `<div class="pokemon-box fairy">
        <img src="${val.img}">
        <p>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</p>
    </div>
    `;
    pokemonBox.innerHTML = html;
    });
}