<template>
  <header>
    <nav class="navbar">
      <div class="navbar-nav">
        <a class="title" href="#">我的个人博客丨技术博客</a>
        <ul>
          <li>
            <router-link to="index">首页</router-link> 
          </li>
          <li>
            <router-link to="index">地图</router-link> 
          </li>
          <li>
            <router-link to="about">关于</router-link> 
          </li>
          <li>
            <router-link to="guestbook">留言</router-link> 
          </li>
        </ul>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="输入关键词查找" />
        <button>搜索</button>
      </div>
    </nav>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/assets/css/nav.scss";
</style>