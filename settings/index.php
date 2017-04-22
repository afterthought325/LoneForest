<?php session_start();
if (!(isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === True))
{
  header("Location: ../");
  exit();
}
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Settings Page</title>
    <meta charset="utf-8">

    <script src="../js/jquery.js"></script>
		<script src="../js/changeTheme.js" type="text/javascript"></script>
		<script src="../js/settingspage.js" type="text/javascript"></script>
    <script src="../js/helperfunctions.js"></script>
    <script src="../swal/sweetalert2.min.js"></script>

  	<link rel="stylesheet" href = "https://www.w3schools.com/w3css/4/w3.css">
  	<link rel="stylesheet" id="ourTheme" href="https://www.w3schools.com/lib/w3-theme-grey.css">
    <link rel="stylesheet" href="../css/settingspage.css">
    <link rel="stylesheet" href="../swal/sweetalert2.min.css">
  </head>

	<body class="w3-theme-l4 w3-card-3">
    <script>changeTheme();</script>
		<div class="w3-main" >
			<div class="w3-container w3-theme-d4 w3-card-3">
				<h1>Settings Page</h1>
			</div>

      <br><br>
  		<div id="AllOptions" class='w3-content'>
        <div class="w3-xlarge w3-center">Account Options</div>
        <div class="w3-center w3-row">
          <button class='w3-theme-d3 w3-col s12 m6 l3 w3-btn w3-section options-buttons' type='button' id='restart-progress'>Restart Progress</button>
          <button class='w3-theme-d3 w3-col s12 m6 l3 w3-btn w3-section options-buttons' type='button' id='delete-account'>Delete User Account</button>
          <button class='w3-theme-d3 w3-col s12 m6 l3 w3-btn w3-section options-buttons' type='button' id='change-password'>Change User Password</button>
        </div>
        <div id='ThemeOptions' class="w3-center">
          <div class="w3-xlarge">Select a theme color</div>
          <div class="w3-theme-l4 w3-row">
            <button class='options-buttons w3-col s12 m6 l3 w3-btn w3-section w3-mobile w3-grey' value='grey' onClick='updateTheme(this.value)'>Grey</button>
            <button class='options-buttons w3-col s12 m6 l3 w3-btn w3-section w3-mobile w3-blue-grey' value='blue-grey' onClick='updateTheme(this.value)'>Blue-Grey</button>
            <button class='options-buttons w3-col s12 m6 l3 w3-btn w3-section w3-mobile w3-red' value='red' onClick='updateTheme(this.value)'>Red</button>
            <button class='options-buttons w3-col s12 m6 l3 w3-btn w3-section w3-mobile w3-pink' value='pink' onClick='updateTheme(this.value)'>Pink</button>
            <button class='options-buttons w3-col s12 m6 l3 w3-btn w3-section w3-mobile w3-deep-purple' value='deep-purple' onClick='updateTheme(this.value)'>Deep Purple</button>
            <button class='options-buttons w3-col s12 m6 l3 w3-btn w3-section w3-mobile w3-teal' value='teal' onClick='updateTheme(this.value)'>Teal</button>
            <button class='options-buttons w3-col s12 m6 l3 w3-btn w3-section w3-mobile w3-cyan' value='cyan' onClick='updateTheme(this.value)'>Cyan</button>
            <button class='options-buttons w3-col s12 m6 l3 w3-btn w3-section w3-mobile w3-black' value='black' onClick='updateTheme(this.value)'>Black</button>
          </div>
        </div>
        <div class="w3-row">
          <a class='w3-theme-d3 w3-col s8 m4 l4 w3-btn w3-section w3-content w3-block options-buttons italics' href="../game/">Back to game</a><br><br>
        </div>
  		</div>
		</div>
  </body>
</html>
