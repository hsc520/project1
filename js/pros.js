
// $(function(){   
// 	  var pointLis =  $(".point>ul>li");
// 	  // console.log(pointLis.length);
       // $(".point>ul>li").click(function(){
       //    $(".point>ul>li").eq($(this).index()).addClass('on').siblings().removeClass('on');
       // })

   

//       $(".point>ul>li").each(function(i){
// 		$(this).click(function(){
// 			$(".recommend>.product_show>ul>li").slice(i*3,(i+1)*3).show();
// 			$(".recommend>.product_show>ul>li").not($(".recommend>.product_show>ul>li").slice(i*3,(i+1)*3)).hide();
// 		})
		
// 	})
// 	$(".recommend>.product_show>ul>li:gt(2)").css("display","none");



// 	  var num=0;
//       var tag = true;
//       var index = 0;
//        var winLen =$(window).innerWidth();
//        var  lis = $(".recommend>.product_show>ul>li");
//        // console.log(winLen)
// 	$(".recommend>.product_show>ul>li").swipe({
// 		swipeLeft:function(){
			
// 			 index++;
// 			 if(index>=pointLis.length){
// 			 	index=0;
// 			 }
// 			 pointLis.eq(index).trigger("click");
			
// 		}
// 	})

// 	$(".recommend>.product_show>ul>li").swipe({
// 		swipeRight:function(){
// 			console.log(322);
			
// 			 index=index-1;
// 			 if(index<0){
// 			 	index=pointLis.length-1;
// 			 }
// 			 index--;

			
// 			 // console.log("------left"+index);
// 			 pointLis.eq(index).trigger("click");
			
// 		}
// 	})




// })


$(function(){
		var pointLis =  $(".point>ul>li");
		       $(".point>ul>li").click(function(){
          $(".point>ul>li").eq($(this).index()).addClass('on').siblings().removeClass('on');
       })
	pointLis.each(function(i){
		$(this).click(function(){
			$(".recommend>.product_show>ul>li").slice(i*3,(i+1)*3).show();
			$(".recommend>.product_show>ul>li").not($(".recommend>.product_show>ul>li").slice(i*3,(i+1)*3)).hide();
		})
		
	})
	$(".recommend>.product_show>ul>li:gt(2)").css("display","none");

     
     var num=0;
    var tag = true;
     var index = 0;
       var winLen =$(window).innerWidth();
        var  lis = $(".partner_show>ul>li");
       // console.log(winLen)
	$(".recommend>.product_show>ul").swipe({
		swipeLeft:function(){
			
			 index++;
			 if(index>=pointLis.length){
			 	index=0;
			 }
			 // console.log("------left"+index);
			 pointLis.eq(index).trigger("click");
			
		}
	})

	$(".recommend>.product_show>ul").swipe({
		swipeRight:function(){
			
			 index--;
			 if(index<0){
			 	// console.log("------------")
			 	index=pointLis.length-1;
			 }
			 // console.log("------left"+index);
			 pointLis.eq(index).trigger("click");
			
		}
	})

})

