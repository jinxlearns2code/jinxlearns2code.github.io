//nav-section
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})

navbarLinks.addEventListener('click', () => {
	toggleButton.click();
})

// projects-section
let counter = 1;
setInterval(() => {
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if (counter > 4) {
		counter = 1;
	}
}, 10000)
	
//h1
let typeAnimation = new Typed(".big-heading.rest", {
	strings: ["ayle Abesamis."],
	loop: true,
	typeSpeed: 100,
	backSpeed: 80,
	backDelay: 10000,
	showCursor: false
})	
