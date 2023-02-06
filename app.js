const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})

let counter = 1;
setInterval(() => {
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if (counter > 4) {
		counter = 1;
	}
	}, 10000)