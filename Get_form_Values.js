function getFormValue()
{
    var x= document.getElementById("form1");
    var i=0;
    var res = "";
    while(i<x.length)
    {
        if(x.elements[i].value!='Submit')
        {
            res += x.elements[i].value + "<br>";
        }
        i++;
    }
    document.getElementById("result").innerHTML=res;
}