<?php
require __DIR__ . "/../../../../config/SellConfig/StockConfig/StockConfig.php";

function insertDataStockDb($stockName, $stockCategory, $stockPrice, $stockQuantity, $stockDate)
{
  $conn = getStockDbConnection();

  try {
    $formattedDate = date("Y-m-d", strtotime($stockDate));

    $stmt = $conn->prepare("INSERT INTO stock(stockName, stockCategory, stockPrice, stockQuantity, stockDate)
    VALUES(:stockName, :stockCategory, :stockPrice, :stockQuantity, :stockDate)");

    $stmt->bindParam(":stockName", $stockName);
    $stmt->bindParam(":stockCategory", $stockCategory);
    $stmt->bindParam(":stockPrice", $stockPrice);
    $stmt->bindParam(":stockQuantity", $stockQuantity);
    $stmt->bindParam(":stockDate", $formattedDate);

    if (!$stmt->execute()) {
      throw new Exception("Failed to insert record");
    };

    return [
      'stockName' => $stockName,
      'stockCategory' => $stockCategory,
      'stockPrice' => $stockPrice,
      'stockQuantity' => $stockQuantity,
      'stockDate' => $formattedDate
    ];
  } catch (PDOException $e) {
    echo $e->getMessage();
  }
}
