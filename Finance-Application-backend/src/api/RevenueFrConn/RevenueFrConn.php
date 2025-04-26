<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");
error_reporting(E_ALL); // Show all errors
ini_set('display_errors', 1); // Display errors (for debugging)

require __DIR__ . "/../../../vendor/autoload.php";
require __DIR__ . "/../../../config/COSConfig/CosConfig.php";
require __DIR__ . "/../../../config/ExpenseConfig/DomesticExpenseConfig.php";
require __DIR__ . "/../../../config/ExpenseConfig/ExpenseConfig.php";
require __DIR__ . "/../../../config/SellConfig/SellConfig.php";

try {
  $dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__, 3) . "/public");
  $dotenv->load();
} catch (Exception $e) {
  echo "Failed to recieved env" . $e->getMessage();
};

try {
  $connCocDb = getCosDbConnection();

  $stmtCosDb = $connCocDb->prepare("SELECT cosTotal, cosDate FROM costofselltable");
  $stmtSellDb = $connCocDb->prepare("SELECT sellTotal, sellDate FROM sell");
  $stmtExpenDb = $connCocDb->prepare("SELECT expensePrice, expenseDate FROM expensetable");
  $stmtDomesExpenDb = $connCocDb->prepare("SELECT domesExpenPrice, domesExpenDate FROM domesticexpense");

  $stmtCosDb->execute();
  $stmtSellDb->execute();
  $stmtExpenDb->execute();
  $stmtDomesExpenDb->execute();

  $resultCos = $stmtCosDb->fetchAll(PDO::FETCH_ASSOC);
  $resultSell = $stmtSellDb->fetchAll(PDO::FETCH_ASSOC);
  $resultExpen = $stmtExpenDb->fetchAll(PDO::FETCH_ASSOC);
  $resultDomesExpen = $stmtDomesExpenDb->fetchAll(PDO::FETCH_ASSOC);

  $response = [
    "cosTotals" => $resultCos,
    "sellTotals" => $resultSell,
    "expensePrices" => $resultExpen,
    "domesticExpenses" => $resultDomesExpen
  ];

  echo json_encode($response);
} catch (Exception $e) {
  echo $e->getMessage();
}

?>