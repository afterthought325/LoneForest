function check(input, where)
{
    if (input.value != document.getElementById(where).value)
    {
        input.setCustomValidity('Password Must be Matching.');
    }
    else
    {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}
function clearCookies()
{
  eraseCookie("login");
  eraseCookie("reloaded");
  eraseCookie("logged_in");
  eraseCookie("pwd_changed");
  eraseCookie("account_created");
}

$(document).ready(function(){

var reloaded = getCookie("reloaded");
if (reloaded == "true")
{
  try
  {
   var login = getCookie("login");
   var logged_in = getCookie("logged_in");
   var pwd_changed = getCookie("pwd_changed");
   var sq_check = getSessionVar("sq_check", "getSessionVariables.php");
   console.log(sq_check);
   if (logged_in == "true" && login == "true")
   {
      swal(
      {
         title: 'Success!',
         text: 'You have logged in.',
         type: 'success',
         showCancelButton: false,
         confirmButtonColor: '#3085d6',
         confirmButtonText: 'Lets play!'
      }).then(function ()
      {
        clearCookies();
        window.location.reload(false);
      })
   }
   else if ((login == "true") && !(sq_check == 1))
   {
     throw 'Those are the wrong credentials.';
   }
   if (sq_check == 1)
   {
     swal(
       {
         title: 'Please enter your new password',
         html: ''+
         '<form method="post" action="changePassword.php">'+
         'Password:<input class="swal2-input" type="password" placeholder="password" name="newpwd" id="password" required/>'+
         'Re-Type Password:<input class="swal2-input" type="password" placeholder="password" name="password_confirm" oninput="check(this, "password")" required/>'+
         '<button type="submit" class="confirm-button">Reset</button>'+
         '</form>',
         showCancelButton: false,
         showConfirmButton: false,
         onOpen: function ()
         {
           $('#password').focus()
         }
       })
   }
   if (pwd_changed == "true")
   {
     clearCookies();
     swal(
       'Success!',
       'Your password has been changed!',
       'success'
     )
   }
   var account_created = getCookie("account_created");
   var register = getCookie("register");
   if (account_created == "true" && register == "true")
   {
     swal(
     {
       title: 'Success!',
       text: 'Your account is now active!',
       type: 'success',
       showCancelButton: false,
       confirmButtonColor: '#3085d6',
       confirmButtonText: 'Let me log in!'
     }).then(function ()
     {
       clearCookies();
       window.location.reload(false);
     })
   }
   else if (register == "true")
   {
     var username_in_use = getCookie("username_in_use");
     if (username_in_use == "true")
     {
       throw "That username is taken! Please try another.";
     }
     else
     {
       throw "Something went wrong with creating your account. Please try again.";
     }
   }
  }
  catch(err)
  {
   clearCookies();
   swal(
     {
       title:'Sorry!',
       text: err,
       type: 'error'
     }).then(function()
     {
       window.location.reload(false);
     })
  }
}


$('#login').on('click', function ()
{
  swal(
  {
    title: 'Login',
    html:
      '<form method="post" action="login/testLogin/">'+
        'Username:<input id="swal-input1" class="swal2-input" type="text" placeholder="username" name="username" required/>'+
        'Password:<input id="swal-input2" class="swal2-input" type="password" placeholder="password" name="password" required/>'+
        '<button type="submit" class="confirm-button">Login</button>'+
      '</form>',
    showConfirmButton: false,
    showCancelButton: false,
    allowOutsideClick: true,
    onOpen: function ()
    {
      $('#swal-input1').focus()
    }
}).catch(swal.noop)
});

$('#register').on('click', function ()
{
  swal(
  {
    title: 'Register for an account',
    html:
    '<form method="post" action="login/testRegister/" class="register-form">' +
      'First Name:<input type="text" id="swal-input1" class="swal2-input" placeholder="first name" name="firstname" required/>' +
      'Last Name:<input type="text" id="swal-input2" class="swal2-input" placeholder="last name" name="surname" required/>' +
      'Username:<input type="text" id="swal-input3" class="swal2-input" placeholder="username" name="username" required/>' +
      'Password<input type="password" id="swal-input4" class="swal2-input" placeholder="password" name="password" required/>' +
      'Re-type Password:<input type="password" id="swal-input5" class="swal2-input" placeholder="password" name="passwordconfirm" oninput="check(this, "swal-input4")" required/>' +
      'What is your mother\'s maiden name?<input type="text" id="swal-input6" class="swal2-input" placeholder="Security Question 1" name="security1" required/>' +
      'What street did you grow up on?<input type="text" id="swal-input7" class="swal2-input" placeholder="Security Question 2" name="security2" required/>' +
      '<button type="submit" class="confirm-button">Register</button>' +
    '</form>',
    showConfirmButton: false,
    showCancelButton: false,
    allowOutsideClick: true,
    preConfirm: function ()
    {
      return new Promise(function (resolve)
      {
        resolve([
          $('#swal-input1').val(),
          $('#swal-input2').val(),
          $('#swal-input3').val(),
          $('#swal-input4').val(),
          $('#swal-input5').val(),
          $('#swal-input6').val(),
            $('#swal-input7').val()
        ])
      })
    },
    onOpen: function ()
    {
      $('#swal-input1').focus()
    }
  }).catch(swal.noop)
});

$('#about').on('click', function () {
  swal(
  {
    title: 'Hello!',
    text: 'Lone Forest is a text-based adventure game where you must find your way through the forest, created by DCSP Group A. Log in or Register an account to begin playing.',
    type: 'info',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Cool'
  })
});

$('#reset').on('click', function () {
  swal(
  {
    title: 'Confirm your identity',
    html: ''+
    '<form method="post" action="checkSecurity.php">'+
      'Username:<input id="swal-input1" class="swal2-input" type="text"name="username" required/>'+
      'What is your mother\'s maiden name?<input id="swal-input2" class="swal2-input" type="text" placeholder="Security Question 1" name="security1" required/>'+
      'What street did you grow up on?<input id="swal-input3" class="swal2-input" type="text" placeholder="Security Question 1" name="security2" required/>'+
      '<button type="submit" class="confirm-button">Continue</button>'+
    '</form>',
    showConfirmButton: false,
    showCancelButton: false,
    onOpen: function ()
    {
      $('#swal-input1').focus()
    }
  }).then(function ()
{
  window.location.reload(false);
})
})
});
