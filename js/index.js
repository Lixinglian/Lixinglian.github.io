$(function(){
	var path=$('.path')
	var avatar=$('.avatar-cen')
	function move(){
		avatar.on('click',function(){
		path.addClass('sli');
		$('.avatar').show(1000)
	})
	}
	move()
	$('.show-part .dev1').on('click',function(){
		move();
		$('.cir1').css('opacity','1');
		$('.cir2').css('opacity','1');
		$('.cir3').css('opacity','1');
		$('.cir4').css('opacity','0');
		$('.cir5').css('opacity','0');
		$('.cir6').css('opacity','0');
		$('.cir7').css('opacity','0');
		$('.cir8').css('opacity','0');
		$('.cir9').css('opacity','0');
		avatar.css('opacity','0');
	})
	$('.show-part .dev2').on('click',function(){
		move();
		$('.cir1').css('opacity','0');
		$('.cir2').css('opacity','0');
		$('.cir3').css('opacity','0');
		$('.cir7').css('opacity','0');
		$('.cir8').css('opacity','0');
		$('.cir9').css('opacity','0');
		$('.cir4').css('opacity','1');
		$('.cir5').css('opacity','1');
		$('.cir6').css('opacity','1');
		avatar.css('opacity','0');
	})
	$('.show-part .dev3').on('click',function(){
		move();
		$('.cir1').css('opacity','0');
		$('.cir2').css('opacity','0');
		$('.cir3').css('opacity','0');
		$('.cir4').css('opacity','0');
		$('.cir5').css('opacity','0');
		$('.cir6').css('opacity','0');
		$('.cir7').css('opacity','1');
		$('.cir8').css('opacity','1');
		$('.cir9').css('opacity','1');
		avatar.css('opacity','0');
	})
	$('.show-part .dev4').on('click',function(){
		$('.ps-box').css('display','block');
	})
	$('.clo-box').on('click',function(){
		$('.ps-box').css('display','none');
		$('.myself-box').css('display','none');
	})
	$('.dir-box').on('click',function(){
		$('.container').toggleClass('pro');
	})
})
