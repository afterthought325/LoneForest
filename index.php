<?php
session_start();

if (!isset($_SESSION["logged_in"]) || $_SESSION["logged_in"] === False)
{
   header("Location: login/");
   exit();
}
elseif (isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === True)
{
   header("Location: game/");
   exit();
}
else
{
   header('WWW-Authenticate: Basic realm="Restricted Section"');
   header('HTTP/1.0 401 Unauthorized');
   die("You've reached an impossible location!");
}
?>
