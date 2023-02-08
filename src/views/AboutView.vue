<template>
  <myToolbar />
    <About />
</template>

<script>
import About from "@/components/About.vue";
import myToolbar from "@/components/MyToolbar";
export default ({
  name: "AboutView",

  components: {
    About,
    myToolbar
  },
});

</script>

<style scoped>
* {
  position: relative;
}
</style>