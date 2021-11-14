<template>
  <div @mouseover="mouseover" @mouseleave="mouseleave">
    <div :class="tabClass" ref="menu" @click="openClose">
      <span class="side-bar-icon">
        <Icons
          width="22"
          height="22"
          viewBox="0 0 20 20"
          :icon-name="itemIcon"
        />
      </span>
      <span class="side-bar-text" v-show="isExpanded"> {{ item.label }} </span>
      <span class="side-bar-arrow">
        <Arrows
          :arrow-name="arrowName"
          v-show="isExpanded && item.children.length > 0"
        />
      </span>
    </div>
    <div class="tab-options" v-show="isExpanded && isOpen">
      <li
        class="tab-option"
        v-for="(label, index) in item.children"
        :key="index"
      >
        <span>{{ label }}</span>
      </li>
    </div>
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
  props: ["item", "isExpanded"],
  data() {
    return {
      isOpen: false,
      isHovered: false,
      itemIcon: "",
    };
  },
  computed: {
    arrowName: function () {
      return (this.isOpen ? "arrow-up-" : "arrow-down-") + this.arrowColor;
    },
    arrowColor: function () {
      return this.isHovered ? "dark" : "light";
    },
    tabClass: function () {
      return this.isHovered ? "tab hover" : "tab";
    },
  },
  methods: {
    openClose() {
      // Toggle between open or closed ( true || false )
      this.isOpen = !this.isOpen;
    },
    mouseover() {
      this.itemIcon = this.itemIcon.toLowerCase().replace("default", "used");
      this.isHovered = true;
      this.isOpen = true;
    },
    mouseleave() {
      this.itemIcon = this.item.icon;
      this.isHovered = false;
      this.isOpen = false;
    },
  },
  mounted: function () {
    this.itemIcon = this.item.icon;
  },
};
</script>
