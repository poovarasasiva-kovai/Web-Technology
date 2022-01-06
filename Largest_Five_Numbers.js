function submit()
{
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var num3 = Number(document.getElementById("number3").value);
    var num4 = Number(document.getElementById("number4").value);
    var num5 = Number(document.getElementById("number5").value);
    var res = "";
    if(num1>num2 && num1>num3&& num1>num4 && num1>num5)
    {
        res = num1;
    }
    else if(num2>num1 && num2>num3&& num2>num4 && num2>num5)
    {
        res = num2;
    }
    else if(num3>num1 && num3>num2&& num3>num4 && num3>num5)
    {
        res = num3;
    }
    else if(num4>num1 && num4>num2&& num4>num3 && num4>num5)
    {
        res = num4;
    }
    else
    {
        res = num5;
    }

    document.getElementById("result").innerHTML = res;

}