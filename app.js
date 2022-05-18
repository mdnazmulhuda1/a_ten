/**
 *  # Create an email pattern 
 */

 let email = "nazmulhasantamim1@gmail.com";

 let email_pattern = /^[a-z0-9_.]*@[a-z]{2,}\.[a-z]{2,10}$/;

 console.log(email_pattern.test(email));



 

/**
*  Create an UserName Pattern 
*/

 let UserName = "nazmul_huda1";

 let username_pattern = /^[a-z_.(0-10)]*$/ ;

 console.log(username_pattern.test (UserName));





 /**
  *  Create a Bangladeshi phone number Pattern
  */

 let phone_number = "01869418069";

 let number_pattern = /^(\+8801|01|8801)[0-9]{9}$/;

 console.log(number_pattern.test(phone_number));





 /**
  *  Create a password pattern
  */

 let password = "nazmul1@#$%";

 let password_pattern = /^[a-zA-Z0-9 !@#$%^&*()_=<>;]{6,30}$/;

 console.log(password_pattern.test(password));





 /**
  * Create a zip code pattern
  */

 let zip_code = "1700";
 let zip_code_pattern = /^[0-9]{4}$/;
 console.log(zip_code_pattern.test(zip_code));
