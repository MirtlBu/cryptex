<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        <link rel="stylesheet" href="/static/desktop/css/style.min.css" type="text/css">
        <link href='http://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&subset=latin,cyrillic-ext' rel='stylesheet' type='text/css'>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body onload="cookieConsent('cookie_eng')">
        <div id="cookie_eng" style="display: none;">
            {"palette":
                {"popup":
                    {"background":"#222", "link": "#089e95"},
                "button":
                    {"background":"#ff535f", "text": "#fff"}
                },
            "content":
                {"dismiss":"Got it!"},
            "message": "This website uses cookies to ensure you get the best experience on our website",
            "dismiss":"Got it!",
            "learnMore":"More info",
            "link":"https://frontend.cryptex24.com/en/"
            }
        </div>
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

        <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.1/cookieconsent.min.css" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.1/cookieconsent.min.js"></script>
        <script type="text/javascript">
            function cookieConsent(elem) {
                var options = document.getElementById(elem).textContent;
                window.cookieconsent.initialise(JSON.parse(options));
            }
        </script>

        <script type="text/javascript" src="/static/desktop/js/script.min.js"></script>

    </body>
</html>