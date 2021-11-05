<template>
  <div class="integration">
    <h3 class="integration-name">{{ service.name }}</h3>
    <div class="integration-description">
      <span> {{ service.description }} </span>
    </div>
    <div class="integration-splitter"></div>
    <div>
      <h5 class="integration-settings">Настройка</h5>
      <div class="integration-toggle">
        <ToggleOff v-show="!service.enabled" />
        <ToggleOn v-show="service.enabled" />
      </div>
    </div>
  </div>
</template>

<script>
import ToggleOn from "@/utils/components/toggles/vue/ToggleOn.vue";
import ToggleOff from "@/utils/components/toggles/vue/ToggleOff.vue";

export default {
  name: "Integration",
  components: { ToggleOn, ToggleOff },
  props: {
    service: { type: Object, required: true },
  },
};
</script>