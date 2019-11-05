### vue组件的属性使用和不使用冒号的区别 
加冒号的，说明后面的是一个变量或者表达式；没加冒号的后面就是对应的字符串字面量！
列：
  <input :disable="true">打开</input>
输出：true 或 false   值是变量/Boolean类型
<input disable="true">打开</input>
输出：true   值是String类型

### export default到处多个方法，导入只需1个代号
### json和字符串互转
JSON.stringify(obj)       将JSON对象转为字符串。
JSON.parse(string)       将字符串转为JSON对象格式。
