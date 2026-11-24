document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get Form Values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Your WhatsApp Business Number
    let whatsappNumber = "919765619608";

    // Create WhatsApp Message
    let whatsappMessage =
        "NEW ENQUIRY FROM WEBSITE\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Subject: " + subject + "\n" +
        "Message: " + message;

    // WhatsApp URL
    let whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

});


