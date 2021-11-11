import { defineComponent, h } from "vue";

import HelloWorld from "./HelloWorld";

export default defineComponent({
  setup() {
    return () =>
      h(HelloWorld, {}, [h("div", {}, ["Div 1"]), h("div", {}, ["Div 2"])]);
  }
});
