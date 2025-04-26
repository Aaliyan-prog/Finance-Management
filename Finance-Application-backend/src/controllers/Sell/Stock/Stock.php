<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if($_SERVER["REQUEST_METHOD"] === "OPTIONS"){
  exit;
}

require __DIR__ . "/../../../models/SellModel/Stock/StockModel.php";

if($_SERVER["REQUEST_METHOD"] === "POST"){
  $rawData = file_get_contents("php://input");
  $data = json_decode($rawData, true);
  
  try {
    $result = insertDataStockDb(
      $data['stockName'] ?? null,
      $data['stockCategory'] ?? null,
      $data['stockPrice'] ?? null,
      $data['stockQuantity'] ?? null,
      $data['stockDate'] ?? null
    );

    http_response_code(201);
    echo json_encode([
      "status" => "success",
      "Massage" => "Data Recieved successfully",
      "result" => $result
    ]);
  } catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
      "status" => "error",
      "result" => $e->getMessage()
    ]);
  }
}
?>