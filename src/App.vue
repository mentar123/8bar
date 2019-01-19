<template>
  <div id="app">

 <div class="nav text-white">
    <div class="left-nav">
        
<li class="nav-item">
  <router-link class="nav-link" to="/bikecheck">bikecheck</router-link>
 </li>
 <li class="nav-item">
  <router-link class="nav-link" to="/shop">shop</router-link>
 </li>
 <li class="nav-item">
  <router-link class="nav-link" to="/stream">stream</router-link>
 </li>
 
  </div>
  <div class="logo"><li class="nav-item">
  <router-link class="nav-link" to="/">Home</router-link>
</li>
</div>
<div class="right-nav">
   <li class="nav-item">
  <router-link class="nav-link" to="/">log in / register</router-link>
 </li> <li class="nav-item">
  <router-link class="nav-link" to="/">basket</router-link>
 </li> <li class="nav-item">
  <router-link class="nav-link" to="/">ua|EN</router-link>
 </li>
  
</div>
 </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "app.scss"
</style>
