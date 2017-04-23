<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Login Check</title>
    </head>
    <body>
<?php

require_once 'login.php';

setcookie("logged_in", "false", time() + (30), "/");

$connection = new mysqli($hn, $un, $pw, $db);

if ($connection->connect_error) die($connection->connect_error);
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
   if (isset($_POST['username']) && isset($_POST['security1']) && isset($_POST['security2']))
   {
      $un_temp = mysql_entities_fix_string($connection, $_POST['username']);
      $sq1_temp = mysql_entities_fix_string($connection, $_POST['security1']);
      $sq2_temp = mysql_entities_fix_string($connection, $_POST['security2']);
      $query = "SELECT * FROM users WHERE username='$un_temp'";
      $result = $connection->query($query);
      if (!$result) die($connection->error);
      elseif ($result->num_rows)
      {
         $row = $result->fetch_array(MYSQLI_NUM);
         $result->close();
         if (($sq1_temp == $row[4]) && ($sq2_temp == $row[5]))
         {
            $_SESSION["sq_check"] = True;
            $_SESSION["username"] = $row[2];
            setcookie("login", "true", time() + (30), "/");
            setcookie("reloaded", "true", time() + (2), "/");
            header("Location: ../LoneForest/");
            exit();
         }
         else
         {
           $_SESSION["sq_check"] = False;
           setcookie("login", "true", time() + (30), "/");
           setcookie("reloaded", "true", time() + (2), "/");
           header("Location: ../LoneForest/");
           exit();
         }
      }
      else
      {
        $_SESSION["sq_check"] = False;
        setcookie("login", "true", time() + (30), "/");
        setcookie("reloaded", "true", time() + (2), "/");
        header("Location: ../LoneForest/");
        exit();
      }
   }
   else
   {
      header('WWW-Authenticate: Basic realm="Restricted Section"');
      header('HTTP/1.0 401 Unauthorized');
      die ("There is nothing to see here");
   }
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
