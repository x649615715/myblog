<template>
    <article>
        <every-day />
        <div class="panel-box"
            v-for="(item,index) in panelList"
            :key="index"            
        >   
            <panel :data="item" />
        </div>
    </article>
</template>
<script>
import everyDay from '@/components/everyDay.vue'
import panel from '@/components/panel.vue'
import {mapState} from 'vuex'
export default {
    components: {
        everyDay,
        panel
    },
    computed : {
        ...mapState(['panelList'])
    }   
}
</script>
<style lang="scss">
    @import '@/assets/css/index.scss';
</style>