<template>
  <div>
    <div class="tab" ref="menu" @click="openClose">
      <Icons class="side-bar-icon" width="18" height="17" viewBox="0 0 18 17" :icon-name="item.icon" />
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
import Icons from "@/utils/components/icons/Icons.vue";

export default {
  components: {
    Icons
  },
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
  },
};
</script>
