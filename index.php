<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        <link rel="stylesheet" href="/static/css/fancySelect.css" type="text/css">
        <link rel="stylesheet" href="/static/css/style.css" type="text/css">
        <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700&subset=cyrillic,latin' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Roboto:100,300,400&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div class="background"></div>
        <div class="container-1230px container-1230px--absolute">
            <?php include "bookmark.php";?>
        </div>
        <?php include "header.php";?>
        <?php
            if("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]" == "http://localhost:8000/")
                { include "main.php"; }

            else if ("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]" == "http://localhost:8000/step2")
                { include "step2.php"; }

            else if ("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]" == "http://localhost:8000/step3")
                { include "step3.php"; }

            else if ("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]" == "http://localhost:8000/order_completed")
                { include "order_completed.php"; }

            else if ("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]" == "http://localhost:8000/order_processing")
                { include "order_processing.php"; }
        ?>
        <?php include "footer.php";?>

        <script type="text/javascript" src="/static/js/jquery-2.1.4.min.js"></script>
        <script type="text/javascript" src="/static/js/fancySelect.js"></script>
        <script type="text/javascript" src="/static/js/script.js"></script>

    </body>
</html>