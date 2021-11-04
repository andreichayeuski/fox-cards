<template>
  <div>
    <div class="dropDownMenuButton" ref="menu" @click="openClose">
      <span :class="getIconCssClass(item.icon)"></span>
      <img src="@/assets/icons/work-space.png" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.667 5.00033V3.33366H8.33366V5.00033H11.667ZM3.33366 7.50033V15.0003C3.33366 15.4587 3.70866 15.8337 4.16699 15.8337H15.8337C16.292 15.8337 16.667 15.4587 16.667 15.0003V7.50033C16.667 7.04199 16.292 6.66699 15.8337 6.66699H4.16699C3.70866 6.66699 3.33366 7.04199 3.33366 7.50033ZM16.667 5.00033C17.592 5.00033 18.3337 5.74199 18.3337 6.66699V15.8337C18.3337 16.7587 17.592 17.5003 16.667 17.5003H3.33366C2.40866 17.5003 1.66699 16.7587 1.66699 15.8337L1.67533 6.66699C1.67533 5.74199 2.40866 5.00033 3.33366 5.00033H6.66699V3.33366C6.66699 2.40866 7.40866 1.66699 8.33366 1.66699H11.667C12.592 1.66699 13.3337 2.40866 13.3337 3.33366V5.00033H16.667Z" fill="#F7F9FC"/>
</svg>

      <span> {{ item.label }} </span>
    </div>
    <section
      class="option"
      v-for="(label, index) in item.children"
      :key="index"
      v-show="isOpen"
    >
      <a href="https://duckduckgo.com">{{ label }} </a>
      <span class="arrow"> {{ cssIcon }} </span>
    </section>
  </div>
</template>

<script>
export default {
  props: ["item"], // Menu title from the parent
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

<style>
</style>
