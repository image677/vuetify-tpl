<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-form v-model="valid">
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Material Design</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form">
                  <v-text-field
                    label="用户名"
                    prepend-icon="account_circle"
                    type="text"
                    v-model="username"
                    :rules="nameRules"
                  ></v-text-field>

                  <v-text-field
                    label="密码"
                    prepend-icon="lock"
                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                    :type="show1 ? 'text' : 'password'"
                    v-model="password"
                    :rules="passRules"
                    @click:append="show1 = !show1"
                  ></v-text-field>

                  <v-text-field
                    label="验证码"
                    prepend-icon="verified_user"
                    type="text"
                    v-model="verifyCode"
                    :rules="codeRules"
                  ></v-text-field>
                  <div style="text-align: center;">
                    <img alt="验证码" src="../assets/code.jpg" style="vertical-align: middle;">
                    &nbsp;<v-btn text small>换一张</v-btn>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="doSubmit">登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
          </v-col>
        </v-row>
      </v-container>
      <v-snackbar
      v-model="toast"
      :timeout=1500
      top
    >
      {{ msgtext }}
      <v-icon color="red">error_outline</v-icon>
      <!-- <v-btn
        color="pink"
        text
        @click="toast = false"
      >
        <v-icon>close</v-icon>
      </v-btn> -->
    </v-snackbar>
    </v-content>
  </v-app>
</template>
<style scoped>
  /*#appbg{background-image: url('../assets/login-bg2.png');background-repeat: no-repeat;background-size: cover;height: 100%}*/
  #app{background-image: url('../assets/login-bg2.png');background-repeat: no-repeat;background-size: cover;}
</style>

<script>
// import MaterialImage from 'material-image';
// const myDom = document.querySelector('#app');
// new MaterialImage({
//  el: myDom,
// });
export default {
  data: () => ({
    msgtext: '',
    show1: false,
    toast: false,
    valid: false,
    username: '',
    password: '',
    verifyCode: '',
    nameRules: [
      v => !!v || '请输入用户名！',
      v => v.length <= 10 || '用户名不超过10位！'
    ],
    passRules: [
      v => !!v || '请输入密码！',
      v => v.length <= 15 || '密码不超过15位！'
    ],
    codeRules: [
      v => !!v || '请输入验证码！',
      v => v.length === 6 || '验证码为6位数！'
    ]
  }),
  methods: {
    doSubmit () {
      if (this.$refs.form.validate() === false) {
        this.snackbar = true
        if (this.username && this.password && this.verifyCode) {
          this.msgtext = '用户名或密码错误'
          this.toast = true
        }
      } else {
        // console.log('ok')
        sessionStorage.setItem('token', '123456')
        this.$router.push('table')
      }
    }
  }
}
</script>
