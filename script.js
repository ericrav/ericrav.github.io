var ready = true;

$(document).ready(function(){

	$(".links a").click(function(e) {
		e.stopPropagation();
	});
	$("body").click(function(e){

		if (ready) {
			ready = false;
			var x = e.pageX;
			var y = e.pageY;
			var windowW = $(window).width();
			var windowH = $(window).height();
			var wx = Math.min(x, windowW - x)
			var wy = Math.min(y, windowH - y)
			var limit = Math.sqrt(Math.pow(windowW - wx, 2) + Math.pow(windowH - wy, 2)) * 2;
			if ($("#c1").is(":visible")) {
				$("#c2").show();
				$("#c1").css("z-index", 1);
				$("#c2").css({
					"z-index": 100,
					top: y + "px",
					left: x + "px",
					width: 0,
					height: 0
				});
				$("#c2 .name").css("opacity", 0);
				$("#c2 .name").animate({
					opacity: 1
				});
				var width = 0, height = 0;
				var timer = setInterval(function() {
					if (width > limit) {
						clearInterval(timer);
						ready = true;
						$("body").css("background", "#171d25");
						$("#c1").hide();
					}
					$("#c2").css({
						width: width + "px",
						height: height + "px",
						top: y + "px",
						left: x + "px"
					});
					width += 80;
					height += 80;
					x -= 40;
					y -= 40;
				}, 20)
			} else {
				$("#c1").show();
				$("#c2").css("z-index", 1);
				$("#c1").css({
					"z-index": 100,
					top: y + "px",
					left: x + "px",
					width: 0,
					height: 0
				});
				$("#c1 .name").css("opacity", 0);
				$("#c1 .name").animate({
					opacity: 1
				});
				var width = 0, height = 0;
				var timer = setInterval(function() {
					if (width > limit) {
						clearInterval(timer);
						ready = true;
						$("body").css("background", "#E8E2DA");
						$("#c2").hide();
					}
					$("#c1").css({
						width: width + "px",
						height: height + "px",
						top: y + "px",
						left: x + "px"
					});
					width += 80;
					height += 80;
					x -= 40;
					y -= 40;
				}, 20)
			}
		}
	});
});