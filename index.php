<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        <link rel="stylesheet" href="/static/vendors/FancySelect/fancySelect.css" type="text/css">
        <link rel="stylesheet" href="/static/vendors/jquery-ui-1.11.4.custom/jquery-ui.min.css" type="text/css">
        <link rel="stylesheet" href="/static/desktop/css/style.css" type="text/css">
        <link href='http://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&subset=latin,cyrillic-ext' rel='stylesheet' type='text/css'>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div class="container-1230px container-1230px--absolute">
            <?php include "bookmark.php";?>
        </div>
        <?php include "header.php";?>

        <?php
            if(file_exists(basename('.' . $_SERVER['REQUEST_URI'] . '.php'))) {
                include (basename('.' . $_SERVER['REQUEST_URI'] . '.php'));
            }
            else {
                include "main.php";
            }
        ?>

        <?php include "footer.php";?>

        <script type="text/javascript" src="/static/vendors/jquery-2.1.4.min.js"></script>
        <script type="text/javascript" src="/static/vendors/jquery-ui-1.11.4.custom/jquery-ui.min.js"></script>
        <script type="text/javascript" src="/static/vendors/FancySelect/fancySelect.js"></script>
        <script type="text/javascript" src="/static/desktop/js/script.js"></script>

    </body>
</html>