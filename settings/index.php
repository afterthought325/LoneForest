
<html>
  <head>
  		<script src = "/LoneForest/js/changeTheme.js" type="text/javascript"></script>
		  
        <meta charset="utf-8">
        <title>Settings Page</title>
	<style>
	
	</style>
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" id = "ourTheme" href="https://www.w3schools.com/lib/w3-theme-grey.css">
</head>
	<script>changeTheme();</script>
	<body class = "w3-theme-d4 w3-card-3">

		<div zclass = "w3-main" >
			<div class="w3-container w3-theme-d4 w3-card-3">
				<h1>Settings Page</h1>
			</div>
	
        <?php
               session_start();
        
        //if (isset($_SESSION["username"]))
    	//{   =
		echo"<div style = 'padding:20px'class = 'w3-cell-row w3-theme-d3'>";
   		echo"<br><p>Change color theme: 
		<select class = 'w3-theme-d3' id='mySelect' onchange = 'updateTheme(this.value)'>
			<option value='grey'>Grey</option>
			<option value='blue-grey'>Blue-Grey</option>
  			<option value='red'>Red</option>
			<option value='pink'>Pink</option>
  			<option value='deep-purple'>Purple</option>
 			<option value='teal'>Teal</option>
			<option value='cyan'>Cyan</option>
  			
			
  			


		</select></p>";
		echo"<button class = 'w3-theme-d3' type='button'>Restart Progress</button>       ";
		echo"<button class = 'w3-theme-d3' type='button'>Delete User Account</button>     ";
		echo"<button class = 'w3-theme-d3' type='button'>Change User Password</button>";
		echo"<br><br><button class = 'w3-theme-d3' onclick='goBack()'>Go Back</button><br><br>";
		echo"</div>";
            
                
        
        //else{
        //    echo '<p style="color: red"> Hey! You\'re not logged in! </p>';
        //  echo "<a href = 'login_page.php' > Click here to log in </a>";
        //}
        //} 
        ?>
	<script>
		function goBack() {
    			window.history.back();
		}
		function updateTheme(theme) {
			document.getElementById("ourTheme").href ="https://www.w3schools.com/lib/w3-theme-"+theme+".css";
			document.cookie = "theme="+theme;
		}
		function updateSelect(){
			var val = getCookie("theme");
			var sel = document.getElementById("mySelect");
			var opts = sel.options;
			for (var opt, j = 0; opt = opts[j]; j++) {
				if (opt.value == val) {
					sel.selectedIndex = j;
					break;
			}
		}
			
		}
		updateSelect();
		
	</script>
		</div>
	</div>
    </body>
</html>
