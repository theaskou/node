import { writable } from "svelte/store";

function createFridge() {
    const defaultMessage = {
        name: "",
        message: "Write your message on the fridge"
    }
    const { set, update, subscribe } = writable([ defaultMessage ]);

    return {
        set,
        update,
        subscribe,
        wipe: () => set([ defaultMessage ]) // custom metode
    }
}

export const fridgeMessages = createFridge();

// export const fridgeMessages = writable([
//     {
//         name: "",
//         message: "Write your message on the fridge"
//     }
// ]);