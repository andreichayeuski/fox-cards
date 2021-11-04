<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <SideBar :msg="message"/>
  </div>
</template>

<script>
import SideBar from './common/sideBar/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  },
  computed: {
    message: function () {
      return 'Andrei'
    }
  }
}
</script>
