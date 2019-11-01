<template>
  <div class="connect" v-loading="isLoading">

    <div class="connect-wrap">
      <ul>
        <li><p class="center f-b f-2">创建连线</p></li>
        <li>
          <span>需要密码：</span>
          <span><el-checkbox v-model="needPassword" size="medium"></el-checkbox></span>
          <span><el-input v-model="password" placeholder="请输入密码" v-if="needPassword" class="input"></el-input></span>

        </li>
        <li>
          <span>人数限制：</span>
          <span><el-checkbox v-model="needLimitCount" size="medium"/></span>
          <span><el-slider v-model="maxCount" show-input v-if="needLimitCount" :max="limitMax"
                           :min="limitMin"></el-slider> </span>
        </li>
        <li>
          <span>需要验证：</span>
          <span><el-checkbox v-model="needCheck" size="medium"></el-checkbox></span>
        </li>
        <li class="center">
          <el-button type="primary" class="w100" v-on:click="sumbit">创建</el-button>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import Fingerprint2 from 'fingerprintjs2'

    export default {
        name: 'create',
        data() {
            return {
                needPassword: false,
                needCheck: false,
                password: '',
                maxCount: 20,
                limitMin: 2,
                limitMax: 20,
                fingerprint: '',
                needLimitCount: false
            }

        },
        computed: {
            ...mapState({
                isLoading: ({createModule}) => createModule.isLoading
            })
        },
        mounted: function () {
            var options = {}
            Fingerprint2.getV18(options,  (result, components)=> {
                this.fingerprint = result;
                // console.log(result); //a hash, representingyour device fingerprint
                // console.log(components); // an array of FPcomponents
            })
        },

        methods: {
            ...mapActions([
                'create'
            ]),
            sumbit() {
                this.create({
                    password: this.password,
                    maxCount: this.maxCount,
                    needLimitCount: this.needLimitCount,
                    needCheck: this.needCheck,
                    fingerprint: this.fingerprint
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
