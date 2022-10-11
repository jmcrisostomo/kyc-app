<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Icons -->
    <link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/assets/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/assets/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
    <link rel="manifest" href="/assets/manifest.json">
    <meta name="msapplication-TileColor" content="#000000">
    <meta name="msapplication-TileImage" content="/assets/ms-icon-144x144.png">
    <meta name="theme-color" content="#000000">

    <title>Sabong Republic</title>

    <style>
      @import url(https://fonts.googleapis.com/css?family=Roboto);
      html {
        background: url(https://i.pinimg.com/originals/eb/05/94/eb05949a808157a114c54e45f383b2dc.gif) no-repeat center center fixed;
        background-size: cover;
        font-family: 'Roboto', sans-serif;
        background-size: 100% 100%;
        overflow: hidden;
      }
      h1 {
        font-size: 16em;
        margin: -0.2em .5em;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 0px;
      }

      h2{
        font-size: 4em;
        margin: .2em .5em;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 0px;
      }

      h3 {
        font-size: 2em;
        margin: .2em .5em;
        color: rgba(255, 255, 255, 0.6);
      }

      div.error {
        position: absolute;
        top: 19%;
        margin-top: -8em;
        width: 100%;
        text-align: center;
      }

      .alert {
      font-size: 2em;
      padding: 20px;
      background-color: #f44336;
      color: white;
      opacity: 1;
      transition: opacity 0.6s;
      margin-bottom: 15px;
    }
    </style>
  </head>

  <body style="margin: 0;">
    <div class="error">
      <div class="alert" id="message">
        <strong>You are currently banned by the Rider's Security System, please contact your coordinator or the administrators.</strong>
      </div>
      <h1>403 </h1>
      <h3>Forbidden Access</h3>
      <br>
      <h2>You have been banned.</h2>
    </div>
  </body>

  <script>
    var message = document.getElementById("message");
    setTimeout(function(){ message.style.opacity = "0"; }, 10000);
  </script>

</html>

<!-- . -->
