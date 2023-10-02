const triggerElement = document.querySelector('.Projects');
const elementToShow = document.querySelector('.Plang');

let isMouseInsidePlang = false;

function showElement() {
    elementToShow.style.visibility = 'visible';
}

function hideElement() {
    if (!isMouseInsidePlang) {
        elementToShow.style.visibility = 'hidden';
    }
}

// Add a hover event listener to the trigger element
triggerElement.addEventListener('mouseenter', showElement);

// Add a mouseleave event listener to hide the element when not hovering over the trigger element
triggerElement.addEventListener('mouseleave', hideElement);

// Add a mouseenter event listener to track when the mouse enters the Plang element
elementToShow.addEventListener('mouseenter', () => {
    isMouseInsidePlang = true;
    showElement(); // Show the element when the mouse enters
});

// Add a mouseleave event listener to track when the mouse leaves the Plang element
elementToShow.addEventListener('mouseleave', () => {
    isMouseInsidePlang = false;
    hideElement(); // Hide the element when the mouse leaves if not already inside
});
