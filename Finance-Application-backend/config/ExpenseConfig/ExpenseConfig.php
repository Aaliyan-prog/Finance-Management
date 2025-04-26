<?php
require __DIR__ . '/../../vendor/autoload.php';

try {
  $dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__, 2) . '/public');
  $dotenv->load();
} catch (Exception $e) {
  'Failed to load .env' . $e->getMessage();
}

$ExpensedbName = $_ENV['COS_DB_NAME'];
$ExpenseHost = $_ENV['COS_DB_HOST'];
$ExpenseUser = $_ENV['COS_DB_USER'];
$ExpensePassword = $_ENV['COS_DB_PASSWORD'];

$host = $ExpenseHost;
$dbUser = $ExpenseUser;
$dbpassword = $ExpensePassword;
$dbName = $ExpensedbName;

function getExpenseDbConnect () {
  global $host, $dbUser, $dbpassword, $dbName;

  try {
    $conn = new PDO("mysql:host=$host;dbname=$dbName", $dbUser, $dbpassword);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $conn;
  } catch (PDOException $e) {
    echo 'Connection failed' . $e->getMessage();
  }
}
?>