<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name='viewport'
     content='width=device-width, initial-scale=1.0, maximum-scale=1.0,
     user-scalable=0' >

    <!-- Icons -->
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo base_url('assets/apple-icon-57x57.png'); ?>">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo base_url('assets/apple-icon-60x60.png'); ?>">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo base_url('assets/apple-icon-72x72.png'); ?>">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo base_url('assets/apple-icon-76x76.png'); ?>">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo base_url('assets/apple-icon-114x114.png'); ?>">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo base_url('assets/apple-icon-120x120.png'); ?>">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo base_url('assets/apple-icon-144x144.png'); ?>">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo base_url('assets/apple-icon-152x152.png'); ?>">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo base_url('assets/apple-icon-180x180.png'); ?>">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo base_url('assets/android-icon-192x192.png'); ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo base_url('assets/favicon-32x32.png'); ?>">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo base_url('assets/favicon-96x96.png'); ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo base_url('assets/favicon-16x16.png'); ?>">
    <link rel="manifest" href="<?php echo base_url('assets/manifest.json'); ?>">
    <meta name="msapplication-TileColor" content="#000000">
    <meta name="msapplication-TileImage" content="<?php echo base_url('assets/ms-icon-144x144.png'); ?>">
    <meta name="theme-color" content="#000000">

    <?php
    /**
     *
     * FOR LOCALHOST
     *
     */

    if ($_SERVER['REMOTE_ADDR'] == "127.0.0.1"): ?>

    <!-- Bootstrap CSS -->
    <link href="<?php echo base_url( 'assets/node_modules/bootstrap/dist/css/bootstrap.min.css' ) ?>" rel="stylesheet">

    <!-- FontAwesome CSS -->
    <link rel="stylesheet" href="<?php echo base_url('assets/node_modules/@fortawesome/fontawesome-free/css/all.css'); ?>">

    <!-- Animate CSS -->
    <link rel="stylesheet" href="<?php echo base_url('assets/node_modules/animate.css/animate.min.css'); ?>">

  <?php else: ?>


      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

      <!-- FontAwesome CSS -->
      <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.13/css/all.css">

      <!-- Animate CSS -->
      <link rel="stylesheet" href="<?php echo base_url('assets/node_modules/animate.css/animate.min.css'); ?>">
  <?php endif; ?>

    <!-- Account CSS -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/account.css'); ?>">

    <title><?php echo isset($meta_title) ? 'Pepo PH - ' . $meta_title : 'Pepo PH'; ?></title>


  </head>
  <body>

      <div id="popNotifications" class="pop-notifications">
          <div class="toast"><p>Sample Message</p></div>
      </div>