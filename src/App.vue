<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->

  Works when imported from the template

  <Tabpane>
    <div caption="I am div 1">Div 1</div>
    <div caption="I am div 2">Div 2</div>
  </Tabpane>

  Triggers warning when imported from an other component

  <Composite></Composite>
</template>

<script>
import Tabpane from "./components/Tabpane.vue";
import Composite from "./components/Composite.js";

export default {
  name: "App",
  components: {
    Tabpane,
    Composite,
  },
};
</script>

<style>
</style>
