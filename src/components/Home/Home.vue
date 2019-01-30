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
      <div class="issues-magazine">
        <div class="issues">
          <h2>fixed gear magazine issue 6</h2>
          <p>Latest issue of fixed gear magazine describe
            the latest innovations on the market.
            New models of rudders and steering columns.
            An incredible combination of the beauty
            of lightness and sportiness.</p>
          <router-link class="button" to="/shop">view</router-link>
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
          <button @click="play()"><font-awesome-icon icon="play-circle" /></button>
      </div>
      
  </section>
  <section class="section4">
    <div class="container-fluid">
        <h2>The most actual<br> articles</h2>
        <div class="wrapper">
          <div class="magazine-wrapper">
            <img src="../../assets/img/photo-magazine.png" alt="">
            <div class="caption">
              <span>8bar collects the best originals photos<br> & most effective articles</span>
              <router-link class="button" to="/shop">SHOW NOW</router-link>
            </div>
          </div>
          
          <div class="photo">
            <img src="../../assets/img/photo-magazine-bike.jpg" alt="">
          </div>
        </div>
    </div>
  </section>
  <section class="section5">
    <div class="conteiner-fluid">
      <div class="wrapper">
        <span class="span1">Be ready <br> to ride</span>
        <span>hard ride</span>
      </div>
    </div>
  </section>
  <section class="section6">
    <div class="container-fluid">
      <div class="warpper">
        <a href="#" class="prev" @click="prev($event)"><font-awesome-icon icon="chevron-left" /></a>
        <div class="issue curry">
          <h3>issue1</h3>
          <img src="../../assets/img/section6-issue1.jpg" alt="">
           <a href="" class="button">show now</a>
        </div>
        <div class="issue">
          <h3>issue2</h3>
           <img src="../../assets/img/section6-issue2.jpg" alt="">
            <a href="" class="button">show now</a>
        </div>
        <div class="issue">
          <h3>issue3</h3>
           <img src="../../assets/img/section6-issue2.jpg" alt="">
            <a href="" class="button">show now</a>
        </div>
         <a href="#" class="next" @click="next($event)"><font-awesome-icon icon="chevron-right" /></a>
         
      </div>
     
      <div class="cyclists">
        <div class="cycl curry">
            <img src="../../assets/img/section6-cyclists1.jpg" alt="">
        </div>
        <div class="cycl">
            <img src="../../assets/img/section6-cyclists2.jpg" alt="">
        </div>
        <div class="cycl">
            <img src="../../assets/img/section6-cyclists2.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
  <section class="section7">
    <div class="container-fluid">
      <h2>You should<br>appreciate it</h2>
      <span>COOL BIKES</span>
    </div>
  </section>
  <section class="section8">
    <div class="conteiner-fluid">
      <h2>subscribe to our newsletter</h2>
      <a href="#" class="button black">e-mail</a>
      <a href="#" class="button">submit</a>
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
    },
  next:function(event){
    event.preventDefault();
    var currentIssue = $('.issue.curry');
    var currentIssueIndex = $(".issue.curry").index(".issue");
    var currentCycle = $('.cycl.curry');
    var currentCycleIndex = $('.cycl.curry').index(".cycl");
    var nextIssueIndex = currentIssueIndex+1;
    var nextCycleIndex = currentCycleIndex+1;
    var nextIssue = $('.issue').eq(nextIssueIndex);
    var nextCycle = $('.cycl').eq(nextCycleIndex);
    currentIssue.removeClass('curry');
    currentCycle.removeClass('curry');
    if(nextIssueIndex == ($('.issue:last').index(".issue")+1)){
      $('.issue').eq(0).addClass('curry');
      $('.cycl').eq(0).addClass('curry');
    }else{
      nextIssue.addClass('curry');
      nextCycle.addClass('curry');
    }
  },
  prev:function(event){
    event.preventDefault();
    var currentIssue = $('.issue.curry');
    var currentIssueIndex = $(".issue.curry").index(".issue");
    var currentCycle = $('.cycl.curry');
    var currentCycleIndex = $('.cycl.curry').index(".cycl");
    var nextIssueIndex = currentIssueIndex-1;
    var nextCycleIndex = currentCycleIndex-1;
    var nextIssue = $('.issue').eq(nextIssueIndex);
    var nextCycle = $('.cycl').eq(nextCycleIndex);
    currentIssue.removeClass('curry');
    currentCycle.removeClass('curry');
    nextIssue.addClass('curry');
    nextCycle.addClass('curry');
  }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "home.scss";

</style>
