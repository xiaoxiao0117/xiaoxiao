$(function() {
	$('body').append('<div id="rocket-to-top" title="返回顶部"><div class="level-2"></div><div class="level-3"></div></div>');
	var e = $("#rocket-to-top"),
	t = $(document).scrollTop(),
	n,
	r,
	i = !0;
	$(window).scroll(function() {
		var t = $(document).scrollTop();
		t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
			marginTop: "-1000px"
		},
		"normal",
		function() {
			e.css({
				"margin-top": "-125px",
				display: "none"
			}),
			i = !0
		})) : e.fadeIn("slow")
	}),
	e.hover(function() {
		$(".level-2").stop(!0).animate({
			opacity: 1
		})
	},
	function() {
		$(".level-2").stop(!0).animate({
			opacity: 0
		})
	}),
	$(".level-3").click(function() {
		function t() {
			var t = e.css("background-position");
			if (e.css("display") == "none" || i == 0) {
				clearInterval(n),
				e.css("background-position", "0px 0px");
				return
			}
			switch (t){
			case "0px 0px":
				e.css("background-position", "-112px 0px");
				break;
			case "-112px 0px":
				e.css("background-position", "-168px 0px");
				break;
			case "-168px 0px":
				e.css("background-position", "-224px 0px");
				break;
			case "-224px 0px":
				e.css("background-position", "-280px 0px");
				break;
			case "-280px 0px":
				e.css("background-position", "-112px 0px");
			}
		}
		if (!i) return;
		n = setInterval(t, 50),
		$("html,body").animate({scrollTop: 0},"slow");
	});
});