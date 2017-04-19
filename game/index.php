<?php
session_start();

if (!isset($_SESSION["logged_in"]) || $_SESSION["logged_in"] === False)
{
   header("Location: ../");
   exit();
}
?>
<style>
  .w3-button{
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }
  .w3-btn{
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }
</style>


<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">

    <title>Lone Forest - A Simple Text Adventure</title>

    <meta name="description" content="A simple text adventure about finding your way back through the forest.">
    <meta name="author" content="DCSP Spring 2017 Group A">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--  Nice Web Font -->
<!--
    <link href='http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
-->
    <!-- W3schools W3.css library -->
    <link rel="stylesheet" href="../css/w3.css">
    <link rel="stylesheet" type="text/css" href="../swal/sweetalert2.min.css">


    <!-- Theme colors -->
	<link rel="stylesheet" id = "ourTheme" href="">

    <!-- Script for changing Theme -->
    <script src = "../js/changeTheme.js"></script>
    <script>changeTheme();</script>

    <!-- Jquery, SweetAlert, and our JS Libs -->
    <script src="../js/jquery.js"></script>
    <script src="../js/helperfunctions.js"></script>
    <script src="../swal/sweetalert2.min.js"></script>
    <script src="../Story.json"></script>
    <script src="../js/storynode.js"></script>
    <script src="../js/storyteller.js"></script>
    <script src="../js/user.js"></script>



</head>

<body class = "w3-theme-l2 w3-card-3">
    <div class="w3-sidebar w3-bar-block w3-animate-left w3-card-2 w3-theme-l4" style="display:none" id="mySidebar">
      <button class="w3-bar-item w3-button w3-hover-theme"
      onclick="w3_close()">Close &times;</button>
      <a href="../" class="w3-bar-item w3-button w3-hover-theme">Home</a>
      <a href="../settings" class="w3-bar-item w3-button w3-hover-theme">Settings</a>
      <a href="../logout" class="w3-bar-item w3-button w3-hover-theme">Logout</a>
    </div>
    <script>
        $( document ).ready(function() {
            // alert('"Man is the most dangerous animal of all to kill." \n - The Most Dangerous Game');
            ST = new StoryTeller();
        });
    </script>
    <div zclass="w3-main" id="main">
        <div class="w3-theme-d4">
            <button class="w3-button w3-hover-theme w3-xlarge " onclick="w3_open()">&#9776;</button>
            <div class="w3-container">
                <h1>Lone Forest</h1>
                <code id="subheading"></code>
                <!--<code id="subheading">A Simple Text Adventure about finding your way back through the forest.</code>-->
                <br>
            </div>
        </div>
        <div class="w3-cell-row w3-padding-small">
            <div class="w3-container w3-cell w3-mobile w3-twothird">
                <h3 id="Location"></h3>
                <code id="Description">Description </code>
            </div>
            <div class="w3-container w3-cell w3-mobile" id="StoryOptions" onClick="ST.update_story_node(event);">
                    <!--<button class="w3-btn w3-block w3-theme-d3" value="0" onclick="StoryTeller.update_story_node(this.value)"></button>-->
            </div>
        </div>
    </div>


</body>
</html>
