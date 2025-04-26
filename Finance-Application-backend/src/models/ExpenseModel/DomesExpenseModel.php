<?php
require __DIR__ . "/../../../config/ExpenseConfig/DomesticExpenseConfig.php";

function insertDataDomesExpen ($domesName, $domesCategory, $domesPrice, $domesDate) {
  $conn = getDomesExpenDbConnection();

  try {
    $formatedDate = date("Y-m-d", strtotime($domesDate));

    $stmt = $conn->prepare("INSERT INTO domesticExpense(
    domesExpenName, domesExpenCategory, domesExpenPrice, domesExpenDate)
    VALUES(:domesExpenName, :domesExpenCategory, :domesExpenPrice, :domesExpenDate)");

    $stmt->bindParam(":domesExpenName", $domesName);
    $stmt->bindParam(":domesExpenCategory", $domesCategory);
    $stmt->bindParam(":domesExpenPrice", $domesPrice);
    $stmt->bindParam(":domesExpenDate", $formatedDate);

    if(!$stmt->execute()){
      throw new Exception("Failed to insert record");
    };

    return [
      'domesExpenName' => $domesName,
      'domesExpenCategory' => $domesCategory,
      'domesExpenPrice' => $domesPrice,
      'domesExpenDate' => $formatedDate,
    ];
  } catch (PDOException $e) {
    echo "Failed to record: " . $e->getMessage();
  };

}
?>