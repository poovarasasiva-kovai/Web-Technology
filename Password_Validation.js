function Register()
{
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    if(password == repassword)
    {
        var regexs = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        if(!regexs.test(repassword)) 
        { 
            res = "password must contain at least eight character, include uppercase, lowercase letter, numbers and special characters";
            document.getElementById("result").classList.add("red");
        }
        else
        {
            res = "Password Successfull";
            document.getElementById("result").classList.add("green");
        }
    }
    else
    {
        res = "Password does not match";
        document.getElementById("result").classList.add("red");
    }
    document.getElementById("result").innerHTML = res;

}