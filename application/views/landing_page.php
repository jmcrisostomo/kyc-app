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

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    <!-- Landing Page CSS -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/landing-page.css'); ?>">

    <title><?php echo isset($meta_title) ? 'Sabong Republic - ' . $meta_title : 'Sabong Republic'; ?></title>
  </head>
  <body>

    <!-- navbar -->
    <header id="masthead" class="site-header navbar-static-top fixed-top" role="banner">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="<?php echo base_url(); ?>">
            <img class="img-fluid" src="<?php echo base_url('assets/images/landing_page/logo.png'); ?>" alt="logo" style="width: 55px;">
            <span class="navbar-text ms-3">
              SABONG REPUBLIC
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" hidden>HOME</a>
              </li>
              <li class="nav-item ms-md-3">
                <a class="nav-link " href="#play-now">PLAY</a>
              </li>
              <li class="nav-item ms-md-3">
                <a class="nav-link " href="#about-us">ABOUT US</a>
              </li>
              <li class="nav-item ms-md-3">
                <a class="nav-link " href="#contact-us">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div id="content" class="site-content">
      <section id="title">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-12">
              <div class="jumbotron my-3 text-light">
                <h1 class="h1 fw-bold text-uppercase">Sabong Republic</h1>
                <p>Take part and get ready to experience<br>firsthand the BEST online cockfighting-<br>A sport enjoyed by millions now<br>at your fingertips!</p>
                <p class="lead">
                  <a class="btn btn-danger btn-lg" href="<?php echo base_url('home/login'); ?>" role="button">PLAY NOW</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="someproductone" hidden>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img class="img-fluid" src="https://dummyimage.com/600x400/616161/fff">
            </div>
            <div class="col-md-6">
              <img class="img-fluid" src="https://dummyimage.com/600x400/546E7A/fff">
            </div>
          </div>
        </div>
      </section>

      <section id="someproducttwo" hidden>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img class="img-fluid" src="https://dummyimage.com/1260x600/5D4037/fff">
            </div>
          </div>
        </div>
      </section>

      <section id="howtofeature" hidden>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <img class="img-fluid" src="https://dummyimage.com/400x600/fff/000">
            </div>
            <div class="col-md-6">
              <p class="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div class="container">
          <img class="img-fluid mt-3" src="<?php echo base_url('assets/images/landing_page/logo.png'); ?>" style="width: 150px;">
          <p class="mt-1 mb-0  text-light">Sabong Republic</p>
          <p class="text-light d-block w-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </footer>
    </div> <!-- /.site-content -->

    <script type="text/javascript">

      let navitem_playnow = document.querySelector('[href="#play-now"]');
      navitem_playnow.addEventListener('click', function(e){
        document.querySelector('#content').scrollIntoView({
            behavior: 'smooth'
        });
      });

      let navitem_howto = document.querySelector('[href="#how-to"]');
      navitem_howto.addEventListener('click', function(e){
        document.querySelector('#howtofeature').scrollIntoView({
            behavior: 'smooth'
        });
      });
    </script>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
    -->
  </body>
</html>