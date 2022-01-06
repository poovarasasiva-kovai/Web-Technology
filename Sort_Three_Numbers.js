function submit()
{
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var num3 = Number(document.getElementById("number3").value);
    var res = "";
    if(num1>num2 && num1 > 3)
    {
        if(y>z)
        {
            res = num1 +" "+num2+" "+num3;
        }
        else
        {
            res = num1 +" "+num3+" "+num2;
        }
    }
    else if(num2 > num1 && num2 > num3)
    {
        if(num1 > num3)
        {
            res = num2 +" "+num1+" "+num3;
        }
        else
        {
            res = num2 +" "+num3+" "+num1;
        }
    }
    else if(num3 > num1 && num3 > num2)
    {
        if(num1 > num3)
        {
            res = num3 +" "+num1+" "+num2;
        }
        else
        {
            res = num3 +" "+num2+" "+num1;
        }
    }
    else
    {
        res = num1 +" "+num2+" "+num3;
    }

    document.getElementById("result").innerHTML = res;

}