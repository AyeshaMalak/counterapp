// Get the elements by their updated IDs
const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');
const resetButton = document.getElementById('resetButton');
const counterDisplay = document.getElementById('counterDisplay');

// Initialize the counter value
let count = 0;

// Update the counter display
function updateCounter() {
    counterDisplay.textContent = count;
}

// Event listeners for button clicks
increaseButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

decreaseButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
    }
    updateCounter();
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
});
