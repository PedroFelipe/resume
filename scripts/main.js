function adjustHeight(){var t=$("#projects .project").map(function(){return $(this).height()}).get(),e=Math.max.apply(null,t);$("#projects .project").height(e)}$(document).ready(function(){adjustHeight(),$(window).resize(function(){$(window).width()>768?adjustHeight():$("#projects .project").height("auto")})});