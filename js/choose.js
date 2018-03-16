$(function(){
	$(".partner>.circle>ul>li").click(function(){
		$(".partner>.circle>ul>li").eq($(this).index()).addClass('on').siblings().removeClass('on');
		// alert($(this).index())
        $(".partner>.partner_show>ul").hide().eq($(this).index()).show();
        // $(".partner>.partner_show>ul").eq($(this).index()).show();
	})
	$(".recommend>.circle>ul>li").click(function(){

		$(".recommend>.circle>ul>li").eq($(this).index()).addClass('on').siblings().removeClass('on');
		$(".recommend>.product_show>ul").hide().eq($(this).index()).show();
	})
})