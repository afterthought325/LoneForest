<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Restart Progress</title>
    </head>
    <body>
<?php

require_once '../login.php';

$connection = new mysqli($hn, $un, $pw, $db);

if ($connection->connect_error) die($connection->connect_error);
if ($_SERVER["REQUEST_METHOD"] == "GET")
{
  if (isset($_GET['restart']) && $_GET['restart'] == "true")
  {
    $un_temp = $_SESSION["username"];
    $query = "UPDATE users SET location=1,inventory='[]' WHERE username='$un_temp'";
    $connection->query($query);
    $_SESSION["restart_progress"] = True;
    setcookie("reloaded", "true", time() + (30), "/");
    header("Location: ../settings/");
    exit();
  }
  else
  {
    unset($_SESSION["restart_progress"]);
    header("Location: ../game/");
    exit();
  }
}
else
{
  header('WWW-Authenticate: Basic realm="Restricted Section"');
  header('HTTP/1.0 401 Unauthorized');
  die ("There is nothing to see here");
}

$connection->close();


function mysql_entities_fix_string($connection, $string)
{
   return htmlentities(mysql_fix_string($connection, $string));
}

function mysql_fix_string($connection, $string)
{
   if (get_magic_quotes_gpc()) $string = stripslashes($string);
   return $connection->real_escape_string($string);
}

?>
</body>
</html>
