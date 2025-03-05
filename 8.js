
 
let form = document.querySelector("form");

let fname = document.querySelector("#fname");
let fnameRegex = /^[A-Z]\w{2,}$/; 

let lname = document.querySelector("#lname");
let lnameRegex = /^[A-Z]\w{2,}$/; 

let Mail = document.querySelector("#mail");
let mailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 

let phoneNum = document.querySelector("#phoneNum");
let phoneNumRegex = /^(01)[0-9]{9}$/;

let bd = document.querySelector("#bd");
let bdRegex = /^\d{4}\/\d{2}\/\d{2}$/; 

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

  
    let validfname = fnameRegex.test(fname.value);
    let validlname = lnameRegex.test(lname.value);
    let validmail = mailRegex.test(Mail.value);
    let validphoneNum = phoneNumRegex.test(phoneNum.value);
    let validbd = bdRegex.test(bd.value);

  
    if (validfname && validlname && validmail && validphoneNum && validbd) {
        alert("Submitted");
    } else {
        alert("Unsubmitted: Please check your input.");
    }
});





