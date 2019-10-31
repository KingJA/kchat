<template>
  <div class="connect">

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
          <span><el-slider v-model="limitCount" show-input v-if="needLimitCount" :max="limitMax" :min="limitMin" ></el-slider> </span>
        </li>
        <li>
          <span>需要验证：</span>
          <span><el-checkbox v-model="needCheck" size="medium"></el-checkbox></span>
        </li>
        <li class="center">
          <el-button type="primary" class="w100">创建</el-button>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'create',
        data() {
            return {
                needPassword: false,
                needCheck: false,
                password: '',
                limitCount: 2,
                limitMin: 2,
                limitMax: 20,
                needLimitCount: false
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
