<template>
  <div class="wrapper">
      <blog-nav /> 
      <div class="container main">
          <router-view></router-view>
          <aside>aside</aside>
      </div>
      <footer>footer</footer>
  </div>
</template>
<script>
import blogNav from '@/components/nav.vue'
import axios from 'axios'
// import {mapMutations} from 'vuex'
export default {
    
    created () {
        axios.get('http://localhost:12380/data').then((val)=>{
            // this.$store.state.data = val.data
            this.$store.dispatch('ssetData',val.data)
            console.log(this.$store.state.data)
        })
    },
    components:{
        blogNav
    }
};
</script>
<style lang="scss">
    @import '@/assets/css/base.scss';
</style>
