<template>
  <div class="connect" v-loading="isLoading">

    <div class="connect-wrap">
      <ul>
        <li><p class="center f-b f-2">连接</p></li>
        <li>
          <span><el-input v-model="connectId" placeholder="请输入连接号" class="input"></el-input></span>
        </li>

        <li>
          <span><el-input v-model="password" placeholder="请输入密码(没有可忽略)" class="input"></el-input></span>
        </li>
        <li class="center">
          <el-button type="primary" class="w100" v-on:click="sumbit">马上连接</el-button>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import  EleUI from '@/common/js/elementUtils.js'
    import Fingerprint2 from 'fingerprintjs2'

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
            var options = {}
            Fingerprint2.getV18(options,  (result, components)=> {
                this.fingerprint = result;
                console.log(result); //a hash, representingyour device fingerprint
                // console.log(components); // an array of FPcomponents
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
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/common.css"
  @import "../../common/stylus/color.styl"
  .connect
    box-sizing border-box
    padding-top 25vh

    .connect-wrap
      width 75vw
      margin 0vh auto
      border 1px solid $border
      padding 3rem
      box-sizing border-box

      li
        margin-bottom 1rem

        .input
          margin-top 1rem

</style>
