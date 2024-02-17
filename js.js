const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
  const bodyMessage = `Full Name: ${fullName.value}<br>
                       Email: ${email.value}<br>
                       Subject: ${subject.value}<br>
                       Message: ${message.value}`;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jonathanchisom711@gmail.com",
    Password : "F31F1217C8CF96688B43DFDD9BEF2AB5E08F",
    To : 'jonathanchisom711@gmail.com',
    From : "jonathanchisom711@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
 
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
)

}

// function checkInputs() {
//     const items = document.querySelectorAll(".item")

//     for(const item of items){
//         if(item.value == ""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }
//         if(items[1].value != ""){
//             checkEmail()
//         }

//         items[1].addEventListener("keyup", () =>  {
//             checkEmail();
//         })

//         item.addEventListener("keyup", () => {
//             if(item.value != ""){
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             }
//             else{
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         })
//     }
// }

// function checkEmail(){
//     const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if(!email.value.match(emailRegex)){
//         item.classList.add("error");
//         item.parentElement.classList.add("error");
//     }
//     else{
//         item.classList.remove("error");
//         item.parentElement.classList.remove("error");
//     }
// }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // checkInputs();
    sendEmail();
})
