<template>
  <div class="body">
    <Header />
    <div class="main">
      <div class="menu">
        <LeftMenu />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import LeftMenu from "@/components/LeftMenu.vue";
// import Index from "@/views/Index.vue";

export default {
  name: "index",
  components: {
    Header,
    LeftMenu
    // Index
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0 0px;
  .content {
    width: 80%;
    left: 230px;
    position: absolute;
  }
}
</style>

