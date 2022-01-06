function generate()
{
    var number = Number(document.getElementById("number").value);
    var temp = "";
    for(var i=1;i<=10;i++)
    {
        temp = temp + "<br>" +i+" * "+ number+ " = "+(i*number);
    }
    document.getElementById("result").innerHTML = temp;
}