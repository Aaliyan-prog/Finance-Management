<?php
// send Data from Database to the frontend
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

require __DIR__ . "/../../../config/COSConfig/CosConfig.php";

try {
  $conn = getCosDbConnection();
  
  $stmt = $conn->prepare('SELECT * FROM costofselltable');
  $stmt->execute();

  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($result);
  exit;
} catch (\PDOException $e) {
  http_response_code(500);
  echo "error => failed to fetch data: " . $e->getMessage();
  exit;
}
?>