<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Settings Page</title>
    </head>
    <body>
        <?php
       session_start();
        
        //if (isset($_SESSION["username"]))
    	//{   
        	echo"<h1>Settings Page</h1>";
   		echo"<p>Change color theme: [Color Thing]</p>";
		echo"<button type='button'>Restart Progress</button>       ";
		echo"<button type='button'>Delete User Account</button>     ";
		echo"<button type='button'>Change User Password</button>";
		echo"<br><br><button onclick='goBack()'>Go Back</button>";


            
                
        
        //else{
        //    echo '<p style="color: red"> Hey! You\'re not logged in! </p>';
        //  echo "<a href = 'login_page.php' > Click here to log in </a>";
        //}
        //} 
        ?>
    </body>
</html>
