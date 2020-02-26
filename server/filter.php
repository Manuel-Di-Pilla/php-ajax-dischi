<?php
  include __DIR__.'/database.php';
  $title = $_GET['titolo'];
  $array = [];
  foreach ($database as $value) {
    if ($title == $value['title']) {
      $array [] = $value;
    } 
  }
  header('Content-Type: application/json');
  echo json_encode($array);
?>
