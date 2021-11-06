<template>
  <div>
    <div class="tab" ref="menu" @click="openClose">
      <span class="side-bar-icon">
        <Icons
          width="27"
          height="24"
          viewBox="0 0 16 21"
          :icon-name="item.icon"
        />
      </span>
      <span class="side-bar-text"> {{ item.label }} </span>
      <Arrows class="side-bar-arrow" :arrow-name="arrowName" v-show="item.children.length > 0" />
    </div>
    <section
      class="option"
      v-for="(label, index) in item.children"
      :key="index"
      v-show="isOpen"
    >
      <a href="https://duckduckgo.com">{{ label }} </a>
    </section>
  </div>
</template>

<script>
import Icons from "@/utils/components/icons/Icons.vue";
import Arrows from "@/utils/components/arrows/Arrows.vue";

export default {
  components: {
    Icons,
    Arrows,
  },
  props: ["item"], // Menu title from the parent
  data() {
    return {
      isOpen: false, // Variable if the menu is open or closed
    };
  },
  computed: {
    arrowName: function () {
      return this.isOpen ? "arrow-up-light" : "arrow-down-light";
    },
  },
  methods: {
    openClose() {
      // Toggle between open or closed ( true || false )
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
