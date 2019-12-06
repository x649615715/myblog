<template>
  <div class="wrapper">
      <blog-nav /> 
      <div class="container main">
          <router-view />
          <my-aside />
      </div>
      <my-footer />
  </div>
</template>
<script>
import blogNav from '@/components/nav.vue'
import myAside from '@/components/aside.vue'
import myFooter from '@/components/footer.vue'
// import axios from 'axios'
// import {mapMutations} from 'vuex'
export default {
    
    created () {
        // axios.get('http://localhost:12380/data').then((val)=>{
        //     // this.$store.state.data = val.data
        //     this.$store.dispatch('ssetData',val.data)
        //     console.log(this.$store.state.data)
        // })
    },
    components:{
        blogNav,
        myAside,
        myFooter
    }
};
</script>
<style lang="scss">
    @import '@/assets/css/base.scss';
</style>
