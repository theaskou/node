// import express:
const express = require('express');

// instantiate express:
const app = express(); 

// klient-server modellen <- læs op på den. Request <-> response
app.get("/", (req, res) => {
    res.send({data : "hello connan"})
});

app.get("/snowstorms", (req, res) => {
    res.send({ data : "Warning! A snowstorm is coming ❄️ ❄️"})
});

// hvorfor er det bedst at sende JSON fremfor en string?
// Vi skal serve noget data. Tekst bliver fortolket som html, så det kan parses/fortolkes vilkårligt.



// Hvordan kan klienten sende data i et get request?
// path variable
// query string / query parameters

app.get("/microphones/:micType/:patched", (req, res) => {
    res.send({data : `This microphone is a ${req.params.micType}.
        Is it patched? ${req.params.patched}`});
});

// Tilføj en pathvariabel mere ""-^

// query string / query parameter. (Det som kommer efter ?):
// EX: localhost:8080/bag?firstItem=banana peel&secondItem=bag
app.get("/bag", (req, res) => {
    res.send({ data: req.query })
});

// https://www.google.com/search?q=bag+of+words+wilder&sca_esv=acd81caf4539d42c&sxsrf=ANbL-n6VtWunzR89spFKeYQUIyBtq0qORg%3A1770287596885&source=hp&ei=7HGEaf3pMoyIxc8PyOz_kAk&iflsig=AFdpzrgAAAAAaYR__IcPB_sPnvxxPe0gA5JI_7z3w_8O&ved=0ahUKEwj9j_Cak8KSAxUMRPEDHUj2H5IQ4dUDCCo&uact=5&oq=bag+of+words+wilder&gs_lp=Egdnd3Mtd2l6IhNiYWcgb2Ygd29yZHMgd2lsZGVyMgUQIRigATIFECEYoAEyBRAhGKABSMh2ULhQWNl1cAF4AJABAJgBiAGgAYoNqgEEMTUuNLgBA8gBAPgBAZgCFKACgw6oAgrCAgcQIxgnGOoCwgINECMY8AUYJxjJAhjqAsICBRAAGIAEwgILEC4YgAQY0QMYxwHCAgUQLhiABMICBBAjGCfCAgsQLhiABBjHARivAcICCBAAGIAEGMsBwgIGEAAYFhgewgIIEAAYFhgKGB7CAggQABiABBiiBMICBRAAGO8FmAMK8QWYjwU9I0uj-ZIHBDE2LjSgB4R6sgcEMTUuNLgH-Q3CBwgwLjQuMTQuMsgHV4AIAA&sclient=gws-wiz
// ^ Hvorfor gør google det, når det er så rodet? For at man kan dele en søgning.


// I et REST api, hvilken måde er den korrekte måde at sende data fra et GET endpoint?

// lytte på en port:
app.listen(8080);
// 8080 er standard for http.