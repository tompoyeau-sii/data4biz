<template>
    <myToolbar/>
    <particles />
    <about />
    <membres />
    <pieds />
</template>

<script>
// Components
import Particles from "@/components/Particles.vue";
import About from "@/components/About.vue";
import Membres from "@/components/Membres.vue";
import myToolbar from "@/components/MyToolbar";
import Pieds from "@/components/Pieds";
import Contact from "@/components/Contact";
export default ({
  name: "HomeView",

  components: {
    Particles,
    About,
    Membres,
    Pieds,
    Contact,
    myToolbar,
  },
});
</script>

<style scoped>
</style>