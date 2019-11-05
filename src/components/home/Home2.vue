<template>
  <div class="home">
    <div class="message_wrap">
      <el-row type="flex" class="row-bg">
        <!--工具栏-->
        <el-col :span="2">
          <div class="tool">


          </div>
        </el-col>
        <!--好友列表栏-->
        <el-col :span="6">
          <div class="user-list">

          </div>
        </el-col>
        <!--聊天栏-->
        <el-col :span="16">
          <div class="chat">
            <div class="content-wrap border-1px"/>

            <div class="input-wrap ">
              <input v-model="message" placeholder="" class="" id="message"/>
              <button type="primary" v-on:click="send" class="send">发送(S)</button>

            </div>

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

        .user-list
          background $user-tab
          height 100vh

        .chat
          height 100vh
          box-sizing  border-box

          .content-wrap
            height 80vh
            border-1px($bg_gray)

          .input-wrap
            height 20vh
            width 100%


            #message
              width 100%
              height 70%
              display block
              background none
              outline none
              margin 0
              padding 10px
              border none
              text-align start
              box-sizing  border-box //padding不影响宽度

            .send
              display block
              height 6vh
              width  18vh
              margin 0
              background #F5F5F5
              border 1px solid #E5E5E5 //自定义边框
              outline none   //消除默认点击蓝色边框效果
              float right
</style>
