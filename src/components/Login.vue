<template>
  <div class="outcontainer">
    <div class="pageTop">
      <img src="../../static/logo1.png" alt="" />
    </div>
    <div class="login_container">
      <el-form
        class="login-page"
        label-position="top"
        label-width="70px"
        :model="userLogin"
        :rules="loginRule"
        ref="loginForm"
      >
        <h3 class="main_title">用户登录</h3>
        <el-form-item prop="username">
          <el-input
            placeholder="用户名"
            prefix-icon="el-icon-user-solid"
            v-model="userLogin.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="密码"
            v-model="userLogin.password"
            prefix-icon="el-icon-unlock"
            type="password"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            class="auto_code"
            placeholder="验证码"
            prefix-icon="el-icon-key"
            v-model="userLogin.code"
          ></el-input>
          <div id="code" style="float: right" @click="getCode"></div>
        </el-form-item>
        <div class="loginbtn">
          <el-button type="success" @click="login">登录</el-button>
        </div>
      </el-form>
    </div>
    <div class="footer">
      <span class="footer_font">Copyright ©yanbo 绩效工资发放系统</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLogin: {
        username: "",
        password: "",
        code: "",
      },
      codeSvg: "", //验证码
      loginRule: {
        username: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur",
          },
          {
            min: 5,
            max: 18,
            message: "长度在 5 到 18 个字符",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "验证码长度为4位", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    async getCode() {
      const { data: res } = await this.$http.get("getcaptcha");
      document.getElementById("code").innerHTML = res.data;
    },
    login(){
      this.$refs.loginForm.validate(valid=>{
        console.log(valid);
      })
    }
  },
  created() {
    this.getCode();
  },
};
</script>

<style scope>
.outcontainer {
  height: 100%;
}

.login_container {
  background: url("../../static/2021.jpg") no-repeat center center;
  height: 70%;
  min-width: 1020px;
}

.pageTop {
  height: 97px;
}

.footer {
  margin: 10px 0 0 30px;
  font-size: 15px;
  color: #a59b9b;
  font-family: "Times New Roman", Times, serif;
}

.pageTop img {
  height: 100%;
  margin-left: 10px;
}

.login-page {
  -webkit-border-radius: 5px;
  border-radius: 10px;
  width: 350px;
  padding: 35px 35px 15px;
  opacity: 0.9;
  background: rgb(255, 255, 255);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.main_title {
  margin: 0 auto;
  padding-bottom: 20px;
  text-align: center;
  color: #645a5a;
}

.auto_code {
  width: 50%;
}

.el-button {
  width: 100%;
}

.loginbtn {
  width: 100%;
}
</style>
