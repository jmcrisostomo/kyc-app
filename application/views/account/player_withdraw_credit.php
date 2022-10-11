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
                <i class="fas fa-download fa-fw"></i>
                Withdraw
              </h3>
            </div>

            <?php if (isset($_SESSION['ACCOUNT_TYPE_NUMBER']) && ($_SESSION['ACCOUNT_TYPE_NUMBER'] == 'ACC-TYPE-0004' || $_SESSION['ACCOUNT_TYPE_NUMBER'] == 'ACC-TYPE-0005')): ?>
            <div class="mb-3">

              <p class="text-light d-none">
                UNPAID COMMISSION BALANCE:
                <?php
                  $get_unpaid_commission = $this->db->query("SELECT UNPAID_COMMISSION FROM tblaccount WHERE ACCOUNT_NUMBER = '".$_SESSION['ACCOUNT_NUMBER']."';");
                ?>
                <span class="fw-bold" id="spanUnpaidCommission"><?php echo number_format($get_unpaid_commission->row('UNPAID_COMMISSION'), 2, '.', ','); ?></span>
              </p>

              <label for="selectWithdrawType" class="fw-bold text-light mb-1">Withdraw Type</label>
              <select id="selectWithdrawType" class="form-select">
                <option value="CREDIT" selected>CREDIT</option>
                <option value="COMMISSION">COMMISSION</option>
              </select>
            </div>
            <?php endif ?>

            <div class="mb-3">
              <label for="selectOutletType" class="fw-bold text-light mb-1">Outlet Type</label>
              <select id="selectOutletType" class="form-select">
                <option value="" disabled selected>--- Select Outlet Type ---</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="selectOutlet" class="fw-bold text-light mb-1">Outlet</label>
              <select id="selectOutlet" class="form-select">
                <!-- <option value="" disabled selected>-- Select Outlet --</option> -->
              </select>
            </div>
            <!-- <div class="mb-3">
              <label for="selectOutletAccount" class="fw-bold text-light mb-1">Outlet Account</label>
              <select id="selectOutletAccount" class="form-select">
                <!- - <option value="" disabled selected>-- Select Outlet Account --</option> - ->
              </select>
            </div> -->
            <div id="requiredFields" class="d-none">

              <!-- <div class="mb-3">
                <label for="inputSenderAccountName" class="fw-bold text-light mb-1">Sender Account Name</label>
                <input id="inputSenderAccountName" class="form-control" type="text" placeholder="Required" readonly>
              </div>

              <div class="mb-3">
                <label for="inputSenderAccountNumber" class="fw-bold text-light mb-1">Sender Account #</label>
                <input id="inputSenderAccountNumber" class="form-control" type="text" placeholder="Required" readonly>
              </div>

              <div class="mb-3">
                <label for="inputSenderCardNumber" class="fw-bold text-light mb-1">Sender Card #</label>
                <input id="inputSenderCardNumber" class="form-control" type="text" name="card_number" placeholder="(Optional)" readonly>
              </div> -->

              <hr style="height: 1px; background-color: #fff; border: none;">

              <!-- <div class="mb-3">
                <label for="inputReferenceNumber" class="fw-bold text-light mb-1">Reference #</label>
                <input id="inputReferenceNumber" class="form-control" type="text" name="reference_number" placeholder="Required" required>
              </div>

              <div class="mb-3">
                <label for="inputControlNumber" class="fw-bold text-light mb-1">Control #</label>
                <input id="inputControlNumber" class="form-control" type="text" name="control_number" placeholder="Required" required>
              </div> -->

              <div class="mb-3">
                <label for="inputReceiverAccountName" class="fw-bold text-light mb-1">Receiver Account Name</label>
                <input id="inputReceiverAccountName" class="form-control" type="text" name="account_name" placeholder="Required" required>
              </div>

              <div class="mb-3">
                <label for="inputReceiverAccountNumber" class="fw-bold text-light mb-1">Receiver Account #</label>
                <input id="inputReceiverAccountNumber" class="form-control" type="text" name="account_number" placeholder="Required" required>
              </div>

              <div class="mb-3">
                <label for="inputReceiverCardNumber" class="fw-bold text-light mb-1">Receiver Card #</label>
                <input id="inputReceiverCardNumber" class="form-control" type="text" name="card_number" placeholder="(Optional)">
              </div>

              <div class="mb-3">
                <label for="inputAmount" class="fw-bold text-light mb-1">Amount (Min: <span id="spanMinWithdraw"></span>; Max: <span id="spanMaxWithdraw"></span>;)</label>
                <input id="inputAmount" class="form-control" type="number" name="amount" placeholder="Required" step="0.01" required>
              </div>

              <!-- <div class="mb-3">
                <label for="textAreaNotes" class="fw-bold text-light mb-1">Notes</label>
                <textarea id="textAreaNotes" class="form-control" rows="4" name="notes" placeholder="(Optional)" disabled=""></textarea>
              </div>

              <div class="mb-3">
                <input class="form-control" id="inputDepositFile" style="" type="file" name="Add_Image" accept=".jpeg,.jpg,.png,.bmp,.tiff,.tif" disabled>
              </div> -->

              <div class="mb-3">
                <button id="btnSendRequest" class="btn btn-success btn-lg">Send Request</button>
              </div>
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

<script type="text/javascript" src="<?php echo base_url('assets/js/player.withdraw.credit.js'); ?>"></script>