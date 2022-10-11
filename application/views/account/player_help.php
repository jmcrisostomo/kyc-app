<?php $this->load->view('player/common/navbar'); ?>

<style type="text/css">
  html, body {
    background: #212529!important;
  }
  .form-control, .form-select {
    border-radius: 0;
  }
</style>

<div id="content" class="site-content">

  <div class="row g-0 justify-content-center">

    <?php $this->load->view('player/common/sidebar'); ?>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10">

      <div class="row">
        <div class="col-12">
          <div class="container" style="max-width: 700px;">
            <div class="mb-3">
              <h3 class="my-3 text-light">
                <i class="fas fa-question-circle fa-fw"></i>
                Help
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</div> <!-- /.site-content -->

<!-- modalOpenArena -->
<div class="modal fade" id="modalOpenArena" tabindex="-1" aria-labelledby="modalOpenArenaLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="floating-btn-open-arena">
          <button id="btnOpenArena" type="button" class="btn btn-success btn-lg btn-open-arena">
            <span>Open<br>Arena</span>
          </button>
      </div>
    </div>
  </div>
</div>

<div id="floatingCloseArena" class="floating-btn-close-arena d-none">
    <button id="btnCloseArena" type="button" class="btn btn-danger btn-lg btn-close-arena">
      <span>Close<br>Arena</span>
    </button>
</div>

<!-- <script type="text/javascript" src="<?php echo base_url('assets/js/player.Withdraw.credit.js'); ?>"></script> -->