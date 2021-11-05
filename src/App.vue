<template>
  <div class="main">
    <SideBar :msg="message" />
    <Integrations />
  </div>
</template>

<script>
import SideBar from "./components/common/sideBar/SideBar.vue";
import Integrations from "./components/pages/integrations/Integrations.vue";

export default {
  name: "App",
  components: {
    SideBar,
    Integrations,
  },
  computed: {
    message: function () {
      return "Andrei";
    },
  },
};
</script>
