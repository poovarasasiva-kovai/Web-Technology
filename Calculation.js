function Calculation()
{
    var res= document.getElementById("number").value;
    var half    = res/2;
    var squared = half * 2;
    var area    = Math.PI * squared;
    var result  = percentOf(squared, area);
    document.getElementById("result").innerHTML= result;
}
function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    return percent;
}