var array = [];
function addevent()
{
    var input = document.getElementById("array").value;
    array.push(input);
    document.getElementById("result").innerHTML = "Data added Successfully!";
    document.getElementById("array").value="";
}
function displayevent()
{
    array.sort()
    var res = "<ol type=1>";
    array.forEach(element => {
        res += "<li>"+element+"</li>";
    });
    res += "</ol>"
    document.getElementById("result").innerHTML = res;
}