<template>
  <myToolbar />
  <div class="row">
    <div class="col-sm-3" v-for="message in messages" :key="message.id">
      <h1 v-text="message.id"></h1>
      <!-- <v-img class="logo" alt="Dat4biz logo" src="" /> -->
      <!-- <p v-text="message.entreprise_resume"></p> -->
    </div>
  </div>
</template>

<script>
import myToolbar from "@/components/MyToolbar";
import Interlocuteur from "@/components/Interlocuteur.vue";
import axios from "axios";

export default {
  name: "InterlocuteurView",
  components: {
    myToolbar,
    Interlocuteur,
  },
  data() {
    return {
      messages: ["Test", "API", "TEST"],
    };
  },
  async created() {
    this.messages = (await axios.get("http://localhost:8080/api/entreprises").data);
  },
};
</script>
