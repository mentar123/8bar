<template>
  <div class="bikecheck">
    <section class="section1">
      <div class="container-fluide">
        <h2>Photos by<br>our subscribers</h2>
      </div>
    </section>
    <section class="section2">

    </section>
    <section class="section3">
      
    </section>
    <section class="section4">
      
    </section>
    <section class="section5">
      <div class="container-fluide">
        <div class="wrapper">
          <h3>take a photo</h3>
          <span>You can send us your fixed gear bike photos and then you can see it in our magazine </span>
          <a href="#" class="button">send us photos</a>
        </div>
        <div class="sub">
          <h2>subscribe to our newsletter</h2>
          <a href="#" class="button black">e-mail</a>
          <a href="#" class="button">submit</a>
        </div>
      </div>
      <div class="footer">
          <ul>
            <li><a href="#">shipping</a></li>
            <li><a href="#">terms & privacy policy</a></li>
            <li><a href="#">contact</a></li>
          </ul>
          <ul>
            <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
            <li><a href="#"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
            <li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
          </ul>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Bikecheck',
  data () {
    return {
      title:'Bikecheck',
      msg: 'Bikecheck'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import "bikecheck.scss"
</style>
