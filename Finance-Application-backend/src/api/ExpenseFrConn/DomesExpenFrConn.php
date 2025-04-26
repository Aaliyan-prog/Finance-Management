<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

require __DIR__ . "/../../../config/ExpenseConfig/DomesticExpenseConfig.php";

try {
  $conn = getDomesExpenDbConnection();

  $stmt = $conn->prepare("SELECT * FROM domesticExpense");

  $stmt->execute();

  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($result);
} catch (Exception $e) {
  echo "Failed to retrive data: " . $e->getMessage();
}
?>