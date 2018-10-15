$(function(){
	
	$('.slide_box .left span').hover(function(){
		$('.slide_box .left span').css('background-position','0px -40px')
	},function(){
		$('.slide_box .left span').css('background-position','0px 0px')
	})
	$('.slide_box .right span').hover(function(){
		$('.slide_box .right span').css('background-position','0px -40px')
	},function(){
		$('.slide_box .right span').css('background-position','0px 0px')
	})
	$(window).scroll(function(event) {
		if($(window).width()<890){
			$('.navww').fadeOut();
			return;
		}
		if($(window).scrollTop()>=287){
			$('.navww').fadeIn()
		}else{
			$('.navww').fadeOut()
		}
	})
	
	$(window).resize(function(){
		if($(this).width()<890){
			$('.navww').fadeOut();
			return;
		}else{
			if($(window).scrollTop()<287){
				$('.navww').fadeOut();
				return;
			}
			$('.navww').fadeIn()
		}
	})
})