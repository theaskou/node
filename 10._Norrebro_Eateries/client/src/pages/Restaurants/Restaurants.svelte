<script>
    import { onMount } from "svelte";
    import { fetchGet } from "../../util/fetchUtil.js";

    let restaurants;

    onMount(() => {




        // fetch("http://localhost:8080/api/restaurants")
        //     .then((response) => response.json())
        //     .then((result) => (restaurants = result.data));
    });
</script>

<h1>Restaurants</h1>
{#each restaurants as restaurant}
    <h4>{restaurant}</h4>
{/each}
