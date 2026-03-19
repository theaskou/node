const express = require('express'); // import

const app = express(); // instantier

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


console.log(new Date()); // UTC date + time
console.log(Date());

app.get("/months1", (req, res) => {
    const thisMonth = Date().substring(4, 7);
    res.send({ Month : thisMonth});
});

app.get("/months2", (req, res) => {
    const date = new Date();
    console.log(date);
    const thisMonth = date.getMonth();
    res.send({ Month : thisMonth});
});


app.get("/days1", (req, res) => {
    const today = new Date().getDay();
    console.log(today);
    const weekdayToday = weekdays[today];
    res.send({ weekday: weekdayToday });
})

const port = 8080;
app.listen(8080, () => console.log(`App is running on port ${port}`)); // lytte