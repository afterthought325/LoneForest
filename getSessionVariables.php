<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "GET")
{
  if (isset($_GET['s_var']))
  {
    $s_var = $_GET['s_var'];
    echo $_SESSION[$s_var];
  }
}


?>
