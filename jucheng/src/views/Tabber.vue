<template>
  <div>
    <!-- <transition name="bounce"> -->
    <!-- 把路由组件缓存到内存里面 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- </transition> -->
    <!-- 标签栏 -->
    <van-tabbar :route="true" v-model="active">
      <van-tabbar-item
        @click="navTo(t.url)"
        v-for="(t,index) in tabbarsItems"
        :key="index"
        :icon="t.icon"
        v-text="t.title"
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 记录你所在第几项
      active: 0,
      tabbarsItems: [
        {
          title: "首页",
          // 路由名字
          url: "home",
          // 图标
          icon: "home-o"
        },{
          title: "剧院",
          url: "juyuan",
          icon: "search"
        },{
          title: "票夹",
          url: "piaojia",
          icon: "search"
        },{
          title: "我的",
          url: "mine",
          icon: "friends-o"
        }
      ]
    };
  },
  methods: {
    navTo(name) {
      // 编程式导航
      this.$router.push({
        name
      });
    }
  }
};
</script>
<style>

</style>