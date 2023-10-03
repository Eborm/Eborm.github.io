const triggerElement = document.querySelector('.Projects');
const elementToShow = document.querySelector('.Plang');
const elementTohide = document.querySelector('.DropDownIcon');
const elementUp = document.querySelector('.Up');

let isMouseInsidePlang = false;

function showElements() {
    elementToShow.style.visibility = 'visible';
    elementToShow.style.opacity = '1';
    elementTohide.style.visibility = 'hidden';
    elementTohide.style.opacity = '0';
    elementUp.style.visibility = 'visible';
    elementUp.style.opacity = '1';
}

function hideElements() {
    if (!isMouseInsidePlang) {
        elementToShow.style.opacity = '0';
        elementTohide.style.opacity = '1';
        elementUp.style.opacity = '0';
        setTimeout(() => {
            elementToShow.style.visibility = 'hidden';
            elementTohide.style.visibility = 'visible';
            elementUp.style.visibility = 'hidden';
        }, 500); // Adjust the delay to match the transition duration
    }
}

// Add a hover event listener to the trigger element
triggerElement.addEventListener('mouseenter', showElements);

// Add a mouseleave event listener to hide the elements when not hovering over the trigger element
triggerElement.addEventListener('mouseleave', hideElements);

// Add a mouseenter event listener to track when the mouse enters the Plang element
elementToShow.addEventListener('mouseenter', () => {
    isMouseInsidePlang = true;
    showElements(); // Show the elements when the mouse enters
});

// Add a mouseleave event listener to track when the mouse leaves the Plang element
elementToShow.addEventListener('mouseleave', () => {
    isMouseInsidePlang = false;
    hideElements(); // Hide the elements when the mouse leaves if not already inside
});
