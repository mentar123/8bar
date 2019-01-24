<template>
  <div class="stream">
    <section class="section1">
      <div class="vimeo-wrapper">
        <iframe src="https://player.vimeo.com/video/306551173?background=1&autoplay=0&loop=1&byline=0&title=0"
           frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      
      <div class="play">
          <button @click="play()">stream</button>
      </div>
      
  </section>
  
  </div>
</template>

<script>
export default {
  name: 'StreamComp',
  data () {
    return {
      title:'Stream',
      msg: 'stream'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "streamComp.scss";
</style>

