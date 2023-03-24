// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEL = document.getElementById("welcome-el")


// Create two variables (name & greeting) that contains your name
let fullName = "Eugene Soch"
let greeting = "Welcome back, "
// and the greeting we want to render on the page
let greetingBack = greeting + fullName

// Render the welcome message using welcomeEl.innerText
welcomeEL.innerText = greetingBack

