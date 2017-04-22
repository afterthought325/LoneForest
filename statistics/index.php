<?php
require_once '../login.php';
$connection = new mysqli($hn, $un, $pw, $db);
if ($connection->connect_error) die($connection->connect_error);

session_start();
if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    }
else die("ERROR: USERNAME MISSING FROM SESSION");

//gets all values
$query = "SELECT * FROM statistics;";
$result = $connection->query($query);
if(!$result) die($connection->error);
$result->data_seek(0);
$row = $result->fetch_array(MYSQLI_ASSOC);
echo "Number of deaths: "; echo $row["deaths"]; echo "<br>";
echo "Number of victories: "; echo $row["wins"]; echo "<br>";
echo "Number of kidneys donated: "; echo $row["kidneys"]; echo "<br>";

$connection->close();

?>

<div class="w3-row">
          <a class='w3-theme-d3 w3-col s8 m4 l4 w3-btn w3-section w3-content w3-block options-buttons italics' href="../game/">Back to game</a><br><br>
</div>