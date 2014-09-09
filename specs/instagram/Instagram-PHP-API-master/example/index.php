<?php
require '../instagram.class.php';

// initialize class
$instagram = new Instagram(array(
  'apiKey'      => 'db64ea18e8394b63b6c4309250b4ea6a',
  'apiSecret'   => '1e672be29aab4d2e88a79f3dc8919eee',
  'apiCallback' => 'http://test.me/php/api/instagram/Instagram-PHP-API-master/example/success.php' // must point to success.php
));

// create login URL
$loginUrl = $instagram->getLoginUrl();

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram - OAuth Login</title>
    <link rel="stylesheet" type="text/css" href="assets/style.css">
    <style>
      .login {
        display: block;
        font-size: 20px;
        font-weight: bold;
        margin-top: 50px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header class="clearfix">
        <h1>Instagram <span>display your photo stream</span></h1>
      </header>
      <div class="main">
        <ul class="grid">
          <li><img src="assets/instagram-big.png" alt="Instagram logo"></li>
          <li>
            <a class="login" href="<? echo $loginUrl ?>">» Login with Instagram</a>
            <h>Use your Instagram account to login.</h4>
          </li>
        </ul>
        <!-- GitHub project -->
        <footer>
          <p>created by <a href="https://github.com/cosenary/Instagram-PHP-API">cosenary's Instagram class</a>, available on GitHub</p>
        </footer>
      </div>
    </div>
  </body>
</html>