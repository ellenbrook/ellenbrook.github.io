function smoothScroll(t){$('a[href^="#"]').on("click",function(o){var i=$($(this).attr("href"));i.length&&(o.preventDefault(),$("html, body").animate({scrollTop:i.offset().top},t))})}function linkToBlogPost(){$(".blogList").on("click",function(){var t=$(this).find(".blogList-title a").attr("href");window.location.href=t})}function setWorkSectionHeight(){var t=0,o=0;$(".workList").each(function(){t=$(this).height(),o=(t-200)/2,$(this).find(".workList-container-inner").css({"margin-top":o+"px","margin-bottom":o+"px"})})}$(function(){smoothScroll(500),linkToBlogPost(),setWorkSectionHeight()}),jQuery("img.svg").each(function(){var t=jQuery(this),o=t.attr("id"),i=t.attr("class"),n=t.attr("src");jQuery.get(n,function(n){var e=jQuery(n).find("svg");"undefined"!=typeof o&&(e=e.attr("id",o)),"undefined"!=typeof i&&(e=e.attr("class",i+" replaced-svg")),e=e.removeAttr("xmlns:a"),t.replaceWith(e)},"xml")});