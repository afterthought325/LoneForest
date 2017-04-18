$(document).ready(function(){

var reloaded = getCookie("reloaded");
if (reloaded == "true")
{
  try
  {
   var login = getCookie("login");
   var logged_in = getCookie("logged_in");
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
        eraseCookie("logged_in");
        eraseCookie("login");
        eraseCookie("account_created");
        eraseCookie("username_in_use");
        eraseCookie("register");
        eraseCookie("reloaded");
        window.location.reload(false);
      })
   }
   else if (login == "true")
   {
     throw 'Those are the wrong credentials.';
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
       eraseCookie("logged_in");
       eraseCookie("login");
       eraseCookie("account_created");
       eraseCookie("username_in_use");
       eraseCookie("register");
       eraseCookie("reloaded");
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
   eraseCookie("logged_in");
   eraseCookie("login");
   eraseCookie("account_created");
   eraseCookie("username_in_use");
   eraseCookie("register");
   eraseCookie("reloaded");
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
    type: 'question',
    html:
      'Username: <input id="swal-input1" class="swal2-input" placeholder="username">' +
      'Password: <input id="swal-input2" class="swal2-input" placeholder="password" type="password">',
    showCancelButton: true,
    allowOutsideClick: false,
    confirmButtonText: 'Login',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    preConfirm: function ()
    {
      return new Promise(function (resolve)
      {
        resolve([
          $('#swal-input1').val(),
          $('#swal-input2').val()
        ])
      })
    },
    onOpen: function ()
    {
      $('#swal-input1').focus()
    }
  }).then(function (result)
  {
    var values = {'username': result[0], 'password': result[1]};
    var params = "username=" + values.username + "&password=" + values.password;
    var url = "login/testLogin/index.php";
    httpPost(url, params);
    createCookie("reloaded", "true", 0.025);
    createCookie("login", "true", 1);
    window.location.reload(false);
}).catch(swal.noop)
})

$('#register').on('click', function ()
{
  swal(
  {
    title: 'Register for an account',
    type: 'question',
    html:
      'First Name: <input id="swal-input1" class="swal2-input" placeholder="First Name">' +
      'Last Name: <input id="swal-input2" class="swal2-input" placeholder="Last Name">' +
      'Username: <input id="swal-input3" class="swal2-input" placeholder="username">' +
      'Password: <input id="swal-input4" class="swal2-input" placeholder="password" type="password">' +
      'What is your mother\'s maiden name? <input id="swal-input5" class="swal2-input" placeholder="Security Question 1">' +
      'What street did you grow up on? <input id="swal-input6" class="swal2-input" placeholder="Security Question 2">',
    showCancelButton: true,
    allowOutsideClick: false,
    confirmButtonText: 'Register',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
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
          $('#swal-input6').val()
        ])
      })
    },
    onOpen: function ()
    {
      $('#swal-input1').focus()
    }
  }).then(function (result)
  {
    var values = {
      'firstname': result[0],
      'surname': result[1],
      'username': result[2],
      'password': result[3],
      'security1': result[4],
      'security2': result[5]
      };
    var params = "" +
    "firstname=" + values.firstname +
    "&surname=" + values.surname +
    "&username=" + values.username +
    "&password=" + values.password +
    "&security1=" + values.security1 +
    "&security2=" + values.security2;
    var url = "login/testRegister/index.php";
    try
    {
      if ((values.firstname == '') ||
      (values.surname == '') ||
      (values.username == '') ||
      (values.password == '') ||
      (values.security1 == '') ||
      (values.security2 == ''))
      {
        throw "You need to fill out all of the fields.";
      }
      httpPost(url, params);
      createCookie("reloaded", "true", 0.025);
      createCookie("register", "true", 1);
      window.location.reload(false);

    }
    catch(err)
    {
      swal('Sorry!', err, 'error');
    }
  }).catch(swal.noop)
})

$('#about').on('click', function () {
  swal(
  {
    title: 'Hello!',
    text: 'Lone Forest is a text-based adventure game where you must find your way through the forest. Log in or Register an account to begin playing.',
    type: 'info',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Cool'
  })
})
});
