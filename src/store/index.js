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
    }]
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
