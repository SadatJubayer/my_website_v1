

             
//<!--    portfolio  JS  =================    -->
       
        $(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});


(function(a){a.fn.appear=function(d,b){var c=a.extend({data:undefined,one:true,accX:0,accY:0},b);return this.each(function(){var g=a(this);g.appeared=false;if(!d){g.trigger("appear",c.data);return;}var f=a(window);var e=function(){if(!g.is(":visible")){g.appeared=false;return;}var r=f.scrollLeft();var q=f.scrollTop();var l=g.offset();var s=l.left;var p=l.top;var i=c.accX;var t=c.accY;var k=g.height();var j=f.height();var n=g.width();var m=f.width();if(p+k+t>=q&&p<=q+j+t&&s+n+i>=r&&s<=r+m+i){if(!g.appeared){g.trigger("appear",c.data);}}else{g.appeared=false;}};var h=function(){g.appeared=true;if(c.one){f.unbind("scroll",e);var j=a.inArray(e,a.fn.appear.checks);if(j>=0){a.fn.appear.checks.splice(j,1);}}d.apply(this,arguments);};if(c.one){g.one("appear",c.data,h);}else{g.bind("appear",c.data,h);}f.scroll(e);a.fn.appear.checks.push(e);(e)();});};a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var b=a.fn.appear.checks.length;if(b>0){while(b--){(a.fn.appear.checks[b])();}}},run:function(){if(a.fn.appear.timeout){clearTimeout(a.fn.appear.timeout);}a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20);}});a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(c,d){var b=a.fn[d];if(b){a.fn[d]=function(){var e=b.apply(this,arguments);a.fn.appear.run();return e;};}});})(jQuery);(function(a){a.fn.countTo=function(d){d=a.extend({},a.fn.countTo.defaults,d||{});var c=Math.ceil(d.speed/d.refreshInterval),b=(d.to-d.from)/c;return a(this).each(function(){var i=this,e=0,h=d.from,f=setInterval(g,d.refreshInterval);function g(){h+=b;e++;a(i).html(h.toFixed(d.decimals));if(typeof(d.onUpdate)=="function"){d.onUpdate.call(i,h);}if(e>=c){clearInterval(f);h=d.to;if(typeof(d.onComplete)=="function"){d.onComplete.call(i,h);}}}});};a.fn.countTo.defaults={from:0,to:100,speed:1000,refreshInterval:100,decimals:0,onUpdate:null,onComplete:null,};})(jQuery);