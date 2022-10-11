<?php $this->load->view('admin/common/navbar'); ?>

<style type="text/css">
  html, body {
    margin-top: 2em;
  }

  .btn {
    border-radius: 0;
  }

  .site-content .dashboard {
    height: 100vh;
  }

  @media only screen and (max-device-width:480px){
    .site-content {
      /*margin-top: 5em;*/
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

      <div class="container p-3">
        <div class="mb-3">
          <h3 class="my-3 text-dark">
            <i class="fas fa-user-plus"></i>
            Accounts
          </h3>
        </div>

        <div class="table-responsive mt-3">
            <table id="dataTableAccounts" class="table table-sm table-bordered table-striped compact nowrap" style="width: 100%;" cellpadding="0">
              <thead>
                <tr>
                  <th class="text-center">Account #</th>
                  <th class="text-center">Account Type</th>
                  <th class="text-center">State</th>
                  <th class="text-center">Username</th>
                  <th class="text-center">Country</th>
                  <th class="text-center">Contact #</th>
                  <th class="text-center">Email</th>
                  <th class="text-center">Invitation Code</th>
                  <th class="text-center">View Account</th>
                </tr>
              </thead>
              <tbody>
                  <?php if ($account_data->result() != NULL): ?>
                      <?php foreach ($account_data->result() as $account): ?>
                        <tr>
                            <td><?php echo $account->ACCOUNT_NUMBER; ?></td>
                            <td><?php echo $account->ACCOUNT_TYPE; ?></td>
                            <td><?php echo ($account->STATE == "ACTIVE" ? '<span class="badge bg-success">'.$account->STATE.'</span>' : '<span class="badge bg-danger">'.$account->STATE.'</span>'); ?></td>
                            <td><?php echo $account->USERNAME; ?></td>
                            <td><?php echo $account->COUNTRY; ?></td>
                            <td><?php echo $account->CONTACT_NUMBER; ?></td>
                            <td><?php echo $account->EMAIL_ADDRESS; ?></td>
                            <td><?php echo $account->INVITATION_CODE; ?></td>
                            <td>[Buttons]</td>
                        </tr>
                      <?php endforeach ?>
                  <?php endif ?>
              </tbody>
            </table>
          </div>

      </div>
    </main>


  </div>
</div> <!-- /.site-content -->

<script type="text/javascript" src="<?php echo base_url('assets/js/admin.accounts.js'); ?>"></script>


