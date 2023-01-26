//variables
var Count = 0;
var Counter;
var CurrentCount;
var ProductLogged;
var Para;
var Price;
var Replace; 
var Cost;
var ProductPrice;
var ProductPriceReplace;
var ProductPriceInt;
var elem;
var ProductDiv;
var Dr ;
const allStudentsAge = [];
var CharDiv;
var element;
var para;
var newCost;
var Test;
var currentBoxSizing;
var testCounter = 0;

//I dunno honestly, @MicSpinks needs to fix this comment
/*function myFunction(CounterDirection, SelectedCounter) {
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

  //Change page function
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
      Para.style.color = "white";
      document.getElementById("mySidenav").appendChild(Para);

    } 
  }
*/

//Change page function
function changePage(page) {
  location.href= page;
}

function myFunction(TargetItem, CounterSelection, CurrentPrice) {

  element =  document.getElementById(TargetItem);
if (typeof(element) != 'undefined' && element != null) {
//This if statement checks to see if an element has already been created for the
//product being added to the order

Dr = document.getElementById(CounterSelection).innerHTML;
allStudentsAge.push(Dr);
console.log(allStudentsAge);
let target = TargetItem;

let counter = 0;
for (studentAge of allStudentsAge) {
if (studentAge == target) {
    counter++;
}

};

ProductPrice = document.getElementById(CurrentPrice).innerHTML;
ProductPriceReplace = ProductPrice.replace("$", "");
ProductPriceInt = parseFloat(ProductPriceReplace);
Price = document.getElementById(TargetItem+"Price").innerHTML;
Replace = Price.replace("$", "");
Test = parseFloat(Replace);
Cost = Math.round((Test + ProductPriceInt + Number.EPSILON) * 100) / 100;
console.log(Cost);
newCost = document.getElementById(TargetItem+"Price");
newCost.innerText = "$" + Cost;

console.log(counter); // 3
element.innerText = TargetItem +" " + counter ;

} else {
  ProductDiv = document.createElement("div");
  ProductDiv.setAttribute("class", TargetItem+"Div");
  ProductDiv.setAttribute("class", "Productcontainer");
  ProductDiv.setAttribute("id", TargetItem+"Div");
  console.log(ProductDiv);
  document.getElementById("mySidenav").appendChild(ProductDiv);
    // Makes the product div
  element =  document.getElementById(TargetItem);
  para = document.createElement("p");
  para.setAttribute('id', TargetItem);
  para.setAttribute('class', "Product" );
  console.log(para);
  para.style.color = "rgb(235, 235, 235)";
  document.getElementById(TargetItem+"Div").appendChild(para);
  //Makes the product item
  newCost = document.createElement("p");
  newCost.setAttribute('id', TargetItem+"Price");
  newCost.setAttribute('class', "Price");
  newCost.style.color = "rgb(235, 235, 235)";
  document.getElementById(TargetItem+"Div").appendChild(newCost);
  Price = document.getElementById(CurrentPrice).innerHTML;
  //Makes the product price
//This beginning section for the else statement is creating a new div
//with an id of the new item that is being added too the order

  Dr = document.getElementById(CounterSelection).innerHTML;
  allStudentsAge.push(Dr);
  //Push is adding a new element to the array of the item being added too the order
  console.log(allStudentsAge);

  let target = TargetItem;

let counter = 0;
for (studentAge of allStudentsAge) {
if (studentAge == target) {
      counter++;
  }

};
//This for loops goes through and count how many instances there are in th array
//of the desired item

para.innerText = TargetItem +" " +counter ;
newCost.innerText = Price ;
//Updates the counter

}
}


var DeletionCheck = false;
var Item 
var Num
function SubFunction(Product, CurrentPrice){
  var help = document.getElementById(Product);
  if(typeof(help) != 'undefined' && help != null) {
    var check = document.getElementById(Product).innerHTML;
    Replace = check.replace(Product, "");
    if(Replace !==0) {
      //All of the code above for this function checks too make sure there is still elements too subtract
  for (studentAge of allStudentsAge) {
    //This for statement runs through all of the elements in the for statement
      if (studentAge == Product && DeletionCheck == false) {
        //The first parameter of this if statement "studentAge == Product" makes sure that the current array element
        //matches the desired product and the second parameter checks too make sure an element has not already
        //been deleted
        var remove = (allStudentsAge.indexOf(studentAge));
        //var remove gets the index of the desired element too deleted
        allStudentsAge.splice(remove, 1);
        //splice then takes the index of the desired item and removes it, the one means deleted only the item
        //found at the remove index
        console.log(allStudentsAge);
        Item = document.getElementById(Product).innerHTML
        //The item variable here is grabbing the current text inside the desired product element 
        //already created
        Replace = Item.replace(Product, "");
        //Inside the variable "Item" is both the name of the product and how many there is in the order
        //so the replace element is removing the product name and leaving only the number of items
        Num = Replace-1
        //Variable Num is doing the subtract portion of this and taking one off of the number of
        //requested items in the order
        console.log(Num);
        help.innerHTML = Product+" " + Num
        //Changes the product number in the order too the new number
        ProductPrice = document.getElementById(CurrentPrice).innerHTML;
        ProductPriceReplace = ProductPrice.replace("$", "");
        ProductPriceInt = parseFloat(ProductPriceReplace);
        Price = document.getElementById(Product+"Price").innerHTML;
        Replace = Price.replace("$", "");
        Test = parseFloat(Replace);
        Cost = Math.round((Test - ProductPriceInt + Number.EPSILON) * 100) / 100;
        newCost = document.getElementById(Product+"Price");
        newCost.innerText = "$" + Cost;
        if(Cost == 0) {
          elem = document.getElementById(Product+"Price");
          elem.remove();
         }
        DeletionCheck = true;
        //Making Deletion Check true here avoids any further variables from being deleted
        //after one is found that matches the desired item too be deleted
        if(Num == 0) {
           elem = document.getElementById(Product);
elem.remove();
  }
  //After removing one from the counter, this if statment checks to see if the count is at zero
  //and if it is, it deletes the element
    } 
  }
  DeletionCheck = false;
  //Setting deletion check back to false here allows the deletion buttons too be used again
  }
}else {
  console.log("ERROR");
}


  }
