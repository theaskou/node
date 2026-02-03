## REST API

Det er vigtigt at vi følger konventionerne for REST API’er til eksamen.

[Richardson Maturity Model](https://en.wikipedia.org/wiki/Richardson_Maturity_Model)

Eksempel med Excercises:

| Endpoint | Method | Description |
| --- | --- | --- |
| /excercises | GET | retrieve all excercise resources |
| /excercises/{id} | GET | retrieve an excercise resource by id |
| /excercises | POST | create an excercise resource |
| /excercises/{id} | PUT | update an entire exercise resource |
| /excercises/{id} | PATCH | update parts of an excercise resource |
| /excercises/{id} | DELETE | delete an excercise resource |

**REST API konventioner:**

1. Brug det rigtige verbum
2. Rigtig rækkefølge: GET, POST, PUT, PATCH, DELETE
    1. Det er smart for at man ved hvor man skal lede. Folk der konsumerer ens API, er ligeglade med rækkefølgen, men for udviklere er det brugbart.
3. Korrekt navngavning: ental/flertal.

Der er mange der ikke kender forskellen på PUT og PATCH:

PUT = En hel række celler i en tabel

PATCH = enkelte celler i en tabel

Folk bruger ofte PUT som PATCH.