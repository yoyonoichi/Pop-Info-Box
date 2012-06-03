(function($){
	$.popInfoBox = function(userArgs) {
		if(!this.length) return false;
		var args = {
			applyClass:'apply_popinfobox',
			applyAttribute:{content:'content'},
			opacity:0.9,
			borderRadius:15,
			gap:10,
			zIndex:100,
			class:'popinfobox',
			preventDefault:true
		}
		$.extend(true,args,userArgs);
		args.applyClass = '.'+args.applyClass;
		
		var body = $('body').css({position:'relative'});
		var box = $('<div></div>').addClass(args.class).css({position:'absolute',backgroundColor:'#000000',opacity:args.opacity,color:'#ffffff',zIndex:args.zIndex});
		var boxInner = $('<div></div>').addClass('popinfobox_inner').css({padding:'10px'}).appendTo(box);
		
		$(args.applyClass).each( function() {
			var content = $(this).attr(args.applyAttribute.content);
			if(content) {
				$(this).hover( function(e) {
					if(args.preventDefault) e.preventDefault();
					showInfoBox(e, $(this));
					if(args.preventDefault) return false;
				}, function(e) {
					if(args.preventDefault) e.preventDefault();
					closeInfoBox($(this));
					if(args.preventDefault) return false;
				});
			}
			content = null;
		});
		
		function showInfoBox(e, obj) {
			boxInner.html(obj.attr(args.applyAttribute.content));
			box.appendTo(body).data({width:box.width()});
			calculation(e);
			obj.bind('mousemove', function(e) {
				if(args.preventDefault) e.preventDefault();
				calculation(e);
				if(args.preventDefault) return false;
			});
			return false;
		}
		
		function closeInfoBox(obj) {
			obj.unbind('mousemove');
			boxInner.empty();
			box.remove();
			return false;
		}
		
		function calculation(e) {
			var bodyLeft = body.offset().left;
			if(bodyLeft == 0) bodyLeft = ($(window).width()-body.width())*0.5;
			if($(window).width()*0.5 < e.pageX) {
				box.css({left:parseInt(e.pageX-bodyLeft-box.data().width)+'px', top:parseInt(e.pageY+args.gap)+'px',borderRadius:args.borderRadius+'px 0 '+args.borderRadius+'px '+args.borderRadius+'px'});
			}else{
				box.css({left:parseInt(e.pageX-bodyLeft)+'px', top:parseInt(e.pageY+args.gap)+'px',borderRadius:'0 '+args.borderRadius+'px '+args.borderRadius+'px '+args.borderRadius+'px'});
			}
			bodyLeft = null
			return false;
		}
		
		return false;
	}
})(jQuery);