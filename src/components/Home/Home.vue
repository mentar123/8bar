<template>
  <div class="home">
   <section class="section1">
      <div class="shop">
          <p>magazine for free <br> people</p>
          <router-link class="nav-link" to="/shop">shop</router-link>
       </div>
   </section>
   <section class="section2">
      <div class="last-magazine">
          <img src="../../assets/img/last-magazine.jpg" alt="">
      </div>
      <div class="issue-magazine">
        <div class="issue">
          <h2>fixed gear magazine issue 6</h2>
          <p>Latest issue of fixed gear magazine describe
            the latest innovations on the market.
            New models of rudders and steering columns.
            An incredible combination of the beauty
            of lightness and sportiness.</p>
          <router-link class="nav-link" to="/shop">view</router-link>
        </div>
        </div> 
   </section>
   <section class="section3">
      <div>
        <div>
          <h2>You should know more</h2>
          <span>what waiting for you around the corner</span>
        </div>
      </div>
   </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title:'Home',
      msg: 'Welcome to 8bar App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "home.scss";
</style>
