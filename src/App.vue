<template>
  <div id="app">
    <div class="g-view-container">
      <!-- <keep-alive> -->
      <router-view></router-view>
      <!-- </keep-alive> -->
      <button @click="actionA">ddddddd</button>
      <i class="iconfont icon-jianpan"></i>
      <i class="iconfont icon-qianbao"></i>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item ref="search" icon="search" :dot="isShow"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" badge="">菜谱</van-tabbar-item>
      <van-tabbar-item badge="3">
        <template #icon="">
          <img />
        </template>
        <div class="van-tabbar-item-customer">
          <i class="iconfont icon-dayin"></i>
          <span>我的</span>
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  name: "App",
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
  },
  data() {
    return {
      active: 2,
      isShow: true,
    };
  },
  methods: {
    actionA() {},
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/fonts/icons/tabbarIcon.css";
@import "./assets/fonts/icons/navBarIcon.css";
#app {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
button {
  width: 100px;
  height: 100px;
  background-color: $header-bgc;
}
img {
  width: 20px;
  height: 0px;
}

.van-tabbar-item-customer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  .iconfont {
    font-size: 25px;
    margin-top: -6px;
  }

  span {
    margin-top: 1px;
  }
}
</style>
