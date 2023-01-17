var dog = 0;
document.getElementById("demo").innerHTML = dog;


function myFunction(apple) {
    if (apple === 'up') {
    dog++;
    } else if (dog !== 0) {
    dog--;
    }
    document.getElementById("demo").innerHTML = dog;
  }