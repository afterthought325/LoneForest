<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Login Check</title>
    </head>
    <body>
<?php // authenticate passwords

require_once '../../login.php';

setcookie("logged_in", "false", time() + (30), "/");

$connection = new mysqli($hn, $un, $pw, $db);

if ($connection->connect_error) die($connection->connect_error);
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
   if (isset($_POST['username']) && isset($_POST['password']))
   {
      $un_temp = mysql_entities_fix_string($connection, $_POST['username']);
      $pw_temp = mysql_entities_fix_string($connection, $_POST['password']);
      $query = "SELECT * FROM users WHERE username='$un_temp'";
      $result = $connection->query($query);
      if (!$result) die($connection->error);
      elseif ($result->num_rows)
      {
         $row = $result->fetch_array(MYSQLI_NUM);
         $result->close();
         $token = hash($algo, "$salt1$pw_temp$salt2");
         if ($token == $row[3])
         {
            $_SESSION["logged_in"] = True;
            $_SESSION["username"] = $row[2];
            $_SESSION["isAdmin"] = $row[8];
            setcookie("logged_in", "true", time() + (30), "/");
            header("Location: ../../game/");
            exit();
         }
         else
         {
           setcookie("logged_in", "false", time() + (30), "/");
           setcookie("login", "true", time() + (30), "/");
           setcookie("reloaded", "true", time() + (2), "/");
           header("Location: ../../");
           exit();
         }
      }
      else
      {
        setcookie("logged_in", "false", time() + (30), "/");
        setcookie("login", "true", time() + (30), "/");
        setcookie("reloaded", "true", time() + (2), "/");
        header("Location: ../../");
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
