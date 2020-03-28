<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left"
             label-width="0px"
             class="card-box login-form">
      <h3 class="title">后台管理系统</h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user"/>
        </span>
        <el-input style="width: 200px;" v-model="loginForm.username" autoComplete="on"/>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input style="width: 200px;" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                  autoComplete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 200px;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          username: 'user',
          password: '123456'
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', message: "请输入用户名"}],
          password: [{required: true, trigger: 'blur', message: "请输入密码"}]
        },
        loading: false
      }
    },
    methods: {
      handleLogin() {
        const _this = this
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.$axios.post('login', this.loginForm)
              .then(function (res) {
                // console.log(res.status);
                if (res.data.code === 200) {
                  _this.$message({
                    message: '登录成功',
                    type: 'success'
                  })
                  console.log("登录成功")
                  sessionStorage.setItem('token', res.data.data.token)
                  _this.$router.push({
                    name: 'index',
                    params: {user_info: res.data.data}
                  })
                } else {
                  console.log(res)
                  _this.$message.error('用户名或者密码错误')
                }
              }).catch(function (error) {
                  console.log(error.response.status)

            })
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
