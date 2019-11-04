<template>
  <div class="chat" v-loading="isLoading">

    <div class="chat-wrap">
    </div>
  </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import  EleUI from '@/common/js/elementUtils.js'
    import WebStocketSir from '@/common/js/WebStocketSir.js'

    export default {
        name: 'connect',
        data() {
            return {
                fingerprint: '',
                connectId: '',
                password: ''
            }
        },
        computed: {
            ...mapState({
                isLoading: ({connectModule}) => connectModule.isLoading
            })
        },
        mounted: function () {
            WebStocketSir.conn("333","4444")
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
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/common.css"
  @import "../../common/stylus/color.styl"
  .chat
    box-sizing border-box
    padding-top 25vh

    .chat-wrap
      width 75vw
      margin 0vh auto
      border 1px solid $border
      padding 3rem
      box-sizing border-box

</style>
