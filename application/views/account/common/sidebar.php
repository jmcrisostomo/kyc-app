<nav class="col-md-3 col-lg-3 bg-light sidebar shadow">
  <div class="sidebar-overlay"></div>
  <div class="sidebar-sticky">


    <div class="user-content bg-danger d-flex justify-content-end">
      <div class="">
        <button class="btn btn-close-sidebar">
          <i class="fas fa-times text-light"></i>
        </button>
      </div>
      <!-- <div class="user-img">
        <img class="img-fluid center" src="<?php //echo base_url('assets/admin/images/student.png');?>">
      </div> -->
        <div class="user-img">
          <img class="img-fluid shadow-lg" src="https://dummyimage.com/400x400/000/fff">
        </div>
        <div class="w-50 align-self-end">
        <?php if (isset($_SESSION['ACCOUNT_NUMBER'])): ?>
                <?php
                  // $account_number = $this->db->escape($_SESSION['ACCOUNT_NUMBER']);
                  // $get_user_info = $this->db->query("SELECT USERNAME, CONTACT_NUMBER FROM tblaccount WHERE ACCOUNT_NUMBER = $account_number;");
                ?>
                <p class="fw-bold text-light mb-0"><?php //echo $get_user_info->row('USERNAME'); ?></p>
                <p class="text-light mb-0"><?php //echo $get_user_info->row('CONTACT_NUMBER'); ?></p>
        <?php endif ?>
        </div>
    </div>

    <!-- <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>Navigation</span>
    </h6> -->
    <ul class="nav flex-column mt-5">
      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'dashboard' || $this->uri->segment(1) == 'index' ? 'active' : '' ); ?>" href="<?php echo base_url('player/arena'); ?>">
          <i class="fas fa-play fa-fw"></i>
          Arena <span class="sr-only">(current)</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'admin' ? 'active' : '' ); ?>" href="<?php echo base_url('player/help'); ?>">
          <i class="fas fa-question-circle fa-fw"></i>
          Help
        </a>
      </li>

      <div class="dropdown-divider"></div>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Wallet</span>
      </h6>

      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'admin' ? 'active' : '' ); ?>" href="<?php echo base_url('player/deposit'); ?>">
          <i class="fas fa-cart-plus fa-fw"></i>
          Add Credits
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'add_broker' ? 'active' : '' ); ?>" href="<?php echo base_url('player/withdraw'); ?>">
          <i class="fas fa-download fa-fw"></i>
          Withdraw
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'add_broker' ? 'active' : '' ); ?>" href="<?php echo base_url('player/transactions'); ?>">
          <i class="fas fa-list fa-fw"></i>
          Transactions
        </a>
      </li>

      <div class="dropdown-divider"></div>

      <?php
        // $user_number = $this->db->escape($_SESSION['ACCOUNT_NUMBER']);
        // $check_if_coordinator = $this->db->query("SELECT ACCOUNT_TYPE_NUMBER FROM tblaccount WHERE ACCOUNT_TYPE_NUMBER");
        if ( isset($_SESSION['ACCOUNT_TYPE_NUMBER']) && ($_SESSION['ACCOUNT_TYPE_NUMBER'] == 'ACC-TYPE-0004' || $_SESSION['ACCOUNT_TYPE_NUMBER'] == 'ACC-TYPE-0005') ):
      ?>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Downlines</span>
      </h6>

      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'admin' ? 'active' : '' ); ?>" href="<?php echo base_url('player/dashboard'); ?>">
          <i class="fas fa-list fa-fw"></i>
          Dashboard
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'admin' ? 'active' : '' ); ?>" href="<?php echo base_url('player/send_credit_view'); ?>">
          <i class="fas fa-share fa-fw"></i>
          Send Credits
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'admin' ? 'active' : '' ); ?>" href="<?php echo base_url('player/convert_commission_view'); ?>">
          <i class="fas fa-balance-scale fa-fw"></i>
          Convert Commission
        </a>
      </li>

      <div class="dropdown-divider"></div>

      <?php endif; ?>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Account</span>
      </h6>

      <li class="nav-item">
        <a class="nav-link <?php //echo ( $this->uri->segment(1) == 'admin' ? 'active' : '' ); ?>" href="<?php echo base_url('player/settings'); ?>">
          <i class="fas fa-cog fa-fw"></i>
          Settings
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link text-danger <?php //echo ( $this->uri->segment(1) == 'add_broker' ? 'active' : '' ); ?>" href="<?php echo base_url('auth/logout');//echo base_url('broker/create');?>">
          <i class="fas fa-sign-out-alt fa-fw"></i>
          Logout
        </a>
      </li>

    </ul>
  </div>
</nav>
