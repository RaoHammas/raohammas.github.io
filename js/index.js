/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function () {
	console.log('callback - particles.js config loaded');
});

function sendEmail() {
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	var emailBtn = document.getElementById('emailBtn');

	emailBtn.disabled = true;

	// Check if email is valid
	if (!validateEmail(email.trim())) {
		alert('Invalid email');
		emailBtn.disabled = false;
		return false;
	}

	// Check if message is empty
	if (message.trim() == '') {
		alert('Invalid message.');
		emailBtn.disabled = false;
		return false;
	}

	emailjs.init('user_xh3jUI7ZM4tZJaiDlh6zM');
	var templateParams = {
		to_name: 'Hammas',
		from_name: 'your website',
		message: 'EMAIL [ ' + email + ' ] MESSAGE [ ' + message + ' ]',
	};

	emailjs.send('service_4ggp87d', 'template_kj493lx', templateParams).then(
		function (response) {
			console.log(response);
			alert('Message sent successfully.');
		},
		function (error) {
			console.log(error);
			alert('Failed to send message! try again...');
		}
	);

	emailBtn.disabled = false;
}

function validateEmail(email) {
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
}

function scrollToElement(elementId) {
	let element = document.getElementById(elementId);
	element.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'nearest',
	});
	return true;
}
