// DEFINING GLOBAL KEY-VALUE PAIRS

// Type Colors corresponds to the background colors used for the different Pokemon types.
const typeColors = {
    "normal":"#a4a4a4", //gray
    "fighting": "#c7703a", //orange
    "flying": "#4b65af", //dark blue
    "poison": "#7d57a0", //purple
    "ground": "#937944", //brown
    "rock": "#5c7a7a", //slate
    "bug": "#699936", //forest green
    "ghost": "#9d70b1", //purple
    "steel": "#bebcd2", //light purple
    "fire": "#bf403a", //red
    "water": "#549ad3", //blue
    "grass": "#53a93a", //green
    "electric": "#bfa546", //dark yellow
    "psychic": "#bf5b99", //pink
    "ice": "#72acc2", //light blue
    "dragon": "#50a495", //turquoise
    "dark": "#6c594b", //dark brown
    "fairy": "#d893c0", //pink
    "stellar": "#a8d2a2", //sea-green
    "unknown": "#ddd", // gray
}
// Roman Numbers is for looping through the generations.
const romanNumbers = {0:"I", 1:"II", 2:"III", 3:"IV", 4:"V", 5:"VI", 6:"VII", 7:"VIII"}
// Editions is for looping through the editions within the generations.
const editions = {
    0:{0:"Red-Blue", 1:"Yellow"},
    1:{0:"Crystal",1:"Gold",2:"Silver"},
    2:{0:"Emerald",1:"FireRed-LeafGreen",2:"Ruby-Sapphire"},
    3:{0:"Diamond-Pearl",1:"HeartGold-SoulSilver",2:"Platinum"},
    4:{0:"Black-White"},
    5:{0:"Omegaruby-Alphasapphire", 1:"X-Y"},
    6:{0:"Icons", 1:"Ultra-Sun-Ultra-Moon"},
    7:{0:"Icons"}
};

// DISPLAY FUNCTIONS

// Displaying Pokemon Types
async function displayType(typeURL){
    try {
        // Retrieve Type Data from given API URL
        const response = await fetch(typeURL); 
        const typeData = await response.json();
        let color = typeColors[typeData.name];
        // Type Display includes a hyperlinked badge with a special background color.
        let typeDisplay = `<div class="col-2 text-center">
                            <a href="pokemon.html?type=${encodeURIComponent(typeData.name)}">
                                <h3><span style="background-color:${color}; color: white; text-shadow: -1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000;" class="badge badgeHover rounded-pill text-center">
                                ${typeData.name}</span>
                                </h3>
                            </a>
                        </div>`;
        return typeDisplay;
    }catch(error){
        console.log("Error displaying type: "+error);
        return "";
    }
}

// Displaying Pokemon Moves
async function displayMove(moveURL){
    try {
        // Retrieve Move Data from given API URL
        const response = await fetch(moveURL);
        const moveData = await response.json();
        let moveDescription = "";
        // Retrieve Move Description
        if (moveData.effect_entries.length>0){
            moveDescription = moveData.effect_entries[0].short_effect;
        }
        // Move Display includes a hyperlinked card with its name and description
        let moveDisplay = `<div class="col-md-4">
                            <a href="pokemon.html?move=${encodeURIComponent(moveData.name)}">
                                <div class="card cardHover">
                                    <h3 class="card-header">${moveData.name}</h3>
                                    <div class="card-body">
                                        <p class="card-text">${moveDescription}</p>
                                    </div>
                                </div>
                            </a>
                        </div>`;
        return moveDisplay;
    }catch(error){
        console.log("Error displaying move: "+error);
        return "";
    }
}

// Displaying Pokemon 
async function displayPokemon(pokemonURL){
    try {
        // Retrieve Pokemon Data from API URL
        const response = await fetch(pokemonURL);
        const pokemonData = await response.json();
        // Pokemon Display includes a hyperlinked card with an image and name
        
        let pokemonDisplay = `<div class="col-md-4">
                            <a class="cardLink" href="pokemon.html?name=${encodeURIComponent(pokemonData.name)}">
                                <div class="card cardHover">
                                    <center><img src="${pokemonData.sprites.front_default}" style="width:150px" class="card-img-top rounded" alt="${pokemonData.name} Image"></center>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">${pokemonData.name}</h5>
                                    </div>
                                </div>
                            </a>
                        </div>`;
        return pokemonDisplay;
    }catch(error){
        console.log("Error displaying Pokemon: "+error);
        return "";
    }
}

// Displaying Pokemon Abilities
async function displayAbility(abilityURL){
    try{
        // Retrieve Ability Data from API URL
        const response = await fetch(abilityURL);
        const abilityData = await response.json();
        let abilityDescription = "";
        // Retrieve Ability Description
        if (abilityData.effect_entries.length>0){
            abilityDescription = abilityData.effect_entries[1].short_effect;
        }
        // Ability Display includes a hyperlinked card with name and description
        let abilityDisplay = `<div class="col-md-4">
                                <a href="pokemon.html?ability=${encodeURIComponent(abilityData.name)}">
                                    <div class="card cardHover"">
                                        <h3 class="card-header">${abilityData.name}</h3>
                                        <div class="card-body">
                                            <p class="card-text">${abilityDescription}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>`;
        return abilityDisplay;
    }catch(error){
        console.log("Error displaying ability: "+error);
        return "";
    }

}

// Displaying Held Items
async function displayHeldItems(itemURL){
    try{
        // Retrieve Item Data from API URL
        const response = await fetch(itemURL);
        const itemData = await response.json();
        let itemDescription = "";
        // Retrieve Item Description
        if (itemData.effect_entries.length>0){
            itemDescription = itemData.effect_entries[0].effect;
        }
        // Item Display includes a card with the item's image, name, and description
        let itemDisplay = `<div class="col-md-4">
                                <div class="card" >
                                    <center><img src="${itemData.sprites.default}" style="width:70px;" alt="${itemData.name} Image"></center>
                                    <h3 class="card-header">${itemData.name}</h3>
                                    <div class="card-body">
                                        <p class="card-text">${itemDescription}</p>
                                    </div>
                                </div>
                        </div>`;
        return itemDisplay;
    }catch(error){
        console.log("Error displaying held item: "+error);
        return "";
    }    
}

// Displaying Pokemon Generations
async function displayGenerations(pokemonData){
    try {
        // Iterate over the generations (all 8 are displayed)
        let generationDisplay = "";
        for (let i = 0; i < 8; i++) {
            // Retrieve generation name from dictionary
            let generationKey = `generation-${romanNumbers[i].toLowerCase()}`; 
            // If the icon is available for that generation
            if(pokemonData.sprites.versions[generationKey]){

                let generationCards = "";
                // Iterate over the editions (there's no more than three in each generation)
                for (let j = 0; j < 3; j++) {
                    // Retrieve the edition name
                    let color = editions[i][j];
                    if (color) {
                        // Accessing the sprite 
                        let editionKey = editions[i][j].toLowerCase().replace(' ', '-'); // Format edition key
                        let sprite = pokemonData.sprites.versions[generationKey]?.[editionKey]?.front_default;

                        if (sprite) { // Ensure sprite exists
                            // Generation Display includes the image and name of each edition
                            generationCards += `
                                <div class="col-md-4">
                                    <div class="card">
                                        <center><img src="${sprite}" style="width:100px;" alt="Generation ${romanNumbers[i]} ${color} Image"></center>
                                        <h3 class="card-header text-center">${color}</h3>
                                    </div>
                                </div>`;
                        }
                    }
                }
                // Give the group of editions the generation title and hyperlink it
                if (generationCards!==""){
                    generationDisplay = generationDisplay + `<a class="link" href="pokemon.html?generation=${encodeURIComponent(generationKey)}">
                    <h3>Generation ${romanNumbers[i]}</h3></a>` + generationCards;
                }
            }
        }
        return generationDisplay;
    }catch(error){
        console.log("Error displaying generation: "+error);
        return "";
    }
}

// Displaying Base Stats
async function displayStats(pokemonData) {
    try {
        // Stats Display includes a list of progress bars out of 255 (the max of each stat)
        // As well as a label of each stat: (HP, Attack, Defense, Special Attack, Special Defense, Speed)
        let statsDisplay = "";
        statsDisplay += `<ul class="list-group">
                        <li class="list-group-item p-3 d-flex justify-content-between align-items-center"><div class="col-2 text-end"><b>HP</b>:</div>
                            <div class="col-10"><div class="progress flex-grow-1 mx-3" role="progressbar" aria-label="${pokemonData.stats[0].base_stat}" aria-valuenow="${pokemonData.stats[0].base_stat}" aria-valuemin="0" aria-valuemax="255" style="height: 20px">
                            <div class="progress-bar" style="width: ${pokemonData.stats[0].base_stat}%">${pokemonData.stats[0].base_stat}</div>
                        </div></div></li>
                        <li class="list-group-item p-3 d-flex justify-content-between align-items-center"><div class="col-2 text-end"><b>Attack</b>:</div>
                            <div class="col-10"><div class="progress flex-grow-1 mx-3" role="progressbar" aria-label="${pokemonData.stats[1].base_stat}" aria-valuenow="${pokemonData.stats[1].base_stat}" aria-valuemin="0" aria-valuemax="255" style="height: 20px">
                            <div class="progress-bar" style="width: ${pokemonData.stats[1].base_stat}%">${pokemonData.stats[1].base_stat}</div>
                        </div></div></li>
                        <li class="list-group-item p-3 d-flex justify-content-between align-items-center"><div class="col-2 text-end"><b>Defense</b>:</div>
                            <div class="col-10"><div class="progress flex-grow-1 mx-3" role="progressbar" aria-label="${pokemonData.stats[2].base_stat}" aria-valuenow="${pokemonData.stats[2].base_stat}" aria-valuemin="0" aria-valuemax="255" style="height: 20px">
                            <div class="progress-bar" style="width: ${pokemonData.stats[2].base_stat}%">${pokemonData.stats[2].base_stat}</div>
                        </div></div></li>
                        <li class="list-group-item p-3 d-flex justify-content-between align-items-center"><div class="col-2 text-end"><b>Special Attack</b>:</div>
                            <div class="col-10"><div class="progress flex-grow-1 mx-3" role="progressbar" aria-label="${pokemonData.stats[3].base_stat}" aria-valuenow="${pokemonData.stats[3].base_stat}" aria-valuemin="0" aria-valuemax="255" style="height: 20px">
                            <div class="progress-bar" style="width: ${pokemonData.stats[3].base_stat}%">${pokemonData.stats[3].base_stat}</div>
                        </div></div></li>
                        <li class="list-group-item p-3 d-flex justify-content-between align-items-center"><div class="col-2 text-end"><b>Special Defense</b>:</div>
                            <div class="col-10"><div class="progress flex-grow-1 mx-3" role="progressbar" aria-label="${pokemonData.stats[4].base_stat}" aria-valuenow="${pokemonData.stats[3].base_stat}" aria-valuemin="0" aria-valuemax="255" style="height: 20px">
                            <div class="progress-bar" style="width: ${pokemonData.stats[4].base_stat}%">${pokemonData.stats[4].base_stat}</div>
                        </div></div></li>
                        <li class="list-group-item p-3 d-flex justify-content-between align-items-center"><div class="col-2 text-end"><b>Speed</b>:</div>
                            <div class="col-10"><div class="progress flex-grow-1 mx-3" role="progressbar" aria-label="${pokemonData.stats[5].base_stat}" aria-valuenow="${pokemonData.stats[5].base_stat}" aria-valuemin="0" aria-valuemax="255" style="height: 20px">
                            <div class="progress-bar" style="width: ${pokemonData.stats[5].base_stat}%">${pokemonData.stats[5].base_stat}</div>
                        </div></div></li>
                    </ul>`;
        return statsDisplay;
    }catch(error){
        console.log("Error displaying generation: "+error);
        return "";
    }
}

// ERROR HANDLING FUNCTION
const handleError = (backURL) => {
    alert('Not found. Try again.')
    window.location.href = backURL; // Redirect the user to the original search or filter page
}

// FUNCTIONS TO HANDLE THE DATA FOR EACH PAGE

// Handling All Pokemon for pokemon.html
async function handleAllPokemon (allPokemonData) {
    // Retrieve the Pokemon container
    const pokemonContainer = document.getElementById('pokemon');
    // Initiate the new row of Pokemon
    let pokemonRow = '<h1 class="text-center mb-3">Browse All Pok&#233;mon</h1> <div class="row g-3">';

    try {
        // Iterate over the (20) Pokemon in the API URL and retrieve the display cards
        for(let i=0; i<allPokemonData.results.length;i++){
            pokemonRow += await displayPokemon(allPokemonData.results[i].url);
        }
        pokemonRow+="</div>"

        // Add Previous and Next buttons at the bottom
        let pagination = `<div class="mt-5">
                <nav aria-label="All Pokémon Page Navigation">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" onclick="fetchFromAPI('${allPokemonData.previous}', handleAllPokemon, './search.html')">Previous</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" onclick="fetchFromAPI('${allPokemonData.next}', handleAllPokemon, './search.html')">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="bg-light bg-opacity-75 m-5 p-5 rounded text-center">
                <h1 id="title" class="h1 mb-4">Search Pok&#233;mon by Name</h1>
                <form onsubmit="search(event, 'name')">
                    <input id="name" name="name" class="form-control form-control-lg" type="text" placeholder="Enter Pok&#233;mon Name" aria-label="Enter Pok&#233;mon Name">
                    <button type="submit" class="btn btn-lg btn-outline-danger mt-3">Search</button>
                </form>
            </div>`;
        // Update the Pokemon container 
        pokemonContainer.innerHTML=pokemonRow+pagination;
    }catch(error){
        console.log('Error handling all Pokémon: ', error);
    }
};

// Handling All the Moves for by-move.html
async function handleAllMoves(allMovesData) {
    // Retrieve the moves container
    const movesContainer = document.getElementById('movesContainer');
    // Initiate the new row of moves
    let moveRow = '<h1 class="text-center mb-3">Browse All Moves</h1> <div class="row g-3">';

    try {
        // Iterate over the (20) moves in the API URL and retrieve the display cards
        for(let i=0; i<allMovesData.results.length;i++){
            moveRow += await displayMove(allMovesData.results[i].url);
        }
        moveRow+="</div>"

        // Add Previous and Next buttons at the bottom
        let pagination = `<div class="mt-5">
                <nav aria-label="All Moves Page Navigation">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" onclick="fetchFromAPI('${allMovesData.previous}', handleAllMoves, './by-move.html')">Previous</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" onclick="fetchFromAPI('${allMovesData.next}', handleAllMoves, './by-move.html')">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>`;
        // Update the moves container 
        movesContainer.innerHTML=moveRow+pagination;
    }catch(error){
        console.log('Error handling all Pokémon: ', error);
    }
};

// Handling an Ability for pokemon.html?ability=AbilityXYZ
async function handlePokemonByAbility(allPokemonData){
    // Retrieve the Pokemon container
    const pokemonContainer = document.getElementById('pokemon');
    try {
        // Retrieve all effects of the ability
        let effect = "";
        for(let i=0;i<allPokemonData.effect_entries.length;i++){
            if(allPokemonData.effect_entries[i].language.name==="en"){
                effect+=allPokemonData.effect_entries[i].effect;
            }
        }

        // Retrieve all Pokemon that have the ability
        let pokemonRow = '<div class="row g-3">';
        for(let i=0; i<allPokemonData.pokemon.length;i++){
            pokemonRow += await displayPokemon(allPokemonData.pokemon[i].pokemon.url);
        }
        pokemonRow+="</div>"

        // Clear the Loading Spinner
        pokemonContainer.innerHTML = "";
        const pokemonElement = document.createElement('div');
        // This page includes the following information: Ability Name as the title, a description of the Effects, a list of the Pokemon that have the ability, plus the filter form at the bottom. 
        pokemonElement.innerHTML = `
            <h1 class="text-center mb-3" style="text-transform: capitalize;">${allPokemonData.name}</h1>
            <h2>Effect</h2>
            <div class="mb-3">${effect}</div>
            <h2>Pok&#233;mon with the Ability</h2>
            <div class="mt-4">${pokemonRow}</div>
            <div class="bg-light bg-opacity-75 m-5 p-5 rounded text-center">
                    <h1 id="title" class="h1 mb-4">Filter Pok&#233;mon by Ability</h1>
                    <form onsubmit="search(event, 'ability')">
                        <select class="form-select form-select-lg mb-3" aria-label="Large select example" id="ability" name="ability">
                            <option selected>Choose Pok&#233;mon Ability</option>
                            <option value="1">Stench</option>
                            <option value="2">Drizzle</option>
                            <option value="3">Speed-Boost</option>
                            <option value="4">Battle-Armor</option>
                            <option value="5">Sturdy</option>
                            <option value="6">Damp</option>
                            <option value="7">Limber</option>
                            <option value="8">Sand-Veil</option>
                            <option value="9">Static</option>
                            <option value="10">Volt-Absorb</option>
                            <option value="11">Water-Absorb</option>
                            <option value="12">Oblivious</option>
                            <option value="13">Cloud-Nine</option>
                            <option value="14">Compound-Eyes</option>
                            <option value="15">Insomnia</option>
                            <option value="16">Color-Change</option>
                            <option value="17">Immunity</option>
                            <option value="18">Flash-Fire</option>
                            <option value="19">Shield-Dust</option>
                            <option value="20">Own-Tempo</option>
                        </select>
                        <button type="submit" class="btn btn-lg btn-outline-danger mt-3">Filter</button>
                    </form>
                </div>`;
        pokemonContainer.appendChild(pokemonElement);
    }catch(error){
        console.log('Error handling all Pokémon: ', error);
    }
}

// Handling a Move for pokemon.html?move=MoveXYZ
async function handlePokemonByMove(allPokemonData) {
    try {
        // Retrieve the Pokemon Container
        const pokemonContainer = document.getElementById('pokemon');
        // Retrieve the Move Type
        let moveType = await displayType(allPokemonData.type.url);
        // Move Details includes a table with the following information: Accuracy, Power, PP, Damage Class, Effect, Type (linked), Generation (linked)
        let moveDetails = `
        <table class="table table-striped table-hover">
            <tbody>
                <tr>
                    <th scope="row">Accuracy</th>
                    <td style="text-transform: capitalize">${allPokemonData.accuracy}</td>
                </tr>
                <tr>
                    <th scope="row">Power</th>
                    <td style="text-transform: capitalize">${allPokemonData.power}</td>
                </tr>
                <tr>
                    <th scope="row">PP</th>
                    <td style="text-transform: capitalize">${allPokemonData.pp}</td>
                </tr>
                <tr>
                    <th scope="row">Damage Class</th>
                    <td style="text-transform: capitalize">${allPokemonData.damage_class.name}</td>
                </tr>
                <tr>
                    <th scope="row">Effect</th>
                    <td>${allPokemonData.effect_entries[0].effect}</td>
                </tr>
                <tr>
                    <th scope="row">Type</th>
                    <td>${moveType}</td>
                </tr>
                <tr>
                    <th scope="row">Generation</th>
                    <td style="text-transform: capitalize">
                    <a class="link" href="pokemon.html?generation=${encodeURIComponent(allPokemonData.generation.name)}">
                    ${allPokemonData.generation.name}</a></td>
                </tr>
            </tbody>
        </table>`;

        // Below the table are all the Pokemon that can learn the move displayed in linked cards
        let pokemonRow = '<div class="row g-3"><h2>Learned by Pok&#233;mon:</h2>';
        for(let i=0; i<allPokemonData.learned_by_pokemon.length;i++){
            pokemonRow += await displayPokemon(allPokemonData.learned_by_pokemon[i].url);
        }
        pokemonRow+="</div>"
        // Clear the container
        pokemonContainer.innerHTML = "";
        const pokemonElement = document.createElement('div');
        // Bring it all together plus the search function at the bottom
        pokemonElement.innerHTML = `<h1 class="text-center mb-3" style="text-transform: capitalize;">${allPokemonData.name}</h1>
        ${moveDetails}${pokemonRow}
        <div class="bg-light bg-opacity-75 m-5 p-5 rounded text-center">
                <h1 id="title" class="h1 mb-4">Search Pok&#233;mon Move</h1>
                <form onsubmit="search(event, 'move')">
                    <input id="move" name="move" class="form-control form-control-lg" type="text" placeholder="Enter Pok&#233;mon Move" aria-label="Enter Pok&#233;mon Move">
                    <button type="submit" class="btn btn-lg btn-outline-danger mt-3">Search</button>
                </form>
            </div> `;
        pokemonContainer.appendChild(pokemonElement);
    }catch(error){
        console.log('Error handling Pokémon: ', error);
    }
}

// Handling a Type for pokemon.html?type=TypeXYZ
async function handlePokemonByType(allPokemonData) {
    try {
        // Retrieve the Pokemon Container 
        const pokemonContainer = document.getElementById('pokemon');
        // Retrieve and display all the types that receive double damage from this type
        let doubleDamageFrom = "";
        if (allPokemonData.damage_relations.double_damage_from.length===0){
            doubleDamageFrom = `There are no types that deliver double damage to ${allPokemonData.name}.`;
        }
        for(let i=0; i<allPokemonData.damage_relations.double_damage_from.length; i++){
            doubleDamageFrom += await displayType(allPokemonData.damage_relations.double_damage_from[i].url);
        }
        // Retrieve and display all the types that perform double damage to this type
        let doubleDamageTo = "";
        if (allPokemonData.damage_relations.double_damage_to.length===0){
            doubleDamageTo = `There are no types that ${allPokemonData.name} delivers double damage to.`;
        }
        for(let i=0; i<allPokemonData.damage_relations.double_damage_to.length; i++){
            doubleDamageTo += await displayType(allPokemonData.damage_relations.double_damage_to[i].url);
        }
        // Retrieve and display all the types that receive half damage from this type
        let halfDamageFrom = "";
        if (allPokemonData.damage_relations.half_damage_from.length===0){
            halfDamageFrom = `There are no types that ${allPokemonData.name} delivers double damage to.`;
        }
        for(let i=0; i<allPokemonData.damage_relations.half_damage_from.length; i++){
            halfDamageFrom += await displayType(allPokemonData.damage_relations.half_damage_from[i].url);
        }
        // Retrieve and display all the types that perform half damage to this type
        let halfDamageTo = "";
        if (allPokemonData.damage_relations.half_damage_to.length===0){
            halfDamageTo = `There are no types that ${allPokemonData.name} delivers double damage to.`;
        }
        for(let i=0; i<allPokemonData.damage_relations.half_damage_to.length; i++){
            halfDamageTo += await displayType(allPokemonData.damage_relations.half_damage_to[i].url);
        }
        // Retrieve and display all the moves this type can do
        let pokemonMoves = "";
        for(let i=0; i<allPokemonData.moves.length; i++){
            pokemonMoves += await displayMove(allPokemonData.moves[i].url);
        }
        // Retrieve and display all the Pokemon of this type
        let pokemonRow = '<div class="row g-3">';
        for(let i=0; i<allPokemonData.pokemon.length;i++){
            pokemonRow += await displayPokemon(allPokemonData.pokemon[i].pokemon.url);
        }
        pokemonRow+="</div>"
        // Clear the Pokemon Container
        pokemonContainer.innerHTML = "";
        const pokemonElement = document.createElement('div');
        // Bring it all together in an accordion, which will display the Attack Advantage, Defense Advantage, Attack Disadvantage, Defense Disadvantage, Moves, and Pokemon and finally the filter function at the bottom
        pokemonElement.innerHTML = `<h1 class="text-center mb-3" style="text-transform: capitalize;">${allPokemonData.name}</h1>
        <div class="accordion mt-5" id="pokemonInfoAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Attack Advantage
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <p>This type delivers <strong>double damage</strong> to the following types:
                        <div class="row g-4">${doubleDamageTo}</div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Defense Advantage
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <p>This type receives <strong>half damage</strong> from the following types:
                        <div class="row g-4">${halfDamageFrom}</div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Attack Disadvantage
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <p>This type delivers <strong>half damage</strong> to the following types:
                        <div class="row g-4">${halfDamageTo}</div>
                        </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Defense Disadvantage
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <p>This type receives <strong>double damage</strong> from the following types:
                        <div class="row g-4">${doubleDamageFrom}</div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                        Moves
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <div class="row g-4">${pokemonMoves}</div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                        Pok&#233;mon
                    </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <div class="row g-4">${pokemonRow}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light bg-opacity-75 m-5 p-5 rounded text-center">
                <h1 id="title" class="h1 mb-4">Filter Pok&#233;mon by Type</h1>
                <form onsubmit="search(event, 'type')">
                    <select class="form-select form-select-lg mb-3" aria-label="Large select example" id="type" name="type">
                        <option selected>Choose Pok&#233;mon Type</option>
                        <option value="1">Normal</option>
                        <option value="2">Fighting</option>
                        <option value="3">Flying</option>
                        <option value="4">Poison</option>
                        <option value="5">Ground</option>
                        <option value="6">Rock</option>
                        <option value="7">Bug</option>
                        <option value="8">Ghost</option>
                        <option value="9">Steel</option>
                        <option value="10">Fire</option>
                        <option value="11">Water</option>
                        <option value="12">Grass</option>
                        <option value="13">Electric</option>
                        <option value="14">Psychic</option>
                        <option value="15">Ice</option>
                        <option value="16">Dragon</option>
                        <option value="17">Dark</option>
                        <option value="18">Fairy</option>
                        <option value="19">Stellar</option>
                    </select>
                    <button type="submit" class="btn btn-lg btn-outline-danger mt-3">Filter</button>
                </form>
            </div>`;
        pokemonContainer.appendChild(pokemonElement);
    }catch(error){
        console.log('Error handling pokemon: ', error);
    }
}

// Handling a Generation for pokemon.html?generation=GenerationXYZ
async function handlePokemonByGeneration(allPokemonData) {
    try {
        // Retrieve the Pokemon Container
        const pokemonContainer = document.getElementById('pokemon');
        // Retrieve the Main Region
        let mainRegion = "<div class='text-center h2' style='text-transform:capitalize;'>"+allPokemonData.main_region.name+"</div>";
        // Retrieve the Version Groups as unlinked badges
        let versionGroups = "";
        for(let i=0; i<allPokemonData.version_groups.length; i++){
            versionGroups += `<div class="col-3">
                            <h3><span class="badge text-bg-dark text-light rounded-pill" style="text-transform:capitalize">${allPokemonData.version_groups[i].name}</span></h3>
                    </div>`;
        }
        // Retrieve and display the moves available in this generation
        let pokemonMoves = "";
        for(let i=0; i<allPokemonData.moves.length; i++){
            pokemonMoves += await displayMove(allPokemonData.moves[i].url);
        }
        // Retrieve and display the types available in this generation
        let pokemonTypes = "";
        if(allPokemonData.types.length===0){
            pokemonTypes = "This generation has no types."
        }
        for(let i=0; i<allPokemonData.types.length; i++){
            pokemonTypes += await displayType(allPokemonData.types[i].url);
        }
        // Retrieve and display the Pokemon available in this generation
        let pokemonRow = '<div class="row g-3">';
        for(let i=0; i<allPokemonData.pokemon_species.length;i++){
            let url = allPokemonData.pokemon_species[i].url;
            url = url.replace("-species", "");
            pokemonRow += await displayPokemon(url);
        }
        pokemonRow+="</div>"
        // Clear the Pokemon Container
        pokemonContainer.innerHTML = "";
        const pokemonElement = document.createElement('div');
        // Bring it all together in an accordion featuring the Main Region, Version Groups, Moves, Types, and Pokemon, plus the filter function at the bottom
        pokemonElement.innerHTML = `<h1 class="text-center mb-3" style="text-transform: uppercase;">${allPokemonData.name}</h1>
        <div class="accordion mt-5" id="pokemonInfoAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Main Region
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        ${mainRegion}
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Version Groups
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <div class="row g-4">${versionGroups}</div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Types
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <div class="row g-4">${pokemonTypes}</div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Pok&#233;mon Moves
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <div class="row g-4">${pokemonMoves}</div>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                        Pok&#233;mon Species
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <div class="row g-4">${pokemonRow}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light bg-opacity-75 m-5 p-5 rounded text-center">
                <h1 id="title" class="h1 mb-4">Filter Pok&#233;mon by Generation</h1>
                <form onsubmit="search(event, 'generation')">
                    <select class="form-select form-select-lg mb-3" aria-label="Pokemon Generation Select" id="generation" name="generation">
                        <option selected>Choose Pok&#233;mon Generation</option>
                        <option value="1">Generation I</option>
                        <option value="2">Generation II</option>
                        <option value="3">Generation III</option>
                        <option value="4">Generation IV</option>
                        <option value="5">Generation V</option>
                        <option value="6">Generation VI</option>
                        <option value="7">Generation VII</option>
                        <option value="8">Generation VIII</option>
                        <option value="9">Generation IX</option>
                    </select>
                    <button type="submit" class="btn btn-lg btn-outline-danger mt-3">Filter</button>
                </form>
            </div>`;
        pokemonContainer.appendChild(pokemonElement);
    }catch(error){
        console.log('Error handling pokemon: ', error);
    }
}

// Handling a Pokemon for pokemon.html?name=NameXYZ
async function handleOnePokemon(pokemonData) {
    try {
        // Retrieve the Pokemon Container
        const pokemonContainer = document.getElementById('pokemon');
        // Retrieve and display all corresponding types
        let pokemonTypes = "";
        for(let i=0; i<pokemonData.types.length; i++){
            pokemonTypes += await displayType(pokemonData.types[i].type.url);
        }
        // Retrieve and display all corresponding abilities
        let pokemonAbilities = "";
        for(let i=0; i<pokemonData.abilities.length; i++){
            pokemonAbilities += await displayAbility(pokemonData.abilities[i].ability.url);

        }
        // Retrieve and display all corresponding moves
        let pokemonMoves = "";
        for(let i=0; i<pokemonData.moves.length; i++){
            pokemonMoves += await displayMove(pokemonData.moves[i].move.url);
        }
        // Retrieve and display all corresponding held items (if none, "No held items")
        let pokemonItems = "";
        if(pokemonData.held_items.length===0){
            pokemonItems+="<div>No held items.</div>"
        }
        for(let i=0; i<pokemonData.held_items.length; i++){
            pokemonItems += await displayHeldItems(pokemonData.held_items[i].item.url);
        }
        // Retrieve and display all corresponding generations
        let pokemonGenerations = await displayGenerations(pokemonData);
        // Retrieve and display all corresponding base stats
        let pokemonStats = await displayStats(pokemonData);
        // Clear Loading Spinner from Pokemon Container
        pokemonContainer.innerHTML = "";
        const pokemonElement = document.createElement('div');
        // Bring it all together in an accordion, including a carousel with official artwork of the Pokemon, the name as the title, the Appearance (height and weight) of the Pokemon, Types, Abilities, Moves, Held Items, Base Stats, and Generations, along with the search function at the bottom
        pokemonElement.innerHTML = `
        <center><div id="pokemonSpriteCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="${pokemonData.sprites.other["official-artwork"].front_default}" class="d-block" style="width:300px;" alt="${pokemonData.name} Image 1">
                </div>
                <div class="carousel-item">
                <img src="${pokemonData.sprites.other["official-artwork"].front_shiny}" class="d-block" style="width:300px;" alt="${pokemonData.name} Image 2">
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#pokemonSpriteCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#pokemonSpriteCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        <h1 style="text-transform: capitalize">${pokemonData.name}</h1></center>

        <div class="accordion mt-5" id="pokemonInfoAccordion">
        <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Appearance
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <div class="row text-center">
                            <div class="col"><strong>Height</strong>: ${pokemonData.height}mm</div>
                            <div class="col"><strong>Weight</strong>: ${pokemonData.weight}g</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Types
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                            <div class="row g-4">${pokemonTypes}</div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Abilities
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <div class="row g-4">${pokemonAbilities}</div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                        Moves
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <div class="row g-4">${pokemonMoves}</div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                        Held Items
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <div class="row g-4">${pokemonItems}</div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                        Base Stats
                    </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        ${pokemonStats}
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                        Generations
                    </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#pokemonInfoAccordion">
                    <div class="accordion-body">
                        <div class="row g-4">${pokemonGenerations}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light bg-opacity-75 m-5 p-5 rounded text-center">
                <h1 id="title" class="h1 mb-4">Search Pok&#233;mon by Name</h1>
                <form onsubmit="search(event, 'name')">
                    <input id="name" name="name" class="form-control form-control-lg" type="text" placeholder="Enter Pok&#233;mon Name" aria-label="Enter Pok&#233;mon Name">
                    <button type="submit" class="btn btn-lg btn-outline-danger mt-3">Search</button>
                </form>
            </div>`;
        pokemonContainer.appendChild(pokemonElement);
    }catch(error){
        console.log('Error handling Pokémon: ', error);
    }
}

// FUNCTIONS TO BE TRIGGERED BY SEARCH AND FILTER FORM CLICKS

function search(event, inputValue) {
    event.preventDefault(); // Prevent form submission and page reload

    const input = document.getElementById(inputValue).value.trim().toLowerCase();

    if (input) {
        // Redirect to a new page with the Pok&#233;mon name as a query parameter
        window.location.href = `pokemon.html?${inputValue}=${encodeURIComponent(input)}`;
    } else {
        alert(`Please enter a Pokémon ${inputValue}.`);
    }
}

// Event Listener Function loads the correct content according to the search parameters
document.addEventListener('DOMContentLoaded', function() {
    // If the URL includes (pokemon.html)
    if (window.location.pathname.includes('pokemon.html')) {
        // Get the query string from the URL
        const queryString = window.location.search;
        // Create a URLSearchParams object
        const urlParams = new URLSearchParams(queryString);

        // Extract the different parameters (type, ability, move, generation, name)
        const pokemonType = urlParams.get('type');
        const pokemonAbility = urlParams.get('ability');
        const pokemonMove = urlParams.get('move');
        const pokemonGeneration = urlParams.get('generation');
        const pokemonName = urlParams.get('name');

        // For whichever parameter exists, fetch the data using the corresponding handle function and URL to go back to if there's an error
        if (pokemonType) {
            console.log(`Searching for Pokémon type: ${pokemonType}`);
            fetchFromAPI(`https://pokeapi.co/api/v2/type/${pokemonType}`, handlePokemonByType, './by-type.html');
        } else if (pokemonAbility){
            console.log(`Searching for Pokémon ability: ${pokemonAbility}`);
            fetchFromAPI(`https://pokeapi.co/api/v2/ability/${pokemonAbility}`, handlePokemonByAbility, './by-ability.html');
        } else if (pokemonMove){
            console.log(`Searching for Pokémon move: ${pokemonMove}`);
            fetchFromAPI(`https://pokeapi.co/api/v2/move/${pokemonMove}`, handlePokemonByMove, './by-move.html');
        } else if (pokemonGeneration){
            console.log(`Searching for Pokémon generation: ${pokemonGeneration}`);
            fetchFromAPI(`https://pokeapi.co/api/v2/generation/${pokemonGeneration}`, handlePokemonByGeneration, './by-generation.html');
        }else if (pokemonName) {
            console.log(`Searching for Pokémon: ${pokemonName}`);
            fetchFromAPI(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, handleOnePokemon, './search.html');
        }else{
            console.log('Displaying all Pokémon.');
            fetchFromAPI('https://pokeapi.co/api/v2/pokemon', handleAllPokemon, './search.html');
        }
    // If the URL ends in by-move.html, we need to display all moves
    }else if(window.location.pathname.includes('by-move.html')) {
        fetchFromAPI('https://pokeapi.co/api/v2/move', handleAllMoves, './by-move.html');
    }
});

// Function to fetch from the API requiring the API URL, a callback function to handle the data and an error URL to handle an error
async function fetchFromAPI(apiURL, handleData, errorURL) {
    if (!apiURL) return;
    try {
        const response = await fetch(apiURL);
        const apiData = await response.json();
        handleData(apiData);
    }catch(error){
        console.log('Error fetching from the API: ', error);
        handleError(errorURL);
    }
}