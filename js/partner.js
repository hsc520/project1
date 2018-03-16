$(function(){
		var circleLis =  $(".circle>ul>li");
	circleLis.each(function(i){
		$(this).click(function(){
			$(".partner_show>ul>li").slice(i*3,(i+1)*3).show();
			$(".partner_show>ul>li").not($(".partner_show>ul>li").slice(i*3,(i+1)*3)).hide();
		})
		
	})
	$(".partner_show>ul>li:gt(2)").css("display","none");

	// $(".point>ul>li").each(function(i){
	// 	$(this).click(function(){
	// 		$(".recommend>.product_show>ul>li").slice(i*3,(i+1)*3).show();
	// 		$(".recommend>.product_show>ul>li").not($(".recommend>.product_show>ul>li").slice(i*3,(i+1)*3)).hide();
	// 	})
		
	// })
	// $(".recommend>.product_show>ul>li:gt(2)").css("display","none");

     
     var num=0;
    var tag = true;
     var index = 0;
       var winLen =$(window).innerWidth();
        var  lis = $(".partner_show>ul>li");
       // console.log(winLen)
	$(".partner_show>ul").swipe({
		swipeLeft:function(){
			
			 index++;
			 if(index>=circleLis.length){
			 	index=0;
			 }
			 // console.log("------left"+index);
			 circleLis.eq(index).trigger("click");
			
		}
	})

	$(".partner_show>ul").swipe({
		swipeRight:function(){
			
			 index--;
			 if(index<0){
			 	// console.log("------------")
			 	index=circleLis.length-1;
			 }
			 // console.log("------left"+index);
			 circleLis.eq(index).trigger("click");
			
		}
	})












})