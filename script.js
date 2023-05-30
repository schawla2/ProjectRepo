

function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "nshrestha0514@gmail.com",
      Password: "Enter your password",
      To: 'receiver@email_address.com',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }