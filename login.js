// scripts.js

function chooseRole(role) {
    localStorage.setItem('userRole', role);
    window.location.href = 'index.html';
}
