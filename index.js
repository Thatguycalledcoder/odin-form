const fname = document.querySelector("#first-name");
const lname = document.querySelector("#lirst-name");
const email = document.querySelector("#email");
const number = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");
const btn = document.querySelector("#create-account");
const error = document.querySelector(".errors");

const checkPassword = (e) => {
    e.preventDefault();
    if (password.value !== confirm_password.value) {
        password.style["outline"] = "1px solid red";
        confirm_password.style["outline"] = "1px solid red";
        confirm_password.setCustomValidity("Passwords do not match!");
        error.textContent = "Passwords do not match!";
    }
    else {
        password.style["outline"] = "1px solid green";
        confirm_password.style["outline"] = "1px solid green";
        error.textContent = "";
    }
}

btn.addEventListener("click", checkPassword)

// const isValid = (e) => {
//     if (!e.target.validity.valid) {
//         (e.target.style["outline"] = "1px solid red");
//         return false
//     } 
//     e.target.validity.valid && (e.target.style["outline"] = "1px solid green");
// }

// fname.addEventListener("blur", (e) => {
//     isValid(e) == false && fname.setCustomValidity("Please enter a valid first name");
// });
