<?php
// require __DIR__ . "/../../controllers/CostOfSell/CostOfSell.php";
require __DIR__ . "/../../../config/COSConfig/CosConfig.php";

function insertCostOfSell ($cosName, $cosCategory, $cosPrice, $cosQuantity, $cosDate) {
  $conn = getCosDbConnection();

  try {
    $formattedDate = date('Y-m-d', strtotime($cosDate));
    $cosTotal = $cosPrice * $cosQuantity;

    $stmt = $conn->prepare("INSERT INTO costofSellTable (cosName, cosCategory, cosPrice, cosQuantity, cosDate, cosTotal)
    VALUES(:cosName, :cosCategory, :cosPrice, :cosQuantity, :cosDate, :cosTotal)");

    $stmt->bindParam(':cosName', $cosName);
    $stmt->bindParam(':cosCategory', $cosCategory);
    $stmt->bindParam(':cosPrice', $cosPrice);
    $stmt->bindParam(':cosQuantity', $cosQuantity);
    $stmt->bindParam(':cosDate', $formattedDate);
    $stmt->bindParam(':cosTotal', $cosTotal);

    if(!$stmt->execute()){
      throw new Exception("Failed to insert record");
    };

    return [
      'cosName' => $cosName,
      'cosCategory' => $cosCategory,
      'cosPrice' => $cosPrice,
      'cosQuantity' => $cosQuantity,
      'cosDate' => $formattedDate,
      'cosTotal' => $cosTotal,
    ];

    echo "Record Insert Successfully";
  } catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
}
?>