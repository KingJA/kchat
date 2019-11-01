<template>
  <div class="connect">

    <div class="connect-wrap">
      <ul>
        <li><p class="center f-b f-2">连接</p></li>
        <li>
          <span><el-input v-model="connectCode" placeholder="请输入连接号" class="input"></el-input></span>
        </li>

        <li>
          <span><el-input v-model="password" placeholder="请输入密码(没有可忽略)" class="input"></el-input></span>
        </li>
        <li class="center">
          <el-button type="primary" class="w100">马上连接</el-button>

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
                connectCode: '',
                password: ''

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
