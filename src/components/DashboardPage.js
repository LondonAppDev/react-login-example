<!DOCTYPE html>
<html>
<body>

<div id="id01"></div>
<script>
var myArray = [
  {user:[{
"id":1,
"name":"test1",
"age" : "11",
"gender":"male",
"email" : "test1@gmail.com",
"phoneNo" : "9415346313"
},
{
"id" : 2,
"name":"test2",
"age" : "12",
"gender":"male",
"email" : "test2@gmail.com",
"phoneNo" : "9415346314"
},
{
"id":3,
"name":"test3",

"age" : "13",
"gender":"male",
"email" : "test3@gmail.com",
"phoneNo" : "9415346315"
},
{
"id":4,
"name":"test4",
"age" : "14",
"gender":"male",
"email" : "test4@gmail.com",
"phoneNo" : "9415346316"
},
{
"id":5,
"name":"test5",
"age" : "15",
"gender":"male",
"email" : "test5@gmail.com",
"phoneNo" : "9415346317"
},
{
"id":6,
"name":"test6",
"age" : "16",
"gender":"male",
"email" : "test6@gmail.com",
"phoneNo" : "9415346318"
}
]
}
myFunction(myArray);

function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<a href="' + arr[i].name + '">' + 
    arr[i].age + arr[i].gender + arr[i].email + arr[i].phoneNo '</a><br>';
  }
  document.getElementById("id01").innerHTML = out;
}
</script>

</body>
</html>
