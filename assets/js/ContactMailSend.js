function sendMail() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

 
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

 
    const parms = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

  
    emailjs
        .send("service_kqe0cjg", "template_0jeljml", parms)
        .then(() => {
            alert("Email sent successfully!");

           
            nameInput.value = "";
            emailInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again later.");
        });
}
