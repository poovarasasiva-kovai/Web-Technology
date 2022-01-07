function Convert()
{
    var text = document.getElementById("text").value;
    var res = "";
    var flag = true;
    for(var i=0;i<text.length;i++)
    {
        if(flag)
        {
            res += text[i].toUpperCase() + "<br>";
            flag = false;
        }
        else
        {
            res += text[i].toLowerCase() + "<br>";
        }
        if(text[i]==" ")
        {
            flag = true;
        }
    }

    document.getElementById("result").innerHTML = res;

}