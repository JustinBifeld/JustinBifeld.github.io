<template>
  <div class="header">
    <b-navbar class="navbar" toggleable="lg" type="dark">
      <b-navbar-brand class="name">Justin Bifeld</b-navbar-brand>
      
      <b-navbar-toggle target="nav-collapse" @click="grayOutMain"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="mt-2" is-nav>
        <b-navbar-nav class="ml-auto mb-3">
            <b-button class="button-list-item" v-b-toggle.nav-collapse @click="scrollToSection">About</b-button>
            <b-button class="button-list-item" v-b-toggle.nav-collapse @click="scrollToSection">Projects</b-button>
            <b-button class="button-list-item" v-b-toggle.nav-collapse @click="scrollToSection">Experience</b-button>
            <b-button class="button-list-item" v-b-toggle.nav-collapse @click="scrollToSection">Education</b-button>
            <b-button class="button-list-item" v-b-toggle.nav-collapse @click="scrollToSection">Recipes</b-button>
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
  methods: {
    grayOutMain(){
      //document.getElementById("nav-collapse").classList.visible = true;
      if(document.getElementById("Main-Body").classList.contains("grayed"))
        document.getElementById("Main-Body").classList.remove("grayed")
      else
        document.getElementById("Main-Body").classList.add("grayed") 
    },
    scrollToSection(section){
      console.log(section);
      this.grayOutMain();
      // Collapse Bar
      // Scroll to section
      // Call grayOutMain
    }
    // Event listener for when user expands window making navbar not longer collapsed (causes opacity changes  to remain, need to remove when no longer collapsable)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background: black;
  text-align: center;
  width: 100%;
  position: fixed;
}
.name{
  font-weight: bold;
  font-size: 30px;
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
#nav-collapse{
  @click
}
</style>
