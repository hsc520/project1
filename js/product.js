$(function(){

	$(".partner>.circle>ul>li").click(function()
	{
		// alert(123);
		 $(".partner>.circle>ul>li").eq($(this).index()).addClass('on').siblings().removeClass('on');
		 $(".partner_show>ul").hide().eq($(this).index()).show();


	})
})