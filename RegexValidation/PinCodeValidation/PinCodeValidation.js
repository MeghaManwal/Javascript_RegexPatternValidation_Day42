
console.log("UC-1");
//UC-1 To Validate 6 digit Pincode
function validatePincodewithpattern1(pincode) {
   var pattern = RegExp('^[1-9]{1}[0-9]{5}$');
   if(pattern.test(pincode)){
      console.log("Valid PinCode!");
      return true;
   }
   else {
      console.log("Invalid PinCode!");
      return false;
   }
}

let pincode1 = '400088';
validatePincodewithpattern1(pincode1);

console.log("UC-2");
//UC-2 To restict alphabets at the beginning
function validatePincodewithpattern2(pincode) {
   var pattern = RegExp('^[a-z A-Z!@#$%^&*]{1}[0-9]{5}$');
   if(pattern.test(pincode)){
      console.log("Valid PinCode!");
      return true;
   }
   else {
      console.log("Invalid PinCode!");
      return false;
   }
} 

let pincode2 = 'A400088';
validatePincodewithpattern2(pincode2);

console.log("UC-3");
//UC-3 To restict alphabets at the End
function validatePincodewithpattern3(pincode) {
   var pattern = RegExp('^[1-9]{1}[0-9]{4}[^a-z A-Z!@#$%^&*]{1}$');
   if(pattern.test(pincode)){
      console.log("Valid PinCode!");
      return true;
   }
   else {
      console.log("Invalid PinCode!");
      return false;
   }
} 

let pincode3 = '400088B';
validatePincodewithpattern3(pincode3);