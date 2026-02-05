// "use strict"; // strict mode - idag fanger linter osv mange af de fejl, så man bruger det ikke så tit længere.

// NEver do this: Missing declaration type.
totalGlobalVariable = "";

// Don't ever do this:
var globalVariable = "This is defined in the global scope.";

const public = "this variable is named public"; // public er reserveret keyword i strict mode.

{
  console.log("what is this?");
}
// Hvad er det her? Et scope? Block scope!

{
  var someVariable = true;
  {
    var someVariable = false;
  }
  console.log(someVariable); // Hvad bliver resultatet? false! var "bløder ind i" andre scopes.
}

{
    let someVariable = true;
    { 
        let someVariable = false;
    }
    console.log(someVariable); // Bliver true, fordi det er en anden "call execution context" <- Læs op på stack.
} 

for (var i = 0; i < 5; i ++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
} 
// Hvad gætter vi på at der sker her? 0-4 på 1 sekund?
// Den printer 5 x fem gange. Hvorfor?
// var gør ud i det globale scope, og i er påvirket 