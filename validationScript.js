
//set global variables
let subButton = document.getElementById("subButton");
const myForm = document.getElementById("myForm");

//add event listeners
subButton.addEventListener("click", validateInput);
myForm.addEventListener("submit", function(event){
    //Prevent the  form submission
    event.preventDefault();

    //Get input value
    const inputFeildSubmission = document.getElementById("inputField");
    const  inputText = inputFeildSubmission.value;

    //validate the submission
    if ((/^[0-9a-zA-Z]+$/.test(inputText))){
        myForm.submit();
    } else{
        validateInput();
    }
})


//create function to validate inputs and display errors
function validateInput(){
let inputField = document.getElementById("inputField");
if (inputField.validity.valueMissing){
    inputField.setCustomValidity("Please add alpha-numeric number");
}else if(!(/^[0-9a-zA-Z]+$/.test(inputField.value))){
    inputField.setCustomValidity("Please enter a character containing numbers and letters")
}
else{window.alert("Submission Confirmed");
}
}