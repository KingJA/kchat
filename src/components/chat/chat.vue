<template>
  <div class="chat" v-loading="isLoading">
    <div class="chat-wrap">
      <div class="content-wrap border-1px">
        <ul>
          <li  v-for="message in messages" :class="message.isMyself===1?'myMessage':'otherMessage'">
            <span class="fingerprint">{{message.fingerprint.substring(0,3)+'***'+message.fingerprint.substring(message.fingerprint.length-3)}}</span>
            <div><span  class="content">{{message.content}}</span></div>

          </li>
        </ul>
      </div>
      <div class="input-wrap ">
        <textarea v-model="message" placeholder="" class="" id="message"/>
        <button type="primary" v-on:click="send" class="send">发送(S)</button>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import EleUI from '@/common/js/elementUtils.js'
    import WS from '@/common/js/WebStocketSir.js'

    export default {
        name: 'connect',
        data() {
            return {
                fingerprint: '',
                connectId: '',
                message: '',
                password: '',
                messages: []
            }
        },
        computed: {
            ...mapState({
                isLoading: ({connectModule}) => connectModule.isLoading
            })
        },
        mounted: function () {
            if (typeof (this.$route.params.connectId) == "undefined" || typeof (this.$route.params.fingerprint) == "undefined") {
                EleUI.showError('请先建立连接');
                this.$router.push({name: 'connect'});
                return
            }
            WS.conn(this.$route.params.connectId, this.$route.params.fingerprint, (event) => {
                console.log("新收到：" + event.data)
                let stocketBody = JSON.parse(event.data);
                switch (stocketBody.orderType) {
                    case 1:
                        //消息体
                        // document.getElementsByClassName('content')[0].innerHTML += stocketBody.content + '<br/>';
                        this.messages.push(stocketBody);
                        break
                    case 2:
                        //警告
                        EleUI.showError(stocketBody.content)
                        this.$router.push({name: 'connect'});
                        break

                }
            })
        },
        methods: {
            ...mapActions([
                'connect'
            ]),
            sumbit() {
                if (this.connectId === '') {
                    EleUI.showError('请输入连接号')
                    return
                }
                if (this.connectId.length !== 32) {
                    EleUI.showError('连接号格式错误')
                    return
                }
                this.connect({
                    fingerprint: this.fingerprint,
                    connectId: this.connectId,
                    password: this.password
                });
            },
            send() {
                WS.send(this.message);
                this.message = '';
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/common.css"
  @import "../../common/stylus/color.styl"
  @import "../../common/stylus/mixin.styl"
  .chat
    box-sizing border-box
    height 100%

    .chat-wrap
      width 75vw
      height 100%
      margin 0vh auto

      box-sizing border-box

      .content-wrap
        height 70%
        background $chat-tab
        box-sizing border-box
        word-wrap break-word /*换行*/
        word-break break-all /*换行*/
        font-size 1.5rem
        padding 1.5rem
        overflow auto
        li
          margin-bottom 1rem
          .content
            background $white
            padding 0.5rem
            display inline-block
          .fingerprint
            background $black
            color $white
            display inline-block
            margin-bottom 0.3rem
        .myMessage
          text-align end

      /*超出变滚动条*/

      .input-wrap
        height 30%
        width 100%
        border 1px solid $chat-tab
        box-sizing border-box

        #message
          width 100%
          height 70%
          font-size 1.5rem
          display block
          background none
          outline none
          margin 0
          padding 1.5rem
          border none
          text-align start
          box-sizing border-box
          overflow auto

        /*超出变滚动条*/

        //padding不影响宽度

        .send
          display block
          height 6vh
          width 18vh
          margin 0
          background #F5F5F5
          border 1px solid #E5E5E5 //自定义边框
          outline none //消除默认点击蓝色边框效果
          float right

</style>
