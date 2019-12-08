<template>
  <article class="about-wrapper">
    <div class="about">
      <h2>
        <strong>关于我</strong>
      </h2>
      <hr />
      <p>
        博主
        <a href="#">x1</a>，性别男，外号呆。
      </p>
      <p>
        会修电脑的野生程序员
        <br />代码洁癖强迫症
        <br />花括号必换行
        <br />为了联盟
      </p>
      <h2>
        <strong>关于博客</strong>
      </h2>
      <hr />
      <p>
        从2018年 – 今
        <br />博主很懒+词穷，佛系更新…
        <br />域名 zhengoo.cn -&gt; zh30.com
        <br />程序 tcms -&gt; WordPress
        <br />服务器 免费空间 -&gt; 国内某收费空间 -&gt; 国外vps -&gt; 阿里云
      </p>
      <p>
        推荐便宜又稳定的xen-VPS吧:
        <a
          href="https://idc.hostshare.cn/page.aspx?c=referral&amp;u=8239"
          rel="nofollow external"
        >HostShare</a>
        <br />kvm vps:
        <a href="https://my.hosteons.com/aff.php?aff=123" rel="nofollow external">hostEONS</a> 洛杉矶节点，我在用，速度可以，可以干一些羞羞的事。
      </p>
    </div>
    <comments /> 
  </article>
</template>
<script>
import comments from '../components/comments'
export default {
    components: {
        comments
    }
};
</script>
<style lang="scss">
@import "@/assets/css/about.scss";
</style>
