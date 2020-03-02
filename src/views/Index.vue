<template>
  <div>
    <Button v-on:handleBtnClick="handleBtnClick" />
    <el-table :data="tableData" border style="width: 100%;">
      <!-- <template slot-scope="scope">
        <el-input v-if="scope.row.date" v-model="scope.row.date"></el-input>
        <div >{{scope.row.date}}</div>
      </template>-->
      <el-table-column prop="name" label="姓名" width></el-table-column>
      <el-table-column prop="name1" label="用户名" width></el-table-column>
      <el-table-column prop="name2" label="状态" width></el-table-column>
      <el-table-column prop="name3" label="操作" width>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">
          上传
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
      </el-table-column>
    </el-table>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="yourName">
          <el-input v-model="ruleForm.yourName"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="UserName">
          <el-input v-model="ruleForm.UserName"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-input v-model="ruleForm.status"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button.vue";
// function resetForm() {
//   return {
//     policeNumber: "",
//     policeName: ""
//   };
// }
export default {
  name: "index",
  components: {
    Button
  },
  data() {
    return {
      dialogFormVisible: false, // 弹窗
      //ruleForm: resetForm(), // 新增数据字段,
      title: "新增数据表单",
      disabled: false,
      resetFlag: false,
      ruleForm: {
        yourName: "",
        UserName: "",
        status: ""
      },
      rules: {},
      tableData: [
        {
          name1: "2016-05-02",
          name: "王小虎",
          name2: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name1: "2016-05-04",
          name: "王小虎",
          name2: "上海市普陀区金沙江路 1517 弄"
        },
        {
          name1: "2016-05-01",
          name: "王小虎",
          name2: "上海市普陀区金沙江路 1519 弄"
        },
        {
          name1: "2016-05-03",
          name: "王小虎",
          name2: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {},
  methods: {
    // 重制表单
    // resetForm() {
    //   this.ruleForm = resetForm();
    // },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleBtnClick() {
      this.dialogFormVisible = true;
      //this.ruleForm = resetForm();
      this.title = "新增人员";
      this.disabled = false;
      this.resetFlag && this.$refs["ruleForm"].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.tableData.unshift({
            name: this.ruleForm.yourName,
            name1: this.ruleForm.UserName,
            name2: this.ruleForm.status
          });
          this.$refs[formName].resetFields();
          this.dialogFormVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
    .el-table__row td,
    th {
      text-align: center;
    }
    .el-dialog {
      border-radius: 10px;

      .el-dialog__header {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background: #287ff5;

        .el-dialog__title {
          color: #fff;
        }

        .el-icon-close:before {
          color: #fff;
        }
      }
    }
  }
}
</style>
