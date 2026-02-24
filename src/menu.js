import bgImage from './images/sd.jpg';
import signatureDish from './images/sd.jpg';
import chefSpec from "./images/cs.jpg";
import famFeast from "./images/ff.jpg";

export const loadMenu = () => {
	const root = document.querySelector("#content");
	root.innerHTML = "";
	root.innerHTML = `
		<div id="menu">
		    <h1>Our Menu</h1>
		    
		    <div class="menu-items">
		        <div class="menu-item">
		            <div class="menu-image">
		                <img id="sd-image" src=""  alt="Food item">
		            </div>
		            <div class="menu-details">
		                <h3>Signature Dish</h3>
		                <p class="description">A mouthwatering combination of flavors that will delight your taste buds</p>
		                <p class="price">#14,000 Naira</p>
		                <button>Add to Cart</button>
		            </div>
		        </div>
		        
		        <div class="menu-item">
		            <div class="menu-image">
		                <img id="cs-image" alt="Food item">
		            </div>
		            <div class="menu-details">
		                <h3>Chef's Special</h3>
		                <p class="description">Prepared with love and the finest ingredients from local farms</p>
		                <p class="price">#18,000 Naira</p>
		                <button>Add to Cart</button>
		            </div>
		        </div>
		        
		        <div class="menu-item">
		            <div class="menu-image">
		                <img id="ff-image" alt="Food item">
		            </div>
		            <div class="menu-details">
		                <h3>Family Feast</h3>
		                <p class="description">Perfect for sharing! A generous portion served with all the fixings</p>
		                <p class="price">#20,000 Naira</p>
		                <button>Add to Cart</button>
		            </div>
		        </div>
		    </div>
		</div>
	`

	const navButtons = document.querySelectorAll("#navs > button");
	navButtons.forEach(button => {
		button.setAttribute("style", "color: black")
	});
	
	const menuNavBtn = document.querySelector("#menu-nav");
	menuNavBtn.setAttribute("style", "color: blue;")

	const body = document.querySelector("body");
	body.style.backgroundImage = `url(${bgImage})`;

	const sdImage = document.querySelector("#sd-image");
	sdImage.setAttribute("src", signatureDish);

	const csImage = document.querySelector("#cs-image");
	csImage.setAttribute("src", chefSpec)
	
	const ffImage = document.querySelector("#ff-image");
	ffImage.setAttribute("src", famFeast)
	
}


