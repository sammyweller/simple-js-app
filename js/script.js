
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

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonButton');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.addEventListener('click', function (event) {
          showDetails(pokemon);
          console.log(event);
        });
      }

      function showDetails(pokemon) {
        console.log(pokemon);
      }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();




pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
