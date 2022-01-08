function merge()
{
    var arr1=["Award Ceremony","8/2/2018","Auditorium"];
    var arr2=["Corporate Events","10/2/2018","KVM Hotel"];
    var arr3=["Birthday Parties","20/2/2018","HR PAlace"];
    var arr4=["Product Launches","21/2/2018","Lemeridian Hotel"];
    var arr5=["Webminar","5/6/2018","Auditorium"];
    var arr6=["Marriage","22/7/2018","K V MAhal"];
    var array = [new Set([ arr1,arr2,arr3,arr4,arr5,arr6])];
    var res="<table border=1><tr><th>Event Name</th><th>Date</th><th>Venue</th></tr>";
    array[0].forEach((element) => {
        res += "<tr><td>"+element[0]+"</td><td>"+element[1]+"</td><td>"+element[2]+"</td></tr>";
    });
    res +="</table>"
    document.getElementById("table").innerHTML = res;
}