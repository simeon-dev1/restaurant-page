import homeBg from "./images/home.jpeg"
console.log(homeBg)
export const loadHome = () => {
	const root = document.querySelector("#content");
	root.innerHTML = "";
	root.innerHTML = `
		<div id="home">
		    <div id="heading">
		        <h1>
		            Beauty's Lovely Eatery
		        </h1>
		        <p>
		            Exploring the world of meals...
		        </p>
		    </div>
		
		    <div id="cards">
		        <div class="card" id="who-we-are">
		            <h2>
		                Who We Are
		            </h2>
		            <p>
		                We are a team of cuisine professionals dedicated to giving the belly a happy day... your belly, especially 😂❤️
		            </p>
		        </div>
		        <div class="card" id="what-we-offer">
		            <h2>
		                What we offer
		            </h2>
		            <p>
		                Meals, meals, meals. You like food? Come here. You'll eat and never forget. Your satisfaction is waiting at our doorsteps. Come and Enjoy.
		            </p>
		        </div>
		        <div class="card" id="menu">
		            <h2>
		                Select Your Favs
		            </h2>
		            <p>
		                ...
		                <br>
		                Navaigate To Menu Above, Boss👆
		            </p>
		        </div>
		    </div>
		</div>
	`;

	const navButtons = document.querySelectorAll("#navs > button");navButtons.forEach(button => {button.setAttribute("style", "color: black")})

	const homeNavBtn = document.querySelector("button#home-nav");
	homeNavBtn.setAttribute("style", "color: blue")
	console.log("home loaded!");

	const body = document.querySelector("body");
	console.log(body)
	body.style.background = `url(${homeBg}) center center / cover no-repeat fixed`
}
