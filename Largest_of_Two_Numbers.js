function submit()
{
    var num1 =Number(document.getElementById("number1").value);
    var num2 =Number(document.getElementById("number2").value);
    var res = "";
    if(num1 == num2)
    {
        res = "The values "+num1+" and "+num2+" are equal.";
    }
    else if(num1 > num2)
    {
        res = "The larger of "+num1+" and "+num2+" is "+num1;

    }
    else
    {
        res = "The larger of "+num1+" and "+num2+" is "+num2;
    }
    document.getElementById("result").innerHTML = res;
}