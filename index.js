const container = document.getElementById('container');
const signInButton = document.getElementById('login');
const signUpButton = document.getElementById('register');

signUpButton.addEventListener('click', () => {
    container.classList.add('active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('active');
});
