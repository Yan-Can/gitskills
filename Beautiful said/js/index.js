





$(document).ready(function(){
	
	$("#nav").mouseover(function(){
		$("#nav").css("border","1px solid #ff3366");
		$("#nav").css("border-left","none");
		$("#nav").css("border-right","none");
		$("._navC .l_nav ._navwrap li div.navd").css("border-bottom","none");
		$("ul.list1").css("display","block");
		
		
	})
	$("#nav").mouseout(function(){
		$("#nav").css("border","none");
		$("._navC .l_nav ._navwrap li div.navd").css("border-bottom","1px dashed #ccc");
		$("ul.list1").css("display","none");
		
		
	})	
	
	


	
	
	
	
	
	
	
	
//---------------top	
//	$(".wrap .top .t_c li.collect").mouseover(function(){
//		$("#collectT").show();
//	});
//	$(".wrap .top .t_c li.collect,.wrap .top .t_c li.help").mouseout(function(){
//		$("#collectT").hide();
//	});
//	
//	$(".wrap .top .t_c li.help").mouseover(function(){
//		$("#helpT").show();
//	});
//	$(".wrap .top .t_c li.help").mouseout(function(){
//		$("#helpT").hide();
//	});
//封装如下	
	function move(_class,n){
		$(_class).mouseover(function(){
			$(n).show();
		});
		$(_class).mouseout(function(){
			$(n).hide();
		});
	};
	move(".wrap .top .t_c li.collect","#collectT");
	move(".wrap .top .t_c li.help","#helpT");
})
