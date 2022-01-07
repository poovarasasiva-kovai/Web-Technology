var emailValidate = new RegExp(/^\S+@\S+\.\S+$/);

function validate() {
  var uservalue = document.getElementById('email').value;
  if (emailValidate.test(uservalue)) {
    document.getElementById("result").innerHTML = "Email Id is Valid";
    document.getElementById("result").classList.add('green');
  } else {
    document.getElementById("result").innerHTML = "Invalid Email Id";
    document.getElementById("result").classList.add('red');
    
  }

}