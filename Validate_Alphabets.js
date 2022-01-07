function validate()
{
    var text = document.getElementById("text").value;
    var res = "";
    var n;
    for(var i=0;i<text.length;i++)
    {
        n = text.charCodeAt(i);
        if((n >= 65 && n < 91) || (n >= 97 && n < 123))
        {
            res = "Entered Text Contains Alphabet only";
        }
        else
        {
            res = "Entered Text doesn't Contains Alphabet";
            break;
        }

    }

    document.getElementById("result").innerHTML = res;

}