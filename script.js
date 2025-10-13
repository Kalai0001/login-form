function login(){
    var x=document.getElementById("username").value;
    var y=document.getElementById("password").value;
    if(x == "admin" && y == "1234")
    {
        alert("Login successfully!");
    }
    else
    {
        alert("Invalid credentials");
    }
}