<template>
<div class="sections">
  <div class="border-line-1"></div>
  <div id="Projects">
      <div id="Projects-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <p class="Projects-Text section-header-text">
        Projects Text - Coming Soon!
      </p>
      <div class="container projects-grid">
        <div class="row justify-content-center project-row">
            <div class="col-md-6 col-lg-4 mb-5">
                <div v-b-modal.project-1 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/logo.png">
                    <div class="card-body">
                        <p class="card-text">project 1 Name</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" content-class="project-popup" id="project-1" body-class="p-0" ok-only centered title="Project 1">
                    <div class="container" id = "project-1-body">
                      <b-img id="project-1-image" class="fixed_width project-image" src="../assets/logo.png"></b-img>
                      <p1>TESTING</p1>
                    </div>
                </b-modal>
            </div>

            <div class="col-md-6 col-lg-4 mb-5">
                <div v-b-modal.project-2 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/logo.png">
                    <div class="card-body">
                        <p class="card-text">project 2 Name</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" content-class="project-popup" id="project-2" body-class="p-0" ok-only centered title="Project 2">
                    <div class="container" id = "project-2-body">
                      <b-img id="project-2-image" class="fixed_width project-image" src="../assets/logo.png"></b-img>
                      <p1>TESTING</p1>
                    </div>
                </b-modal>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
                <div v-b-modal.project-3 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/logo.png">
                    <div class="card-body">
                        <p class="card-text">project 3 Name</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" content-class="project-popup" id="project-3" body-class="p-0" ok-only centered title="Project 3">
                    <div class="container" id = "project-3-body">
                      <b-img id="project-3-image" class="fixed_width project-image" src="../assets/logo.png"></b-img>
                      <p1>TESTING</p1>
                    </div>
                </b-modal>
            </div>
      
       
            <div class="col-md-6 col-lg-4 mb-5">
                <div v-b-modal.project-4 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/logo.png">
                    <div class="card-body">
                        <p class="card-text">project 4 Name</p>
                    </div>
                </div>
                <b-modal class="modal fade" content-class="project-popup" id="project-4" body-class="p-0" ok-only centered title="Project 4">
                    <div class="container" id = "project-4-body">
                      <b-img id="project-4-image" class="fixed_width project-image" src="../assets/logo.png"></b-img>
                      <p1>TESTING</p1>
                    </div>
                </b-modal>
            </div>

            <div class="col-md-6 col-lg-4 mb-5">
                <div v-b-modal.project-5 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/logo.png">
                    <div class="card-body">
                        <p class="card-text">project 5 Name</p>
                    </div>
                </div>
                <b-modal class="modal fade" content-class="project-popup" id="project-5" body-class="p-0" ok-only centered title="Project 5">
                    <div class="container" id = "project-5-body">
                      <b-img id="project-5-image" class="fixed_width project-image" src="../assets/logo.png"></b-img>
                      <p1>TESTING</p1>
                    </div>
                </b-modal>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
                <div v-b-modal.project-6 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/logo.png">
                    <div class="card-body">
                        <p class="card-text">project 6 Name</p>
                    </div>
                </div>
                <b-modal class="modal fade" content-class="project-popup" id="project-6" body-class="p-0" ok-only centered title="Project 6">
                    <div class="container" id = "project-6-body">
                      <b-img id="project-6-image" class="fixed_width project-image" src="../assets/logo.png"></b-img>
                      <p1>TESTING</p1>
                    </div>
                </b-modal>
            </div>
        </div>
      </div>
  </div>

<!-- Experience Section -->
  <div class="border-line-2"></div>
  <div id="Experience">
      <div id="Experience-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <p class="Experience-Text section-header-text">
        Experience Text - Coming Soon!
      </p>
      <div class="container projects-grid">
        <div class="row justify-content-center project-row">
            <div class="col-md-6 col-lg-4 mb-5">
                <div v-b-modal.Experience-1 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/logo.png">
                    <div class="card-body">
                        <p class="card-text">Experience 1 Name</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" content-class="project-popup" id="Experience-1" body-class="p-0" ok-only centered title="Experience 1">
                    <div class="container" id = "Experience1-body">
                      <b-img id="Experience-1-image" class="fixed_width project-image" src="../assets/logo.png"></b-img>
                      <p1>TESTING</p1>
                    </div>
                </b-modal>
            </div>

            <div class="col-md-6 col-lg-4 mb-5">
                <div v-b-modal.Experience-2 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/logo.png">
                    <div class="card-body">
                        <p class="card-text">Experience 2 Name</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" content-class="project-popup" id="Experience-2" body-class="p-0" ok-only centered title="Experience 2">
                    <div class="container" id = "Experience-2-body">
                      <b-img id="Experience-2-image" class="fixed_width project-image" src="../assets/logo.png"></b-img>
                      <p1>TESTING</p1>
                    </div>
                </b-modal>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
                <div v-b-modal.Experience-3 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/logo.png">
                    <div class="card-body">
                        <p class="card-text">Experience 3 Name</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" content-class="project-popup" id="Experience-3" body-class="p-0" ok-only centered title="Experience 3">
                    <div class="container" id = "Experience-3-body">
                      <b-img id="Experience-3-image" class="fixed_width project-image" src="../assets/logo.png"></b-img>
                      <p1>TESTING</p1>
                    </div>
                </b-modal>
            </div>
        </div>
      </div>
  </div>

  <!-- Education Section -->
  <div class="border-line-2"></div>
  <div id="Education">
      <div id="Education-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <p class="Education-Text section-header-text">
        Education Text - Coming Soon!
      </p>
      <div class="container projects-grid">
        <div class="row justify-content-center project-row">
            <div class="col-md-6 col-lg-4 mb-5">
                <div v-b-modal.Education-1 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/logo.png">
                    <div class="card-body">
                        <p class="card-text">Education 1 Name</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" content-class="project-popup" id="Education-1" body-class="p-0" ok-only centered title="Education 1">
                    <div class="container" id = "Education1-body">
                      <b-img id="Education-1-image" class="fixed_width project-image" src="../assets/logo.png"></b-img>
                      <p1>TESTING</p1>
                    </div>
                </b-modal>
            </div>

            <div class="col-md-6 col-lg-4 mb-5">
                <div v-b-modal.Education-2 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/logo.png">
                    <div class="card-body">
                        <p class="card-text">Education 2 Name</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" content-class="project-popup" id="Education-2" body-class="p-0" ok-only centered title="Education 2">
                    <div class="container" id = "Education-2-body">
                      <b-img id="Education-2-image" class="fixed_width project-image" src="../assets/logo.png"></b-img>
                      <p1>TESTING</p1>
                    </div>
                </b-modal>
            </div>
        </div>
      </div>
  </div>
  <!-- Recipes Section -->
  <!-- Contact Section -->
  <div class="border-line-2"></div>
  <div id="Contact">
      <div id="Contact-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <p class="Contact-Text section-header-text">
        Contact Text - Coming Soon!
      </p>
      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
      <div class="container projects-grid">
        <div class="row justify-content-center project-row">
          <div class="col-md-6 col-lg-2 mb-5">
            <h1 class="contact-info-text">justinbifeld@gmail.com</h1>
          </div>
          <div class="col-md-6 col-lg-2 mb-5">
            <h1 class="contact-info-text">847-915-9958</h1>
          </div>
          <div class="col-md-6 col-lg-2 mb-5">
            <p><i class="fab fa-github fa-3x"></i></p>
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <a href="https://www.linkedin.com/in/justinbifeld/"><i class="fab fa-linkedin fa-3x"></i></a>
          </div>
        </div>
      </div>
      
  </div>
</div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js" integrity="sha512-cdV6j5t5o24hkSciVrb8Ki6FveC2SgwGfLE31+ZQRHAeSRxYhAQskLkq3dLm8ZcWe1N3vBOEYmmbhzf7NTtFFQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/CSSRulePlugin.min.js" integrity="sha512-0bzaetZStCnsUgbCtGVxftzF/L32PNOnrMlYLXwBOKl8cUjTSSDfJVyyJsNwGoI0iE0WUqni2eEfO35kJjFj5g==" crossorigin="anonymous"></script>




<script>
import gsap from "gsap";
import {CSSRulePlugin, CSSPlugin} from "gsap/all";
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
    centerName(){
      // Centering name in JS - called when window size changes 
      // easier way to do it with animation constraints (width = text width)
      let name = document.getElementById("About-Name")
      let about = document.getElementById("About")
      name.style.left = (about.offsetWidth / 2) - (name.offsetWidth / 2) + 'px'
    }
  },
  created(){
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js")
    recaptchaScript.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/CSSRulePlugin.min.js")
    document.head.appendChild(recaptchaScript)
  },
  mounted(){
    gsap.registerPlugin(CSSRulePlugin)
    gsap.registerPlugin(CSSPlugin)
    const tl = gsap.timeline()
    tl.to('#About-Name', { duration: 2, delay: 2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
    // Centering name in JS - easier way to do it with animation constraints (width = text width)
    let name = document.getElementById("About-Name")
    let about = document.getElementById("About")
    name.style.left = (about.offsetWidth / 2) - (name.offsetWidth / 2) + 'px'
    window.onresize = this.centerName  //Re center when window size changes
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Projects{
  width: 100%;
  height: auto;
  background: rgba(56, 50, 77, 0);
}
.section-header-text{
  color: white;
  font-size: 30px;
}
.contact-info-text{
  color: white;
  font-size: 20px;
}
.projects-grid{
  background: white;
}
.project-card{
    background: black;
    color: white;
    border-radius: 20px;
    padding: 10px;
}
.project-image-button{
    border: black;
}
.projects-grid{
  padding: 20px;
  background: rgba(30, 24, 49, 0);
}
.project-row{
  margin: 20px
}
.project-image{
  width: 100%;
}
#Experience{
  width: 100%;
  height: auto;
  background: rgba(202, 124, 60, 0);
}
#Education{
  width: 100%;
  height: auto;
  background: rgba(77, 9, 80, 0);
}
#Contact{
  width: 100%;
  height: auto;
  background: rgba(26, 6, 100, 0);
}
.border-line-1{
  height: 5px;
  background: rgb(0, 0, 0);
}
.border-line-2{
  height: 5px;
  width: 90%;
  margin-left: 5%;
  background: rgb(0, 0, 0);
}
.sections{
  background: rgb(56, 50, 77);
}
/deep/ .modal-body { 
  text-align: center;
}

#project-modal{
  background: black !important;
}
/deep/ .project-popup {
  background: rgb(59, 51, 65);
  color: white;
}
/deep/ .modal-header {
  border-color: rgb(39, 98, 102);
}
/deep/ .modal-footer {
  border-color: rgb(39, 98, 102);
}

</style>

