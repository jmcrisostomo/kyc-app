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
                <i class="fas fa-balance-scale fa-fw"></i>
                Convert Commission
              </h3>
            </div>
            <div class="mb-3">
              <p class="mb-0 text-light">
                <?php
                  $account_number = $this->db->escape($_SESSION['ACCOUNT_NUMBER']);
                  $get_unpaid_comms = $this->db->query("SELECT UNPAID_COMMISSION, CREDITS FROM tblaccount WHERE ACCOUNT_NUMBER = $account_number");
                ?>
                <strong>Your Credits: </strong><span id="spanCredits"><?php echo number_format($get_unpaid_comms->row('CREDITS'), 2, '.', ','); ?></span>
                <br>
                <strong>Your Unpaid Commission: </strong><span id="spanUnpaidCommission"><?php echo number_format($get_unpaid_comms->row('UNPAID_COMMISSION'), 2, '.', ','); ?></span>
              </p>
            </div>
            <div class="mb-3">
              <label for="inputAmount" class="fw-bold text-light mb-1">Amount</label>
              <div class="input-group-box">
                <input id="inputAmount" class="form-control" type="number" name="amount" placeholder="Required" step="0.01" required>
                <span><i class="far fa-question-circle" data-bs-toggle="tooltip" data-bs-placement="left" title="Convert your commission to credits; You can either withdraw or convert your commission but only credits can be used to bet or sell to your sub-coordinators and downlines."></i></span>
              </div>
            </div>
            <div class="mb-3">
              <button id="btnSendRequest" class="btn btn-success btn-lg">Convert</button>
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

<script type="text/javascript" src="<?php echo base_url('assets/js/player.convert-commission.js'); ?>"></script>