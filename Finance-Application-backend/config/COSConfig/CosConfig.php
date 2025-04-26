<?php
require __DIR__ . "/../../vendor/autoload.php";

try {
  $dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__, 2) . "/public");
  $dotenv->load();
} catch (Exception $e) {
  echo "failed to load env: " . $e->getMessage();
};

$cosdbName = $_ENV['COS_DB_NAME'];
$dbHost = $_ENV['COS_DB_HOST'];
$dbUser = $_ENV['COS_DB_USER'];
$dbPassword = $_ENV['COS_DB_PASSWORD'];

$host = $dbHost;
$username = $dbUser;
$password = $dbPassword;
$dbname = $cosdbName;

function getCosDbConnection () {
  global $host, $username, $password, $dbname;

  try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
  
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    return $conn;
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
}

?>