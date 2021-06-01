console.log("UC-1");
//UC-1 To Validate First mandatory part of Email
function validateEmailwithpattern1(email) {
   var pattern = RegExp('^[A-Z a-z 0-9 .]{3,}$');
   if(pattern.test(email)){
      console.log("Valid EmailId!");
      return true;
   }
   else {
      console.log("Invalid EmailId!");
      return false;
   }
}

let emailId1 = 'abc.xyz';
validateEmailwithpattern1(emailId1);

console.log("UC-2");
//UC-2 To Validate Second mandatory part of Email
function validateEmailwithpattern2(email) {
   var pattern = RegExp('^[A-Z a-z 0-9 .]+@[0-9 a-z A-Z]+$');
   if(pattern.test(email)){
      console.log("Valid EmailId!");
      return true;
   }
   else {
      console.log("Invalid EmailId!");
      return false;
   }
}

let emailId2 = 'abc.xyz@bridgelabz';
validateEmailwithpattern2(emailId2);

console.log("UC-3");
//UC-3 To Validate Third mandatory part of Email
function validateEmailwithpattern3(email) {
   var pattern = RegExp('^[A-Z a-z 0-9 .]+@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}$');
   if(pattern.test(email)){
      console.log("Valid EmailId!");
      return true;
   }
   else {
      console.log("Invalid EmailId!");
      return false;
   }
}

let emailId3 = 'abc.xyz@bridgelabz.co';
validateEmailwithpattern3(emailId3);