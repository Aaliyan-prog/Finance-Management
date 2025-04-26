<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if($_SERVER['REQUEST_METHOD'] === "OPTIONS"){
  exit;
}

require __DIR__ . "/../../../vendor/autoload.php";
require __DIR__ . "/../../models/ExpenseModel/DomesExpenseModel.php";

if($_SERVER["REQUEST_METHOD"] === "POST"){
  $rawData = file_get_contents('php://input');
  $data = json_decode($rawData, true);

  try {
    $result = insertDataDomesExpen(
      $data["domesName"] ?? null,
      $data["domesCategory"] ?? null,
      $data["domesPrice"] ?? null,
      $data["domesDate"] ?? null
    );

    http_response_code(201);
    echo json_encode([
      "status" => "Success",
      "Message" => "Data successfully recieved",
      "result" => $result
    ]);
  } catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
      "status" => "error",
      "Message" => $e->getMessage()
    ]);
  }
  exit;
}
?>