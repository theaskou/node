import db from './connection.js';

 



// i stedet for at sætte deletemode  manuelt: 
// process.argv.includes('--delete)

const deleteMode = true;

if (deleteMode) {
    await db.exec(`DROP TABLE IF EXISTS ingreddients;`);
    await db.exec(`DROP TABLE IF EXISTS recipes;`);
};


/*
Vi skal kende disse tre:
.exec() // Run DCL/DDL (with no parameters) 
.run() // run parameterized queries no return value - without returning data INSER UPDATE DELETE
.all() // run a query and retrieve the result set SELECT


*/




/* Conventions for SQL:
    use lowercase for tables
    plural for tables
    snake_case
*/

// DDL

// ingredients, recipes



await db.exec(`
    CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_name VARCHAR(100) NOT NULL,
        description TEXT,
        preperation_time_minutes INTEGER
    );


    CREATE TABLE IF NOT EXISTS ingredients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_id INTEGER,
        ingredient_name TEXT NOT NULL,
        units INTEGER, 
        unit_of_measurement TEXT CHECK( unit_of_measurement IN ("l","g","unit") ),
        FOREIGN KEY (recipe_id) REFERENCES recipes (id)
    );`
);

// DML
// Seeding
if (deleteMode) {
    await db.run(`INSERT INTO recipes (recipe_name) VALUES ('Potato Pancakes');`);
    await db.run(`INSERT INTO recipes VALUES ('2', 'Baked Potato', "Also known as a Jacket potato. It's a treat in the winter months", '45');`);
    await db.run(`INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES (1, 'flour', '60', 'g')`);
    await db.run(`INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES (2, 'milk', '4', 'g')`);
};