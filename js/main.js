const navTriggerBtn = document.querySelector("#nav-trigger-btn");
const navMenu = document.querySelector("#nav-menu");

// event listeners
navTriggerBtn.addEventListener("click", () => {
	navMenu.classList.toggle("nav-is-open");
	// console.log("clicked");
});
