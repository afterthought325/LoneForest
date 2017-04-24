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
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Lone Forest - A Simple Text Adventure</title>

    <meta name="description" content="A simple text adventure about finding your way back through the forest.">
    <meta name="author" content="DCSP Spring 2017 Group A">


    <!-- CSS libraries -->
    <link rel="stylesheet" href="../css/w3.css">
    <link rel="stylesheet" href="../css/gamepage.css">
    <link rel="stylesheet" type="text/css" href="../swal/sweetalert2.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <!-- Theme to be filled in by changeTheme() below -->
	<link rel="stylesheet" id = "ourTheme" href="">

    <!-- Script for changing Theme -->
    <script src = "../js/changeTheme.js"></script>
    <script>changeTheme();</script>

    <!-- JS Libs -->
    <script src="../js/jquery.js"></script>
    <script src="../js/helperfunctions.js"></script>
    <script src="../swal/sweetalert2.min.js"></script>
    <script src="../Story.json"></script>
    <script src="../js/storynode.js"></script>
    <script src="../js/storyteller.js"></script>
    <script src="../js/user.js"></script>



</head>

<body class = "w3-theme-l2 w3-card-3">
    <div class="w3-sidebar w3-bar-block w3-animate-left w3-card-2 w3-theme-l3" style="display:none" id="mySidebar">
      <button class="w3-bar-item w3-button w3-hover-theme" onclick="w3_close()">Close &times;</button>
      <a href="../" class="w3-bar-item w3-button w3-hover-theme w3-section">Home</a>
      <a href="../statistics" class="w3-bar-item w3-button w3-hover-theme">Statistics</a>
      <a href="../settings" class="w3-bar-item w3-button w3-hover-theme w3-section">Settings</a>
      <a href="../logout" class="w3-bar-item w3-button w3-hover-theme w3-section">Logout</a>
      <?php
      if (isset($_SESSION["isAdmin"]) && $_SESSION["isAdmin"] == "True")
      {
        echo '<a href="../admin" class="w3-bar-item w3-button w3-hover-theme w3-section">Admin Settings</a>';
      }
      ?>
    </div>
    <div zclass="w3-main" id="main">
        <div class="w3-theme-d4">
            <button class="w3-btn w3-hover-theme w3-xlarge" onclick="w3_open()"><i class="fa fa-bars"></i></button>
            <div class="w3-container">
                <h1>Lone Forest</h1>
                <code id="subheading"></code>
                <!--<code id="subheading">A Simple Text Adventure about finding your way back through the forest.</code>-->
                <br>
            </div>
        </div>
        <div class="w3-row-padding">
            <div class="w3-container w3-threequarter">
                <div class="w3-row">
                    <a href="javascript:void(0)" onclick="openTab(event,'DescriptionTab');">
                        <div class="w3-col tablink w3-bottombar w3-padding" style="width:50%">Description</div>
                    </a>
                    <a href="javascript:void(0)" onclick="openTab(event,'InventoryTab');">
                        <div class="w3-col tablink w3-bottombar w3-padding" style="width:50%">Inventory</div>
                    </a>
                </div>
                <div id="DescriptionTab" class="tab " style="display:block">
                    <h3 id="Location"></h3>
                    <code id="Description">Loading Story</code>
                </div>
                <div id="InventoryTab" class="tab" style="display:none">
                    <code id="Inventory">You do not have anything in your inventory.</code>
                </div>
            </div>
            <br>
            <div class="w3-container w3-rest" id="StoryOptions" onClick="ST.update_story_node(event);">

            </div>
        </div>
    </div>
    <script>
        $( document ).ready(function() {
            //alert('"Man is the most dangerous animal of all to kill." \n - The Most Dangerous Game');
            ST = new StoryTeller();
        });

        function openTab(evt, tabName) {
          var i, x, tablinks;
          x = document.getElementsByClassName("tab");
          for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablink");
          for (i = 0; i < x.length; i++) {
             tablinks[i].className = tablinks[i].className.replace("w3-border-theme", "");
          }
          document.getElementById(tabName).style.display = "block";
          evt.currentTarget.firstElementChild.className += " w3-border-theme";
        }
    </script>
</body>
</html>
