<template>
    <myToolbar />
      <Codit />
      <pieds />
  </template>
  
  <script>
  import Codit from "@/components/Codit.vue";
  import myToolbar from "@/components/MyToolbar";
  import pieds from "@/components/Pieds";
  export default ({
    name: "AboutView",
  
    components: {
      Codit,
      myToolbar,
      pieds
    },
  });
  
  </script>