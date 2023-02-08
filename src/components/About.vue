<template>
  <div class="container text-center main" style="position: relative !important">
    <div class="row">
      <div style="border-bottom: 2px solid #e37e54" class="col p-4">
        <h2>Qui sommes nous ?</h2>
      </div>
    </div>

    <div class="row pl-4 pr-4 pt-3 pb-3 sm">
      Data4biz est un groupe de professionnels, créé en 2020 par la technopole
      du Mans et de la Sarthe (Le Mans Innovation) et la société Get Time. Il
      réunit des entreprises, des acteurs publics, Le Mans Innovation et Le Mans
      Université.
    </div>
    <div class="row pl-4 pr-4 pt-3 pb-3 sm">
      Cette initiative vise à organiser un groupe de réflexion local dans le
      domaine de la Data Science et de l'intelligence artificielle, pour initier
      une dynamique locale et des actions communes.
    </div>
    <div class="row pl-4 pr-4 pt-3 pb-4 sm">
      Ce groupe se réunit chaque mois pour renforcer des liens commerciaux,
      accueillir des PME et ETI qui exposent leurs besoins et/ou attentes
      vis-à-vis de la data, échanger sur des nouvelles méthodologies ou des
      nouveaux outils de data sciences, etc.
    </div>

    <div
      class="bg-gradient-orange rounded-2 text-left p-5"
      style="align-content: center"
    >
      <div
        class="row"
        style="align-content: center; display: flex; justify-content: center"
      >
        <div
          class="col-md-12 col-lg-12 col-xl-3 partenaire"
          style="border-right: 1px solid #fff"
        >
          <h1>Nos Partenaires</h1>
        </div>
        <div class="col-sm-2 col-md-12 col-lg-12 col-xl-3 logo">
          <v-img
            class="logo"
            alt="Dat4biz logo"
            src="../assets/img/partenaires/SIIlogo.svg"
          />
        </div>
        <div class="col-sm-2 col-md-12 col-lg-12 col-xl-3 logo">
          <v-img
            class="logo"
            alt="Dat4biz logo"
            src="../assets/img/partenaires/lmib.png"
          />
        </div>
        <div class="col-sm-2 col-md-12 col-lg-12 col-xl-3 logo">
          <v-img
            class=""
            alt="Dat4biz logo"
            src="../assets/img/partenaires/lmu2.png"
          />
        </div>
        <!-- <div class="col-sm-2">
          <v-img
            class="logo"
            alt="Dat4biz logo"
            src="../assets/img/partenaires/sarthe.png"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.bg-gradient-orange {
  color: #fff;
  background: linear-gradient(
    16deg,
    rgba(214, 96, 98, 1) 34%,
    rgba(227, 126, 84, 1) 60%
  );
}

.logo {
  width: 25vh;
  align-self: center;
}

@media only screen and (max-width: 800px) {
  .partenaire {
    border-right: none !important;
    text-align: center;
  }
}

@media only screen and (max-width: 1200px) {
  .partenaire {
    border-right: none !important;
    text-align: center;
  }

  .logo {
    width: 25vh;
  }
}
@media only screen and (min-width: 1200px) {
  .partenaire {
    display: flex;
    align-items: center;
  }
}
</style>
