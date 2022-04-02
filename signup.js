const submit = () =>{
    console.log("hi")
    // event.preventDefault();
    const email = document.getElementById("email").value.toLowerCase();
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    if(password1!== password2){
        window.alert("password mismatch")
        return "done"
    }
    localStorage.setItem("email", email)
    localStorage.setItem('password', password1)
    window.location.href = "login.html"

}