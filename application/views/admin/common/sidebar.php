<nav class="col-md-3 col-lg-2 bg-dark sidebar">
  <div class="sidebar-sticky">

    <div class="user-content">
      <!-- <div class="user-img">
        <img class="img-fluid center" src="<?php //echo base_url('assets/admin/images/student.png');?>">
      </div> -->

      <?php if ($_SESSION['ACCOUNT_NUMBER']): ?>
              <?php
                $account_number = $this->db->escape($_SESSION['ACCOUNT_NUMBER']);
                $get_user_info = $this->db->query("SELECT USERNAME, CONTACT_NUMBER FROM tblaccount WHERE ACCOUNT_NUMBER = $account_number;");
              ?>
              <p class="text-center fw-bold text-light mb-0"><?php echo $get_user_info->row('USERNAME'); ?></p>
              <p class="text-center text-light mb-0"><?php echo $get_user_info->row('CONTACT_NUMBER'); ?></p>
      <?php endif ?>
    </div>



    <ul class="nav flex-column mt-5">
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Navigation</span>
      </h6>

      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'admin' ? 'active' : '' ); ?>" href="<?php echo base_url('admin/dashboard'); ?>">
          <i class="fas fa-home"></i>
          Dashboard
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'admin' ? 'active' : '' ); ?>" href="<?php echo base_url('admin/add_account'); ?>">
          <i class="fas fa-user-plus"></i>
          Add Account
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'admin' ? 'active' : '' ); ?>" href="<?php echo base_url('admin/accounts'); ?>">
          <i class="fas fa-users"></i>
          Accounts
        </a>
      </li>
    </ul>

    <div class="dropdown-divider"></div>


    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link text-danger <?php //echo ( $this->uri->segment(1) == 'add_broker' ? 'active' : '' ); ?>" href="<?php echo base_url('Auth/logout'); ?>">
          <i class="fas fa-sign-out-alt fa-fw"></i>
          Logout
        </a>
      </li>

    </ul>
  </div>
</nav>