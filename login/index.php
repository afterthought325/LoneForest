<?php
session_start();
set_include_path('/home/dcspa/public_html/LoneForest/');

if ($_SESSION[logged_in] = True)
{
   header("Location: game/");
   exit();
}
?>

<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Flat HTML5/CSS3 Login Form</title>



      <link rel="stylesheet" href="css/style.css">


</head>

<body>
  <div class="login-page">
  <div class="form">
    <form method="post" action="testRegister/" class="register-form">
      <input type="text" placeholder="first name" name="firstname" required/>
      <input type="text" placeholder="last name" name="surname" required/>
      <input type="text" placeholder="username" name="username" required/>
      <input type="password" placeholder="password" name="password" required/>
      <input type="text" placeholder="What is your mother's maiden name?" name="security1" required/>
      <input type="text" placeholder="What street did you grow up on?" name="security2" required/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form method="post" action="testLogin/" class="login-form">
      <input type="text" placeholder="username" name="username" required/>
      <input type="password" placeholder="password" name="password" required/>
      <button>login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
      <p class="message">Forgot your password? <a href="/reset.html">Reset it here</a></p>
    </form>
  </div>
</div>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

    <script src="js/index.js"></script>

</body>
</html>
