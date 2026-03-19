<script>
    import Child from "../Child/Child.svelte";

    let { name, children } = $props();

    import { fridgeMessages } from "../../stores/fridgeStore.js";

    function handleShowLove(name) {
        console.log(`${name} loves you <3`)
    }

    let cookieJar = $state(['🍪', '🍪', '🍪', '🍪']);

    let drinkFridge = $state(['🧃','🥛','🧃','🧃']);

    function handleEatCookie() {
        cookieJar.pop();
    }

</script>


<h1>My name is {name}.</h1>
<p>{cookieJar}</p>
<p>{drinkFridge}</p>
<button onclick={fridgeMessages.wipe}>Wipe fridge</button>


{#each children as child (child.name)}

    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie} drinkFridge={drinkFridge} />

{/each}


