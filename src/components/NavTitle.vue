<template>
  <div class="crumb clearfix">
    <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="item in levelList"
        :key="item.path"
        @click.native="toLobby(item.path)"
      >{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      levelList: []
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      if (
        first &&
        first.name.trim().toLocaleLowerCase() !==
          "Dashboard".toLocaleLowerCase()
      ) {
        matched = [].concat(matched);
      }
      this.levelList = matched;
    },
    toLobby(path) {
      if (path == "/index") {
        console.log(1111);
        localStorage.setItem("activeIndex", 0);
        this.$store.commit("setActiveIndex", 0);
        this.$router.push({
          name: "lobby"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.crumb {
  .el-breadcrumb {
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
