<template>
  <div class="side-bar">
    <div class="logo">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <span v-show="isOpened">WalliCards</span>
    </div>
    <Tabs
      v-for="(label, index) in labels"
      :key="index"
      :item="label"
    />
  </div>
</template>

<script>
import Tabs from "./Tabs.vue";

import sideBarLabels from "@/utils/constants/sideBarLabels";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      labels: sideBarLabels,
      isOpened: true
    };
  },
  components: { Tabs },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
