$(function(){
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