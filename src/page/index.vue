<template>
    <article>
        <every-day />
        <div class="panel-box"
            v-for="(item,index) in panelList"
            :key="index"            
        >   
            <panel :data="item" />
        </div>
        <page-nation></page-nation>

    </article>
</template>
<script>
import everyDay from '@/components/everyDay.vue'
import panel from '@/components/panel.vue'
import pageNation from '@/components/pageNation.vue'
import {mapState} from 'vuex'
export default {
    components: {
        everyDay,
        panel,
        pageNation
    },
    computed : {
        ...mapState(['panelList'])
    }   
}
</script>
<style lang="scss">
    @import '@/assets/css/index.scss';
</style>