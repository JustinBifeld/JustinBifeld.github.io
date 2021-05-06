<template>
  <div class="Main-Body" id="Main-Body">
    
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
  top: 50px;
  position: absolute;
}
.grayed{
  opacity: 0.5 !important;
  filter: brightness(50%);
}
</style>
