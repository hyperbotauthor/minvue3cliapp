<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <Tabpane>
    <div caption="I am div 1">Div 1</div>
    <div caption="I am div 2">Div 2</div>
  </Tabpane>
</template>

<script>
import Tabpane from "./components/Tabpane";

export default {
  name: "App",
  components: {
    Tabpane,
  },
};
</script>

<style>
</style>
