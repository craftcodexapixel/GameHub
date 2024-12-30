// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const gameGallery = JSON.parse(localStorage.getItem('gameGallery')) || [];
    displayGames(gameGallery);
});

function displayGames(gameGallery) {
    const gamesContainer = document.getElementById('games');

    gamesContainer.innerHTML = '';
    gameGallery.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        
        const thumbnail = document.createElement('img');
        thumbnail.src = game.thumbnail;
        gameCard.appendChild(thumbnail);
        
        const name = document.createElement('h3');
        name.textContent = game.name;
        gameCard.appendChild(name);
        
        const size = document.createElement('p');
        size.textContent = `Size: ${game.size}`;
        gameCard.appendChild(size);
        
        const requirements = document.createElement('p');
        requirements.textContent = `Requirements: ${game.requirements}`;
        gameCard.appendChild(requirements);
        
        const link = document.createElement('a');
        link.href = game.link;
        link.textContent = 'Download';
        gameCard.appendChild(link);
        
        gamesContainer.appendChild(gameCard);
    });
}
