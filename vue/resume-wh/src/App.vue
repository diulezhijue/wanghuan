<template>
  <div id="app" class="styleEditor">
   <div>
      <pre> {{resultCode}} </pre>
    </div>
     <div v-html="finallyCode">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      code:`/*
* Inspired by http://strml.net/
* 大家好，我是王欢
* 二月了，好多公司都在招聘，你是不是也在准备简历呀。
* 说做就做，我也来写一份简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); background: rgb(0,43,54); 
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0; 
  -webkit-transition: none; 
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}


`,
      resultCode:''
    }
  },
  created(){
    let i = 0;
    let timer = setInterval( ()=>{
      this.resultCode = this.code.substring(0,i);
      i++;
      if (i>this.code.length ) {
        console.log(i,this.code.length);
        clearInterval(timer);
      }
    },20);
  },
  computed:{
    finallyCode(){
      return '<style>'+this.resultCode+'</style>'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  min-height: 100vh;
}

* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
</style>
