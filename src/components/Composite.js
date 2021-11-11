import { defineComponent, h } from "vue";

import Tabpane from "./Tabpane.vue";

export default defineComponent({
  name: "Composite",
  setup() {
    const slots = [
      h("div", { caption: "I am div 1" }, ["Div 1"]),
      h("div", { caption: "I am div 2" }, ["Div 2"])
    ];
    return () => h(Tabpane, {}, () => slots);
  }
});
