<template>
    <footer>
        <div class="footer-content">
            <span v-for="(item, index) in footerLink" :key="index"><a href="#">{{item}}</a></span>
        </div>
        <span>Copyright © 2010-2019 x1个人博客 All rights reserved. 鲁ICP备14017955号站长统计</span>
    </footer>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['footerLink'])
    }
}
</script>