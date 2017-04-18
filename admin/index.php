<?php
session_start();

if (isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === True)
{
  if (isset($_SESSION["isAdmin"]) && $_SESSION["isAdmin"] == True)
  {
    echo "You are an admin.";
  }
  else
  {
    echo "You must be an admin to access this page.";
  }
}
else
{
  header("Location: ../");
  exit();
}
?>
