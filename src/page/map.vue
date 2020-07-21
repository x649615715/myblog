<template>
  <article class="map-wrapper">
    <div class="map">
      <ul v-for="(item, index) in mapList" :key="index">
        <li>
          <a href="#">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <page-nation></page-nation>
  </article>
</template>

<script>
import { mapState } from "vuex";
import pageNation from "@/components/pageNation.vue";

export default {
  components: {
    pageNation
  },
  computed: {
    ...mapState(["mapList"])
  }
};
</script>

<style lang="scss">
@import "@/assets/css/map.scss";
</style>