<template>
  <div class="loginbox">
    <div class="login">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>欢迎登录</span>
        </div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="请输入用户名">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入密码">
            </el-input>
          </el-form-item>
          <div>
            <el-checkbox v-model="ruleForm.check">记住密码</el-checkbox>
          </div>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
          <p class="login-tip">输入任意密码即可</p>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {setCookie} from '../until/config.js'
  @Component({
    components: {
    }
  })
export default class Login extends Vue {
    ruleForm = {
      username: 'element_admin',
      password: '',
      check: true
    }
    rules = {
      username: [
        { required: true, message: '用户名不能空', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '密码不能空', trigger: 'blur' }
      ]
    }

    submitForm (formName) {
      let el:any = this.$refs[formName]
      el.validate((valid) => {
        if (valid) {
          setCookie('username', this.ruleForm.username)
          setCookie('password', this.ruleForm.password)
          if (this.ruleForm.username === 'element_admin') {
            this.$router.push({
              path: '/home'
            })
          } else {
            this.$message({
              message: '请输入正确的用户名',
              type: 'warning'
            })
          }
        } else {
          this.$message({
            message: '请输入正确的信息',
            type: 'warning'
          })
          return false
        }
      })
    }
  }
</script>
<style scoped>
.loginbox {
  /* background: url(../../assets/img/bg.png); */
  background-color: #c3c3c3;
  width: 100%;
  height: 100vh;
  background-size: contain;
}
.login {
  width: 350px;
  height: auto;
  position: absolute;
  top: 20%;
  right: 10%;
}
.login-btn button {
  width: 100%;
  margin-top: 20px;
}
.login-tip {
  font-size: 12px;
  color: #737170;
}
</style>
