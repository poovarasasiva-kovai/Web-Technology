function submit()
{
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var num3 = Number(document.getElementById("number3").value);
    var res = "";
    if(num1<0 && num2 > 0 && num3 <0)
    {
        res="The Sign is -";
    }
    else
    {
        res="The Sign is +";
    }
    document.getElementById("result").innerHTML = res;
}