// scripts.js

document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('thumbnail');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        const thumbnailPath = reader.result;

        const gameDetails = {
            thumbnail: thumbnailPath,
            name: document.getElementById('name').value,
            size: document.getElementById('size').value,
            processor: document.getElementById('processor').value,
            gpu: document.getElementById('gpu').value,
            ram: document.getElementById('ram').value,
            storage: document.getElementById('storage').value,
            link: document.getElementById('link').value
        };

        if (!gameDetails.link) {
            alert('Please enter the cloud drive link.');
            return;
        }

        let gameGallery = JSON.parse(localStorage.getItem('gameGallery')) || [];
        gameGallery.push(gameDetails);
        localStorage.setItem('gameGallery', JSON.stringify(gameGallery));

        alert('Game uploaded successfully!');
        window.location.href = 'index.html';
    };

    reader.readAsDataURL(file);
});
