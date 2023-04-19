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

pokemonList.forEach(function (pokemon) {
    if (pokemonList.height < 1.4 && pokemonList.height >= 1) {
        document.write(pokemonList.name + " (height: " + pokemonList.height + ") " + "- Cool! That's average.<br>");
    }
    else if (pokemonList.height < 0.9) {
        document.write(pokemonList.name + " (height: " + pokemonList.height + ") " + "- That's pretty short. Cute!<br>");
    }
    else {
        document.write(pokemonList.name + " (height: " + pokemonList.height + ") " + "- Wow, that's huge!<br>");
    }
});
