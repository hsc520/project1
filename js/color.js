$(function(){

	$(".news_list>ul>li").each(function(i){
    $(this).mouseover(function(){
    	$(".news_right>h3>a").eq(i).css("color","#f43434");
    	$(".news_left").eq(i).css("background","#f43434");
    })
      $(this).mouseout(function(){
    	$(".news_right>h3>a").eq(i).css("color","#01a1ff");
    	$(".news_left").eq(i).css("background","#01a1ff");
    })
	})
})