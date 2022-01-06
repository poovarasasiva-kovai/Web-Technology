function Validate()
{
    var bride = Number(document.getElementById("brideAge").value);
    var groom = Number(document.getElementById("groomAge").value);
    if(bride >= 18 && groom >=21 )
    {
        document.getElementById("result").innerHTML = "Valid Marriage";
    }
    else
    {
        document.getElementById("result").innerHTML = "InValid Marriage";
    }
}