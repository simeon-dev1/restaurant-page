import cBgImage from "./images/cc.jpg"

export const loadContactPage = (() => {
	console.log("hi");
	const root = document.querySelector("#content");
	root.innerHTML = "";
	root.innerHTML = `
		<div id="contact">
		    <div id="heading">
		        <h1>
		            Get In Touch
		        </h1>
		        <p>
		            We'd love to hear from you, Boss👆
		        </p>
		    </div>
		
		    <div id="cards">
		        <div class="card" id="visit-us">
		            <h2>
		                📍 Visit Us
		            </h2>
		            <p>
		                123 Flavor Street
		                <br>
		                Foodie Town, CA 94123
		                <br>
		                <br>
		                🕒 Mon-Sat: 8am - 10pm
		                <br>
		                🕒 Sunday: 9am - 8pm
		            </p>
		        </div>
		        
		        <div class="card" id="call-us">
		            <h2>
		                📞 Call Us
		            </h2>
		            <p>
		                <strong>Reservations:</strong>
		                <br>
		                (555) 123-4567
		                <br>
		                <br>
		                <strong>Takeout:</strong>
		                <br>
		                (555) 987-6543
		            </p>
		        </div>
		        
		        <div class="card" id="email-us">
		            <h2>
		                ✉️ Email Us
		            </h2>
		            <p>
		                <strong>General:</strong>
		                <br>
		                hello@beautyskitchen.com
		                <br>
		                <br>
		                <strong>Careers:</strong>
		                <br>
		                joinus@beautyskitchen.com
		            </p>
		        </div>
		        
		        <div class="card" id="social">
		            <h2>
		                🍽️ Follow Us
		            </h2>
		            <p>
		                📸 @beautys_eatery
		                <br>
		                🐦 @beautys_eats
		                <br>
		                👍 /beautyslovelyeatery
		                <br>
		                <br>
		                Tag us in your meals! 🥨🥪
		            </p>
		        </div>
		    </div>
		    
	`
	
	const navButtons = document.querySelectorAll("#navs > button");
	navButtons.forEach(button => {
		button.setAttribute("style", "color: black")
	})

	const contactNavBtn = document.querySelector("#contact-nav");
	contactNavBtn.style.color = "blue";

	const body = document.querySelector("body");
	body.style.background = `url(${cBgImage}) center center / cover no-repeat fixed`;
})
