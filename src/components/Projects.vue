<template>
  <div id="Projects">
      <div id="Projects-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <p class="Projects-Text">
        Projects Text - Coming Soon!
      </p>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text">project 1 Name</p>
                </div>
            </div>
          </div>
          <div class="col-md">
            project 2
          </div>
          <div class="col-md">
            project 3
          </div>
        </div>
      </div>
    <!-- Experience Section -->
    <!-- Education Section -->
    <!-- Recipes Section -->
    <!-- Contact Section -->
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
.Main-Body{
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #4e94da 0%, #34004b 100%);
  top: 90px;
  position: absolute;
}
.grayed{
  /*Change brightness of everything except header, used when header collapsable menu is opened*/
  filter: brightness(50%);
}
#About{
  background: rgb(13, 13, 60);
  width: 100%;
  height: calc(100vh - 90px);
  min-height: 650px;
  overflow: hidden;
  overflow-y: hidden;
  -webkit-overflow-Y: hidden;
    -moz-overflow-Y: hidden;
    -o-overflow-Y: hidden;
    overflow-y: hidden;
}
#Me-Image{
  width: 240px;
  height: 240px;
  max-width: 240px;
  max-height: 240px;
  margin: 50px;
  opacity: 0;
  color: white;
  animation: fadeIn 2s forwards;
  animation-delay: 2s;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
#About-Name{
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  color: white;
  text-align: center;
  width: max-content;
  position: relative;
}
#About-Line{
  height: 1px;
  width: 0;
  background-color:rgb(255, 255, 255);
  animation:grow 4s forwards;
  animation-delay: 1s;
  position:relative;
  margin-bottom: 50px;
}
@keyframes grow{
  0% {
    width: 0%;
    left: 50%;
  }
  100%{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    left: 0%;
  }
}
#About-Degree{
  color: white;
  animation: fadeIn 2s forwards;
  animation-delay: 2s;
  opacity: 0;
}
#About-School{
  color: white;
  animation: fadeIn 2s forwards;
  animation-delay: 2s;
  opacity: 0;
}
.About-Text{
  color: white;
  animation: fadeIn 2s forwards;
  animation-delay: 2s;
  opacity: 0;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.webgl{
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
#Projects{
  width: 100%;
  height: 1000px;
  background: rgb(116, 99, 5);
  
}
.Projects-Text{
  color: white;
}



.light {
    position: absolute;
    width: 0px;
    opacity: .75;
    background-color: white;
    box-shadow: #e9f1f1 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    -webkit-overflow-Y: hidden;
    -moz-overflow-Y: hidden;
    -o-overflow-Y: hidden;
    overflow-y: hidden;
}

.x1{
  -webkit-animation: floatUp 4s infinite linear;
  -moz-animation: floatUp 4s infinite linear;
  -o-animation: floatUp 4s infinite linear;
  animation: floatUp 4s infinite linear;
   -webkit-transform: scale(1.0);
   -moz-transform: scale(1.0);
   -o-transform: scale(1.0);
  transform: scale(1.0);
}

.x2{
  -webkit-animation: floatUp 7s infinite linear;
  -moz-animation: floatUp 7s infinite linear;
  -o-animation: floatUp 7s infinite linear;
  animation: floatUp 7s infinite linear;
  -webkit-transform: scale(1.6);
  -moz-transform: scale(1.6);
  -o-transform: scale(1.6);
  transform: scale(1.6);
  left: 15%;
}

.x3{
  -webkit-animation: floatUp 2.5s infinite linear;
  -moz-animation: floatUp 2.5s infinite linear;
  -o-animation: floatUp 2.5s infinite linear;
  animation: floatUp 2.5s infinite linear;
  -webkit-transform: scale(.5);
  -moz-transform: scale(.5);
  -o-transform: scale(.5);
  transform: scale(.5);
  left: -15%;
}

.x4{
  -webkit-animation: floatUp 4.5s infinite linear;
  -moz-animation: floatUp 4.5s infinite linear;
  -o-animation: floatUp 4.5s infinite linear;
  animation: floatUp 4.5s infinite linear;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  left: -34%;
}

.x5{
  -webkit-animation: floatUp 8s infinite linear;
  -moz-animation: floatUp 8s infinite linear;
  -o-animation: floatUp 8s infinite linear;
  animation: floatUp 8s infinite linear;
  -webkit-transform: scale(2.2);
  -moz-transform: scale(2.2);
  -o-transform: scale(2.2);
  transform: scale(2.2);
  left: -57%;
}

.x6{
  -webkit-animation: floatUp 3s infinite linear;
  -moz-animation: floatUp 3s infinite linear;
  -o-animation: floatUp 3s infinite linear;
  animation: floatUp 3s infinite linear;
  -webkit-transform: scale(.8);
  -moz-transform: scale(.8);
  -o-transform: scale(.8);
  transform: scale(.8);
  left: -81%;
}

.x7{
  -webkit-animation: floatUp 5.3s infinite linear;
  -moz-animation: floatUp 5.3s infinite linear;
  -o-animation: floatUp 5.3s infinite linear;
  animation: floatUp 5.3s infinite linear;
  -webkit-transform: scale(3.2);
  -moz-transform: scale(3.2);
  -o-transform: scale(3.2);
  transform: scale(3.2);
  left: 37%;
}

.x8{
  -webkit-animation: floatUp 4.7s infinite linear;
  -moz-animation: floatUp 4.7s infinite linear;
  -o-animation: floatUp 4.7s infinite linear;
  animation: floatUp 4.7s infinite linear;
  -webkit-transform: scale(1.7);
  -moz-transform: scale(1.7);
  -o-transform: scale(1.7);
  transform: scale(1.7);
  left: 62%;
}

.x9{
  -webkit-animation: floatUp 4.1s infinite linear;
  -moz-animation: floatUp 4.1s infinite linear;
  -o-animation: floatUp 4.1s infinite linear;
  animation: floatUp 4.1s infinite linear;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -o-transform: scale(0.9);
  transform: scale(0.9);
  left: 85%;
}


@-webkit-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-moz-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-o-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}

</style>
