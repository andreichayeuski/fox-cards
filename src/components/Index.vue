<template>
  <div>
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
