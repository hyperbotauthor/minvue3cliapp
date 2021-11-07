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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
