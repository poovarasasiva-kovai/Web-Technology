var array=[];
function AddEvent()
{
    var name = document.getElementById("name").value;
    var venue = document.getElementById("venue").value;
    var date = document.getElementById("date").value;
    var cost = Number(document.getElementById("cost").value);
//    var arr = [name,venue,date,cost];
    array.push({name,venue,date,cost});
    document.getElementById("name").value = " ";
    document.getElementById("venue").value = " ";
    document.getElementById("date").value = " ";
    document.getElementById("cost").value = " ";
}
function DisplayEvent()
{
    var res="<table border=1><tr><th>Event Name</th><th>Event Venue</th><th>Event Date</th><th>Event Cost</th></tr>";
    array.forEach((element) => {
        res += "<tr><td>"+element.name+"</td><td>"+element.venue+"</td><td>"+element.date+"</td><td>"+element.cost+"</td></tr>";
    });
    res +="</table>"
    document.getElementById("table").innerHTML = res;
}
function SortEvent()
{
    array.sort( compare );
    DisplayEvent();
}
function compare( a, b ) {
    if ( a.cost < b.cost ){
      return -1;
    }
    if ( a.cost > b.cost ){
      return 1;
    }
    return 0;
  }
  
  