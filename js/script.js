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

for (let i = 0; i < pokemonList.length; i++) {
    document.write (pokemonList[i].name + " (height: " + pokemonList[i].height + ") ")
  }