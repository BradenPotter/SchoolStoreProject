//variables
var dog = 0;
var Counter;
var cat = "hello";
//document.getElementById("demo").innerHTML = dog;

//I dunno honestly, @MicSpinks needs to fix this comment
function myFunction(apple, carrot) {
    console.log("hello"); 
    if (apple === 'up') {
      dog = document.getElementById(carrot).innerHTML
      dog++;
    } else if (dog !== 0) {
      dog = document.getElementById(carrot).innerHTML
    dog--;
    }
    document.getElementById(carrot).innerHTML = dog;
  }

  //Change page function
  function changePage(page) {
    location.href= page;
  }