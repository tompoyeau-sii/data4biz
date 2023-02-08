<template>
  <div class="container">
    <!-- Codit -->
    <v-row class="p-5">
      <v-col class="text-center sm">
        <v-img
          class="membres-img m-5"
          alt="Logo Codit"
          src="../assets//img/entreprises/codit.png"
        />
        <v-btn
          target="blank"
          onclick="window.location.href = 'mailto:contact@data4biz.fr?subject=Demande info';"
          class="bg-gradient-orange"
          >Prendre contact avec Codit</v-btn
        >
      </v-col>
      <v-col class="text-center sm">
        <div class="row pt-5">
          Chez Codit, nous voulons contribuer à l’amélioration de notre monde
          grâce à des solutions toujours plus avancées.
        </div>
        <div class="row p-3">
          De la création de plateformes de données qui participent au
          développement de villes intelligentes aux solutions qui font
          progresser la production d’énergie renouvelable, Codit aide depuis
          plus de vingt ans ses clients à réaliser leurs projets, à mieux
          préparer leur avenir et contribuer positivement aux évolutions du
          monde.
        </div>
        <div class="row p-3" style="border-bottom: 1px solid #e37e54">
          En créant des solutions cloud intelligentes qui permettent aux données
          de mieux être exploitées, nous aidons nos clients à se développer et
          facilitons la vie de millions de personnes.
        </div>
      </v-col>
    </v-row>
    <!-- Nicolas Coudert -->
    <div class="row p-5">
      <div class="text-center col">
        <div class="row" style="border-bottom: 1px solid #e37e54">
          <h2>
            Nicolas Coudert
            <a href="https://www.codit.eu/fr/" class="lien-web" target="blank">
              <v-icon icon="mdi-web-box"></v-icon>
            </a>
            <a href="https://www.linkedin.com/" class="lien-web" target="blank">
              <v-icon icon="mdi-linkedin"></v-icon>
            </a>
          </h2>
        </div>
        <!-- Description -->
        <div class="row pt-5">
          Fort de plus de 20 années d’expérience dans l’IT et l’OT, dont une
          fonction de direction consacrée à l’IoT et à l’Intelligent Edge chez
          Microsoft, Nicolas apporte un point de vue affuté et une expertise
          reconnue pour assumer un large éventail de responsabilités au poste de
          Directeur Général chez Codit France.
        </div>
      </div>
      <!-- Photo -->
      <div class="col text-center">
        <v-img
          class="membres-img w-50 rounded-3 m-5"
          alt="Nicolas Coudert"
          src="../assets/img/collab/coudert.png"
        />
      </div>
    </div>

    <!-- Vidéo et Localisation -->
    <v-row class="p-5">
      <v-col class="text-center sm">
        <div class="row m-4" style="border-bottom: 1px solid #e37e54">
          <h2>Vidéo de présentation</h2>
        </div>
        <v-col class="m-2" style="display: flex; justify-content: center">
          <video controls class="video" id="video">
            <source src="../assets/video/codit.mp4" type="video/mp4" />
          </video>
        </v-col>
      </v-col>

      <v-col class="text-center sm">
        <div class="row m-4" style="border-bottom: 1px solid #e37e54">
          <h2>Localisation</h2>
        </div>
        <v-col style="display: flex; justify-content: center">
          <iframe
            id="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.273227403383!2d2.3225990000000003!3d48.87206769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcb5750dabb%3A0xa1bb87a7abecb363!2s18%20Bd%20Malesherbes%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1673278507031!5m2!1sfr!2sfr"
            class="maps"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </v-col>
      </v-col>
    </v-row>

    <v-row class="pb-5">
      <v-col class="text-center sm">
        <v-btn
          target="blank"
          onclick="window.location.href = 'mailto:contact@data4biz.fr?subject=Demande info';"
          class="bg-gradient-orange"
          >Prendre contact avec Codit</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Codit",
};


</script>

<style scoped>
.lien-web {
  color: #fff;
}
.lien-web:hover {
  color: #0a66c2;
}
.bg-gradient-orange {
  background: linear-gradient(
    16deg,
    rgba(214, 96, 98, 1) 34%,
    rgba(227, 126, 84, 1) 60%
  );
}
.img-profil {
  width: 50%;
}

.video {
  width: 50vh;
}

.maps {
  width: 50vh;
}
</style>
