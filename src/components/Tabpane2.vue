<script>
import { defineComponent, h, reactive } from "vue";

export default defineComponent({
  name: "Tabpane2",
  props: {
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 200,
    },
  },
  setup(props, { slots }) {
    const react = reactive({
      selectedTab: 0,
    });
    return () =>
      h("div", { class: ["vertcont"] }, [
        h(
          "div",
          {
            class: ["tabs"],
          },
          slots.default().map((tab, i) =>
            h(
              "div",
              {
                class: {
                  tab: true,
                  selected: i === react.selectedTab,
                },
                onClick: () => {
                  react.selectedTab = i;
                },
              },
              [tab.props.caption]
            )
          )
        ),
        h(
          "div",
          {
            class: ["slotscont"],
            style: {
              width: `${props.width}px`,
              height: `${props.height}px`,
            },
          },
          slots.default().map((slot, i) =>
            h(
              "div",
              {
                class: {
                  slot: true,
                  active: react.selectedTab === i,
                },
              },
              [slot]
            )
          )
        ),
      ]);
  },
});
</script>

<style>
.tab.selected {
  background-color: #efe;
  border: solid 2px #afa !important;
  border-bottom: transparent !important;
}
.tab {
  background-color: #eee;
}
.tabs .tab {
  padding: 5px;
  margin: 2px;
  border: solid 2px #aaa;
  border-radius: 8px;
  border-bottom: transparent;
  cursor: pointer;
  user-select: none;
  transition: all 0.5s;
  color: #007;
}
.tabs {
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.vertcont {
  display: flex;
  flex-direction: column;
  margin: 3px;
}
.slotscont {
  position: relative;
  overflow: scroll;
  padding: 5px;
  border: solid 1px #777;
}
.slot {
  visibility: hidden;
  position: absolute;
}
.slot.active {
  visibility: visible;
}
</style>