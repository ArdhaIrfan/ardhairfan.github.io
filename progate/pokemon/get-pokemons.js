const poke_container = document.getElementById('poke_container');
const bg_color = {
	fire: '#E69D8D',
	grass: '#8DD694',
	electric: '#E7C859',
	water: '#8DC6E6',
	ground: '#EFBE85',
	rock: '#B99D72',
	fairy: '#EEA1E2',
	poison: '#A55DB1',
	bug: '#BDDD7A',
	dragon: '#8859D5',
	psychic: '#D053BC',
	flying: '#C9ADEC',
	fighting: '#E07F60',
	normal: '#B1B1B1'
};
const border_color = {
	fire: '#C67D6D',
	grass: '#5DAD65',
	electric: '#D0B34A',
	water: '#6F9ECA',
	ground: '#D0A068',
	rock: '#957D59',
	fairy: '#C77FBC',
	poison: '#8A4A95',
	bug: '#A2C170',
	dragon: '#724CAE',
	psychic: '#A44094',
	flying: '#A485CC',
	fighting: '#B1664F',
	normal: '#959595'
};

const main_types = Object.keys(bg_color);

const getPokemons = async (pokemons_number) => {
    for (let i=1; i<=pokemons_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    console.log(pokemon.sprites.front_default);
    createPokemonCard(pokemon);
}

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

	const poke_id = pokemon.id;
    const poke_types = pokemon.types.map(el => el.type.name);
	const typee = main_types.find(type => poke_types.indexOf(type) > -1);
	const type = typee[0].toUpperCase() + typee.slice(1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const image = pokemon.sprites.front_default;
	const bgcolor = bg_color[typee];
	const bdcolor = border_color[typee];

	console.log(typee);

	pokemonEl.style.backgroundColor = bgcolor;
	pokemonEl.style.borderColor = bdcolor;

    const pokeInnerHTML = `
        <div class="img-container">
			<p style="margin-top: 0;">${poke_id}</p>
            <img src="${image}">
            <p>${name}</p>
            <small class="type">Type: <span>${type}</small>
        </div>
    `;

    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}
