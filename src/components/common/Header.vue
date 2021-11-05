<template>
  <header>
    <div>
      <h2 class="page-title">{{ title }}</h2>
      <span class="page-description"> {{ description }} </span>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  data() {
    return {
      isOpened: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
