var dog = 0;
var Counter;
var cat = "hello";


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

