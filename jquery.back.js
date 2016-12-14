;(function(){
	//定义返回顶部按钮
	//opts参数可以设置位置，速度
	var Back = function(el,opts){
		this.opts = $.extend({},Back.DEFAULTS,opts);
		this.$el = $(el);

		this.checkPosition();

		this.$el.on('click',$.proxy(this.move,this));
		$(window).on('scroll',$.proxy(this.checkPosition,this));

	};
	//默认参数
	Back.DEFAULTS  = {
		pos: $(window).height(),
		speed:800,
		dest:0
	}
	//向上滚动方法
	Back.prototype.move = function(){
		var scrollbody = $('html,body');
		if(!scrollbody.is(':animated')){
			scrollbody.animate({scrollTop:this.opts.dest},this.opts.speed);
		}
		
		
	};
	//滚动超过一定高度元素显示
	Back.prototype.checkPosition = function(){
		if($(window).scrollTop() > this.opts.pos){
			this.$el.fadeIn();
		}else{
			this.$el.fadeOut();
		}
	};

	//在jquery上定义back方法
	$.fn.back = function(opts){
		return new Back(this,opts);
	}




})(jQuery);