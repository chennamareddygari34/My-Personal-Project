const submit = () =>{
    const email = document.getElementById("email").value.toLowerCase();
    const password = document.getElementById("password").value;
    if( email === localStorage.getItem("email") && password === localStorage.getItem("password")){
        window.location.href = "home.html"
    }
    else{
        alert("id or password wrong")
    }
}