function goBack() {
      window.history.back();
}
function updateTheme(theme) {
  var now = new Date();
  var time = now.getTime();
  var expireTime = time + 1000*360000;
  now.setTime(expireTime);
  var tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
  document.getElementById("ourTheme").href ="https://www.w3schools.com/lib/w3-theme-"+theme+".css";
  document.cookie = 'theme='+theme+';expires='+now.toGMTString()+';path=/';
}
function check(input)
{
  if (input.value != document.getElementById('password').value)
  {
    input.setCustomValidity('Password Must be Matching.');
  }
  else
  {
    // input is valid -- reset the error message
    input.setCustomValidity('');
  }
}

$(document).ready(function(){

var reloaded = getCookie("reloaded");
if (reloaded == "true")
{
  try
  {
   var login = getCookie("login");
   var logged_in = getSessionVar("pwd_check");
   var is_sure = getCookie("is_sure");
   var pwd_changed = getCookie("pwd_changed");
   if (logged_in == true && login == "true")
   {
      swal(
      {
         title: 'Are you sure?',
         text: 'This will be permanent.',
         type: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         confirmButtonText: 'I\'m 100% sure!',
         cancelButtonText: 'Nevermind...'
      }).then(function ()
      {
        eraseCookie("login");
        createCookie("reloaded", "true", 0.025);
        createCookie("is_sure", "true", 0.025);
        window.location.reload(false);
      })
   }
   else if (login == "true")
   {
     throw 'Those are the wrong credentials.';
   }
   else if (reloaded == "true" && is_sure == "true")
   {
     var change_password = getCookie("change_password");
     if (change_password == "true")
     {
       swal(
         {
           title: 'Please enter your new password',
           html: ''+
           '<form method="post" action="changePassword.php">'+
           'Password:<input class="swal2-input" type="password" placeholder="password" name="newpwd" id="password" required/>'+
           'Re-Type Password:<input class="swal2-input" type="password" placeholder="password" name="password_confirm" oninput="check(this)" required/>'+
           '<button type="submit" class="confirm-button">Reset</button>'+
           '</form>',
           showCancelButton: false,
           showConfirmButton: false,
           confirmButtonColor: '#3085d6',
           confirmButtonText: 'I\'m 100% sure!',
           cancelButtonText: 'Nevermind...',
           onOpen: function ()
           {
             $('#password').focus()
           }
         })
     }
   }
   else if (pwd_changed == "true")
   {
     swal(
       'Success!',
       'Your password has been changed!',
       'success'
     )
   }
  }
  catch(err)
  {
   eraseCookie("login");
   eraseCookie("reloaded");
   eraseCookie("is_sure");
   eraseCookie("pwd_changed");
   eraseCookie("restart_progress");
   eraseCookie("delete_account");
   eraseCookie("change_password");
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

$('#restart-progress').on('click', function ()
{
  swal(
  {
    title: 'Hold up!',
    text: 'Enter your password, bub.',
    type: 'warning',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok'
  })
})

$('#delete-account').on('click', function ()
{
  swal(
  {
    title: 'Hold up!',
    text: 'Enter your password, bub.',
    type: 'warning',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok'
  })
})

$('#change-password').on('click', function ()
{
  swal(
  {
    title: 'Please Confirm Your Password',
    html:
      '<form method="post" action="checkLogin.php">'+
        'Username:<input id="swal-input1" class="swal2-input" type="text" value="'+
        getSessionVar("username")+
        '" name="username" readonly/>'+
        'Password:<input id="swal-input2" class="swal2-input" type="password" placeholder="password" name="password" required/>'+
        '<button type="submit" class="confirm-button">Continue</button>'+
      '</form>',
    showConfirmButton: false,
    showCancelButton: false,
    allowOutsideClick: true,
    onOpen: function ()
    {
      $('#swal-input2').focus()
      createCookie("change_password", "true", 1);
    }
}).catch(swal.noop)
})

});
