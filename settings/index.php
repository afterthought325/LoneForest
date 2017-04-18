<?php session_start(); ?>
<!DOCTYPE html>
<html>
  <head>
  		<script src="../js/changeTheme.js" type="text/javascript"></script>

      <meta charset="utf-8">
      <title>Settings Page</title>
  	<link rel="stylesheet" href = "https://www.w3schools.com/w3css/4/w3.css">
  	<link rel="stylesheet" id="ourTheme" href="https://www.w3schools.com/lib/w3-theme-grey.css">
  </head>
<script>changeTheme();</script>
	<body class="w3-theme-l4 w3-card-3">

		<div class="w3-main" >
			<div class="w3-container w3-theme-d4 w3-card-3">
				<h1>Settings Page</h1>
			</div>

        <br><br>
		<div id="AllOptions" class='w3-content'>
            <div id='ThemeOptions' class="w3-row-padding">
 		        <div class="w3-large">Select a theme color</div>
                <div class="w3-theme-l4">
                  <button class='w3-btn w3-section w3-mobile w3-grey' value='grey' onClick='updateTheme(this.value)'>Grey</button>
                  <button class='w3-btn w3-section w3-mobile w3-blue-grey' value='blue-grey' onClick='updateTheme(this.value)'>Blue-Grey</button>
                  <button class='w3-btn w3-section w3-mobile w3-red' value='red' onClick='updateTheme(this.value)'>Red</button>
                  <button class='w3-btn w3-section w3-mobile w3-pink' value='pink' onClick='updateTheme(this.value)'>Pink</button>
                  <button class='w3-btn w3-section w3-mobile w3-deep-purple' value='deep-purple' onClick='updateTheme(this.value)'>Deep Purple</button>
                  <button class='w3-btn w3-section w3-mobile w3-teal' value='teal' onClick='updateTheme(this.value)'>Teal</button>
                  <button class='w3-btn w3-section w3-mobile w3-cyan' value='cyan' onClick='updateTheme(this.value)'>Cyan</button>
                </div>
            </div> 
            <div class="w3-row-padding">
		        <button class='w3-theme-d3 w3-btn w3-section w3-mobile' type='button'>Restart Progress</button>
		        <button class='w3-theme-d3 w3-btn w3-section w3-mobile' type='button'>Delete User Account</button>
		        <button class='w3-theme-d3 w3-btn w3-section w3-mobile' type='button'>Change User Password</button>
            </div>
		    <button class='w3-theme-d3 w3-btn w3-section w3-content w3-block' onclick='goBack()'>Go Back</button><br><br>
		</div>

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
	</script>
		</div>
	</div>
  </body>
</html>
