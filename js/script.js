
let pokemonRepository = (function () {
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

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();



//conditional to highlight each pokemon based on height threshold//

pokemonRepository.getAll().forEach(function (pokemon) {
    if (pokemon.height < 1.4 && pokemon.height >= 1) {
      document.write(pokemon.name + " (height: " + pokemon.height + ") " + "- Cool! That's average.<br>");
    }
    else if (pokemon.height < 0.9) {
      document.write(pokemon.name + " (height: " + pokemon.height + ") " + "- That's pretty short. Cute!<br>");
    }
    else {
      document.write(pokemon.name + " (height: " + pokemon.height + ") " + "- Wow, that's huge!<br>");
    }
  });
