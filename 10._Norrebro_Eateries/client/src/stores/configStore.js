import { readable } from "svelte/store";

export const BASEURL = readable('http://localhost:8080'); // skal ikke sættes som dotenv i client, fordi dotenv skal ikke pushes, det er ikke til offentlig brug. Det er ellers noget folk gør nu.