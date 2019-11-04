class WebStocketSir {

  conn(nickname) {
    if ('WebSocket' in window) {
      this.websocket = new WebSocket("ws://127.0.0.1:8090/websocket/" + nickname);
      console.log("支持websocket")
    } else {
      alert('当前浏览器 Not support websocket')
    }

    //连接发生错误的回调方法
    this.websocket.onerror = () => {
      console.log("WebSocket连接发生错误")
    };

    //连接成功建立的回调方法
    this.websocket.onopen = () => {
      console.log("WebSocket连接成功")
    }

    //接收到消息的回调方法
    this.websocket.onmessage = (event) => {
      console.log("收到：" + event.data)
      this.setMessageInnerHTML(event.data);
    }

    //连接关闭的回调方法
    this.websocket.onclose = () => {
      console.log("WebSocket连接关闭")
    }

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = () => {
      this.closeWebSocket();
    }
  }

  conn(connectId, fingerprint) {
    if ('WebSocket' in window) {
      this.websocket = new WebSocket("ws://127.0.0.1:8090/websocket/" + connectId + "/" + fingerprint);
      console.log("支持websocket")
    } else {
      alert('当前浏览器 Not support websocket')
    }

    //连接发生错误的回调方法
    this.websocket.onerror = () => {
      console.log("WebSocket连接发生错误")
    };

    //连接成功建立的回调方法
    this.websocket.onopen = () => {
      console.log("WebSocket连接成功")
    }

    //接收到消息的回调方法
    this.websocket.onmessage = (event) => {
      console.log("收到：" + event.data)
      this.setMessageInnerHTML(event.data);
    }

    //连接关闭的回调方法
    this.websocket.onclose = () => {
      console.log("WebSocket连接关闭")
    }

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = () => {
      this.closeWebSocket();
    }
  }

  //将消息显示在网页上
  setMessageInnerHTML(content) {
    document.getElementsByClassName('message')[0].innerHTML += content + '<br/>';
  }

  //关闭WebSocket连接
  closeWebSocket() {
    this.websocket.close();
  }

  //发送消息
  send(msg) {
    this.websocket.send(msg);
  }
}

export default new WebStocketSir()


