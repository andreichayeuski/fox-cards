<template>
  <base-svg icon-name="iconName"><Component :is="arrowName" /></base-svg>
</template>

<script>
import BaseSvg from "@/utils/components/BaseSvg.vue";
import ArrowDownDark from "@/utils/components/arrows/vue/ArrowDownDark.vue";
import ArrowDownLight from "@/utils/components/arrows/vue/ArrowDownLight.vue";
import ArrowFilterDown from "@/utils/components/arrows/vue/ArrowFilterDown.vue";
import ArrowFilterUp from "@/utils/components/arrows/vue/ArrowFilterUp.vue";
import ArrowLeftDark from "@/utils/components/arrows/vue/ArrowLeftDark.vue";
import ArrowLeftLight from "@/utils/components/arrows/vue/ArrowLeftLight.vue";
import ArrowRightDark from "@/utils/components/arrows/vue/ArrowRightDark.vue";
import ArrowRightLight from "@/utils/components/arrows/vue/ArrowRightLight.vue";
import ArrowUpDark from "@/utils/components/arrows/vue/ArrowUpDark.vue";
import ArrowUpLight from "@/utils/components/arrows/vue/ArrowUpLight.vue";

export default {
  components: {
    BaseSvg,
    ArrowDownDark,
    ArrowDownLight,
    ArrowFilterDown,
    ArrowFilterUp,
    ArrowLeftDark,
    ArrowLeftLight,
    ArrowRightDark,
    ArrowRightLight,
    ArrowUpDark,
    ArrowUpLight,
  },
  props: ["arrowName"], // Menu title from the parent
  data() {
    return {
      isOpen: false, // Variable if the menu is open or closed
    };
  },
  methods: {
    openClose() {
      // Toggle between open or closed ( true || false )
      this.isOpen = !this.isOpen;
    },
    getIconCssClass(icon) {
      return "side-bar-icon " + icon + "-icon";
    },
  },
};
</script>