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
        if(isClass(obj[key])=="Object"||"Array"){
            result[key]=arguments.callee(obj[key]);//递归调用
            								   //arguments.callee代表当前调用函数
        }else{
            result[key]=obj[key];
        }
    }
    return result;
}
// 判断一个字符串中出现次数最多的字符，统计这个次数
function maxChar(str){
	var json = {},max=0,maxChar='';
	for(let i=0;i<str.length;i++){
		var char = str.charAt(i);
		if (!json[char]) {
			json[char] = 1;
		}else{
			json[char]++;
		}
	}
	for(let i in json){
		if(json[i] > max){
			max = json[i];
			maxChar = i;
		}
	}
	console.log(max,maxChar)
}
// 数组去重 依次判断是否存在于新数组中  不存在则放入新数组
function removeDuplicatedItem(arr){
  let newArr = []
  for(let i =0;i<arr.length;i++){
    if(newArr.indexOf(arr[i]) == -1){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
// 数组去重  当元素第一次出现的位置返回的下标与当前索引相同时存入新数组，不同则为重复值
function removeDuplicatedItem1(arr){
  var newArr = [];
  arr.forEach(function(e,idx,arr){
    if(arr.indexOf(e) === idx){
      newArr.push(e)
    }
  });
  return newArr;
}
