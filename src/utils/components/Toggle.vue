<template id="switch-button">
  <div class="switch-button-control">
    <div
      class="switch-button"
      :class="{ enabled: enabled }"
      @click="toggle"
      :style="{ '--color': color }"
    >
      <div class="button"></div>
    </div>
    <div class="switch-button-label">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isEnabled: { type: Boolean, default: false },
    color: {
      type: String,
      required: false,
      default: "#0080F6",
    },
  },
  data() {
    return {
      enabled: false,
    };
  },
  methods: {
    toggle: function () {
      this.enabled = !this.enabled;
      var toggle = this;
      setTimeout(function () {
        toggle.$emit("toggle", !this.isEnabled);
      }, 1000);
    },
  },
  mounted: function () {
    this.enabled = this.isEnabled;
  },
};
</script>

<style lang="scss">
.switch-button-control {
  display: flex;
  flex-direction: row;
  align-items: center;

  .switch-button {
    $switch-button-height: 1.5em;
    $switch-button-background-color: #0080f6;
    $switch-button-color: #c9d1e1;
    $switch-button-border-color: #c9d1e1;
    $switch-button-border-thickness: 1px;
    $switch-button-border-enabled-thickness: 2px;
    $switch-transition: all 0.3s ease-in-out;
    $switch-is-rounded: true;

    height: calc(
      $switch-button-height + $switch-button-border-enabled-thickness
    );
    width: calc(
      #{$switch-button-height} * 2 + #{$switch-button-border-enabled-thickness}
    );
    border: $switch-button-border-thickness solid $switch-button-color;
    box-shadow: inset 0px 0px $switch-button-border-thickness 0px
      rgba(0, 0, 0, 0.33);
    border-radius: if($switch-is-rounded, $switch-button-height, 0);

    transition: $switch-transition;

    $button-side-length: $switch-button-height;

    cursor: pointer;

    .button {
      height: calc($button-side-length - 0.5px);
      width: $button-side-length;
      transform: translateX(1px) translateY(1px);

      border-radius: if($switch-is-rounded, $button-side-length, 0);
      background: $switch-button-color;

      transition: $switch-transition;
    }

    &.enabled {
      height: calc($switch-button-height);
      width: calc(#{$switch-button-height} * 2);
      border: $switch-button-border-enabled-thickness solid
        $switch-button-background-color;
      background-color: $switch-button-background-color;
      box-shadow: none;

      .button {
        height: calc($button-side-length);
        width: calc($button-side-length);
        background: white;
        transform: translateX(calc($button-side-length));
      }
    }
  }

  .switch-button-label {
    margin-left: 10px;
  }
}
</style>