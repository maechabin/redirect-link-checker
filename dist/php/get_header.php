<?php
ini_set( 'display_errors', 1 );

$url = $_GET["url"];
$url = str_replace(" ", "+", $url);
$header = get_headers($url, 1);
$location = $header["Location"];
if ($location) {
  echo $location;
}
