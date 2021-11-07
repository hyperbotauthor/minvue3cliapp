import { defineComponent, h } from "vue"

export default defineComponent({
  setup(props, { slots }){
    return () => h("div", {}, slots)
  }
})