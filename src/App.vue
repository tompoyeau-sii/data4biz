<template>
  <v-app>
    <v-main>
      <v-slide-y-transition>
        <router-view />
      </v-slide-y-transition>
    </v-main>
  </v-app>
</template>

<script>
  import myToolbar from "@/components/MyToolbar";
  export default {
    name: "app",
    components: { myToolbar },
  };
</script>

<style scoped>
*{
  background-color: #35393E;
  color:white;
}
</style>