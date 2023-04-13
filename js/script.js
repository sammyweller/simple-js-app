let pokemonList = [
    {
        name: 'Pikachu',
        height: 0.4,
        types: 'Electric',
    },

    {
        name: 'Jigglypuff',
        height: 1,
        types: ['normal', 'fairy']
    },

    {
        name: 'Venomoth',
        height: 1.5,
        types: ['bug', 'poison']
    },
];


//conditional to highlight each pokemon based on height threshold//

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 1.4 && pokemonList[i].height >= 1) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "- Cool! That's average.<br>");
    }
    else if (pokemonList[i].height < 0.9) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "- That's pretty short. Cute!<br>");
    }
    else {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "- Wow, that's huge!<br>");
    }
}