<script>

import { fridgeMessages } from "../../stores/fridgeStore.js";

</script>

{#each $fridgeMessages as fridgeMessage}
<p>{fridgeMessage.name || "Household"}: {fridgeMessage.message}</p>

{/each}

<slot></slot>

<div id="welcome-mat">
    <p>Go away</p>
</div>

<style>
    #welcome-mat {
        background-color: brown;
        width: 10vh;
        padding: 2em;
        margin: 0 20em 0 20em;
        color:black;
        border-radius: 1em;
    }
</style>