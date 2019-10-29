<template>
  <div class="home">
    <div class="message_wrap">
      <el-row type="flex" class="row-bg">
        <!--工具栏-->
        <el-col :span="2">
          <div class="tool">

            <ul>
              <!--              <li><img src="../../assets/img/head.jpg" width="36" height="36"></li>-->
              <li class="tab">
                <router-link to="/user">用户</router-link>
              </li>
              <li class="tab">
                <router-link to="/chat">聊天</router-link>
              </li>
              <li class="tab">
                <router-link to="/search">搜索</router-link>
              </li>
            </ul>


          </div>
        </el-col>
        <!--导航内容-->
        <el-col :span="22">
          <div class="content">
            <keep-alive>
              <router-view/>
            </keep-alive>
          </div>
        </el-col>
      </el-row>


    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import {mapState, mapActions} from 'vuex'
    import WebStocketSir from '@/common/js/WebStocketSir.js'

    export default {
        name: "login",
        data() {
            return {
                message: ''
            }
        },
        mounted() {
            console.log("mounted");
            WebStocketSir.conn("333")
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
            send() {
                WebStocketSir.send(this.message);
                this.message = '';
            },
            closeWebSocket() {
                console.log("closeWebSocket");
            }
        }

    }


    //判断当前浏览器是否支持WebSocket


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  @import "../../common/stylus/mixin.styl"
  .home
    width 70%
    margin 0 auto
    height 100vh

    .message_wrap
      height 100vh
      border 1px solid $divider

      .row-bg
        height 100vh

        .tool
          background $tool-tab
          height 100vh
          a
            color #d4d6d9
            display block
            text-align center
            line-height 40px
            font-size 2rem
          li
            margin-bottom 2rem
        .content
          height 100vh
          background $chat-tab

</style>
