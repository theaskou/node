console.log(getRandomInt(5, 10)); // funktioner bliver "hoisted". Funktioner er first class citizens i js.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min); // standard for at få en random int i et range.
}
// Der skal ikke semikolon efter funktionsdeklarationer

const whatIsThisAnonymous = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};
// Hvad er det? Anonym funktion? Ja, den er anonym.
// Der skal semikolon her, fordi det er en statement.

const whatIsThisArrow = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};
// Hvad er det? Arrow function.

// first-class citizen: Vi kan give en funktion som argument og give som returværdi etc.:
// String, funktion reference
function genericActionPerformer(name, action) {
  return action(name); // callback funktion
}
// "A function that accepts a callback parameter may be designed to call back before returning to its caller."
// En funktionsreference der bliver sendt som argument.
// "A callback funktion is a funtion that is passed as an argument to another function"
// Hvad er dfordelen ved callback? Vi behøver ikke vente på at linjen bliver ledigt.
// Har det noget med single thread at gøre? <- læs op på det.

function eatingAction(name) {
  return `${name} is eating`;
}

console.log(genericActionPerformer("Valdemar", eatingAction));


// declare an anonymous function called running action
// make it return "Sidi is running"

const runningAction = (name) => {
    return `${name} is running`
};

// arrow functions binder "this" i det rigtige scope - derfor bruger man helst dem til at lave anonyme funktioner.

console.log(genericActionPerformer("Sidi", runningAction));


// In a single line below write "Kristian is laughing"

console.log(genericActionPerformer("Kristian", (name) => `${name} is laughing`));