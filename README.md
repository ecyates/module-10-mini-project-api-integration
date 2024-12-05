# Module 10 - Mini-Project - API Integration
Author: Elizabeth Yates

## Introduction

In this PokeAPI Integration project, I developed a web application that seamlessly integrates with the PokeAPI (https://pokeapi.co/), providing users with an immersive experience into the world of Pokémon. Leveraging HTML, Bootstrap, CSS, and JavaScript, I created a dynamic and interactive platform for exploring Pokémon data and information.

## Technologies and Resources Used
- HTML
- Bootstrap
- CSS 
- JavaScript
- PokeAPI (https://pokeapi.co/)
- Unsplash Images (https://unsplash.com/)
- Pokémon Color Palette for the Types (https://www.reddit.com/r/pokemon/comments/14m5v1b/colour_of_each_pok%C3%A9mon_type_in_every_game_oc/#lightbox)

## Pages Folder

### Home Page (index.html)
- Visually appealing landing page with interactive navbar (present on all pages), welcome banner, introduction, and footer (present on all pages).
- Responsive design principles to ensure compatibility across various devices and screen sizes (present on all pages).

### Pokémon Search Page (search.html)
- A search page where users can enter a Pokémon's name to search for a given Pokémon.
- If the user leaves the input field blank or inputs an incorrect Pokémon name, the page will alert the user and bring the user back to the page.
- If the user inputs a correct Pokémon name, the page will redirect to `pokemon.html/?name=###` and will display the Pokémon's details.

### Pokémon Details Page (pokemon.html?name=###)
- While loading the details, a loading Pokéball icon will appear, indication that it's loading. 
- The Pokémon's details includes: 
    - Image
    - Appearance (Height and Weight)
    - Types
    - Abilities
    - Held Items
    - Base Stats
    - Generations
- Where possible (i.e., types, abilities, moves, and generations), the information will be hyperlinked and the user can follow those links to that characteristic's details. 
- At the bottom, another search function will appear to search for another Pokemon by name. 

### Browse Pokémon Page (pokemon.html)
- On this page, the first 20 Pokémon will be pulled and displayed to the user. 
- They will be hyperlinked such that the user can follow the link to the Pokémon's details. 
- At the bottom, the will be Previous/Next buttons to view the next (previous) 20 Pokémon. 
- Below this, a search function appears so the user can find a particular Pokémon's details without browsing all of them. 

### Pokémon Types Filter Page (by-type.html)
- A search page where users can select a type from a dropdown menu to search for that type's details and information. 
- The 20 Types include: 
    - normal
    - fighting
    - flying
    - poison
    - ground
    - rock
    - bug
    - ghost
    - steel
    - fire
    - water
    - grass
    - electric
    - psychic
    - ice
    - dragon
    - dark
    - fairy
    - stellar
    - unknown
- If the user doesn't select any type, the page will alert the user and bring them back to this page. 
- If the user selects a type, the page will redirect to `pokemon.html/?type=###` and will display the type's details. 
- Note: When displaying, types will appear as badges with a corresponding background color based loosely on this color guide: https://www.reddit.com/r/pokemon/comments/14m5v1b/colour_of_each_pok%C3%A9mon_type_in_every_game_oc/#lightbox. 

### Types Details Page (pokemon.html?type=###)
- While loading the details, a loading Pokéball icon will appear, indication that it's loading. 
- The Pokémon type's details include: 
    - Attack Advantage (Types that receive double damage from the selected type)
    - Defense Advantage (Types that perform half damage to the selected type)
    - Attack Disadvantage (Types that perform double damage to the selected type)
    - Defense Disadvantage (Types that receive half damage from the selected type)
    - Moves
    - Pokémon
- Where possible (i.e., Pokémon, types, and moves), the information will be hyperlinked and the user can follow those links to that characteristic or Pokémon's details. 
- At the bottom, another search function will appear to select another type. 

### Pokémon Abilities Filter Page (by-ability.html)
- A search page where users can select an ability from a dropdown menu to search for that ability's details and information. 
- The 20 Abilities include: 
    - Stench
    - Drizzle
    - Speed-Boost
    - Battle-Armor
    - Sturdy
    - Damp
    - Limber
    - Sand-Veil
    - Static
    - Volt-Absorb
    - Water-Absorb
    - Oblivious
    - Cloud-Nine
    - Compound-Eyes
    - Insomnia
    - Color-Change
    - Immunity
    - Flash-Fire
    - Shield-Dust
    - Own-Tempo
- If the user doesn't select any ability, the page will alert the user and bring them back to this page. 
- If the user selects a ability, the page will redirect to `pokemon.html/?ability=###` and will display the ability's details. 

### Ability Details Page (pokemon.html?ability=###)
- While loading the details, a loading Pokéball icon will appear, indication that it's loading. 
- The Pokémon ability's details include: 
    - Effect Description
    - Pokémon with the Ability
- Where possible (i.e., Pokémon), the information will be hyperlinked and the user can follow those links to that Pokémon's details. 
- At the bottom, another search function will appear to select another ability. 

### Pokémon Moves Filter Page (by-move.html)
- A search page where users can search for a move's details and information. 
- If the user doesn't fill in any move but clicks the button, the page will alert the user and bring them back to this page. 
- If the user fills in a correct move, the page will redirect to `pokemon.html/?move=###` and will display the moves's details. 
- Since there are too many moves to list on one page, we display the first 20 below the search function, with Previous/Next buttons to go to the next (previous) 20 moves. 

### Move Details Page (pokemon.html?move=###)
- While loading the details, a loading Pokéball icon will appear, indication that it's loading. 
- The Pokémon move's details include a table with the following information, along with the Pokémon that learn that move
    - Accuracy
    - Power
    - PP
    - Damage Class
    - Effect
    - Type
    - Generation
- Where possible (i.e., Pokémon, type, and generation), the information will be hyperlinked and the user can follow those links to that Pokémon or the characteristics's details. 
- At the bottom, another search function will appear to search for another move. 

### Pokémon Generation Filter Page (by-generation.html)
- A search page where users can select a generation from a dropdown menu to search for that generation's details and information. 
- The generations include Generation I-IX
- If the user doesn't select in any generation, the page will alert the user and bring them back to this page. 
- If the user selects a generation, the page will redirect to `pokemon.html/?generation=###` and will display the generation's details. 

### Move Details Page (pokemon.html?generation=###)
- While loading the details, a loading Pokéball icon will appear, indication that it's loading. 
- The generation's details include:
    - Main Region
    - Version Groups
    - Types
    - Pokémon Moves
    - Pokémon Species
- Where possible (i.e., Pokémon Species, types, and moves), the information will be hyperlinked and the user can follow those links to that Pokémon or the characteristics's details. 
- At the bottom, another search function will appear to select another generation.

## Images Folder

All images were sourced from www.unsplash.com so I'd like to extend a very special thank you to all the amazing photographers and designers over there. 

*This code can be found in this repository:*
*https://github.com/ecyates/module-10-mini-project-api-integration.git*