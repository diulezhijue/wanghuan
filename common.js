//获取随机长度的字符串
//len  长度
//type  1 数字
//      2 数字 大写字母
//		3 数字 大写字母  小写字母
function getRandom(len,type){
  len = len < 0 ? 0 : len;
  type = type && type<=3? type : 3;
  var str = '';
  for (var i = 0; i < len; i++) {
	var j = Math.ceil(Math.random()*type);
	if (j == 1) {
		str += Math.ceil(Math.random()*9);
	} else if (j == 2) {
		str += String.fromCharCode(Math.ceil(Math.random()*25+65));
	} else {
		str += String.fromCharCode(Math.ceil(Math.random()*26+96));
	}
  }
  return str;
}
// 返回对象的数据类型
function isClass(obj){
  if(obj === null) return 'Null';
  if(obj === undefined) return "Undefined";
  return Object.prototype.toString.call(obj).slice(8,-1);
}
// 对象的深克隆
function deepClone(obj){
    var result,oClass=isClass(obj);
        //确定result的类型
    if(oClass==="Object"){
        result={};
    }else if(oClass==="Array"){
        result=[];
    }else{
        return obj;
    }
    for(key in obj){
        var copy=obj[key];
        if(isClass(copy)=="Object"||"Array"){
            result[key]=arguments.callee(copy);//递归调用
            								   //arguments.callee代表当前调用函数
        }else{
            result[key]=obj[key];
        }
    }
    return result;
}
