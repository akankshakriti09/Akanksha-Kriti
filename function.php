<?php
header("Location:feedback.html");
$link=mysqli_connect("localhost","id10444663_lily","lilyKriti","id10444663_tourism");
if(mysqli_connect_error()){die("there was an error connecting to database");
}$Name=$_POST['name'];
$Email=$_POST['email'];
$Message=$_POST['message'];
$query="INSERT INTO feedback (Name,Email,Message)VALUES('$Name','$Email','$Message')";
if(!mysqli_query($link, $query)){
echo "<script>alert('Error found')</script>";
}
else{
echo '<script language="javascript">';
echo 'alert("message successfully sent")';
echo '</script>';
}?>