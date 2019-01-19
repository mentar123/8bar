<template>
  <div class="bikecheck">
    <h1> {{msg}}</h1>
    <h2>{{msg}}</h2>
    {{msg}}
    
    
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
