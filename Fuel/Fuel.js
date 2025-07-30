const amt = document.getElementById("Amount");
const price= document.getElementById("price");
const result= document.getElementById("fuel");
const form = document.getElementById("formm");


const kmph= document.getElementById("kmph");
const fuel= document.getElementById("fuel");
const mileagee= document.getElementById("mileage");

function reset(){

      document.getElementById("forrmm").reset();
  //document.getElementById("fuel").value = ""; // clear result manually if needed
}

function calculateFuel(){
     event.preventDefault();
  const Amount= parseFloat(amt.value);
  const rate= parseFloat(price.value);


   if (!isNaN(Amount) && !isNaN(rate) && rate > 0) {
     const fu= Amount/rate;
    console.log(fu);
    
    let i=0.0;
    result.value="";

    // Clear previous interval if any
    if (window.fuelInterval) clearInterval(window.fuelInterval);

    window.fuelInterval = setInterval(() => {
      result.value = i.toFixed(2); // gradually updating

      if (i >= fu) {
        result.value = fu.toFixed(2); // make sure it's exact
        clearInterval(window.fuelInterval);
      }

      i += 0.1; // increase step-by-step
    }, 100); // speed (100ms = fast animation)
    
   }else {
    result.value = "Invalid input";
  }
}


function Mileagee(){
event.preventDefault();

  const km= parseFloat(kmph.value);
  const fuell= parseFloat(fuel.value);

  let res=km/fuell;
    console.log(res);
    
    mileagee.value = res.toFixed(2); // update mileage field
    

}