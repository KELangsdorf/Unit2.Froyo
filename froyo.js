//The Prompt
const userInputString = prompt(
    "Please enter any of the following flavors separated by commas.",
    "vanilla,strawberry,coffee"
    );
//This split divides the string by the comma(Flavors Input)
  const flavor = userInputString.split(",");
  //orders and flavors
  const froyo = {}
//this is going to count the occurences of the flavors input
  for (let i =0; i< flavor.length; i++){
    let currentFlavor = flavor[i]
    if (currentFlavor in froyo){
      froyo[currentFlavor] += 1
    } else {
      froyo[currentFlavor] = 1
    }
  }
  console.table(froyo)

  

