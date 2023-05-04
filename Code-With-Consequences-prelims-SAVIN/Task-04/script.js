document.addEventListener('DOMContentLoaded', () => {
    // Fetch the list of Pokemons
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        const pokemons = data.results;
        const typeDropdown = document.getElementById('type-select');

        const filterPokemons = () => {
          const type = typeDropdown.value;
          let filteredPokemons;

          if (type) {
            filteredPokemons = pokemons.filter(pokemon => pokemon.types.some(typeData => typeData.type.name === type));
          } else {
            filteredPokemons = pokemons;
          }

          displayPokemons(filteredPokemons);
        };

        const displayPokemons = (pokemons) => {
          const pokemonList = document.getElementById('pokemon-list');
          pokemonList.innerHTML = '';

    pokemons.forEach(pokemon => {
      // Fetch the Pokemon details
      fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
          const pokemonCard = document.createElement('div');
          pokemonCard.classList.add('col-md-3', 'mb-4');

          const pokemonImage = document.createElement('img');
          pokemonImage.classList.add('card-img-top');
          pokemonImage.src = data.sprites.front_default;
          pokemonImage.alt = data.name;

          const pokemonCardBody = document.createElement('div');
          pokemonCardBody.classList.add('card-body');

          const pokemonName = document.createElement('h5');
          pokemonName.classList.add('card-title');
          pokemonName.textContent = data.name;

          const pokemonType = document.createElement('p');
          pokemonType.classList.add('card-text');
          pokemonType.textContent = data.types.map(typeData => typeData.type.name).join(', ');

          const pokemonButton = document.createElement('button');
          pokemonButton.classList.add('btn', 'btn-secondary');
          pokemonButton.textContent = 'View Details';
          pokemonButton.addEventListener('click', () => {
            const modalTitle = document.querySelector('#pokemon-modal .modal-title');
            const modalBody = document.querySelector('#pokemon-modal .modal-body');
            modalTitle.textContent = data.name;

            const modalImage = document.createElement('img');
            modalImage.src = data.sprites.front_default;
            modalImage.alt = data.name;
            modalBody.innerHTML = '';
            modalBody.appendChild(modalImage);

            const modalTable = document.createElement('table');
            modalTable.classList.add('table');

            const heightRow = document.createElement('tr');
            const heightLabel = document.createElement('td');
            heightLabel.textContent = 'Height';
            const heightValue = document.createElement('td');
            heightValue.textContent = `${data.height / 10} m`;
            heightRow.appendChild(heightLabel);
            heightRow.appendChild(heightValue);
            modalTable.appendChild(heightRow);

            const weightRow = document.createElement('tr');
            const weightLabel = document.createElement('td');
            weightLabel.textContent = 'Weight';
            const weightValue = document.createElement('td');
            weightValue.textContent = `${data.weight / 10} kg`;
            weightRow.appendChild(weightLabel);
            weightRow.appendChild(weightValue);
            modalTable.appendChild(weightRow);

            const abilitiesRow = document.createElement('tr');
            const abilitiesLabel = document.createElement('td');
            abilitiesLabel.textContent = 'Abilities';
            const abilitiesValue = document.createElement('td');
            abilitiesValue.textContent = data.abilities.map(abilityData => abilityData.ability.name).join(', ');
            abilitiesRow.appendChild(abilitiesLabel);
            abilitiesRow.appendChild(abilitiesValue);
            modalTable.appendChild(abilitiesRow);

            modalBody.appendChild(modalTable);

            const modal = new bootstrap.Modal(document.getElementById('pokemon-modal'));
            modal.show();
          });

          pokemonCardBody.appendChild(pokemonName);
          pokemonCardBody.appendChild(pokemonType);
          pokemonCardBody.appendChild(pokemonButton);

          pokemonCard.appendChild(pokemonImage);
          pokemonCard.appendChild(pokemonCardBody);

          pokemonList.appendChild(pokemonCard);
        });
});
};

typeDropdown.addEventListener('change', filterPokemons);

displayPokemons(pokemons);
});
});
