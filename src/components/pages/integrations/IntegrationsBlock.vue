<template>
  <Integration v-for="(service, index) in servicesList" :key="index" :service="service" />
</template>

<script>
import Integration from "./Integration.vue";

export default {
  name: "IntegrationsBlock",
  components: { Integration },
  props: {
    servicesList: Object,
  },
};
</script>