<?php
require __DIR__ . "/../../../config/ExpenseConfig/ExpenseConfig.php";

function insertExpense ($expenseName, $expensecategory, $expensePrice, $expensedate) {
  $conn = getExpenseDbConnect();
  
  try {
    $formattedDate = date('Y-m-d', strtotime($expensedate));

    $stmt = $conn->prepare("INSERT INTO ExpenseTable(expenseName, expenseCategory, expensePrice, expenseDate)
    VALUES(:expenseName, :expenseCategory, :expensePrice, :expenseDate)");

    $stmt->bindParam(':expenseName', $expenseName);
    $stmt->bindParam(':expenseCategory', $expensecategory);
    $stmt->bindParam(':expensePrice', $expensePrice);
    $stmt->bindParam(':expenseDate', $formattedDate);
    
    if(!$stmt->execute()){
      throw new Exception('Failed to insert record');
    };

    return [
      'expenseName' => $expenseName,
      'expenseCategory' => $expensecategory,
      'expensePrice' => $expensePrice,
      'expenseDate' => $formattedDate,
    ];

    echo "New record inserted";
  } catch (PDOException $e) {
    echo 'Error: ' . $e->getMessage(); 
  }
}
?>