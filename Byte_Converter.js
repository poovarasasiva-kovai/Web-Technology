function convertByte()
{
    var text = document.getElementById("input").value;
    var res = "";

    for(var i=0;i<text.length;i++)
    {
        res += text.charCodeAt(i);
    }

    document.getElementById("result").innerHTML = res;

}