<?php
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Expose-Headers: Location');

if (isset($_GET["u"])) {
  $url = $_GET["u"];
  $url = str_replace(" ", "+", $url);
  echo file_get_contents($url);
}
