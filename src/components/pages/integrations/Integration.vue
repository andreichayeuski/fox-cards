<template>
  <div class="integration">
    <div>
      <div class="integration-info">
        <h3 class="integration-name">{{ service.name }}</h3>
        <div class="integration-description">
          <span> {{ service.description }} </span>
        </div>
      </div>
      <div :class="integrationLogoCss" />
    </div>
    <div class="integration-splitter"></div>
    <div>
      <h5 class="integration-settings">Настройка</h5>
      <div class="integration-toggle">
        <Toggle :isEnabled="serviceEnabled" @toggle="serviceToggle" />
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "@/utils/components/Toggle.vue";

export default {
  name: "Integration",
  components: { Toggle },
  props: {
    service: { type: Object, required: true },
  },
  data() {
    return {
      serviceEnabled: false,
    };
  },
  computed: {
    integrationLogoCss: function () {
      return (
        "poster-logo integration-logo" +
        (this.service.enabled ? "" : " disabled")
      );
    },
  },
  methods: {
    serviceToggle: function () {
      this.$store.commit('changeEnable', this.service.id);
    },
  },
  mounted: function () {
    this.serviceEnabled = this.service.enabled;
  },
};
</script>