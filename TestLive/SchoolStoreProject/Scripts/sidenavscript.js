var yesorno = 0;

//Function used to make the sidenav slide out
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