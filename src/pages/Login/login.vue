<template>
  <section class="login_container">
    <div class="login_inner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay = true">短信登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay = false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on:loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
              <button
                :disabled="!rightPhone"
                class="get_verification"
                :class="{right_Phone : rightPhone}"
                @click.prevent="getCode"
              >{{ computeTime>0 ? `已发送${computeTime}s` : '获取验证码' }}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code"/>
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!loginWay}">
            <section>
              <section class="login_message">
                <input 
                type="text" 
                maxlength="11" 
                v-model="name"
                placeholder="手机/邮箱/用户名"/>
              </section>
              <section class="login_verification">
                <input 
                v-show="!isShow" 
                type="password" 
                maxlength="8" 
                placeholder="密码" 
                v-model="password"/>
                <input 
                v-show="isShow" 
                type="text" 
                maxlength="8" 
                placeholder="密码"
                v-model="password">
                <div class="switch_button" 
                :class="{off : !isShow,on : isShow}" 
                @click="handleClick">
                  <div class="switch_circle" :class="{right : isShow}"></div>
                  <span class="switch_text">{{!isShow ? '...' : 'abc'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input 
                type="text" 
                maxlength="11" 
                placeholder="验证码" 
                v-model="captcha"/>
                <img 
                class="get_verification" 
                src="http://localhost:4000/captcha" alt="captcha"
                @click="getCaptcha"
                ref="captcha"
                />
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back">
        <i class="iconfont iconyoujiantou" @click="goBack('/personal')"></i>
      </a>
    </div>
    <alertTip :alertText="alertText" v-show="alertShow" @closeTip='closeTip'/>
  </section>
</template>

<script>

import alertTip from '../../components/AlertTip/AlertTip'
import {reqLoginPwd,reqSendCode,reqLoginSms} from '../../api'

export default {
  components:{
    alertTip,
  },
  data() {
    return {
      loginWay: true, //true代表手机登录，false代表账号登录
      phone: "", //手机号
      computeTime: 0,
      isShow:false,
      password:'',
      code:'', //短信验证码
      name:'',  //用户名
      captcha:'',  //图形验证码
      alertText:'',  //提示文本
      alertShow:false

    };
  },
  computed: {
    rightPhone() {
      return /^1\d{10}$/.test(this.phone);
    }
  },
  methods: {
    goBack(url) {
      this.$router.push(url);
    },
    async getCode() {
      //如果当前没有计数器则启动
      if (!this.computeTime) {
        //启动倒计时
        this.computeTime = 60;
        this.timer = setInterval(() => {
          this.computeTime--;
          if (this.computeTime <= 0) {
            clearInterval(this.timer);
          }
        }, 1000);
        //发送ajax请求发送验证码
        const result = await reqSendCode(this.phone)
        if(result.code === 1){
          this.showAlert(result.msg)
          if(this.computeTime) {
            this.computeTime = 0;
            clearInterval(this.timer);
          }
        }
      }
    },
    showAlert(alertText) {
      this.alertShow = true
      this.alertText = alertText
    },
    closeTip() {
      this.alertShow = false;
      this.alertText = '';
    },
    handleClick() {
      this.isShow = !this.isShow;
    },
    async login() {
      let result
      //表单验证
      if(this.loginWay) {   //短信登录
        const {phone,code} = this
        if(!this.rightPhone) {
          //手机号码不正确
          this.showAlert('手机号码不正确')
          return
        } else if(!/^\d{6}$/.test(code)) {
          //验证码必须是6位数字
          this.showAlert('验证码必须是6位数字')
          return
        }
        //发送ajax请求
        result = await reqLoginSms(phone,code)

      } else {   //密码登录
        const {name,password,captcha} = this
        if(!name) {
          //用户名或密码不正确
             this.showAlert('用户名或密码不正确')
             return
        } else if(!this.password) {
          //用户名或密码不正确
          this.showAlert('用户名或密码不正确')
          return
        }else if(!this.captcha) {
          //验证码错误
          this.showAlert('验证码错误')
          return
        }
        //发送ajax请求
        result = await reqLoginPwd({name,password,captcha})
      } 
      if(this.computeTime) {
            this.computeTime = 0;
            clearInterval(this.timer);
          }
        if(result.code === 0){
          const user = result.data
          this.$store.dispatch('recordUserInfo',user);
          this.$router.replace('./personal')
        } else {
          const msg = result.msg
          this.getCaptcha()
          this.showAlert(msg);
          
        }
    },
    getCaptcha() {
      this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './login.styl';
@import '../../assets/stylus/minix.styl';
</style>