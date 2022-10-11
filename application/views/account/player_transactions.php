<?php $this->load->view('player/common/navbar'); ?>

<style type="text/css">
  html, body {
    background: #212529!important;
  }
  .form-control, .form-select {
    border-radius: 0;
  }
  [role="tablist"] > .nav-item > .nav-link:hover {
    color: #000;
  }

</style>


<link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/datatables/datatables.min.css'); ?>"/>


<div id="content" class="site-content">

  <div class="row g-0 justify-content-center">

    <?php $this->load->view('player/common/sidebar'); ?>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10">

      <div class="row">
        <div class="col-12">
          <div class="container">
            <div class="mb-3">
              <h3 class="my-3 text-light">
                <i class="fas fa-list fa-fw"></i>
                Transactions
              </h3>
            </div>

            <div class="mb-3 bg-light p-3">
              <ul class="nav nav-tabs" id="transaction" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="deposit-tab" data-bs-toggle="tab" data-bs-target="#deposit" type="button" role="tab" aria-controls="deposit" aria-selected="false">Deposit</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="withdraw-tab" data-bs-toggle="tab" data-bs-target="#withdraw" type="button" role="tab" aria-controls="withdraw" aria-selected="true">Withdraw</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="bet-tab" data-bs-toggle="tab" data-bs-target="#bet" type="button" role="tab" aria-controls="bet" aria-selected="false">Bet</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="send-credits-tab" data-bs-toggle="tab" data-bs-target="#send-credits" type="button" role="tab" aria-controls="send-credits" aria-selected="false">Send Credits</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="convert-commission-tab" data-bs-toggle="tab" data-bs-target="#convert-commission" type="button" role="tab" aria-controls="convert-commission" aria-selected="false">Convert Commission</button>
                </li>
              </ul>
              <div class="tab-content" id="transactionContent">
                <div class="tab-pane fade show active" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">

                  <div class="table-responsive mt-3">
                    <table id="dataTableDeposit" class="table table-sm table-bordered table-striped compact nowrap" style="width: 100%;" cellpadding="0">
                      <thead>
                        <tr>
                          <th class="text-center">Transaction #</th>
                          <th class="text-center">Status</th>
                          <th class="text-center">Outlet</th>
                          <th class="text-center">Credits</th>
                          <th class="text-center">Date</th>
                        </tr>
                      </thead>
                       <tbody></tbody>
                    </table>
                  </div>

                </div>
                <div class="tab-pane fade" id="withdraw" role="tabpanel" aria-labelledby="withdraw-tab">

                  <div class="table-responsive mt-3">
                    <table id="dataTableWithdraw" class="table table-sm table-bordered table-striped compact nowrap" style="width: 100%;" cellpadding="0">
                      <thead>
                        <tr>
                          <th class="text-center">Transaction #</th>
                          <th class="text-center">Withdraw Type</th>
                          <th class="text-center">Status</th>
                          <th class="text-center">Outlet</th>
                          <th class="text-center">Credits/Amount</th>
                          <th class="text-center">Date</th>
                        </tr>
                      </thead>
                       <tbody></tbody>
                    </table>
                  </div>

                </div>
                <div class="tab-pane fade" id="bet" role="tabpanel" aria-labelledby="bet-tab">

                  <div class="table-responsive mt-3">
                    <table id="dataTableBetHistory" class="table table-sm table-bordered table-striped compact nowrap" style="width: 100%;" cellpadding="0">
                      <thead>
                        <tr>
                          <th class="text-center">Match #</th>
                          <th class="text-center">Status</th>
                          <th class="text-center">Bet To</th>
                          <th class="text-center">Amount</th>
                          <th class="text-center">Amount Won</th>
                          <th class="text-center">Date</th>
                        </tr>
                      </thead>
                       <tbody></tbody>
                    </table>
                  </div>

                </div>
                <div class="tab-pane fade" id="send-credits" role="tabpanel" aria-labelledby="send-credits-tab">

                  <div class="table-responsive mt-3">
                    <table id="dataTableSendCredits" class="table table-sm table-bordered table-striped compact nowrap" style="width: 100%;" cellpadding="0">
                      <thead>
                        <tr>
                          <th class="text-center">Transaction #</th>
                          <th class="text-center">Status</th>
                          <th class="text-center">To</th>
                          <th class="text-center">Credits</th>
                          <th class="text-center">Date</th>
                        </tr>
                      </thead>
                       <tbody></tbody>
                    </table>
                  </div>

                </div>
                <div class="tab-pane fade" id="convert-commission" role="tabpanel" aria-labelledby="convert-commission-tab">

                  <div class="table-responsive mt-3">
                    <table id="dataTableConvertCommission" class="table table-sm table-bordered table-striped compact nowrap" style="width: 100%;" cellpadding="0">
                      <thead>
                        <tr>
                          <th class="text-center">Transaction #</th>
                          <th class="text-center">Status</th>
                          <th class="text-center">Credits</th>
                          <th class="text-center">Date</th>
                        </tr>
                      </thead>
                       <tbody></tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</div> <!-- /.site-content -->

<!-- Datatables JS Library -->
<script src="<?php echo base_url('assets/datatables/pdfmake.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/datatables/vfs_fonts.js'); ?>"></script>
<script src="<?php echo base_url('assets/datatables/datatables.min.js'); ?>"></script>

<script type="text/javascript" src="<?php echo base_url('assets/js/player.transactions.js'); ?>"></script>