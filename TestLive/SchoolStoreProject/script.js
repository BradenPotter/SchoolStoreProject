var dog = 0;
var Counter;
var cat = "hello";
document.getElementById("demo").innerHTML = dog;


function myFunction(apple, carrot) {
    if (apple === 'up') {
      dog++;
    } else if (dog !== 0) {
    dog--;
    }
    document.getElementById(carrot).innerHTML = dog;
  }

