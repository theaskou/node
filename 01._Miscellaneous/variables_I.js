const luckyNumber = 7;
// ^ Variable assigner

// Første regel: brug const altid som default, 
// medmindre den skal kunne ændres, så brug let.

// const er ikke immutability. 
// Hvis der bliver lagt +1 til luckyNumber, så ...............
// "const is constant in the assignment"
// Det er derfor at man ikke kan lave en const der er 'undefined', fordi så kan den ikke ændres senere...

// JS Datatyper:
// String, Number, Boolean, Object, BigInt, Symbol, null, undefined

const people = [];

people.push("Victor");

console.log(people);

// people = []; <- Det kan man ikke.

const person = {
    // key-value pair
    name: "connan"
};

// Hvad er forskellen på js objekter og json? 
// - Første pointe er at man skal bruge "". 
// - Man kan ikke skrive // kommentarer.

// ASI: Automatic semicolon insertion.
// - ; ikke nødvendligt, men vær konsistent med om man bruger det eller ej = Clean code.
// - Kan være problematisk i nogen tilfælde hvis man ikke gør det, fx når man returnerer objekter på flere linjer (?).