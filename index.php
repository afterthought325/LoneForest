<!DOCTYPE html>
<html>
<head>
<?php
session_start();

if (isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === True)
{
  if (!(isset($_COOKE['reloaded']) && $_COOKE['reloaded'] == "true"))
  {
    // setcookie("reloaded", "", time() - 3600);
    header("Location: game/");
    exit();
  }
}

?>


<meta name="description" content="A simple text adventure about finding your way back through the forest.">
<meta name="author" content="DCSP Spring 2017 Group A">

<meta name="viewport" content="width=device-width, initial-scale=1">

<!--  Nice Web Font -->
<link href='http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' rel='stylesheet' type='text/css'>

<!-- W3schools W3.css library -->
<link rel="stylesheet" href="css/w3.css">
<link rel="stylesheet" href="css/loginpage.css">
<link rel="stylesheet" href="swal/sweetalert2.min.css">

<!-- Jquery and our JS Libs -->
<script src="js/jquery.js"></script>
<script src="js/helperfunctions.js"></script>
<script src="js/loginpage.js"></script>
<script src="swal/sweetalert2.min.js"></script>


<!-- Theme colors -->
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" id = "ourTheme" href="https://www.w3schools.com/lib/w3-theme-grey.css">

<!-- Script for changing Theme -->
<script src = "js/changeTheme.js" type="text/javascript"></script>
<script>changeTheme();</script>

<style>
  .w3-button{
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }

</style>
</head>
<body class = "w3-theme-l5">

<div class="w3-container w3-center">
  <div class="w3-display-middle">
    <h2>Welcome to Lone Forest</h2><br/><br/><br/>
    <div class="w3-show-inline-block">
      <button id="login" class="w3-button w3-hover-theme w3-theme-d3  w3-large options-buttons w3-section w3-mobile" >Login</button>
      <button id="register" class="w3-button w3-hover-theme w3-theme-d3 w3-hover-theme:hover w3-large options-buttons w3-section w3-mobile">Register</button>
      <button id="about" class="w3-button w3-hover-theme w3-theme-d3 w3-hover-theme:hover w3-large options-buttons w3-section w3-mobile">About</button>
    </div>
  </div>
</div>
</body>
</html>
