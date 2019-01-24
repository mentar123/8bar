<template>
  <div id="app"  >
    <section class="navigation">
       <div class="nav text-white">
         <div class="left-nav">
            <li class="nav-item" >
              <router-link class="nav-link" to="/bikecheck">bikecheck</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop">shop</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/stream">stream</router-link>
            </li>
 
          </div>
          <div class="logo">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
          </div>
          <div class="right-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">log in / register</router-link>
            </li> 
            <li class="nav-item">
              <router-link class="nav-link" to="/">basket</router-link>
            </li> 
            <li class="nav-item">
              <router-link class="nav-link" to="/">ua|EN</router-link>
            </li>
          </div>
        </div>
      </section>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
   data () {
    return {
      title:'Home',
      msg: 'Welcome to 8bar App'
    }
  }
  ,
  methods: {
    scrollMen(){
     
        let position = this.$el.getBoundingClientRect().top     
        if(position<0){
          this.$el.firstChild.classList.add("fixed");
          
        }
        else{
          this.$el.firstChild.classList.remove("fixed");
        }
      }
    
  },
  computed: {
    
  },
  created () {
    window.addEventListener('scroll', this.scrollMen);
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollMen);
  }
}

</script>

<style lang="scss">
@import "app.scss";
</style>
