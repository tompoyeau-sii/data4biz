<template>
  <div class="container main">
    <div class="row text-center mb-5">
      <div style="border-bottom: 2px solid #e37e54" class="col p-4">
        <h2>Nos membres</h2>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-sm-3" v-for="message in messages">
        <h1 v-text="message.entreprise_id + '. ' + message.entreprise_nom"></h1>
        <v-img class="logo" alt="Dat4biz logo" src="" />
        <p v-text="message.entreprise_resume"></p>
      </div>
    </div> -->

    <div class="row membres">
      <div class="col-xs-2 col-sm-6 col-md-2 col-lg-2 col-xl-2 m-3" v-for="message in messages" :key="message.entreprise_id">
        <router-link to="/membres/codit">
          <v-img
            class="image_collab rounded-pill w-100 membres-img"
            alt="Logo entreprise"
            v-bind:src="message.collab_photo"
          />
          <h2 v-text="message.collab_nom"></h2>
          <p v-text="message.entreprise_nom"></p>
        </router-link>
      </div>
      <!-- 
      <div class="col-sm m-5">
        <router-link to="/">
          <v-img
            class="rounded-pill membres-img"
            alt="Dat4biz logo"
            src="../assets/img/collab/bresson.png"
          />
          <h2>Laurent BRESSON</h2>
          <p>Data Tell Story Corp</p>
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Membres",

  data() {
    return {
      messages: ["Test", "API", "TEST"],
    };
  },
  async created() {
    this.messages = (await axios.get("http://localhost:8081/entreprises")).data;
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.membres-desc {
  opacity: 0%;
  position: absolute;
}

a:hover {
  color: #e37e54;
  text-decoration: none;
}

.membres {
    display: flex;
    justify-content: center;
  }

a:hover .membres-img {
  opacity: 60%;
  border-radius: 5%!important;
}
a:hover .membres-img .membres-desc {
  opacity: 100%;
}

@media only screen and (max-width: 575px) {
  .membres {
    display: flex;
    justify-content: center;
    width: 65%;
  }
}

</style>
