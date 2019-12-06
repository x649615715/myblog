<template>
    <aside class="aside">
        <aside-panel tagName="随机标签云">
            <template v-slot:content>
                <a href="#">dsadas</a>
                <a href="#">dsadas</a>
                <a href="#">dsadas</a>
            </template>
        </aside-panel>
        <aside-panel tagName="最近热门">
            <template v-slot:content>
                <ul>
                    <li v-for="(item, index) in hotList" :key="index">
                        <a href="#">{{item}}</a>
                    </li>
                </ul>
            </template>
        </aside-panel>
        <aside-panel tagName="最新评论">
            <template v-slot:content>
                <ul>
                    <li v-for="(item, index) in newComments" :key="index">
                        <div class="comments-head">
                            <span>{{item.user_name}}</span>
                            <span>[{{item.ctime}}]</span>
                        </div>
                        <div class="comments-text"><a href="#">{{item.comments}}</a></div>
                    </li>
                </ul>
            </template>
        </aside-panel>
        <aside-panel tagName="友情链接">
            <template v-slot:content>
                <div class="friendship">
                    <a href="#" v-for="(item, index) in friendshipList" :key="index">{{item.name}}</a>
                </div>
            </template>
        </aside-panel>
    </aside>
</template>
<script>
import asidePanel from './asidePanel.vue'
import {mapState} from 'vuex'
export default {
    components: {
        asidePanel
    },
    computed: {
        ...mapState(['hotList','newComments','friendshipList'])
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/aside.scss';
</style>