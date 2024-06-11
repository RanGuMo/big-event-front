<script setup>
import { ref } from "vue";
const userInfo = ref({});

//自定义确认密码的校验函数
const rePasswordValid = (rule, value, callback) => {
  if (value == null || value === "") {
    return callback(new Error("请再次确认密码"));
  }
  if (userInfo.value.newPassword !== value) {
    return callback(new Error("新密码和确认密码不一致"));
  }
};
const rules = {
  oldPassword: [
    { required: true, message: "请输入旧密码", trigger: "blur" },
    { min: 5, max: 16, message: "密码长度必须为5~16位", trigger: "blur" },
  ],
  newPassword: [
    { required: true, message: "请输入新密码", trigger: "blur" },
    { min: 5, max: 16, message: "密码长度必须为5~16位", trigger: "blur" },
  ],
  rePassword: [
    { required: true,validator: rePasswordValid, trigger: "blur" },
    { min: 5, max: 16, message: "密码长度必须为5~16位", trigger: "blur" },
  ],
};

//修改用户密码
import { userPasswordUpdateService } from "@/api/user.js";
import { ElMessage } from "element-plus";

//导入pinia
import { useUserInfoStore } from "@/stores/user.js";
const userInfoStore = useUserInfoStore();
import { useTokenStore } from "@/stores/token.js";
const tokenStore = useTokenStore();
//修改用户密码
const updateUserPassword = async () => {
   await formRef.value.validate()
  let result = await userPasswordUpdateService({
    old_pwd: userInfo.value.oldPassword,
    new_pwd: userInfo.value.newPassword,
    re_pwd: userInfo.value.rePassword,
  });
  ElMessage.success(result.message ? result.message : "修改成功");
  //清空pinia中的token和个人信息
  userInfoStore.info = {};
  tokenStore.token = "";
  //跳转到登录页
  router.push("/login");
};

const formRef = ref(null)
const resetForm = () => {
  formRef.value.resetFields()
}
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>重置密码</span>
      </div>
    </template>
    <el-row>
      <el-col :span="12">
        <el-form :model="userInfo" :rules="rules"  ref="formRef" label-width="100px" size="large">
          <el-form-item label="旧密码" prop="oldPassword">
            <el-input
              v-model="userInfo.oldPassword"
              placeholder="请输入旧密码"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input
              v-model="userInfo.newPassword"
              placeholder="请输入新密码"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="确认新密码" prop="rePassword">
            <el-input
              v-model="userInfo.rePassword"
              placeholder="请输入确认新密码"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateUserPassword">修改密码</el-button>
             <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>
