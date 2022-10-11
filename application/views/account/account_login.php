<?php //$this->load->view('player/common/navbar'); ?>

<!-- <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/login.css'); ?>"> -->

<div id="content" class="site-content">
  <section id="login">
    <div class="container">
      <div class="logo-container">
        <img class="img-fluid d-block mx-auto p-3 breathing" src="<?php echo base_url('assets/images/login/pepo-logo.png'); ?>" style="animation-delay: 250ms; z-index: 100;">
        <!-- <img class="img-fluid d-block mx-auto p-3 tilting" src="<?php echo base_url('assets/images/login/worker-login-seg-head.png'); ?>"  style="z-index: 200;"> -->
        <!-- <img class="img-fluid d-block mx-auto p-3 breathing" src="<?php echo base_url('assets/images/login/worker-login-seg-bust.png'); ?>" style="animation-delay: 250ms; z-index: 150;"> -->
      </div>
      <!-- <img class="img-fluid d-block mx-auto my-5" src="<?php echo base_url('assets/images/landing_page/logo_whole.png'); ?>" style="width: 200px;"> -->
      <form method="POST" action="<?php echo base_url('Auth/login'); ?>">
        <div class="row">
          <div class="col-md-12">
            <input type="text" class="form-control mb-3" placeholder="Username" name="username" required>
          </div>
          <div class="col-md-12">
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="btnEye" name="password" required>
              <button id="btnEye" class="btn" type="button"><i class="fa fa-eye-slash text-light"></i> <span class="text-light"></span></button>
            </div>
          </div>
          <div class="col-md-12">
            <button type="submit" class="btn btn-lg d-block w-100">Login</button>
          </div>

          <div class="col-md-12">
            <hr style="height: 1px; background-color: #000; border: none;">
          </div>

          <div class="col-md-12">
            <a href="<?php echo base_url('home/registration'); ?>" class="btn btn-lg d-block w-100">Register</a>
          </div>
        </div>
      </form>
    </div>
  </section>
</div> <!-- /.site-content -->

<script type="module" src="<?php echo base_url('assets/js/dist/login.bundle.js'); ?>"></script>