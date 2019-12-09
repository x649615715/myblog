<template>
    <div>
        <ul class="pagenation">
            <li @click="currentPage = 1" v-show="currentPage != 1">首页</li>
            <li @click="-- currentPage" v-show="currentPage > 1">上一页</li>
            <li @click="chengeCurrent(index)" 
            :class="{active: index == currentPage}" 
            v-for="index of pageLength" 
            :key="index"
            v-show="currentPage - 3 <= index && currentPage + 3 >= index"
            >{{index}}</li>
            <li @click="++ currentPage" v-show="currentPage < pageLength">下一页</li>
            <li @click="currentPage = pageLength" v-show="currentPage != pageLength">尾页</li>
        </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            pageLength: 17,
            currentPage: 1,
            pagenation: 5
        }
    },
    created () {
        // if (this.pagenation < this.pageLength) {
        //     this.pageLength = this.pagenation
        // }        
    },
    methods: {
        chengeCurrent(index) {
            this.currentPage = index
        }
    },
    computed: mapState({
        pageList: state => {
            let arr=['上一页','下一页']
            arr.splice(1, 0, ...state.pageList)
            return arr
        } 
    })
}
</script>
<style lang="scss">
    @import '@/assets/css/pagenation.scss';
</style>