<template>
  <v-footer style="background-color: #35393e" >
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" style="color: white;" cols="12">
        Copyright © - {{ new Date().getFullYear() }} — <strong>Data4biz</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "pieds",
  data: () => ({
    links: [
      "Accueil",
      "Qui sommes nous ?",
      "Nos membres",
      "Trouver un interlocuteur",
    ],
  }),
};
</script>

<style scoped>
button:hover {
  color: #e37e54 !important;
}
</style>
