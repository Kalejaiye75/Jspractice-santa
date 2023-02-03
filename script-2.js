function footerNote() {
    const footerNote = document.getElementById("footer");
    // footerNote.textContent = ""
    footerNote.textContent = `CopyWrite ${new Date().getFullYear()} @gani`;
}
footerNote();
const titleField = () => {
    let title = document.getElementById('login-field');
title.innerHTML = "Login";
};
titleField();

let loginForm = document.getElementById("login")
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("You are now logged in")
        let email = document.getElementById("emaill");
        let passWord = document.getElementById("password");
        
        if (email.value == "" || passWord.value == "") {
           alert("Please Input your login details"); 
        } else {
            alert("You are now logged in");
            console.log(`This user's login details is ${email.value} and ${passWord.value}`)
        }
        
    }); 