<script>
    let {
        name,
        familySheep,
        isGirl,
        onShowLove,
        onEatCookie,
        drinkFridge = $bindable()
    } = $props();
</script>

<div
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    <h3>I'm just child known as {name}</h3>
    <button onclick={() => onShowLove(name)}>Show love 💕</button>
    <button onclick={onEatCookie}>Eat cookie</button>
    <button onclick={() => drinkFridge.pop()}>Have a drink</button>

</div>

<style>
    .black-sheep {
        background-color: #bae;
    }

    .grey-sheep {
        background-color: aquamarine;
    }

    .not-a-sheep {
        background-color: plum;
    }

    .is-girl {
        border: 4px solid chartreuse;
    }

    .is-boy {
        border: 4px dashed slateblue;
    }
</style>
