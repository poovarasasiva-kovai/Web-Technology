var array = [];
function push()
{
    var input = document.getElementById("array").value;
    array.push(input);
    document.getElementById("status").innerHTML = "Data added Successfully!";
    document.getElementById("array").value="";
    document.getElementById("result").innerHTML = "";
    document.getElementById("status").style.color="#008736";
}
function pop()
{
    array.pop();
    document.getElementById("status").innerHTML = "Data removed Successfully!";
    document.getElementById("status").style.color="#008736";
    document.getElementById("result").innerHTML = "";
}


function display()
{
    document.getElementById("result").innerHTML = "";
    var res = "<ul>";
    array.forEach(element => {
        res += "<li>"+element+"</li>";
    });
    res += "</ul>"
    document.getElementById("result").innerHTML = res;
}