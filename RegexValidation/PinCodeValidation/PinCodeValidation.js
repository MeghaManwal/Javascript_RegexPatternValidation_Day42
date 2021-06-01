
function validatePincode(pincode) {
   var regex = RegExp('^[1-9]{1}[0-9]{5}$');
   if(regex.test(pincode)){
      console.log("Valid PinCode!");
      return true;
   }
   else {
      console.log("Invalid PinCode!");
      return false;
   }
}

let pincode = '400088';
validatePincode(pincode); 