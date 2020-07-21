import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    name: 'astea',
    data: 1,
    everydayObj: {
      contenten: "Good teachers, they inspire you, they entertain you, and you end up learning a ton even when you don't know it.",
      contentzh: "好的老师会激励你，给你带来欢乐，悄然无声地教会你很多东西。",
      author: "———— Nicholas Sparks"
    },
    panelList:[{
      title: "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]",
      content: "[2019.12.2 更新] nginx.conf里要加上对laravel的静态文件目录的转发(这里假设我的静态文件在public/static下)、修改vue的nginx配置。我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行...",
      ctime: "2019-11-30",
      views: "310",
      tags: "laravel nginx proxy vue" 
    },
    {
      title: "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]",
      content: "[2019.12.2 更新] nginx.conf里要加上对laravel的静态文件目录的转发(这里假设我的静态文件在public/static下)、修改vue的nginx配置。我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行...",
      ctime: "2019-11-30",
      views: "310",
      tags: "laravel nginx proxy vue" 
    },
    {
      title: "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]",
      content: "[2019.12.2 更新] nginx.conf里要加上对laravel的静态文件目录的转发(这里假设我的静态文件在public/static下)、修改vue的nginx配置。我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行...",
      ctime: "2019-11-30",
      views: "310",
      tags: "laravel nginx proxy vue" 
    }],
    hotList:['git-bash设置ssh心跳包防超时断开','注册谷歌时提示"此电话号码无法用于进','使用码云git的webhook实现生产环境代','树莓派安装homebridge小记','VirtualBox压缩vmdk、vagrant打包b'],
    newComments:[{
      user_name: "daxue0929",
      comments: "你的网站要被我偷走了.啧啧.",
      ctime: "一周前"
    },
    {
      user_name: "a9520",
      comments: "已加入收藏夹，时不时的来看看",
      ctime: "一周前"
    },
    {
      user_name: "a9520",
      comments: "已加入收藏夹，时不时的来看看",
      ctime: "一周前"
    },
    {
      user_name: "a9520",
      comments: "已加入收藏夹，时不时的来看看",
      ctime: "一周前"
    }],
    friendshipList: [{
      name: '挨踢茶馆',
      link: ''
    },
    {
      name: '挨踢茶馆',
      link: ''
    },
    {
      name: '信息安全与资讯',
      link: ''
    },
    {
      name: '他也叫郑晓博客',
      link: ''
    },
    {
      name: 'docker技术网站',
      link: ''
    },
    {
      name: "Jacky's Blog",
      link: ''
    },
    {
      name: 'easyAI人工智能',
      link: ''
    }],
    footerLink: ["C/C++", "CSS/DIV", "java", "javacript", "Linux", "Mac", "PC技术", "PHP", "Python", "Raspberry", "Ubuntu", "wordpress", "关于SEO分享经验", "听听音乐", "幽默搞笑", "建站经验", "新闻资讯", "模拟飞行", "片言碎语", "玩转手机", "编程基础", "视频分享"],
    commentsList: [{
      comments: '友链来访，老哥你怎么不理我呀',
      user_name: 'Jeeyshe',
      ctime: '2019年11月19日',
      parent: '李庆林'
    },
    {
      comments: '友链来访，老哥你怎么不理我呀',
      user_name: 'Jeeyshe',
      ctime: '2019年11月19日',
      parent: '李庆林'
    },
    {
      comments: '友链来访，老哥你怎么不理我呀',
      user_name: 'Jeeyshe',
      ctime: '2019年11月19日',
      parent: '李庆林'
    }],
    mapList: [{
      title: "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]",
      path: ""
    },
    {
      title: "在Nginx中将http://zh30.com:443跳转到https://zh30.com:443[更新]",
      path: ""
    },
    {
      title: "php正则匹配中文汉字-正则表达式匹配中文",
      path: ""
    },
    {
      title: "树莓派安装homebridge小记",
      path: ""
    },
    {
      title: "Laravel5.4安装passport时遇到的一些问题",
      path: ""
    },
    {
      title: "yaf框架在nginx中的vhost配置",
      path: ""
    },
    {
      title: "Vue history模式编译后nginx无法访问的问题",
      path: ""
    },
    {
      title: "php hexdec超大数值的16进制转10进制",
      path: ""
    },
    {
      title: "php基于sha1withRSA算法的签名和验签(pfx证书)",
      path: ""
    },
    {
      title: "注册谷歌时提示”此电话号码无法用于进行验证”的解决办法",
      path: ""
    },
    {
      title: "使用Nginx反向代理部署laravel和history模式的Vue项目",
      path: ""
    },
    {
      title: "写了一个在Safari中图片热点map无效的bug",
      path: ""
    },
    {
      title: "使用Nginx反向代理部署laravel和history模式的Vue项目",
      path: ""
    },
    {
      title: "填坑解决homestead中serve添加多站点后无法访问",
      path: ""
    },
  ]
  },
  mutations: {
    setData (state, data) {
      state.data = data;
    }
  },
  actions: {
    ssetData ( {commit},data ) {
      commit('setData',data)
    }
  },
  modules: {
  }
})
