<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

require __DIR__ . "/../../../config/ExpenseConfig/ExpenseConfig.php";

try {
  $conn = getExpenseDbConnect();

  $stmt = $conn->prepare("SELECT * FROM ExpenseTable");
  $stmt->execute();

  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($result);
} catch (PDOException $e) {
  echo "error => failed to catch data: " . $e->getMessage();
}
?>