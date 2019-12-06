<template>
    <div class="aside-panel">
        <div class="panel-head">{{tagName}}</div>
        <div class="panel-body">
            <slot name='content' />
        </div>
    </div>
</template>
<script>
export default {
    props: ['tagName']
}
</script>