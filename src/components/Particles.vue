<template>
  <div class="particles">
    <div id="particles-js"></div>
    <div class="container main">
      <!-- Version ordinateur-->
      <div class="row m-5 hidden-sm-and-down">
        <div class="col-s-12 col-lg-4 col-md-4">
          <v-img class="logo" alt="Dat4biz logo" src="../assets/img/logo.svg" />
        </div>

        <div
          class="col-lg-8 col-md-8 col-xs-12 hidden-sm-and-down"
          style="text-align: left"
        >
          <h1 class="accueil">
            Découvrez le monde de la data avec
            <strong class="text-gradient-orange">DATA</strong><strong>4</strong
            ><strong style="color: #e37e54">BIZ</strong>
          </h1>
          <div class="row">
            <div class="col">
              <p class="mt-4" id="data4biz_short">
                Data4biz est un groupe de professionnels, créé en 2020 par la
                technopole du Mans et de la Sarthe (Le Mans Innovation) et la
                société Get Time. Il réunit des entreprises, des acteurs
                publics, Le Mans Innovation et Le Mans Université.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Version tablette -->
      <div class="row m-5 hidden-md-and-up">
        <div
          class="col-lg-8 col-md-8 col-xs-12 text-center hidden-md-and-up hidden-sm-and-down"
        >
          <h1 class="accueil">
            Découvrez le monde de la data avec
            <strong class="text-gradient-orange">DATA</strong><strong>4</strong
            ><strong style="color: #e37e54">BIZ</strong>
          </h1>
        </div>

        <div
          class="col-s-12 col-lg-4 col-md-4 hidden-md-and-up hidden-sm-and-down"
          style="text-align: center !important"
        >
          <v-img class="logo" alt="Dat4biz logo" src="../assets/img/logo.svg" />
        </div>
      </div>

      <!-- Version téléphone -->
      <div class="row m-5 hidden-md-and-up">
        <div class="col-lg-8 col-md-8 col-xs-12 text-center hidden-md-and-up">
          <h1 class="accueil">
            Découvrez le monde de la data avec
            <strong class="text-gradient-orange">DATA</strong><strong>4</strong
            ><strong style="color: #e37e54">BIZ</strong>
          </h1>
        </div>

        <div
          class="col-s-12 col-lg-4 col-md-4 hidden-md-and-up logo"
          style="display: flex; justify-content: center"
        >
          <v-img alt="Dat4biz logo" src="../assets/img/logo.svg" />
        </div>
      </div>
      <!-- <p class="m-4" id="data4biz_short">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quos
        totam. Unde accusantium ut expedita mollitia fugit. Quaerat odit fugit
        optio omnis fugiat, facilis ullam natus illum enim veniam quia. Et
        voluptatem natus sit itaque provident distinctio! Incidunt, dolorum. Vel
        sequi distinctio repellendus fuga quibusdam aliquam molestiae nisi,
        possimus doloribus, velit nostrum, molestias rem enim aut!
      </p> -->
    </div>
  </div>
</template>

<script>
import "../../../particles.js/particles";
export default {
  name: "particles",
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 850,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 4,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    },
  },
};
</script>

<style scoped>
.particles {
  height: 100vh;
}

#particles-js {
  height: 100vh;
  width: 100%;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  backdrop-filter: blur(4px);
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}
.accueil {
  font-size: 3em;
}

.logo {
  width: 30vh !important;
}

@media only screen and (max-width: 400px) {
  .accueil {
    font-size: 0em !important;
  }

  .logo {
    display: flex;
    justify-content: center;
  }
}
@media only screen and (max-width: 800px) {
  .accueil {
    font-size: 2em !important;
  }

  .logo {
    align-self: center;
  }

  #data4biz_short {
    text-align: center;
  }
}
@media only screen and (max-width: 1200px) {
  .accueil {
    font-size: 3em !important;
  }

  .logo {
    width: 80%;
  }
}
</style>
