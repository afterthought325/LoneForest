<style>	
	td{
		border: 1px solid black;
		padding: 1em 1em 1em 1em;
	 }
 </style>
 <head>
 <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
 <script>
    function confirmDeletion(userName){
        $.post('deletepage.php', { userName:userName }, function(data){
            alert(data);
            location.reload();
        }); 
    }
    function confirmPasswordChange(userName){
        $.post('changepassword.php', { userName:userName }, function(data){
            alert(data);
            location.reload();
        }); 
    }
</script>
</head>
<?php
session_start();
//php function for deleting


//php function for resetting password to default



if (true)//(isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === True)
{
  if (true) //(isset($_SESSION["isAdmin"]) && $_SESSION["isAdmin"] == "True")
  {
    echo "<h1>You!...are an admin.</h1>";
    require_once '../login.php';
    $connection = new mysqli($hn, $un, $pw, $db);

    if ($connection->connect_error) die($connection->connect_error);
    $query = "SELECT username FROM users";
    $result = $connection->query($query);
    if (!$result) die($connection->error);
    $rows = $result->num_rows;

    $row = $result->fetch_array(MYSQLI_NUM);
    echo "<table>";
    echo "<th>Username</th>"; 
    for ($j = 0 ; $j < $rows ; ++$j)
        {	
          $result->data_seek($j);
          $row = $result->fetch_array(MYSQLI_ASSOC);
          echo "<tr>";
          echo "<td><h4 id='".$j."'>".$row['username']."</h4></td>";
          echo "<td><button onclick='confirmDeletion(\"".$row['username']."\")'>Delete Account</button></td>";
          //add onclick="delete" 
          echo "<td><button onclick='confirmPasswordChange(\"".$row['username']."\")'>Reset Password</button></td>"; 
          //add onclick="reset password"
          echo "</tr>";
        }
    
    echo "</table>";
    $result->close();
    $connection->close();
    
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
