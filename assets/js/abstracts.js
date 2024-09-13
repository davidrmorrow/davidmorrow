/**
 * abstracts.js
 *
 * Handles collapsing and expanding of abstracts
 */

	document.addEventListener("DOMContentLoaded", function () {
		const abstracts = document.querySelectorAll(".paper-info");

		abstracts.forEach((abstract) => {
			abstract.classList.add("collapsed"); // Collapse abstracts to start
			
			const button = abstract.nextElementSibling;
			button.classList.remove("hidden"); // Ensure buttons are displayed

			button.addEventListener("click", function () {
				// Toggle expanded and collapsed classes
				if (abstract.classList.contains("collapsed")) {
					abstract.classList.remove("collapsed");
					abstract.classList.add("expanded");
					button.innerText = "Show less";
				} else {
					abstract.classList.remove("expanded");
					abstract.classList.add("collapsed");
					button.innerText = "Read more";
				}
			});
		});
	});