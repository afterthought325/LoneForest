<?php session_start();
if (!(isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === True))
{
  header("Location: ../");
  exit();
}
?>
<html>
  <head>
    <title>Settings Page</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="../js/jquery.js"></script>
		<script src="../js/changeTheme.js" type="text/javascript"></script>
		<script src="../js/settingspage.js" type="text/javascript"></script>
    <script src="../js/helperfunctions.js"></script>
    <script src="../swal/sweetalert2.min.js"></script>

  	<link rel="stylesheet" href = "https://www.w3schools.com/w3css/4/w3.css">
  	<link rel="stylesheet" id="ourTheme" href="https://www.w3schools.com/lib/w3-theme-grey.css">
    <link rel="stylesheet" href="../css/settingspage.css">
    <link rel="stylesheet" href="../swal/sweetalert2.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>

	<body class="w3-theme-l2 w3-card-3">
    <script>changeTheme();</script>
		<div class="w3-main" >
			<div class="w3-theme-d4">
                <a class="w3-btn w3-large" href="../game/"><i class="fa fa-arrow-left"></i></a>
			    <div class="w3-container">
			    	<h1 class="w3-cell-middle">Statistics Page</h1>
        	    </div>
            </div>
<?php

require_once '../login.php';
$connection = new mysqli($hn, $un, $pw, $db);
if ($connection->connect_error) die($connection->connect_error);


//gets all values
$query = "SELECT * FROM statistics;";
$result = $connection->query($query);
if(!$result) die($connection->error);
$result->data_seek(0);
$row = $result->fetch_array(MYSQLI_ASSOC);
echo "<br><div class='w3-xlarge'>Death Count: ".$row["deaths"]."</div><br>";
echo "<div class='w3-xlarge'>Victory Count: ".$row["wins"]."</div><br>";
echo "<div class='w3-xlarge'>Kidney's donated: ".$row["kidneys"]."</div><br>";

$connection->close();

?>


</html>