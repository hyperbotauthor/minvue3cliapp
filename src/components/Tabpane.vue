<script>
import { defineComponent, h, onMounted, ref } from "vue";

export default defineComponent({
  name: "Tabpane",
  props: {
    id: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 400,
    },
  },
  setup(props, { slots, emit }) {
    const contentDivRef = ref(0);

    const slotElements = slots.default();

    const tabs = slotElements.map((e, i) =>
      e.props && e.props.caption ? e.props.caption : `Tab ${i + 1}`
    );

    const tabRefs = tabs.map((_) => ref(0));

    let selectedTab = 0;

    const setSelected = (i) => {
      if (typeof i !== "undefined") {
        selectedTab = i;
      }

      tabRefs.forEach((tabRef, i) => {
        const e = tabRef._rawValue;

        e.classList.remove("selected");

        if (i === selectedTab) e.classList.add("selected");

        const s = slotElements[i].el;

        s.classList.add("slot");

        s.classList.remove("active");

        if (i === selectedTab) s.classList.add("active");
      });
    };

    onMounted(() => {
      setSelected();
    });

    const tabScrollTops = tabs.map((tab) => 0);

    return () => {
      const tabDivs = h(
        "div",
        {
          class: ["tabs"],
        },
        tabs.map((tab, i) =>
          h(
            "div",
            {
              ref: tabRefs[i],
              class: ["tab"],
              onClick: () => {
                setSelected(i);
                contentDivRef._rawValue.scrollTop = tabScrollTops[selectedTab];
                emit("tabpanechanged", {
                  event: "tabpanechanged",
                  id: props.id,
                  selectedTab: i,
                  selectedTabCaption: tabs[i],
                });
              },
            },
            [tab]
          )
        )
      );

      const contentDiv = h(
        "div",
        {
          ref: contentDivRef,
          style: `width: ${props.width}px; height: ${props.height}px;`,
          class: ["slotscont"],
          onScroll: () => {
            tabScrollTops[selectedTab] = contentDivRef._rawValue.scrollTop;
          },
        },
        slots
      );

      const vertCont = h(
        "div",
        {
          class: ["vertcont"],
        },
        [tabDivs, contentDiv]
      );

      return h(
        "div",
        {
          class: ["tabpane"],
          id: props.id,
        },
        vertCont
      );
    };
  },
});
</script>

<style>
.tabppane {
}
.tabpane .tab.selected {
  background-color: #efe;
  border: solid 2px #afa !important;
  border-bottom: transparent !important;
}
.tabpane .tab {
  background-color: #eee;
}
.tabpane .tabs .tab {
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
.tabpane .tabs {
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.tabpane .vertcont {
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