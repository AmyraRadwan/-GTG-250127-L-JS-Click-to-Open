// --------------------------------------------------
//                 CLICK TO OPEN
// --------------------------------------------------

document.getElementById("js-hamburger").addEventListener("click", function () {
	var nav = document.getElementById("js-nav");
	var circle = document.getElementById("circle");

	nav.classList.toggle("show");

	if (circle.innerHTML === "?") {
		circle.innerHTML = "+";
	} else if (circle.innerHTML === "+") {
		circle.innerHTML = "?";
	}
});
