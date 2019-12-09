<template>
    <div class="comments-container">
        <h3>发表评论</h3>
        <div class="info">
            <input v-model="commentsData.user_name" class="input-box" type="text" placeholder="昵称">
            <input v-model="commentsData.email" class="input-box" type="text" placeholder="邮箱(评论被回复时以便收到通知)">
        </div>
        <textarea v-model="commentsData.comments" class="input-box" placeholder="无意义内容可能不会回复你嗷"></textarea>
        <button @click="func" class="input-box sublime">提交留言</button>
        <button class="input-box reset">重写</button>

    </div>
</template>
<script>
export default {
    data() {
        return {
            commentsData: {
                user_name: '',
                email: '',
                comments: ''                
            }
        }
    },
    methods: {
        func () {
            console.log(this.commentsData)
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/commentsContainer.scss';
</style>