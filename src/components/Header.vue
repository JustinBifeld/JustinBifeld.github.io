<template>
  <div class="header">
    <b-navbar class="navbar" toggleable="lg" type="dark">
      <b-navbar-brand class="name">Justin Bifeld</b-navbar-brand>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="mt-2" is-nav>
        <b-navbar-nav class="ml-auto mb-3">
            <template v-if="isCollapsed"> <!-- Collapsed menu is open (menu is down) , can be toggled to close menu (more for mobile)-->
              <b-button class="button-list-item" v-b-toggle.nav-collapse @click="scrollToSection('About-Anchor')">About</b-button>
              <b-button class="button-list-item" v-b-toggle.nav-collapse @click="scrollToSection('Projects-Anchor')">Projects</b-button>
              <b-button class="button-list-item" v-b-toggle.nav-collapse @click="scrollToSection('Experience-Anchor')">Experience</b-button>
              <b-button class="button-list-item" v-b-toggle.nav-collapse @click="scrollToSection('Education-Anchor')">Education</b-button>
              <b-button class="button-list-item" v-b-toggle.nav-collapse @click="scrollToSection('Contact-Anchor')">Contact</b-button>
            </template>
            <template v-else> <!-- Collapsed menu is closed (menu is up), can't be toggled change menu (more for desltop) -->
              <b-button class="button-list-item" @click="scrollToSection('About-Anchor')">About</b-button>
              <b-button class="button-list-item" @click="scrollToSection('Projects-Anchor')">Projects</b-button>
              <b-button class="button-list-item" @click="scrollToSection('Experience-Anchor')">Experience</b-button>
              <b-button class="button-list-item" @click="scrollToSection('Education-Anchor')">Education</b-button>
              <b-button class="button-list-item" @click="scrollToSection('Contact-Anchor')">Contact</b-button>
            </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data: () => ({
    isCollapsed: false,
    About: "About",
  }),
  methods: {
    scrollToSection: function(sectionText){
      console.log(sectionText);
      // Scroll to section
      document.getElementById(sectionText).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
    // Event listener for when user expands window making navbar not longer collapsed (causes opacity changes  to remain, need to remove when no longer collapsable)
  },
  mounted() {
      this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
        this.isCollapsed = isJustShown
        if(isJustShown)
          document.getElementById("Main-Body").classList.add("grayed")
        else
          document.getElementById("Main-Body").classList.remove("grayed")
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  background: rgb(33, 29, 53);
  height: 90px;
  width: 100%;
}
.navbar{
  background: rgb(40, 38, 46);
  text-align: center;
  width: 100%;
  position: fixed;

}
.name{
  font-weight: bold;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 30px;
  left: 5%;
}
.button-list-item{
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
  background: black;
}
.button-list-item:hover{
  font-weight: bold;
}
</style>
