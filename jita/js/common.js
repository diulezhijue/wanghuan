!(function(){
  var Move = function($container){
    this.$container = $container;
    this.$list = $container.find('ul');
    this.listHeight = this.$list.outerHeight(true);
    this.moveHeight = $container.find('li').outerHeight(true);
    this.$up = $container.find('.btn-up');
    this.$down = $container.find('.btn-down');  
    this.showNum = 0;
    this.animation = false;

    this.init();
  }
  Move.prototype = {
    init:function(){
      if (this.$container.hasClass('example-box')) {
        this.showNum = 8;
      }else if (this.$container.hasClass('lesson-box')) {
        this.showNum = 3;
      }else{
        this.showNum = 10;
      }
      this.$container.find('.overflow-box').css({height:this.moveHeight*this.showNum});
      this.boxHeight = this.$container.find('.overflow-box').outerHeight(true);
      this.bind();
    },
    bind:function(){
      var _this = this;
      this.$up.on('click',function(){
        var me = $(this);
        var curr_top = _this.$list.position().top;
        if (me.hasClass('action')) {
          if (_this.animation) { return;}
          _this.animation = true;
          _this.$list.animate({top: '-='+_this.moveHeight},300,function(){
          var top = _this.$list.position().top;
            if (_this.listHeight <= Math.abs(top) + _this.boxHeight) {
              me.removeClass('action');
              _this.$list.css({top:_this.boxHeight-_this.listHeight})
            }
            _this.$down.addClass('action');
            _this.animation = false;
          })
        }
        
      });
      this.$down.on('click',function(){
        var me = $(this);
        var curr_top = _this.$list.position().top;
        if (me.hasClass('action')) {
          if (_this.animation) { return; }
          _this.animation = true;
        _this.$list.animate({top: '+='+_this.moveHeight},300,function(){
          var top = _this.$list.position().top;
          if (Math.abs(top) < _this.moveHeight) {
            me.removeClass('action');
          }
          _this.$up.addClass('action');
          _this.animation = false;
        });
        }
      });
    }
  }
  new Move($('.lesson-box'));
  new Move($('.news-box'));
})()



