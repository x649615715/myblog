<template>
  <article>
    <div class="ps">
      <p>欢迎灌水交流，别看我长时间不发博，博主可一直都在线~</p>
      <p>友链交换技术类个人博客，本博客稳定在线，希望你的站也尽量稳定。</p>
      <p>不要皮，谢谢。</p>
      <p>博主联系:cktonghua</p>&nbsp;
    </div>
    <comments />
  </article>
</template>
<script>
import comments from '../components/comments.vue'
export default {
    components: {
        comments
    }
};
</script>
<style lang="scss">
@import "@/assets/css/guestbook.scss";
</style>