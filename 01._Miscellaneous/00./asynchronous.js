// JS is singlethreadded everything runs in the main thread
// hvordan håndteres det så der ikke blokeres? Callbacks - asynkrone 

// eksempler på blokerende operationer:
// network, database, filer, hardware (server hardware, ikke browser), user inputs, 

// ========== Solutions 1: Callback functions ==========
// Problem: Callback Hell // Pyramid of doom. Svært at overskue, læse, grimt, osv. Eksempel:

// someLibraryFunction(() => {
//     callSomeLibraryfunction(() => {
//         someNestedFunction(() => {
//             // ...
//         })
//     })
// })

// ========== solution 2: Promises ==========
// Hvilke states kan promises være i? Pending, fulfiled. 
// Fulfiled kan være to forskellige states: resolved, rejected

new Promise((resolve, reject) => {
    resolve("Everything went well");
})
    .then((successMessage) => console.log(successMessage));

new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve("Everything went well");
        } catch (error) {
            reject("Oh no");
        }
    }, 2000);
})
    .then((failMessage) => console.log('this is not logged', failMessage))
    .catch(errorMessage => console.log('this is logged:', errorMessage));

// Promisified function

function myPrommise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("all good")
            } catch (error) {
                reject("fuck")
            }
        }, 3000);
    });
}

console.log(myPrommise());

// Hvad er problemet med prommises? Nestede promises. I stedet for at have en masse nestede promises, introducerede man:

// ========== Solution 3: Async / Await ==========
// Ikke bedre end promises - bruger promises under the hood. Syntatic sugar. Nemmere at læse.

const successMessage = await myPrommise();
console.log(successMessage);

function myFetch() {
    return new Promise((resolve, reject) => {
        resolve({
            json: () => new Promise((resolve, reject) => resolve({ data: "Data from the server" }))
        })
    });
}

myFetch()
.then((response) => response.json())
.then((result) => console.log(result));


// IIFE
(async() => {
    const response = await myFetch();
    const result = response.json();
    console.log(result);
})();
