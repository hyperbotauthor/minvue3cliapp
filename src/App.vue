<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->

  Works when imported from the template

  <Tabpane2>
    <div caption="I am div 1">Div 1</div>
    <div caption="I am div 2">Div 2</div>
  </Tabpane2>

  Triggers warning when imported from an other component

  <Composite></Composite>
</template>

<script>
import Tabpane2 from "./components/Tabpane2.vue";
import Composite from "./components/Composite.js";

export default {
  name: "App",
  components: {
    Tabpane2,
    Composite,
  },
};
</script>

<style>
</style>
