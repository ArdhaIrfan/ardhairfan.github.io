const pokeContainer = document.getElementById('card');

const fetchPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            showPokemon(data);
        });
}

function showPokemon(pokemon) {
    console.log(pokemon.name);
    console.log(pokemon.id)
    console.log(pokemon.sprites.front_default);
    console.log(pokemon.types.map(el => el.type.name));

    const card = document.getElementById('card');
    while (card.hasChildNodes()) {
        card.removeChild(card.firstChild);
    }

    const nameElement = document.createElement('h2');
    const numberElement = document.createElement('h4');
    const imageElement = document.createElement('img');
    const typeElement = document.createElement('h3');
    const typeWord = document.createElement('h6');

    nameElement.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    numberElement.innerText = pokemon.id;
    imageElement.src = pokemon.sprites.front_default;
    typeWord.innerText = 'Type';
    typeElement.innerText = pokemon.types.map(el => el.type.name);

    card.appendChild(nameElement);
    card.appendChild(numberElement);
    card.appendChild(imageElement);
    card.appendChild(typeWord);
    card.appendChild(typeElement);

    card.classList.add('show');
}

// function fetchPokemons(number) {
//     for (let i = 1; i <= number; i++) {
//         fetchPokemon(i);
//     }
// }