<?php


$host = "mysql";
$user = "johnny";
$password = "johnny7791";
$dbname = "sondageRdc";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("ErrorsJob" . $conn->connect_error);
}
