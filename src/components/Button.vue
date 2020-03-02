<template>
  <div class="button">
    <el-button type="primary" icon="el-icon-edit" @click="handleBtnClick">添加</el-button>
    <!-- <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>-->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleBtnClick: function() {
      // this.list.push(this.input);
      // this.input = '';
      this.$emit("handleBtnClick", this.input);
    }
  }
};
</script>
<style lang="scss" scoped>
.button {
  text-align: right;
  padding: 20px;
}
</style>