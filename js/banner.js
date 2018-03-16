$(function(){
    var winLen =$(window).innerWidth();
    var  lis = $(".banner>ul>li");
    $(".banner>ul").css("width",winLen*lis.length+"px");
    $(".banner>ul>li").css("width",winLen+"px");
    $(window).resize(function(){

       location.reload();
    })
    for(var i=0;i<lis.length;i++){
        $(".banner>ul>li").eq(i).css("left",i*winLen+"px");
    }
    var num;
    var tag = true;
     var index = 0;

    $(".banner>ul>li").swipe({
            swipeLeft:function(){

                if(tag){
                    num = $ (this).index();
                   tag = false;
                   $(".banner>ul>li").eq(num).animate({"left":-winLen+"px"},function(){
                        $(this).css("left",(lis.length-1)*winLen+"px");
                       tag = true;

                   });
                    for(var i=num+1;i<lis.length;i++){
                        $(".banner>ul>li").eq(i).animate({"left":(i-1)*winLen+"px"});
                    }
                    $(".banner>ul>li").eq(num).appendTo(".banner>ul");

                    index=index+1;

                    if(index>lis.length-1){
                        index=0;
                    }
                    $(".banner .circle li").eq(index).addClass("on").siblings().removeClass("on");
                }

            },
            swipeRight:function(){

                 if(tag){
                    num = $(this).index();
                    tag =false;
                    $(".banner>ul>li").eq(num).animate({"left":winLen+""},function(){

                        tag = true;

                    });
                    $(".banner>ul>li").eq(lis.length-1).prependTo(".banner>ul").css({"left":-winLen+"px"}).animate({"left":"0px"});
                    for(var i=num+1;i<lis.length;i++){
                        $(".banner>ul>li").eq(i).animate({"left":i*winLen+"px"});
                    }
                     index=index-1;


                    if(index<0){
                        index=lis.length-1;

                    }
                    $(".banner .circle li").eq(index).addClass("on").siblings().removeClass("on");

                 }

            }
            
    })

   /* var circle_index=0;
    var lunbo;
     function show(){
            lunbo =    setInterval(function(){

                           if(tag){

                                   tag = false;

                                   $(".banner>ul>li").eq(index).animate({"left":-winLen+"px"},function(){


                                       $(this).appendTo(".banner>ul").css("left",(lis.length-1)*winLen+"px");
                                       tag = true;
                                   });


                                    for(var i=index+1;i<lis.length;i++){
                                        $(".banner>ul>li").eq(i).animate({"left":(i-1)*winLen+"px"});
                                    }


                                circle_index++;

                                if(circle_index>(lis.length-1)){
                                    circle_index=0;
                                }

                                $(".banner .circle li").eq(circle_index).addClass("default").siblings().removeClass("default");

                                    }
                       },3000)
     }

      show();
*/

    /* $(".banner .circle li").click(function(){
                var defaultindex;
                defaultindex = $(this).index();
             $(this).addClass("default").siblings().removeClass("default");
             num = $(".banner ul li").index();


            if(num<defaultindex){
                $(".banner ul li").eq(0).animate({"left":-winLen+"px"})
                console.log(lis.length-1-defaultindex);
                for(var i=lis.length-1;i>lis.length-1-defaultindex;i--){

                    $(".banner>ul>li").eq(i).animate({"left":(i-1)*winLen+"px"},function(){
                        $(this).prependTo(".banner ul ");
                    });
                }
            }

    })*/

$(".circle li").click(function(){
        if(tag){
            var onIndex=$(".circle li.on").index();
        index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        if(index>onIndex){
            for(var i=0;i<(index-onIndex);i++){
                $(".banner ul li").eq(i).animate({"left":-winLen+"px"},function(){
                    $(this).css("left",winLen+"px").appendTo(".banner ul");

                    })
                }
            $(".banner ul li").eq(index-onIndex).animate({"left":0})
            for(var i=index-onIndex+1;i<lis.length;i++){
                $(".banner ul li").eq(i).animate({"left":(i-(index-onIndex))*winLen+"px"})
                }
            }

        if(index<onIndex){
            $(".banner ul li").eq(0).animate({"left":winLen+"px"})
            for(var i=lis.length-1;i>lis.length-1-(onIndex-index);i--){
                $(".banner ul li").eq(i).css("left",(i-lis.length)*winLen+"px").animate({"left":(i-lis.length+(onIndex-index))*winLen+"px"},function(){
                    $(this).prependTo(".banner ul");
                    })
                }

            }
        }

    })


})

