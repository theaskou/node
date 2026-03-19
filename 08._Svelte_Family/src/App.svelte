<script>
  import Home from "./components/Home/Home.svelte";
  import Parent from "./components/Parent/Parent.svelte";

  const parents = ['Brian', 'Maiken']
  const children = [{
    name: "Anders",
    isBlackSheep: true,
  },
  {
    name: "Kristian",
    isGreySheep: true,
  },
  {
    name: "Mikkel",
    isGirl: true,
  }
  ];
  </script>

<Home>
  <Parent name={parents[0]} children={children} />
  <Parent name={parents[1]} children={children} />

</Home>