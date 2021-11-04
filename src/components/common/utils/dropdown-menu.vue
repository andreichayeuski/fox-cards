<template>
  <div>
    <div>
      <section class="dropDownMenuWrapper">
        <button class="dropDownMenuButton" ref="menu" @click="openClose">
          {{ menuTitle }}
        </button>

        <div class="iconWrapper">
          <div class="bar1" :class="{ 'bar1--open': isOpen }" />
          <div class="bar2" :class="{ 'bar2--open': isOpen }" />
          <div class="bar3" :class="{ 'bar3--open': isOpen }" />
        </div>

        <section class="dropdownMenu" v-if="isOpen">
          <div class="menuArrow" />
          <slot />
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ['menuTitle'], // Menu title from the parent
  data () {
    return {
      isOpen: false // Variable if the menu is open or closed
    }
  },
  methods: {
    openClose () {
      // Toggle between open or closed ( true || false )
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>

</style>
