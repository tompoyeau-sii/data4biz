<template>
  <myToolbar />
  <Membres />
</template>

<script>
import myToolbar from "@/components/MyToolbar";
import Membres from "@/components/Membres.vue";
export default {
  name: "MembresView",

  components: {
    Membres,
    myToolbar,
  },
};
</script>
