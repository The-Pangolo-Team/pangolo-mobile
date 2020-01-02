$("#signup-options button").first().click(function(){
	$("#signup-div").slideDown(600, function(){
		$("#return").removeClass("hide");
	});
	$(this).addClass("hide");
	$("#login-options").addClass("hide");
	$("#divider").addClass("hide");
	$("#return").removeClass("hide");
});

$("#login-options button").first().click(function(){
	$("#login-div").slideDown(600, function(){
		$("#return").removeClass("hide");
	});
	$(this).addClass("hide");
	$("#signup-options").addClass("hide");
	$("#divider").addClass("hide");
});

$("#return button").click(function(){
	// return to original landing page
	$("#login-div").slideUp(600, function(){
	// hide the return button
		$("#signup-options").removeClass("hide");
		$("#login-options button").removeClass("hide");
		$("#return").addClass("hide");
		$("#divider").removeClass("hide");
	});
	$("#signup-div").slideUp(600, function(){
		// hide the return button
		$("#signup-options button").removeClass("hide");
		$("#login-options").removeClass("hide");
		$("#return").addClass("hide");
		// $("#divider").removeClass("hide");
	})
});