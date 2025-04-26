<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  exit(0);
};

require __DIR__ . "/../../models/CosModel/CosModel.php";
// require __DIR__ . "/../../../config/COSConfig/CosConfig.php";

if ($_SERVER['REQUEST_METHOD'] === "POST") {
  $rawData = file_get_contents("php://input");
  $data = json_decode($rawData, true);

  if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit;
  }

  try {
    $result = insertCostOfSell(
      $data['cosName'] ?? null,
      $data['cosCategory'] ?? null,
      $data['cosPrice'] ?? null,
      $data['cosQuantity'] ?? null,
      $data['cosDate'] ?? null
    );
    
    http_response_code(201);
    echo json_encode([
      'status' => 'success',
      'massage' => "Record inserted successfully",
      'data' => $result
    ]);
  } catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
      'status' => 'error',
      'data' => $e->getMessage()
    ]);
  }
  exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not available"]);
?>