### vue组件的属性使用和不使用冒号的区别 
加冒号的，说明后面的是一个变量或者表达式；没加冒号的后面就是对应的字符串字面量！
列：
  <input :disable="true">打开</input>
输出：true 或 false   值是变量/Boolean类型
<input disable="true">打开</input>
输出：true   值是String类型
