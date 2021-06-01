console.log("UC-1");
//UC-1 To Validate First mandatory part of Email
function validateEmailwithpattern1(email) {
   var pattern = RegExp('^[A-Z a-z 0-9]{3,}$');
   if(pattern.test(email)){
      console.log("Valid EmailId!");
      return true;
   }
   else {
      console.log("Invalid EmailId!");
      return false;
   }
}

let emailId1 = 'abc';
validateEmailwithpattern1(emailId1);
