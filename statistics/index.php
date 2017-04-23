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
    <title>Statistics Page</title>
    <meta charset="utf-8">

    <script src="../js/jquery.js"></script>
	<script src="../js/changeTheme.js" type="text/javascript"></script>
    <script src="../js/helperfunctions.js"></script>
    <script src="../swal/sweetalert2.min.js"></script>

  	<link rel="stylesheet" href = "https://www.w3schools.com/w3css/4/w3.css">
  	<link rel="stylesheet" id="ourTheme" href="https://www.w3schools.com/lib/w3-theme-grey.css">
    <link rel="stylesheet" href="../swal/sweetalert2.min.css">
  </head>

	<body class="w3-theme-l4 w3-card-3">
    <script>changeTheme();</script>
		<div class="w3-main" >
			<div class="w3-container w3-theme-d4 w3-card-3">
				<h1>Statistics Page</h1>
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

<div class="w3-row">
          <a class='w3-theme-d3 w3-col s8 m4 l4 w3-btn w3-section w3-content w3-block options-buttons italics' href="../game/">Back to game</a><br><br>
</div>