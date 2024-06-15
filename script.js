const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

    function sendEmail(){
       	const bodyMessage = `fullName: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${contact.value}<br> Message: ${mess.value}`;
        Email.send({
            // SecureToken: "6747cef6-c48c-447f-a324-285d214a981c",
            Host: "smtp.elasticemail.com",
            Username: "ron.renan@gmail.com",
            Password: "F6D24C634EDBBDCEAC3B75FB703C3A38E2EB",
            To : "ron.renan@gmail.com",
            From : document.getElementById("email").value,
            Subject : "New Contact Form Enquiry",
            Body : "Name: " + document.getElementById("name").value,
            +"<br> Email: " + document.getElementById("email").value
            +"<br> Contact Number: " + document.getElementById("contact").value
            +"<br> Message: " + document.getElementById("message").value
            }).then(
            message => {
            	if(message == "OK"){
            		Swal.fire({
 						title: "Success!",
  						text: "Message sent successfully!",
  						icon: "success"
						});
            	}
            }
            );

        }
        function checkInputs(){
        	const items = document.querySelectorAll(".item");

        	for(const item of items) {
        		if(item.value == "") {
        			item.classList.add("error");
        			item.parentElement.classList.add("error");
        		}
        	}
        }

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputs();
	// sendEmail();

});

       