<?php // setupusers.php
set_include_path('/home/dcspa/public_html/LoneForest/');
// set_include_path('D:\xampp\htdocs\TestLoneForest\LoneForest');
require_once 'login.php';

$connection = new mysqli($hn, $un, $pw, $db);

if ($connection->connect_error) die($connection->connect_error);

$query = "DROP TABLE users";

$result = $connection->query($query);

if (!$result) die($connection->error);

$query = "CREATE TABLE users (
   forename VARCHAR(32) NOT NULL,
   surname VARCHAR(32) NOT NULL,
   username VARCHAR(32) NOT NULL UNIQUE,
   password VARCHAR(32) NOT NULL,
   security1 VARCHAR(32) NOT NULL,
   security2 VARCHAR(32) NOT NULL
)";

$result = $connection->query($query);

if (!$result) die($connection->error);

$forename = 'Bill';
$surname = 'Smith';
$username = 'bsmith';
$password = 'mysecret';
$security1 = 'Mom';
$security2 = 'Street';

$token = hash($algo, "$salt1$password$salt2");

add_user($connection, $forename, $surname, $username, $token, $security1, $security2);

$forename = 'Pauline';
$surname = 'Jones';
$username = 'pjones';
$password = 'acrobat';
$security1 = 'Mom';
$security2 = 'Street';

$token = hash($algo, "$salt1$password$salt2");

add_user($connection, $forename, $surname, $username, $token, $security1, $security2);


function add_user($connection, $fn, $sn, $un, $pw, $sq1, $sq2)
{
   $query = "INSERT INTO users VALUES('$fn', '$sn', '$un', '$pw', '$sq1', '$sq2')";
   $result = $connection->query($query);
   if (!$result) die($connection->error);
}
?>
