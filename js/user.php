<?php
set_include_path('/home/dcspa/public_html/LoneForest/');
// set_include_path('C:\xampp\htdocs\TestLoneForest\LoneForest');
require_once 'login.php';

if ($connection->connect_error) die($connection->connect_error);

$username = "AUsername";

//Return First name upon request
if(isset(GET['get_first_name'])){
    $status = GET['get_first_name'];
    if($status == "true"){
        $query = "FROM users SELECT forename WHERE username=$username";
        $result = $connection->query($query);
        if(!$result) die($connection->error);
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $resul->fetch_array(MYSQLI_ASSOC);
        echo $row['forename'];
    }

//Request Last Name upon request
if(isset(GET['get_last_name'])){
    $status = GET['get_last_name'];
    if($status == "true"){
        $query = "FROM users SELECT surname WHERE username=$username";
        $result = $connection->query($query);
        if(!$result) die($connection->error);
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $resul->fetch_array(MYSQLI_ASSOC);
        echo $row['surname'];
    }
}

//Request Password upon request
if(isset(GET['get_hash_pass'])){
    $status = GET['get_hash_pass'];
    if($status == "true"){
        $query = "FROM users SELECT password WHERE username=$username";
        $result = $connection->query($query);
        if(!$result) die($connection->error);
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $resul->fetch_array(MYSQLI_ASSOC);
        echo $row['password'];
    }
}

//Request Inventory upon request
if(isset(GET['get_inventory'])){
    $status = GET['get_inventory'];
    if($status == "true"){
        $query = "FROM users SELECT inventory WHERE username=$username";
        $result = $connection->query($query);
        if(!$result) die($connection->error);
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $resul->fetch_array(MYSQLI_ASSOC);
        echo $row['inventory'];
    }
}

//Request Current Location upon request
if(isset(GET['get_current_location'])){
    $status = GET['get_current_location'];
    if($status == "true"){
        $query = "FROM users SELECT location WHERE username=$username";
        $result = $connection->query($query);
        if(!$result) die($connection->error);
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $resul->fetch_array(MYSQLI_ASSOC);
        echo $row['location'];
    }
}

//updates inventory upon request
if(isset(GET['set_inventory'])){
    $inventory = GET['set_inventory'];
    $query = "UPDATE users SET inventory=$inventory WHERE username=$username";
    $result = $connection->query($query);
    if(!$result) die($connection->error);
    echo "true";
}



?>