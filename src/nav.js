import { loadHome } from "./home.js"
import { loadMenu } from "./menu.js"
import { loadContactPage } from "./contact.js"

(() => {
	const homeNavBtn = document.querySelector("button#home-nav");
	const menuNavBtn = document.querySelector("#menu-nav");
	const contactNavBtn = document.querySelector("#contact-nav")


	homeNavBtn.addEventListener("click", () => {
		loadHome();
	})

	menuNavBtn.addEventListener("click", () => {
		loadMenu();
	})

	contactNavBtn.addEventListener("click", () => {
		loadContactPage();
	})
})();

