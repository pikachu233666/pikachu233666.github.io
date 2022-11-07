// 控制台打印自定义内容
if (window.console) {
  var getTimeState_console = function () {
    var t = new Date().getHours(),
      e = "";
    return (
      4 >= t || t > 22
        ? (e = "Good Night 🛌<br>")
        : 4 < t && t <= 10
        ? (e = "Good Morning 🌮")
        : 10 < t && t <= 12
        ? (e = "Good Noon 🍱")
        : 12 < t && t <= 17
        ? (e = "Good Afternoon ☕")
        : 17 < t && t <= 22 && (e = "Good Evening 🍇"),
      e
    );
  };
  Function.prototype.makeMulti = function () {
    let l = new String(this);
    l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
    return l;
  };
  let string = function () {
    /*
       ____      _        ____     ____               U _____ u  _      
U /"___|uU  /"\  u U | __")uU |  _"\ u     ___    \| ___"|/ |"|     
\| |  _ / \/ _ \/   \|  _ \/ \| |_) |/    |_"_|    |  _|" U | | u   
 | |_| |  / ___ \    | |_) |  |  _ <       | |     | |___  \| |/__  
  \____| /_/   \_\   |____/   |_| \_\    U/| |\u   |_____|  |_____| 
  _)(|_   \\    >>  _|| \\_   //   \\_.-,_|___|_,-.<<   >>  //  \\  
 (__)__) (__)  (__)(__) (__) (__)  (__)\_)-' '-(_/(__) (__)(_")("_) 
    */
  };
  console.log("欢迎访问%cGabriel's Blog", "color:#1fc7b6;font-weight:bold");
  console.log(string.makeMulti());
  console.log(getTimeState_console());
  console.log("既然你能看到这里，说明你是个程序员吧 \n 如果喜欢本站的样式，欢迎学习借鉴 \n 但请不要恶意攻击本站，谢谢");
}
