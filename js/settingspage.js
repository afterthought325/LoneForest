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
function clearCookies()
{
  eraseCookie("login");
  eraseCookie("reloaded");
  eraseCookie("is_sure");
  eraseCookie("pwd_changed");
  eraseCookie("delete_account");
  eraseCookie("change_password");
}

$(document).ready(function(){

var reloaded = getCookie("reloaded");
if (reloaded == "true")
{
  try
  {
   var login = getCookie("login");
   var is_sure = getCookie("is_sure");
   var pwd_changed = getCookie("pwd_changed");
   var delete_account = getCookie("delete_account");
   var change_password = getCookie("change_password");
   var logged_in = getSessionVar("pwd_check");
   var account_del = getSessionVar("account_del");
   var restart_progress = getSessionVar("restart_progress");
   if (logged_in == 1 && login == "true")
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
        createCookie("delete_account", "true", 0.025);
        window.location.reload(false);
      })
   }
   else if (login == "true")
   {
     throw 'Those are the wrong credentials.';
   }
   else if (is_sure == "true")
   {
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
     else if (delete_account == "true")
     {
       swal(
         {
           title: 'I am giving you power.',
           text: 'This is your final warning. Your account will be lost forever and you will be logged out.',
           type: 'warning',
           showConfirmButton: true,
           showCancelButton: true,
           confirmButtonText: 'Nuke it.',
           cancelButtonText: 'I was just joking'
         }
       ).then(function() {
         clearCookies();
         httpGet("deleteAccount.php?delete=true", false);
         window.location.reload(false);
       })
     }
     else if (restart_progress == 1)
     {
       clearCookies();
       swal(
         {
           title: 'Done!',
           text: 'Your story progress has been reset.',
           type: 'success',
           showConfirmButton: true,
           showCancelButton: false,
           confirmButtonText: 'Thank you'
         }
       )
     }
   }
   else if (pwd_changed == "true")
   {
     clearCookies();
     swal(
       'Success!',
       'Your password has been changed!',
       'success'
     )
   }
   else if (account_del == 1)
   {
     swal(
       {
         title: 'Success!',
         text: 'Your account has been deleted!',
         type: 'success',
         confirmButtonText: 'Goodbye'
       }
     ).then(function () {
       clearCookies();
       window.location.replace("../logout");
     })
   }
  }
  catch(err)
  {
   swal(
     {
       title:'Sorry!',
       text: err,
       type: 'error'
     }).then(function()
     {
       clearCookies();
       window.location.reload(false);
     })
  }
}

$('#restart-progress').on('click', function ()
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
    createCookie("is_sure", "true", 0.025);
    httpGet("restartProgress.php?restart=true", false);
    window.location.reload(false);
  })
})

$('#delete-account').on('click', function ()
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
    }
}).catch(swal.noop)
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
