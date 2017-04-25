<?php
session_start();
require_once '../login.php';

if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] == True)
{
  $connection = new mysqli($hn, $un, $pw, $db);

  if ($connection->connect_error) die($connection->connect_error);
  if ($_SERVER["REQUEST_METHOD"] == "POST")
  {
     if (isset($_POST['newpwd']))
     {
        $un_temp = $_SESSION['username'];
        $pw_temp = mysql_entities_fix_string($connection, $_POST['newpwd']);
        $token = hash($algo, "$salt1$pw_temp$salt2");
        $query = "UPDATE users SET password = '$token' WHERE username='$un_temp'";
        $connection->query($query);
        setcookie("reloaded", "true", time() + 2, "/");
        setcookie("pwd_changed", "true", time() + 2, "/");
        header("Location: index.php");
        exit();
     }
     else
     {
        header('WWW-Authenticate: Basic realm="Restricted Section"');
        header('HTTP/1.0 401 Unauthorized');
        die ("There is nothing to see here");
     }
  }

  $connection->close();
}

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
