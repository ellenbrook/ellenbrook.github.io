!function($){$.fn.detectScroll=function(t){var e=$.extend({position:"fade",target:"#targetContainer",size:null,testMode:!1,targetPercent:70,objectHeight:null,objectWidth:null,speed:400},t);return this.each(function(){var t=this;$(this).on("scroll",function(){return this.scrollTo=$(window).scrollTop(),this.docHeight=$(document).height(),this.windowHeight=$(window).height(),this.scrollPercent=scrollTo/(docHeight-windowHeight)*100,this.scrollPercent=scrollPercent.toFixed(1),this.scrollPercent>e.targetPercent&&("fade"==e.position&&$(e.target).fadeIn(e.speed),"top"==e.position&&$(e.target).stop().animate({top:"0"},e.speed),"right"==e.position&&$(e.target).stop().animate({right:"0"},e.speed),"bottom"==e.position&&$(e.target).stop().animate({bottom:"0"},e.speed),"left"==e.position&&$(e.target).stop().animate({left:"0"},e.speed)),this.scrollPercent<e.targetPercent&&("fade"==e.position&&$(e.target).fadeOut(e.speed),"top"==e.position&&$(e.target).stop().animate({top:"-"+e.height+"px"},e.speed),"right"==e.position&&$(e.target).stop().animate({right:"-"+e.width+"px"},e.speed),"bottom"==e.position&&$(e.target).stop().animate({bottom:"-"+e.height+"px"},e.speed),"left"==e.position&&$(e.target).stop().animate({left:"-"+e.width+"px"},e.speed)),e.testMode&&$("#detectScrollTestView").html(scrollPercent+"%"),t}),"bottom"==e.position,"left"==e.position,e.testMode&&($("body").append('<div id="detectScrollTestView">Scroll</div>'),$("#detectScrollTestView").css({position:"fixed",bottom:"20px",right:"30px",background:"rgba(44, 62, 80,.25)",width:"100px",height:"100px","font-size":"18px","line-height":"70px","text-align":"center",borderRadius:"50%",padding:"16px"}))})}}(jQuery);