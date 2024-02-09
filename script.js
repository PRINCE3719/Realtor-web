const container = document.querySelector('.scroll-container');
const images = document.querySelectorAll('.scroll-container img');
const imageWidth = images[0].clientWidth;


images.forEach(img => {
    container.appendChild(img.cloneNode(true));
});


container.style.width = `${imageWidth * images.length}px`;


let currentPosition = 0;
const scroll = () => {
    currentPosition -= 3; 
    if (currentPosition <= -imageWidth * (images.length / 2)) {
        currentPosition = 0;
    }
    container.style.transform = `translateX(${currentPosition}px)`;
    requestAnimationFrame(scroll);
};
scroll();