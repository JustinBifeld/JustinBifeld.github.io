<template>
  <div class="Main-Body" id="Main-Body">
    <section id="About">
      <p class="About-Text">
        About Text - Coming Soon!
      </p>
    </section>
    <section id="Projects">
      <p class="Projects-Text">
        Projects Text - Coming Soon!
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
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
#Projects{
  width: 100%;
  height: 500px;
  background: rgb(116, 99, 5);
}
.Projects-Text{
  color: white;
}
</style>
