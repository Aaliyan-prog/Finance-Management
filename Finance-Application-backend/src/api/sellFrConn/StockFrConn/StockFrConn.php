<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

require __DIR__ . "/../../../../config/SellConfig/StockConfig/StockConfig.php";

try {
  $conn = getStockDbConnection();

  $stmt = $conn->prepare("SELECT * FROM stock");

  $stmt->execute();
  $sellResult = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($sellResult);
} catch (PDOException $e) {
  echo "error => failed to catch data: " . $e->getMessage();
}
