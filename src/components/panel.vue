<template>
    <div class="panel">
        <div class="panel-body">
            <h2 class="title"><a href="#">{{data.title}}</a></h2>
            <p>{{data.content}}</p>
        </div>
        <div class="panel-footer">
            发布于{{data.ctime}} | &nbsp;&nbsp;&nbsp;浏览({{data.views}}) | Tags：<a href="#">{{data.tags}}</a>
        </div>
    </div>
</template>
<script>
export default {
    props:['data']
}
</script>