<?php
require __DIR__ . "/../../../config/SellConfig/SellConfig.php";

function insertDataSellDb ($sellName, $sellCategory, $sellPrice, $sellQuantity, $sellDate) {
  $conn = getSellDbConnection();

  try {
    $formattedDate = date("Y-m-d", strtotime($sellDate));
    $sellTotal = $sellQuantity * $sellPrice;

    $stmt = $conn->prepare("INSERT INTO sell(sellName, sellCategory, sellPrice, sellQuantity, sellDate, sellTotal)
    VALUES(:sellName, :sellCategory, :sellPrice, :sellQuantity, :sellDate, :sellTotal)");

    $stmt->bindParam(":sellName", $sellName);
    $stmt->bindParam(":sellCategory", $sellCategory);
    $stmt->bindParam(":sellPrice", $sellPrice);
    $stmt->bindParam(":sellQuantity", $sellQuantity);
    $stmt->bindParam(":sellDate", $formattedDate);
    $stmt->bindParam(":sellDate", $formattedDate);
    $stmt->bindParam(":sellTotal", $sellTotal);

    if(!$stmt->execute()){
      throw new Exception("Failed to insert record");
    };

    return [
      'sellName' => $sellName,
      'sellCategory' => $sellCategory,
      'sellPrice' => $sellPrice,
      'sellQuantity' => $sellQuantity,
      'sellDate' => $formattedDate,
      'sellTotal' => $sellTotal,
    ];
    
  } catch (PDOException $e) {
    echo $e->getMessage();
  }
}
?>