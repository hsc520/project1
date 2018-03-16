
											$(function(){	
												var flag = true;
												//找到类名为nav_toggle元素。单击触发事件
												$(".nav_toggle").click(function(){
													console.log("=============");
													//toggleClass设置或移除被选元素的一个或多个类进行切换。
													//找到当前对象，给它添加一个active的类名

													/*$(this).toggleClass("active");
													$(".navbar").toggleClass("active");*/
													if(flag){
														$(".content>.nav").slideUp();
														flag=false;
													}else{
														$(".content>.nav").slideDown();
														flag=true;
													}
													
													
												})
											})
