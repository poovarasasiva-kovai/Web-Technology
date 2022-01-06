function submit()
{
    var birthday = Number(document.getElementById("birthday").value);
    var engagement = Number(document.getElementById("engagement").value);
    var corporate = Number(document.getElementById("corporate").value);
    var social = Number(document.getElementById("social").value);
    var max=Math.max(birthday,engagement,corporate,social);
    var temp = "";
    if(max == birthday)
    {
        temp = temp + "Birthday Party event ";
    }
    if(max == engagement)
    {
        temp = temp +"Engagement Party event ";
    }
    if(max == corporate)
    {
        temp = temp +"Corporate event ";
    }
    if(max == social)
    {
        temp = temp+"Social gathering event ";
    }
    document.getElementById("result").innerHTML = "Maximum number of event occurred in this month is " +temp;
}