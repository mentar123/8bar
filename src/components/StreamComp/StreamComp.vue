<template>
  <div class="stream">
    <section class="section1">
      <div class="vimeo-wrapper">
        <iframe src="https://player.vimeo.com/video/110052827?background=1&autoplay=1&loop=1&byline=0&title=0"
           frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      
      <div class="play">
          <h2>Stream</h2>
      </div>
      
    </section>
    <section class="section2">
      <div class="wrapper">
        <h3>What is fixed gear?..</h3>
        <p>Fixed Gear - the transmission is fixed, that is, the pedals rotate simultaneously with the wheel.</p>
        <p>The fix is much less detailed, which means that the bike ... is easier! Bicycles Fixed Gear is much lighter 27-speed mountain bikes and the rest. But that's not all.</p>
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
  },
  methods: {
     
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "streamComp.scss";
</style>

