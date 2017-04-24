<!DOCTYPE html>
<html>
<head>
    <title>Admin Page</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="../js/changeTheme.js" type="text/javascript"></script>
    <script  src="../js/changeTheme.js"type="text/javascript"></script>
    <script src="../swal/sweetalert2.min.js"></script>
    <link rel="stylesheet" href="../css/adminpage.css">
    <link rel="stylesheet" href = "https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" id="ourTheme" href="https://www.w3schools.com/lib/w3-theme-grey.css">
    <link rel="stylesheet" href="../swal/sweetalert2.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <script>
        function confirmDeletion(userName){
            $.post('deletepage.php', { userName:userName }, function(data){
                if (data == "True") {
                    swal(
                        {
                            title: 'Success!',
                            text: 'You have mercilessly deleted an account.',
                            type: 'success',
                            confirmButtonText: 'Done'
                        }
                    ).then(function(){
                        window.location.reload(true);
                    });
                } else {
                    swal(
                        {
                            title: 'Oh No!',
                            text: 'Gee, we ran into a problem and couldn\'t complete the request. :(',
                            type: 'error',
                            confirmButtonText: 'Done'
                        }
                    ).then(function(){
                        window.location.reload(true);
                    });
                }
            });
        }
        function confirmPasswordChange(userName){
            $.post('changepassword.php', { userName:userName }, function(data){
                if (data == "True") {
                    swal(
                        {
                            title:'Success!',
                            text: 'You have successfully changed a password. Good for you.',
                            type: 'success',
                            confirmButtonText: 'Done'
                        }
                    ).then(function(){
                        window.location.reload(true);
                    });
                } else {
                    swal(
                        {
                            title: 'Oh No!',
                            text: 'Oops. Could not reset password, not sure why though.',
                            type: 'error',
                            confirmButtonText: 'Done'
                        }
                    ).then(function(){
                        window.location.reload(true);
                    });
                }
            });
        }
    </script>
</head>
<script>changeTheme();</script>
<body class="w3-theme-l2 w3-card-3">

<div class="w3-main">
    <div class="w3-theme-d4">
        <a class="w3-btn w3-large" href="../game/"><i class="fa fa-arrow-left"></i></a>
        <div class="w3-container w3-theme-d4">
            <h1 class="w3-cell-middle">Admin Page</h1>
        </div>
    </div>
    <div class="w3-content w3-padding">
        <?php
        session_start();


        if (isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === True)
        {
            if (isset($_SESSION["isAdmin"]) && $_SESSION["isAdmin"] == "True")
            {
                require_once '../login.php';
                $connection = new mysqli($hn, $un, $pw, $db);

                if ($connection->connect_error) die($connection->connect_error);
                $query = "SELECT username FROM users";
                $result = $connection->query($query);
                if (!$result) die($connection->error);
                $rows = $result->num_rows;

                $row = $result->fetch_array(MYSQLI_NUM);
                echo "<div class='w3-center w3-padding'>";
                echo "<table class='w3-table w3-bordered w3-card-4'>";
                echo "<thead><tr class='w3-theme-d3'><th>Username</th><th>Account Deletion</th><th>Password Reset</th></tr></thead>";
                for ($j = 0 ; $j < $rows ; ++$j)
                {
                    $result->data_seek($j);
                    $row = $result->fetch_array(MYSQLI_ASSOC);
                    echo "<tr class='w3-theme-l4'>";
                    echo "<td><h4 id='".$j."'>".$row['username']."</h4></td>";
                    echo "<td><button class='w3-theme-d1 w3-btn w3-section options-buttons' type='button' onclick='confirmDeletion(\"".$row['username']."\")'>Delete Account</button></td>";
                    //add onclick="delete"
                    echo "<td><button class='w3-theme-d1 w3-btn w3-section options-buttons' type='button' onclick='confirmPasswordChange(\"".$row['username']."\")'>Reset Password</button></td>";
                    //add onclick="reset password"
                    echo "</tr>";
                }

                echo "</table>";
                echo "</div>";
                $result->close();
                $connection->close();

            }
            else
            {
                echo "<div class=\"w3-xlarge w3-center\">You!...Are not an admin. Begone!</div>";
            }
        }
        else
        {
            header("Location: ../");
            exit();
        }
        ?>
    </div>
</div>
</body>
</html>
