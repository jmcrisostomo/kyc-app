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
                <i class="fas fa-cog fa-fw"></i>
                Settings
              </h3>
            </div>
            <?php
              $Session_account_number = $this->db->escape($_SESSION['ACCOUNT_NUMBER']);
              $get_user_infomation = $this->db->query("SELECT EMAIL_ADDRESS, CONTACT_NUMBER FROM tblaccount WHERE ACCOUNT_NUMBER = $Session_account_number");
            ?>
            <div class="mb-3">
              <label for="inputEmailAddress" class="fw-bold text-light mb-1">Email Address</label>
              <div class="input-group-box">
                <input id="inputEmailAddress" class="form-control" type="email" name="email_address" placeholder="Email Address" value="<?php echo $get_user_infomation->row('EMAIL_ADDRESS'); ?>" required>
              </div>
            </div>

            <div class="mb-3">
              <label for="inputContactNumber" class="fw-bold text-light mb-1">Contact #</label>
              <div class="input-group-box">
                <input id="inputContactNumber" class="form-control" type="text" name="contact_number" placeholder="Contact Number" value="<?php echo $get_user_infomation->row('CONTACT_NUMBER'); ?>" required>
              </div>
            </div>
            <div class="mb-3">
              <button id="btnSave" class="btn btn-success btn-lg">Save</button>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</div> <!-- /.site-content -->

<script type="text/javascript" src="<?php echo base_url('assets/js/player.settings.js'); ?>"></script>