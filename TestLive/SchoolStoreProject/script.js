var dog = 0;
var Counter;
var cat = "hello";
var yesorno = 0;
document.getElementById("demo").innerHTML = dog;


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

  function changePage(page) {
    location.href= page;
  }

  function changeNav() {
    if (yesorno === 1) {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("contentContainer").style.marginRight = "0px";
    document.getElementById("header").style.marginRight = "0px";
    document.getElementById("footer").style.marginRight = "0px";
    yesorno = 0;
    } else {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("contentContainer").style.marginRight = "250px";
    document.getElementById("header").style.marginRight = "250px";
    document.getElementById("footer").style.marginRight = "250px";
    yesorno = 1;
    }
  }