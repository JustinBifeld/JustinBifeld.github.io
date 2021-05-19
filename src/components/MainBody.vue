<template>
  <div class="Main-Body" id="Main-Body">
    <section id="About">
      <div id="About-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <b-img id="Me-Image" class="fixed_width" src="../assets/Justin_Profile_Pic.png"></b-img>
      <h2 id="About-Line"></h2>
      <h1 id="About-Name">Justin Bifeld</h1>
      <h3 id="About-Info">BS in Computer Engineering - UIUC Dec '21</h3>
      <p class="About-Text">
        About Text - Coming Soon!
      </p>
      <canvas class="webgl"></canvas>
    </section>
    <section id="Projects">
      <div id="Projects-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <p class="Projects-Text">
        Projects Text - Coming Soon!
      </p>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md">
            project 1
          </div>
          <div class="col-md">
            project 2
          </div>
          <div class="col-md">
            project 3
          </div>
        </div>
      </div>

    </section>
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
      console.log('RESIZE')
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
    console.log(name.offsetWidth)
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
#About-Info{
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
</style>
