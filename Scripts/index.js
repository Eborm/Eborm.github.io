const triggerElement = document.querySelector('.Projects');
const elementToShow = document.querySelector('.Plang');
const elementTohide = document.querySelector('.DropDownIcon');
const elementUp = document.querySelector('.Up');

// Add a click event listener to the trigger element
triggerElement.addEventListener('click', () => {
    // Toggle the element's visibility on each click
    if (elementToShow.style.visibility === 'hidden') {
        elementToShow.style.opacity = '1';
        elementTohide.style.opacity = '0';
        elementUp.style.opacity = '1';
        elementToShow.style.visibility = 'visible';
        elementTohide.style.visibility = 'hidden';
        elementUp.style.visibility = 'visible';
    } else {
        elementToShow.style.opacity = '0';
        elementTohide.style.opacity = '1';
        elementUp.style.opacity = '0';
        elementToShow.style.visibility = 'hidden';
        elementTohide.style.visibility = 'visible';
        elementUp.style.visibility = 'hidden';
    }
});
