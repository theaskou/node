import { Router } from 'express';
import db from '../database/connection.js';

const router = Router();

router.get('/recipes', async (req, res) => {

    const recipes = await db.all('SELECT * FROM recipes;'); // Det er ok ikke at abstrahere queres væk. Det gør det nemmere at læse.

    res.send({ data: recipes })
});

router.post('/recipes', async (req, res) => {

    const { recipeName, description, minutesToCook } = req.body;

    const result = await db.run(`
        INSERT INTO recipes 
        (recipe_name, description, preperation_time_minutes )
        VALUES (?, ?, ?);
        `, [recipeName, description, minutesToCook]); // escaper caracters? 
    // ALDRIG brug string interpolation - muliggør SQL injection - VALUES (${recipeName}, ${description}, ${minutesToCook}); 

    res.send({ data : { id : result.lastID } });
});

export default router;