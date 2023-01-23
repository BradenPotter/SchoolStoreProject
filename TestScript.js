var Dr 
var Test = document.getElementById("TestElement");
const allStudentsAge = [];
var CharDiv
var element
var para


function myFunction(TargetItem, CounterSelection) {
    element =  document.getElementById(TargetItem);
if (typeof(element) != 'undefined' && element != null)
{
  // Exists.

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

console.log(counter); // 3
element.innerText = counter ;

} else {
    element =  document.getElementById(TargetItem);
    para = document.createElement("p");
    para.setAttribute('id', TargetItem);
    console.log(para);
    document.body.appendChild(para);


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

para.innerText = counter ;

}


  }
function TestFunction() {
    const AllAnimals = ['Cat', 'Dog', 'Parrot'];
    console.log(AllAnimals);
    let though = 'Parrot';
  for (Animals of AllAnimals) {
    if (Animals == though) {
        var remove = (AllAnimals.indexOf(Animals));
        AllAnimals.splice(remove, 1);
        console.log(AllAnimals);
      }
  
  };

}




