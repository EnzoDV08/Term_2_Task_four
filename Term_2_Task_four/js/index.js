let vehicleInventory = [];

function validateForm(event) {
  event.preventDefault();

  let vehicle = document.getElementById("vehicle").value;
  let make = document.getElementById("make").value;
  let model = document.getElementById("model").value;
  let number = document.getElementById("number").value;
  let condition = document.getElementById("Condition").value;

  if (vehicle === "" + make === "" + model === "" + number === "" + condition === "") {
    alert("Please fill in all the fields.");
    return;
  }

  let vehiclePage = {
    vehicleType: vehicle,
    make: make,
    model: model,
    registrationNumber: number,
    condition: condition
  };

  vehicleInventory.push(vehiclePage);
  console.log(vehicleInventory);

  document.getElementById("vehicle-form").reset();

  let vehicleDetails = `Vehicle Type: ${vehicle}\nMake: ${make}\nModel: ${model}\nRegistration Number: ${number}\nCondition: ${condition}`;
  alert(vehicleDetails);
}
    
    
 