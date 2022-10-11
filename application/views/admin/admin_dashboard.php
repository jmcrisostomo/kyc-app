<?php $this->load->view('admin/common/navbar'); ?>

<style type="text/css">
  html, body {
    margin-top: unset;
  }

  .btn {
    border-radius: 0;
  }

  .site-content .dashboard {
    height: 100vh;
  }
  @media only screen and (max-device-width:480px){
    .site-content {
      margin-top: 5em;
    }
    .site-content .dashboard {
      height: unset;
    }
  }

</style>

<div id="content" class="site-content">
  <div class="row g-0 justify-content-center">

    <?php $this->load->view('admin/common/sidebar'); ?>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 offset-md-3 offset-lg-2">

      <div class="container">
        <div class="d-flex align-items-center justify-content-center dashboard">
          <div class="row">

            <h3>Hello World <i class="fas fa-ghost"></i></h3>

          </div>
        </div>

      </div>
    </main>


  </div>
</div> <!-- /.site-content -->

