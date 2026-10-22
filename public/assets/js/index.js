
// MARK: heart logic
const profile = document.querySelector('.profile')
const container = document.querySelector('.hearts-container');
const hearts = Array.from(container.querySelectorAll('.heart'));
const healthDisplay = document.querySelector(".current-health")
const announcement = document.getElementById('dead-announcement');


let currentRating = 5;

healthDisplay.textContent = currentRating;





hearts.forEach((heart) => {
    heart.classList.add('is-active');
});

function updateHearts() {
    hearts.forEach((heart) => {
        const value = Number(heart.dataset.value);
        const isActive = value <= currentRating;

        heart.classList.toggle('is-active', isActive);
        heart.setAttribute('aria-checked', String(isActive));
    });
}

hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
        const value = Number(heart.dataset.value);

        if (value <= currentRating) {
        // clicked a red heart → move rating down
        currentRating = value - 1;
        } else {
        // clicked a see-through heart → move rating up
        currentRating = value;
        }

        updateHearts();


        // display the correct image when dead
        if(!heart.classList.contains("is-active") && value === 1) {
            profile.classList.add("dead")

            announcement.textContent = "Maja is now dead"

        } else {
            profile.classList.remove("dead")

            announcement.textContent = "Maja is alive"
        }

        // display correct health value
        if(value && heart.classList.contains("is-active")) {
            
            healthDisplay.textContent = value;
        } else {
            healthDisplay.textContent = value - 1;
        }
    });
});

// initial render
updateHearts();


