<?php $this->load->view('account/common/navbar'); ?>

<style type="text/css">
  .form-control, .form-select {
    border-radius: 0;
  }
  #content {
    margin-bottom: 3rem;
  }
</style>

<div id="content" class="site-content">

  <div class="row justify-content-center">

    <?php $this->load->view('account/common/sidebar'); ?>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10">
      <div class="container">
        <h1>Hello World</h1>
        
      </div>
    </main>

  </div>
</div> <!-- /.site-content -->

<script type="text/javascript" src="<?php echo base_url('assets/clipboard.js/dist/clipboard.min.js'); ?>"></script>
<!-- <script type="text/javascript" src="<?php echo base_url('assets/js/player.dashboard.js'); ?>"></script> -->
