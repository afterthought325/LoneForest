<head>
<?php
session_start();

if (isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === True)
{
   header("Location: game/");
   exit();
}

?>


<!DOCTYPE html>
<html>
<meta name="description" content="A simple text adventure about finding your way back through the forest.">
<meta name="author" content="DCSP Spring 2017 Group A">

<meta name="viewport" content="width=device-width, initial-scale=1">

<!--  Nice Web Font -->
<link href='http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' rel='stylesheet' type='text/css'>

<!-- W3schools W3.css library -->
<link rel="stylesheet" href="css/w3.css">
<link rel="stylesheet" href="swal/sweetalert2.min.css">

<!-- Jquery and our JS Libs -->
<script src="js/jquery.js"></script>
<script src="swal/sweetalert2.min.js"></script>


<!-- Theme colors -->
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" id = "ourTheme" href="https://www.w3schools.com/lib/w3-theme-grey.css">

<!-- Script for changing Theme -->
<script src = "/LoneForest/js/changeTheme.js" type="text/javascript"></script>
<script>changeTheme();</script>

<style>
  .w3-button{
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }

</style>
</head>
<!--Yo Noah!!!!! change whatever's class color to "w3-theme-d1"" or that last bit to d2/d3/d4/d5/l1/l2/l3/l4/l5 which is darkest to lightest!-->
<body class = "w3-theme-l1">

<script>
swal({
  title: 'Error!',
  text: 'Do you want to continue',
  type: 'error',
  confirmButtonText: 'Cool'
})
</script>

<div class="w3-container">
  <h2>Welcome to Lone Forest</h2>
  <button onclick="$('#login-box')[0].style.display='block'" class="w3-button w3-hover-theme w3-theme-d3  w3-large">Login</button>
  <button onclick="$('#register-box')[0].style.display='block'" class="w3-button w3-hover-theme w3-theme-d3 w3-hover-theme:hover w3-large">Register</button>

  <div id="login-box" class="w3-modal">
    <div class="w3-modal-content w3-card-4 w3-animate-zoom w3-theme-d1" style="max-width:600px">

      <div class="w3-center"><br>
        <span onclick="$('#login-box')[0].style.display='none'" class="w3-button w3-hover-theme w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
        <img src="img_avatar4.png" alt="Avatar" style="width:30%" class="w3-circle w3-margin-top">
      </div>

      <form class="w3-container" action="login/testLogin/">
        <div class="w3-section">
          <label><b>Username</b></label>
          <input class="w3-input w3-border w3-margin-bottom w3-theme-l4" type="text" placeholder="Enter Username" name="username" required>
          <label><b>Password</b></label>
          <input class="w3-input w3-border w3-theme-l4" type="password" placeholder="Enter Password" name="password" required>
          <button class="w3-button w3-hover-theme w3-block w3-theme-d3 w3-section w3-padding" type="submit">Login</button>
          <input class="w3-check w3-margin-top w3-theme-d3" type="checkbox" checked="checked"> Remember me
        </div>
      </form>

      <div class="w3-container w3-border-top w3-padding-16 w3-theme-l3">
        <button onclick="$('#login-box')[0].style.display='none'" type="button" class="w3-button w3-hover-theme w3-theme-d1">Cancel</button>
        <span class="w3-right w3-padding w3-hide-small w3-border-theme w3-border-theme:hover">Forgot <a href="#">password?</a></span>
      </div>

    </div>
  </div>
  <div id="register-box" class="w3-modal">
    <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">

      <div class="w3-center"><br>
        <span onclick="$('#register-box')[0].style.display='none'" class="w3-button w3-hover-theme w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
        <img src="img_avatar4.png" alt="Avatar" style="width:30%" class="w3-circle w3-margin-top">
      </div>

      <form class="w3-container" action="login/testRegister/">
        <div class="w3-section">
          <label><b>Username</b></label>
          <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="username" required>
          <label><b>Password</b></label>
          <input class="w3-input w3-border" type="password" placeholder="Enter Password" name="password" required>
          <button class="w3-button w3-hover-theme w3-block w3-theme-d3 w3-section w3-padding" type="submit">Login</button>
          <input class="w3-check w3-margin-top" type="checkbox" checked="checked"> Remember me
        </div>
      </form>

      <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
        <button onclick="$('#register-box')[0].style.display='none'" type="button" class="w3-button w3-hover-theme w3-red">Cancel</button>
        <span class="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
      </div>

    </div>
  </div>
</div>

</body>
</html>
