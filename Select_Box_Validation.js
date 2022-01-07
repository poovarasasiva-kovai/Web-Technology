function validate()
{
    var val = document.getElementById("value").value;
    if( val !== "Select")
    {
        document.getElementById("result").innerHTML = "Selected value is "+  val;
        document.getElementById("result").classList.add("green");
    }
    else{
        document.getElementById("result").innerHTML = "No value Seelcted";
        document.getElementById("result").classList.add("red");
    }
}