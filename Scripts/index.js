const triggerElement = document.querySelector('.Projects');
const elementToShow = document.querySelector('.Plang');

// Add a hover event listener to the trigger element
triggerElement.addEventListener('mouseenter', () => {
    // Make the element to show visible
    elementToShow.style.visibility = 'visible';
});

elementToShow.addEventListener('mouseenter', () => {
    // Keep the element visible
    elementToShow.style.visibility = 'visible';
});

// Add a mouseleave event listener to hide the element when not hovering
triggerElement.addEventListener('mouseleave', () => {
    // Hide the element
    elementToShow.style.visibility = 'hidden';
});
