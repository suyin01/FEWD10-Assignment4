//wait for the DOM elements to load before executing
$(document).ready(function () {
		
	var city;	
	
   	$('#submit-btn').click(function (event) {
    //prevent the submit button from refreshing the page
    event.preventDefault();
    //get the value of the #city-type input and correct for capitalization
    city = $('#city-type').val(); 
    // if the user inputs New York City / NYC / New York change the body class to 'nyc'
    if (city == 'NYC' || city == 'New York' || city == 'New York City') {           									$('body').addClass('nyc'); 
																			 
	// if the user inputs Austin/ATX change the body class to 'austin'
	} else if (city == 'Austin' || city == 'ATX') {      
		$('body').addClass('austin');
		
	// if the user inputs Sydney/SYD change the body class to 'sydney'	
	} else if (city == 'Sydney' || city == 'SYD') {      
		$('body').addClass('sydney');
			
	// if the user inputs SF/San Francisco/Bay Area change the body class to 'sf'	
	} else if (city == 'San Francisco' || city == 'SF') {
		$ ('body').addClass('sf');
		
	// if the user inputs Los Angeles/LA/LAX change the body class to 'la'	
	} else if (city == 'LA' || city == 'Los Angeles' || city == 'LAX') {
		$ ('body').addClass('la'); }
	});
});             