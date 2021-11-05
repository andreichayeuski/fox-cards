<template>
  <div class="page">
    <Header title="Интеграции" description="Активные и неактивные интеграции" />
    <div class="page-content">
      <div class="active-integrations">
        <h3>Активные интеграции ({{ activeCount }})</h3>
        <IntegrationsBlock v-show="activeCount > 0" />
      </div>
      <div class="inactive-integrations">
        <h3>Неактивные интеграции ({{ inactiveCount }})</h3>
        <IntegrationsBlock v-show="inactiveCount > 0" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../common/Header.vue";
import IntegrationsBlock from "./IntegrationsBlock.vue";

export default {
  name: "Integrations",
  components: {
    Header,
    IntegrationsBlock,
  },
  data() {
    return {
      activeCount: 0,
      inactiveCount: 0,
    };
  },
};
</script>