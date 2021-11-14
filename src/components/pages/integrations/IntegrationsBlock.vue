<template>
  <div>
    <Integration v-for="service in servicesList" :key="service.id" :service="service" />
  </div>
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