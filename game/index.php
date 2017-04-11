<?php
session_start();

if (!isset($_SESSION["logged_in"]) || $_SESSION["logged_in"] === False)
{
   header("Location: ../login/");
   exit();
}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">

    <title>Lone Forest - A Simple Text Adventure</title>

    <meta name="description" content="A simple text adventure about finding your way back through the forest.">
    <meta name="author" content="DCSP Spring 2017 Group A">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--  Nice Web Font -->
    <link href='http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' rel='stylesheet' type='text/css'>

    <!-- W3schools W3.css library -->
    <link rel="stylesheet" href="../css/w3.css">

    <!-- Jquery and our JS Libs -->
    <script src="../js/jquery.js"></script>
    <script src="../js/helperfunctions.js"></script>
    <script src="../js/Story.json"></script>
    <script src="../js/storynode.js"></script>
    <script src="../js/storyteller.js"></script>
    <script src="../js/user.js"></script>

</head>

<body>
    <div class="w3-sidebar w3-bar-block w3-animate-left w3-card-2" style="display:none" id="mySidebar">
      <button class="w3-bar-item w3-button"
      onclick="w3_close()">Close &times;</button>
      <a href="home.html" class="w3-bar-item w3-button w3-hover-black">Home</a>
      <a href="/game/settings.php" class="w3-bar-item w3-button w3-hover-green">Settings</a>
      <a href="../login/index.php?logout=True" class="w3-bar-item w3-button w3-hover-blue">Logout</a>
    </div>

    <div zclass="w3-main" id="main">
        <div class="w3-grey">
            <button class="w3-button w3-grey w3-xlarge " onclick="w3_open()">&#9776;</button>
            <div class="w3-container">
                <h1>Lone Forest</h1>
                <code>A Simple Text Adventure about Finding your way back through the forest.</code>
                <br>
            </div>
        </div>
        <div class="w3-cell-row" style="padding:5px">
            <div class="w3-container w3-cell w3-mobile">
                <h3 id="Location">Location</h3>
                <code id="Description">Description </code>
            </div>
            <div class="w3-container w3-cell w3-mobile" id="StoryOptions">
                    <button class="w0-btn w3-block w3-grey" value="0" onclick="StoryTeller.update_story_node(this.value)"></button>
                    <br>
                    <button class="w3-btn w3-block w3-grey" value="1" onclick="StoryTeller.update_story_node(this.value)"></button>
                    <br>
                    <button class="w3-btn w3-block w3-grey" value="2" onclick="StoryTeller.update_story_node(this.value)"></button>
                    <br>
                    <button class="w3-btn w3-block w3-grey" value="3" onclick="StoryTeller.update_story_node(this.value)"></button>
                    <br>
            </div>
        </div>
    </div>

    <script>
        $( document ).ready(function() {
            // alert('"Man is the most dangerous animal of all to kill." \n - The Most Dangerous Game');
            StoryTeller1 = StoryTeller();
        });
    </script>
</body>
</html>
