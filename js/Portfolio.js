// Array of projects
var projects = [
	{
		Title: 'Repair Orders Dashboard',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/RODashboard.png',
		Description:
			'Repair Orders dashboard for Services department of Toyota Pakistan.',
	},
	{
		Title: 'Purchase Orders Display Board',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/PURCHASE ORDERS BOARD.png',
		Description: 'Shows the Purchase order parts tracking and status.',
	},
	{
		Title: 'Sales Activity Control Board',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/SalesActivityControlBoard.png',
		Description: 'Shows the sale targets and achievements of sale persons.',
	},
	{
		Title: 'SkyNet Critical Care',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/SkyNet2.png',
		Description: 'SkyNet Critical Care',
	},
	{
		Title: 'Job Progress Control Board',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/Jpcb.png',
		Description: 'Shows repair order jobs and their status.',
	},
	{
		Title: 'Employee Salary Increment',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/Increment.png',
		Description: 'Employee bulk salary increment module.',
	},
	{
		Title: 'DPOK Dashboard',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/dpokDashboard.png',
		Description:
			'DPOK Items dashboard showing data for different stocks and types.',
	},
	{
		Title: 'Employee Incentive System',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/IncentiveSystem.png',
		Description: 'Employee Salary Incentive modules for departments.',
	},
	{
		Title: 'Customers Bulk message Module',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/messageTool.png',
		Description: 'Bulk Message sending system for customers.',
	},
	{
		Title: 'Parts Department Dashboard',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/partsDashboard.png',
		Description: 'Dashboard for showing Parts department data.',
	},
	{
		Title: 'Parts Yearly Target System',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/targets.png',
		Description:
			'Set yearly targets for Parts category & type wise and see tracking.',
	},
	{
		Title: "Today's Appointment Terminal",
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/TabTerminal.png',
		Description: 'Appointment terminal board showing appointments and status.',
	},
	{
		Title: 'Crystal Reports Viewer',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/reportsViewer.png',
		Description: 'Crystal reports viewer module.',
	},
	{
		Title: 'Social Space App',
		ImageUrl:
			'https://user-images.githubusercontent.com/16499626/132754177-b09afe2d-93e9-4b0e-bad6-0b052f73ca07.png',
		Description:
			'Social Space is an app that let you open your apps side-by-side & save workSpaces.',
	},
	{
		Title: 'Modern Start Menu',
		ImageUrl:
			'https://camo.githubusercontent.com/75e6e7bcfac98d0077f48d2e735d4c5a03c2559938651b730eecb947520c89bd/68747470733a2f2f692e696d6775722e636f6d2f676b47766374442e6a7067',
		Description:
			'Modern Start Menu for Windows 7, Windows 10, and Windows 11. Made with ❤',
	},
	{
		Title: 'Job Progress Details',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/JobProgress.png',
		Description: "Manage a repair job's progress and status",
	},
	{
		Title: 'Delivery Acceptance Note',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/deliveryAcceptanceNote.png',
		Description:
			"Customer's vehicle delivery acceptance that allows taking a picture of the customer.",
	},
	{
		Title: 'Value Chain Products',
		ImageUrl:
			'https://raw.githubusercontent.com/RaoHammas/My-Website/main/images/Projects/ValueChain.png',
		Description:
			'Value chain products that are bought by the customer with a regular repair order.',
	},
];

// Get the container element
var techContainer = document.querySelector('#projectsContainer');

// Loop through the projects array and create cards dynamically
projects.forEach(function (project) {
	// Create card element
	var card = document.createElement('div');
	card.classList.add('card');

	// Create card content element
	var cardContent = document.createElement('div');
	cardContent.classList.add('card-content');

	// Create card image element
	var cardImage = document.createElement('img');
	cardImage.classList.add('card-image');
	cardImage.src = project.ImageUrl;
	cardImage.alt = project.Title;

	// Create card overlay element
	var cardOverlay = document.createElement('div');
	cardOverlay.classList.add('card-overlay');

	// Create card overlay text element
	var cardOverlayText = document.createElement('div');
	cardOverlayText.classList.add('card-overlay-text');
	cardOverlayText.textContent = 'Preview';

	// Append elements to their respective parents
	cardOverlay.appendChild(cardOverlayText);
	cardContent.appendChild(cardImage);
	cardContent.appendChild(cardOverlay);
	card.appendChild(cardContent);

	// Create card title element
	var cardTitle = document.createElement('div');
	cardTitle.classList.add('card-title');
	cardTitle.textContent = project.Title;

	// Create card description element
	/* 	var cardDescription = document.createElement('div');
	cardDescription.classList.add('card-description');
	cardDescription.textContent = project.Description; */

	// Append title and description to card
	card.appendChild(cardTitle);
	// card.appendChild(cardDescription);

	// Append card to the container
	techContainer.appendChild(card);
});

// Get all the card content elements
var cardContents = document.querySelectorAll('.card-content');

// Add event listener to each card content element
cardContents.forEach(function (cardContent) {
	cardContent.addEventListener('click', function () {
		// Get the image source from the clicked card
		var imageSrc = this.querySelector('.card-image').src;

		// Create the lightbox container element
		var lightboxContainer = document.createElement('div');
		lightboxContainer.classList.add('lightbox-container');

		// Create the lightbox image element
		var lightboxImage = document.createElement('img');
		lightboxImage.classList.add('lightbox-image');
		lightboxImage.src = imageSrc;

		// Create the close button element
		var closeButton = document.createElement('span');
		closeButton.classList.add('close-button');
		closeButton.innerHTML = '&times;';

		// Append the elements to the lightbox container
		lightboxContainer.appendChild(lightboxImage);
		lightboxContainer.appendChild(closeButton);

		// Append the lightbox container to the body
		document.body.appendChild(lightboxContainer);

		// Add event listener to the close button
		closeButton.addEventListener('click', function () {
			// Remove the lightbox container from the body
			document.body.removeChild(lightboxContainer);
		});

		// Close the lightbox when clicking outside the image area
		lightboxContainer.addEventListener('click', function (event) {
			if (event.target === lightboxContainer) {
				// Remove the lightbox container from the body
				document.body.removeChild(lightboxContainer);
			}
		});
	});
});
