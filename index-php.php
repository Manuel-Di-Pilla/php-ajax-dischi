<?php
  include __DIR__.'/server/database.php';
?>



<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>spotify</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <link rel="stylesheet" href="dist/app.css">
  </head>
  <body>
    <div class="header">
      <i class="fab fa-spotify"></i>
    </div>
    <div class="main">
      <div class="list">
        <?php foreach ($database as $value) { ?>
          <div class="music">
            <div class="img"> <img src="<?php echo $value['poster'] ?>" alt=""> </div>
            <p class="title"><?php echo $value['title'] ?></p>
            <p class="author"><?php echo $value['author'] ?></p>
            <p class="year"><?php echo $value['year'] ?></p>
          </div>
        <?php } ?>
      </div>
    </div>
  </body>
</html>
