<?php $this->load->view('player/common/navbar'); ?>

<style type="text/css">
  html, body {
    background: #212529!important;
  }
  .form-control, .form-select {
    border-radius: 0;
  }
</style>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tarekraafat-autocomplete.js/8.3.2/css/autoComplete.min.css">

<style type="text/css">
  /*-- autoComplete Override --*/

  #autoComplete {
    /*padding: unset;*/
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    color: #000;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background-image: unset;
  }


  #autoComplete::selection,
  #autoComplete:focus,
  #autoComplete:focus::selection,
  #autoComplete:hover,
  #autoComplete:hover::placeholder,
  #autoComplete::placeholder {
    color: unset;
    border: unset;
  }
  #autoComplete:focus::placeholder {
    color: #9E9E9E;
  }
  #autoComplete_list {
    position: relative;
    border-radius: unset;
    padding: 5px;;
    margin: unset;
  }
  #autoComplete_list .no_result span {
    /*color: #424242;*/
    color: #41464b !important;
  }

  .autoComplete_highlighted {
    color: #f44336;
    font-weight: 700;
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
                <i class="fas fa-share fa-fw"></i>
                Send Credits
              </h3>
            </div>
            <div class="mb-3">
              <label for="inputAmount" class="fw-bold text-light mb-1">Amount</label>
              <div class="input-group-box">
                <input id="inputAmount" class="form-control" type="number" name="amount" placeholder="Required" step="0.01" required>
                <span><i class="far fa-question-circle" data-bs-toggle="tooltip" data-bs-placement="left" title="You can sell your credits to your downlines for faster transaction; It is recommended that you get the payment first before sending credits."></i></span>
              </div>
            </div>
            <!-- <div class="mb-3">
              <label for="inputUsername" class="fw-bold text-light mb-1">Username</label>
              <div class="d-flex">
                <div class="flex-fill">
                  <input id="inputUsername" class="form-control" type="text" name="send_to" placeholder="Required" required>
                </div>
              </div>
            </div> -->

            <div class="mb-3">
              <label for="autoCompleteUsername" class="fw-bold text-light mb-1">Username</label>
              <input id="autoCompleteUsername" class="form-control" type="text" name="send_to" placeholder="Required" tabindex="1" required>
            </div>

            <div class="mb-3">
              <button id="btnSendRequest" class="btn btn-success btn-lg">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</div> <!-- /.site-content -->


<script src="https://cdnjs.cloudflare.com/ajax/libs/tarekraafat-autocomplete.js/8.3.2/js/autoComplete.js"></script>

<!-- <script type="text/javascript" src="<?php echo base_url('assets/node_modules/@tarekraafat/autocomplete.js/dist/js/autoComplete.min.js'); ?>"></script> -->

<script type="text/javascript" src="<?php echo base_url('assets/js/player.send-credit.js'); ?>"></script>