console.log("script is linked");

const submitBtn = document.querySelector("#submitBtn");
const registerForm = document.querySelector('#registerForm')

function refreshForm(){
    registerForm.reset();
};



function profile(fName, lName, msgText){
    console.log(fName, lName, msgText);
    const name = document.querySelector('.name');
    const message = document.querySelector('.message');
    name.innerHTML=`${fName} ${lName}`;
    message.innerHTML=`${msgText}`;
}



function register(event){
  
    event.preventDefault();
   let firstName = document.querySelector("#firstName");
   let lastName = document.querySelector("#lastName");
   let message = document.querySelector("#message")
//    console.log(firstName.value);
//    console.log(lastName.value);
//    console.log(message.value);

   profile(firstName.value, lastName.value, message.value);
   refreshForm(); 
};

submitBtn.addEventListener("click", register);