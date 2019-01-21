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
     <div class="vimeo-wrapper">
   <iframe src="https://player.vimeo.com/video/109392747?background=1&autoplay=0&loop=1&byline=0&title=0"
           frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
      
        <div class="play">
          <div class="tittle">
            <h2>You should <br> know more</h2>
          <span>what waiting for you <br> around the corner</span>
          </div>
          <button @click="play()">play</button>
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
  },
  methods: {
    play: function(){
      console.log('play')
      let iframe = document.querySelector('iframe');
      console.log(iframe)
    let player = new Vimeo.Player(iframe);
    let playClass = document.querySelector(".play")
    playClass.classList.add('hide')
    player.play();
      

   
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "home.scss";
</style>
