<template>
  <div class="side-bar">
    <div class="container">
      <div class="logo">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <span v-show="isOpened">WalliCards</span>
      </div>
      <div class="tabs">
        <Tab v-for="(label, index) in labels" :key="index" :item="label" />
      </div>
      <div class="tabs-splitter"></div>
      <div class="tabs-back tab">
        <Icons
          class="side-bar-icon"
          width="23"
          height="20"
          viewBox="0 0 16 20"
          icon-name="back-default"
          :color="secondaryText"
        />
        <span>Вернуться к выбору карт</span>
      </div>
    </div>
    <div class="side-bar-minimize">
      <Arrows class="side-bar-arrow" arrow-name="arrow-left-light" />
      <span>Свернуть</span>
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
  },
  data() {
    return {
      labels: sideBarLabels,
      isOpened: true,
      secondaryText: exportedVars.primaryOpacity,
    };
  },
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
