<template>
    <div class="comments-panel">
        <strong>{{data.user_name}}</strong>: 发表于{{data.ctime}}
        <a href="#">[回复]</a>
        <p><span v-if="data.parent">@{{data.parent}}&nbsp;</span>{{data.comments}}</p>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>