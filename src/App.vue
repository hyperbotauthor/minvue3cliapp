<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  Works with plain slots
  <HelloWorld>
    <div>Div 1</div>
    <div>Div 2</div>
  </HelloWorld>
  Triggers warning when slots are used from other component
  <Composite> </Composite>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Composite from "./components/Composite";

export default {
  name: "App",
  components: {
    HelloWorld,
    Composite,
  },
};
</script>

<style>
</style>
