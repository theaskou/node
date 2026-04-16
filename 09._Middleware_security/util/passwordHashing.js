// hashing er en one-way function. Det er meget svært at gå den anden vej, men ikke umuligt.
// encrypt og compare - forstå det

import bcrypt from 'bcrypt';

const password = 'juhuuu';
const passwordComparison = 'juhuuu';
const saltRounds = 14;

// auth/signup
const hashedPassword = await bcrypt.hash(password, saltRounds)

//auth/
const passwordIsSame = await bcrypt.compare(passwordComparison, hashedPassword);

console.log(passwordIsSame);