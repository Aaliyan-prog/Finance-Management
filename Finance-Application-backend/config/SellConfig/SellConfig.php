<?php
require __DIR__ . "/../../vendor/autoload.php";

try {
  $dotenv = Dotenv\Dotenv::createImmutable(dirname(
  __DIR__, 2) . "/public");
  $dotenv->load();
} catch (Exception $e) {
  echo "Failed to recieved env";
}

$dbName = $_ENV["COS_DB_NAME"];
$dbHost = $_ENV["COS_DB_HOST"];
$dbUser = $_ENV["COS_DB_USER"];
$dbPassword = $_ENV["COS_DB_PASSWORD"];

function getSellDbConnection () {
  global $dbName, $dbHost, $dbUser, $dbPassword;

  try {
    $conn = new PDO("mysql:host={$dbHost};dbname={$dbName}", $dbUser, $dbPassword);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $conn;
  } catch (PDOException $e) {
    echo $e->getMessage();
  };
}
?>