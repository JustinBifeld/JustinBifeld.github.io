<template>
  <div class="Main-Body" id="Main-Body">
    <section id="About">
      <div id="About-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <b-img class="Me-Image" src="../assets/logo.png"></b-img>
      <h1 id="About-Name">Justin Bifeld</h1>
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
    </section>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js" integrity="sha512-cdV6j5t5o24hkSciVrb8Ki6FveC2SgwGfLE31+ZQRHAeSRxYhAQskLkq3dLm8ZcWe1N3vBOEYmmbhzf7NTtFFQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/CSSRulePlugin.min.js" integrity="sha512-0bzaetZStCnsUgbCtGVxftzF/L32PNOnrMlYLXwBOKl8cUjTSSDfJVyyJsNwGoI0iE0WUqni2eEfO35kJjFj5g==" crossorigin="anonymous"></script>
<script>
  const h1 = document.getElementById("About-Name")
  const tl = gsap.timeline()
  tl.to(h1, { duration: 10, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
</script>

<script>

export default {
  name: 'Header',
  props: {
    msg: String
  },
  created(){
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js")
    recaptchaScript.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/CSSRulePlugin.min.js")
    document.head.appendChild(recaptchaScript)
  },
  mounted(){
    
    const h1 = document.getElementById("About-Name")
    const tl = gsap.timeline()
    tl.to(h1, { duration: 2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
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
.About-Text{
  color: white;
}
#About-Name{
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
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
