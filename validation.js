document.getElementById("sign-up").addEventListener("click", checkEmail);

function checkEmail() {
	var userInput = document.getElementById("email");
	var interestedIn = document.getElementById("interest");
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

	if (userInput.value.match(mailformat)) {
	    document.getElementById("form-text").innerHTML = "You have entered a valid email address!";
	    document.getElementById('form-text').style.color = "#7AB55C";
	    console.log(userInput.value);
	    console.log(interestedIn.value);
	} else {
	    document.getElementById("form-text").innerHTML = "Please enter a valid email address!";
	    document.getElementById('form-text').style.color = "#C23628";
	}
}