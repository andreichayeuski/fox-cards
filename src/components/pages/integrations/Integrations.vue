<template>
  <div class="page">
    <Header title="Интеграции" description="Активные и неактивные интеграции" />
    <div class="page-content integrations">
      <h3>Активные интеграции ({{ activeCount }})</h3>
      <div class="active-integrations">
        <IntegrationsBlock
          v-show="activeCount > 0"
          :servicesList="activeIntegrations"
        />
      </div>
      <h3>Неактивные интеграции ({{ disabledCount }})</h3>
      <div class="disabled-integrations">
        <IntegrationsBlock
          v-show="disabledCount > 0"
          :servicesList="disabledIntegrations"
        />
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
      integrations: [
        {
          name: "Poster",
          description: "Интеграция с сервисом POSTER",
          enabled: true,
        },
        {
          name: "Poster",
          description: "Интеграция с сервисом POSTER",
          enabled: true,
        },
        {
          name: "Poster",
          description: "Интеграция с сервисом POSTER",
          enabled: true,
        },
        {
          name: "Poster",
          description: "Интеграция с сервисом POSTER",
          enabled: false,
        },
      ],
    };
  },
  computed: {
    activeIntegrations: function () {
      return this.integrations.filter((x) => x.enabled);
    },
    disabledIntegrations: function () {
      return this.integrations.filter((x) => !x.enabled);
    },
    activeCount: function () {
      return this.activeIntegrations.length;
    },
    disabledCount: function () {
      return this.disabledIntegrations.length;
    },
  },
};
</script>