<template>
  <div class="login" v-loading="isLoading">
    <div class="layui-body">
      <blockquote class="layui-elem-quote"></blockquote>
      <br/> <br/>
      <a class="layui-btn layui-btn-normal" href="http://layim.layui.com/" target="_blank">前去LayIM官网</a>


      Welcome<br/><input id="text" type="text"/>
      <button onclick="send()">发送消息</button>
      <hr/>
      <input id="nickname" type="text"/>
      <el-button type="primary" v-on:click="conectWebSocket">连接</el-button>
      <el-button type="primary" v-on:click="closeWebSocket">断开</el-button>
      <hr/>
      <div id="message"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import {mapState, mapActions} from 'vuex'
    //建立WebSocket通讯
    var websocket = null;
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
            },
            conectWebSocket() {
                var nickname = document.getElementById("nickname").value;
                if (nickname === "") {
                    alert("请输入昵称");
                    return;
                }


                if ('WebSocket' in window) {
                    websocket = new WebSocket("ws://127.0.0.1:8090/websocket/" + nickname);
                } else {
                    alert('当前浏览器 Not support websocket')
                }

                //连接发生错误的回调方法
                websocket.onerror = function () {
                    this.setMessageInnerHTML("WebSocket连接发生错误");
                };

                //连接成功建立的回调方法
                websocket.onopen = function () {
                    this.setMessageInnerHTML("WebSocket连接成功");
                }

                //接收到消息的回调方法
                websocket.onmessage = function (event) {
                    this.setMessageInnerHTML(event.data);
                }

                //连接关闭的回调方法
                websocket.onclose = function () {
                    this.setMessageInnerHTML("WebSocket连接关闭");
                }

                //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
                window.onbeforeunload = function () {
                    this.closeWebSocket();
                }
            }
            ,
            //将消息显示在网页上
            setMessageInnerHTML(innerHTML) {
                document.getElementById('message').innerHTML += innerHTML + '<br/>';
            },

            //关闭WebSocket连接
            closeWebSocket() {
                websocket.close();
            },

            //发送消息
            send() {
                var message = document.getElementById('text').value;
                websocket.send(message);
            }
        }

    }


    //判断当前浏览器是否支持WebSocket


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
</style>
