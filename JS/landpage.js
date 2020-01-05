var signupButton = document.querySelector("#signup-options button");
var loginButton = document.querySelector("#login-options button");
var signupOptions = document.getElementById("signup-options");
var divider = document.getElementById("divider");
var regDivs = document.querySelectorAll(".reg-divs")
var loginOptions = document.querySelector("#login-options ");
var signupDiv = document.querySelector("#signup-div")
var loginDiv = document.querySelector("#login-div")
var backBtn = document.getElementById("return");



signupButton.addEventListener("click", function() {
	// window.scrollBy(0, 2500);
	this.classList.add("hide");
	backBtn.classList.remove("hide");
	signupDiv.classList.remove("hide");
	divider.classList.add("hide");
	loginButton.classList.add("hide");
});

loginButton.addEventListener("click", function() {
	this.classList.add("hide");
	backBtn.classList.remove("hide");
	loginDiv.classList.remove("hide");
	divider.classList.add("hide");
	signupButton.classList.add("hide");
});

backBtn.addEventListener("click", function() {
	this.classList.add("hide");
	loginDiv.classList.add("hide");
	signupDiv.classList.add("hide");
	loginButton.classList.remove("hide");
	signupButton.classList.remove("hide");
	divider.classList.remove("hide");
})