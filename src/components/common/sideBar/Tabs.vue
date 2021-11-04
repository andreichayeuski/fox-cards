<template>
  <div>
    <div>
      <dropdown-menu :menuTitle="menuTitle">
        <section class="option">
          <button @click="sayHello">This is button for method</button>
          <span class="desc"
            >This is Vue dropdown menu method that says hello for you.</span
          >
        </section>

        <section class="option">
          <a href="https://duckduckgo.com">This is basic a -link</a>
          <span class="desc">Clicking this takes you somewhere else.</span>
        </section>

        <section class="option">
          <router-link to="/about">This is Vue router link</router-link>
          <span class="desc">Clicking this takes you somewhere else.</span>
        </section>
      </dropdown-menu>
    </div>
  </div>
</template>

<script>
import dropdownMenu from '../utils/dropdown-menu.vue'
export default {
  components: { dropdownMenu },
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
