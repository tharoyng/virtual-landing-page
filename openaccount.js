// Function to get the current time and return a greeting based on the time of day
function getTimeBasedGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    return greeting;
}

// Function to display the greeting
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = getTimeBasedGreeting();
}

// Call the function to display the greeting when the page loads
window.onload = displayGreeting;
