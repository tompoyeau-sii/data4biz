<template>
  <v-navigation-drawer
    color="#35393E"
    class="hidden-md-and-up"
    v-model="drawer"
    temporary
  >
    <v-list class="text-center" style="background-color: transparent">
      <v-list-tile class="mt-5" v-for="item in menu" :key="item.link">
        <router-link
          style="background-color: transparent; align-content: center"
          class=""
          :to="item.link"
        >
          <v-btn
            elevation="0"
            style="background-color: transparent; color: white"
            >{{ item.title }}</v-btn
          >
        </router-link>
      </v-list-tile>
    </v-list>
    <v-spacer></v-spacer>
    <template v-slot:append>
      <div class="pa-2">
        <v-img
          class="logo ma-2"
          alt="Dat4biz logo"
          src="../assets/img/logoBlanc.svg"
        />
      </div>
    </template>
  </v-navigation-drawer>

  <v-app-bar class="hidden-md-and-up" app color="#35393E" elevation="0">
    <v-app-bar-nav-icon
      color="#fff"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <v-app-bar
    fixed
    color="#35393E"
    elevation="0"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    class="hidden-sm-and-down"
    style="top: 0"
  >
    <v-spacer></v-spacer>
    <v-list style="background-color: transparent">
      <v-list-tile v-for="item in menu" :key="item.link">
        <router-link class="" :to="item.link">
          <v-btn color="#fff">{{ item.title }}</v-btn>
        </router-link>
      </v-list-tile>
    </v-list>
  </v-app-bar>

  <!-- <router-link class="" to="/">
    <v-btn color="#fff">Accueil</v-btn>
  </router-link>
  <router-link class="" to="/about">
    <v-btn color="#fff">Qui sommes nous ?</v-btn>
  </router-link>
  <router-link class="" to="/membres">
    <v-btn color="#fff">Nos membres</v-btn>
  </router-link>
  <router-link class="" to="/interlocuteur"
    ><v-btn color="#fff">Trouver un interlocuteur</v-btn>
  </router-link> -->
  <!-- <v-app-bar
    fixed
    color="#35393E"
    elevation="0"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    class="hidden-sm-and-down"
    >
    <v-spacer></v-spacer>
    <v-list style="background-color: transparent;">
      <v-list-tile v-for="item in menu" :key="item.icon">
        <router-link class="" to="{{ item.title }}">
          <v-btn color="#fff">{{ item.title }}</v-btn>
        </router-link>
      </v-list-tile>
    </v-list> 
  </v-app-bar>-->
</template>

<script>
export default {
  name: "myToolbar",

  data: function () {
    return {
      drawer: null,
      tab: null,
      menu: [
        { link: "/", title: "Accueil" },
        { link: "/about", title: "Qui sommes nous ?" },
        { link: "/membres", title: "Nos membres" },
        { link: "/interlocuteur", title: "Trouver un interlocuteur" },
      ],
    };
  },
  methods: {
    menuItems() {
      return this.menu;
    },
    goHome() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
button:hover {
  color: #e37e54 !important;
}
</style>
