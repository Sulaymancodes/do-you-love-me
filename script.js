const imgContainer = document.querySelector('#gif-container');
const yesBtn =  document.querySelector('.yes');
const noBtn = document.querySelector('.no');

yesBtn.addEventListener('click', ()=> {
    imgContainer.src='images/giphy1.webp';
})

noBtn.addEventListener('mouseover', moveButton);

function moveButton() {
    noBtn.style.position = 'absolute';

    // Get the window width and height
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Generate random positions within the window bounds
    const randomX = Math.floor(Math.random() * (windowWidth - noBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - noBtn.offsetHeight));

    // Apply new positions to the button
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

}