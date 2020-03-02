<template>
  <div class="head">
    <div class="logo Left">GLAWAY BI</div>
    <div class="name Right">{{userName}}</div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {
    this.userName = "admin admin";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.head {
  width: 100%;
  height: 50px;
  background: #0c60aa;
  line-height: 50px;
  font-size: 22px;
  color: #fff;
  .Left {
    float: left;
  }
  .Right {
    float: right;
  }
  .clear {
    clear: both;
  }
  .logo {
    font-weight: 500;
    padding: 0px 20px;
  }
  .name {
    font-size: 18px;
    padding: 0px 20px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
