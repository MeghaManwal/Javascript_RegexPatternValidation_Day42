//UC-1 To Validate 6 digit Pincode
function validatePincodewithpattern1(pincode) {
   var pattern1 = RegExp('^[1-9]{1}[0-9]{5}$');
   if(pattern1.test(pincode)){
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

//UC-2 To restict alphabets at the beginning
function validatePincodewithpattern2(pincode) {
   var pattern2 = RegExp('^[a-z A-Z!@#$%^&*]{1}[0-9]{5}$');
   if(pattern2.test(pincode)){
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