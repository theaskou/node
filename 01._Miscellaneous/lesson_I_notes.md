[Semester repository](https://github.com/anderslatif/EK_DAT_Node.js_2026_Spring)

[Debugging](https://github.com/anderslatif/EK_DAT_Node.js_2026_Spring/blob/main/00._Course_Material/00._Meta_Course_Material/debugging_tips.md) tips

### Generelt om faget

Mandatory II er et auth system, som skal indgå til eksamen.

Til eksamen skal vi kunne live-kode.

Clean code er et krav til eksamen, overvej at bruge [linters.](https://github.com/anderslatif/EK_DAT_Node.js_2026_Spring/blob/main/00._Course_Material/00._Meta_Course_Material/linters_overview.md)

Det er ikke tilladt at bruge AI til eksamen, og vi skal slå Co-pilot fra. Brug ikke LLM’er til at skrive koden.

Overvej at prøve en ny editor for at udfordre sig selv, fx [Codium.](https://vscodium.com/)

[Mit semester repository.](https://github.com/theaskou/node)

Åbn i vscode, hvis man er cd’et ind i den rigtige mappe: `code .`

Hvis man skriver `node` i terminalen, hvad er det man får frem?

Det er en **REPL** - “read, evaluate, print, loop”

![Screenshot 2026-01-29 at 09.13.28.png](attachment:8a8c3c4e-7ebd-49a5-a0eb-ec7b13e04e8c:Screenshot_2026-01-29_at_09.13.28.png)

Hvad sker der hvis man skriver `2 + “2` ?

Den giver: `22`

Typecoersion!

Vi ønsker at undgå type coersion. 

`2 == “2` giiver `true` fordi der sker type coersion

`2 === “2`giver `false`

Pointe: Husk at bruge strict equality! For at undgå type coersion.


Alle filer er et “Module” i js. I andre sprog hedder det måske en package.

Node.js - Hvad er det?

“V8 engine” - compiler til javasscript. = “Run javascript everywhere”

Javascript er et browsersprog, node.js er et runtime environment, der gør at man kan køre javascript alle steder. 

Hvad kan man bruge det til hvis man kan køre javascript hvorsomhelst?

- Software
- Scripts
- Microservices.
- Kommunikere med databaser
- Server
- Desktop app’s
- CLI’s
- https://www.electronjs.org/

[JSON dokumentation.](https://www.json.org/json-en.html)