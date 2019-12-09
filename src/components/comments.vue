<template>
    <div class="comments">
        <h3>留言：目前有{{22}}条留言</h3>
        <comments-panel v-for="(item, index) in commentsList" :key="index" :data="item" />
        <pageNation />
        <comments-container />
    </div>
</template>
<script>
import commentsPanel from './commentsPanel.vue'
import commentsContainer from './commentsContainer.vue'
import pageNation from './pageNation.vue'
import {mapState} from 'vuex'
export default {
    components: {
        commentsPanel,
        commentsContainer,
        pageNation
    },
    computed: {
        ...mapState(['commentsList'])
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/comments.scss';
</style>