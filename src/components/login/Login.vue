<template>
  <div class="login" v-loading="isLoading">
    <div id="login_wrap">
      <el-input v-model="username" placeholder="请输入账号" class="input1"/>
      <el-input v-model="password" placeholder="请输入密码" class="input1"/>
      <el-button type="primary" v-on:click="sumbit">登录</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        computed: {
            ...mapState({
                isLoading: ({loginModule}) => loginModule.isLoading
            })
        },
        methods: {
            ...mapActions([
                'login'
            ]),
            sumbit() {
                this.login({username: this.username, password: this.password});
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .login
    #login_wrap
      background $white
      border 1px solid $divider
      box-shadow 0 4px 4px 0 rgba(0, 0, 0, 0.2)
      padding px2rem(50)
      width 30%
      margin 0 auto
</style>
