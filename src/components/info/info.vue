<template>
  <div class="info" v-loading="isLoading">
    <div class="info-wrap">
      <ul>
        <li><p class="center f-b f-2">创建成功</p></li>
        <li>
          <span>识别码：</span>
          <span>{{info.adminCode}}</span>
          <p style="color: #999999">(识别号是群主的唯一标识，切勿透露给他人)</p>
        </li>

        <li>
          <span>连接号：</span>
          <span>{{info.connectId}}</span>
        </li>
        <li>
          <span>连接Url：</span>
          <span>http://{{location}}/connect?connectId={{info.connectId}}</span>
        </li>
        <li v-if="info.needLimitCount===1">
          <span>最大人数：</span>
          <span>{{info.maxCount}}</span>
        </li>
        <li>
          <span v-show="info.password!==''">连接密码：</span>
          <span>{{info.password}}</span>
        </li>
        <li v-if="info.needCheck===1">
          <span>需要验证：</span>
          <span>{{info.needCheck===1?'是':'否'}}</span>
        </li>

        <li class="center">
          <el-button type="primary" class="w100" v-on:click="sumbit">立即进入</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import EleUI from '@/common/js/elementUtils.js'
    import Fingerprint2 from 'fingerprintjs2'
    export default {
        name: 'create',
        data() {
            return {
                info: {},
                location:'',
                fingerprint:''

            }

        },
        computed: {
            ...mapState({
                isLoading: ({connectModule}) => connectModule.isLoading
            })
        },
        mounted: function () {
            if (typeof (this.$route.params.connectId) == "undefined") {
                EleUI.showError('请先建立连接');
                this.$router.push({name: 'connect'});
                return
            }
            this.info = this.$route.params;
            this.location=location.host;

            var options = {}
            Fingerprint2.getV18(options, (result, components) => {
                this.fingerprint = result;
                console.log('fingerprint:'+result); //a hash, representingyour device fingerprint
                // console.log(components); // an array of FPcomponents
            })
        },

        methods: {
            ...mapActions([
                'connect'
            ]),
            sumbit() {
                this.connect({
                    fingerprint: this.fingerprint,
                    connectId: this.info.connectId,
                    password: this.info.password,
                    adminCode: this.info.adminCode
                });
            }
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/common.css"
  @import "../../common/stylus/color.styl"
  .info
    box-sizing border-box
    padding-top 25vh

    .info-wrap
      width 75vw
      margin 0vh auto
      border 1px solid $border
      padding 1.5rem
      box-sizing border-box
      word-wrap break-word /*换行*/
      word-break break-all /*换行*/

      li
        margin-bottom 1rem

        .input
          margin-top 1rem

</style>
