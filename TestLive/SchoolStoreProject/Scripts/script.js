var Count = 0;
var Counter;
var CurrentCount;
var ProductLogged;
var Para;
var Price;
var Replace; 
var Cost;

function myFunction(CounterDirection, SelectedCounter) {
    console.log("hello");
    if (CounterDirection === 'up') {
      Count = document.getElementById(SelectedCounter).innerHTML
      Count++;
    } else if (Count !== 0) {
      Count = document.getElementById(SelectedCounter).innerHTML
    Count--;
    }
    document.getElementById(SelectedCounter).innerHTML = Count;
  }

  function changePage(page) {
    location.href= page;
  }
  function BtnFunction(Product, SelectedCounter, CurrentPrice) {
    CurrentCount = document.getElementById(SelectedCounter).innerHTML;
    console.log(CurrentCount)
    if (CurrentCount != 0) {
      Para = document.createElement("p");
      Price = document.getElementById(CurrentPrice).innerHTML
      Replace = Price.replace("$", "");
      console.log(Replace);
      Cost = Replace*CurrentCount;
      Para.innerText = CurrentCount + " " + Product + ": "  + Cost ;
      document.getElementById("TestWords").appendChild(Para);

    }
  }



