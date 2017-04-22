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

