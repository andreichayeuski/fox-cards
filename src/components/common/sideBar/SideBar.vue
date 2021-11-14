<template>
  <div :class="sideBarClass">
    <div class="container">
      <div class="logo">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <span v-show="isExpanded">Fox Cards</span>
      </div>
      <div class="tabs">
        <Tab
          v-for="(label, index) in labels"
          :key="index"
          :item="label"
          :isExpanded="isExpanded"
          :isSelected="isSelected(index)"
        />
      </div>
      <div class="tabs-splitter"></div>
      <div
        class="tabs-back tab"
        @mouseover="mouseover"
        @mouseleave="mouseleave"
      >
        <span class="icons-span side-bar-icon">
          <Icons
            width="22"
            height="20"
            viewBox="0 0 20 20"
            icon-name="back-default"
            :color="backColor"
          />
        </span>
        <span class="tabs-back-text" v-show="isExpanded"
          >Вернуться к выбору карт</span
        >
      </div>
    </div>
    <div @click="toggleExpand">
      <div class="side-bar-minimize">
        <span class="icons-span">
          <Arrows
            width="22"
            height="20"
            viewBox="0 0 20 20"
            class="side-bar-arrow"
            :arrow-name="arrowMinimizeName"
          />
        </span>
        <span class="side-bar-minimize-text" v-show="isExpanded">Свернуть</span>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from "./Tab.vue";
import Icons from "@/utils/components/icons/Icons.vue";
import Arrows from "@/utils/components/arrows/Arrows.vue";
import exportedVars from "@/styles/vueVariables.scss";

import sideBarLabels from "@/utils/constants/sideBarLabels";

export default {
  name: "SideBar",
  components: { Tab, Icons, Arrows },
  props: {
    msg: String,
    selectedTab: {
      type: String,
      default: "Интеграции",
    },
  },
  data() {
    return {
      labels: sideBarLabels,
      isExpanded: true,
      backColor: exportedVars.primaryOpacity,
    };
  },
  computed: {
    sideBarClass: function () {
      return (!this.isExpanded ? "side-bar-mini " : "") + "side-bar";
    },
    arrowMinimizeName: function () {
      return this.isExpanded ? "arrow-left-light" : "arrow-right-light";
    }
  },
  methods: {
    mouseover: function () {
      this.backColor = exportedVars.primary;
    },
    mouseleave: function () {
      this.backColor = exportedVars.primaryOpacity;
    },
    toggleExpand: function () {
      this.isExpanded = !this.isExpanded;
    },
    isSelected: function (index) {
      return this.labels[index].label.toLowerCase() === this.selectedTab.toLowerCase();
    },
  },
};
</script>
