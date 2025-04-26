<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if($_SERVER["REQUEST_METHOD"] === "OPTIONS"){
  exit;
}

require __DIR__ . "/../../models/SellModel/SellModel.php";

if($_SERVER["REQUEST_METHOD"] === "POST"){
  $rawData = file_get_contents("php://input");
  $data = json_decode($rawData, true);

  try {
    $result = insertDataSellDb(
      $data['sellName'] ?? null,
      $data['sellCategory'] ?? null,
      $data['sellPrice'] ?? null,
      $data['sellQuantity'] ?? null,
      $data['sellDate'] ?? null
    );

    http_response_code(201);
    echo json_encode([
      "Status" => "Success",
      "Message" => "Data Successfully recieved",
      "Result" => $result
    ]);
  } catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
      "Status" => "error",
      "Message" => $e->getMessage()
    ]);
  }
  exit;
}
?>