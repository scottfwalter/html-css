$(".darkmode").click(function(){ //1
	$("body").toggleClass("dark")//2
		.css( //3
			$("body").hasClass("dark") ? //4
		  	{background:"#202225", color:"#f9f9f9"} : {background:"#f9f9f9", color:"#202225"} //5
		);
});
// It's not clear if the ternary counts as 2 lines or 1 when I'm trying to minimise line count, but I'm counting it as 2