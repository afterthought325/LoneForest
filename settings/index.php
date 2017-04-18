<?php session_start(); ?>
<!DOCTYPE html>
<html>
  <head>
  		<script src="/LoneForest/js/changeTheme.js" type="text/javascript"></script>

      <meta charset="utf-8">
      <title>Settings Page</title>
  	<link rel="stylesheet" href = "https://www.w3schools.com/w3css/4/w3.css">
  	<link rel="stylesheet" id="ourTheme" href="https://www.w3schools.com/lib/w3-theme-grey.css">
  </head>
<script>changeTheme();</script>
	<body class="w3-theme-d4 w3-card-3">

		<div class="w3-main" >
			<div class="w3-container w3-theme-d4 w3-card-3">
				<h1>Settings Page</h1>
			</div>

<?php
		echo "<div style='padding:20px' class='w3-cell-row w3-theme-d3'>";
 		echo "<br><p>Change color theme:
          <select class='w3-theme-d3' id='mySelect' onchange='updateTheme(this.value)'>
          <option class='w3-btn' value='grey'>Grey</option>
      		<option class='w3-btn' value='blue-grey'>Blue-Grey</option>
          <option class='w3-btn' value='red'>Red</option>
      		<option class='w3-btn' value='pink'>Pink</option>
          <option class='w3-btn' value='deep-purple'>Purple</option>
          <option class='w3-btn' value='teal'>Teal</option>
      		<option class='w3-btn' value='cyan'>Cyan</option>
          </select></p>";
		echo "<button class='w3-theme-d3' type='button'>Restart Progress</button>       ";
		echo "<button class='w3-theme-d3' type='button'>Delete User Account</button>     ";
		echo "<button class='w3-theme-d3' type='button'>Change User Password</button>";
		echo "<br><br><button class='w3-theme-d3' onclick='goBack()'>Go Back</button><br><br>";
		echo "</div>";
?>

	<script>
		function goBack() {
    			window.history.back();
		}
		function updateTheme(theme) {
			var now = new Date();
			var time = now.getTime();
			var expireTime = time + 1000*360000;
			now.setTime(expireTime);
			var tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
			document.getElementById("ourTheme").href ="https://www.w3schools.com/lib/w3-theme-"+theme+".css";
			document.cookie = 'theme='+theme+';expires='+now.toGMTString()+';path=/';
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
