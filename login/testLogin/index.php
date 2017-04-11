<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Login Check</title>
    </head>
    <body>
<?php // authenticate passwords
set_include_path('/home/dcspa/public_html/LoneForest/');
// set_include_path('D:\xampp\htdocs\TestLoneForest\LoneForest');
require_once 'login.php';

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
         if ($token == $row[3]) echo "$row[0] $row[1] :
            Hi $row[0], you are now logged in as '$row[2]'";
            $_SESSION["logged_in"] = True;
            $_SESSION["username"] = $row[2];
         else die("Invalid username/password combination");
      }
      else die("Invalid username/password combination");
   }
   else
   {
      header('WWW-Authenticate: Basic realm="Restricted Section"');
      header('HTTP/1.0 401 Unauthorized');
      die ("Please enter your username and password");
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
