// sqlite er en embedded database. Huske at tilføje databasefiler til gitignore
// sqlite kom til med smartphones. Online databaser eksisterede ikke 

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const connection = await open({
    filename: 'recipes.db',
    driver: sqlite3.Database
});

export default connection;

