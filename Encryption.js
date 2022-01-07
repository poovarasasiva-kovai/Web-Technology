function encryptData()
{
    var text = document.getElementById("input").value;
    var res = "";

    for(var i=0;i<text.length;i++)
    {
        res += String.fromCharCode(text.charCodeAt(i) + 3);
    }

    
    document.getElementById("result").innerHTML = res;

}