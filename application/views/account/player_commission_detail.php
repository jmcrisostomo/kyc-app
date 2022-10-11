<?php $this->load->view('player/common/navbar'); ?>

<style type="text/css">
  html, body {
    background-color: #212121 !important;
  }
  .form-control, .form-select {
    border-radius: 0;
  }
  #content {
    margin-bottom: 3rem;
  }
</style>

<!-- DataTables CSS -->
<link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/datatables/datatables.min.css'); ?>"/>

<div id="content" class="site-content">

  <div class="row g-0 justify-content-center">

    <?php $this->load->view('player/common/sidebar'); ?>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10">

      <div class="row bg-light">
        <div class="col-12">
          <div class="container" style="max-width: 700px;">
            <div class="row">
              <div class="col-12">
                <div class="d-flex">
                  <div class="flex-fill text-start">
                    <div class="diy-breadcrumb">
                      <?php if (isset($_GET['is_downline']) && $_GET['is_downline'] == 'TRUE' && isset($_GET['page_from']) && $_GET['page_from'] == 'dashboard'): ?>
                        VIEW <i class="fas fa-arrow-right"></i>
                        DOWNLINES <i class="fas fa-arrow-right"></i> DETAILS
                      <?php elseif (isset($_GET['is_downline']) && $_GET['is_downline'] == 'TRUE'): ?>
                        VIEW <i class="fas fa-arrow-right"></i>
                        SUB <i class="fas fa-arrow-right"></i>
                        DOWNLINES <i class="fas fa-arrow-right"></i> DETAILS
                      <?php else: ?>
                        VIEW <i class="fas fa-arrow-right"></i> SUB
                      <?php endif; ?>
                    </div>
                  </div>
                  <div class="flex-fill text-end">
                    <?php
                      $return_url = 'player/dashboard';
                      if (isset($_GET['is_downline']) && $_GET['is_downline'] == 'TRUE' && isset($_GET['page_from']) && $_GET['page_from'] == 'dashboard') {
                        $return_url = 'player/dashboard';
                      } else if (isset($_GET['is_downline']) && $_GET['is_downline'] == 'TRUE' && $previous_upline != NULL) {
                        $return_url = 'player/downline?account_number='.$previous_upline;
                      }
                    ?>
                    <a class="btn btn-sm text-dark" href="<?php echo base_url($return_url); ?>">
                      <i class="fas fa-chevron-left"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



        <?php if (isset($_GET['is_downline']) && $_GET['is_downline'] == 'TRUE') : //FOR DOWNLINES?>
        <div class="row g-0 gx-md-4 bg-black sub-info">
          <div class="col-6">
            <div class="d-flex p-2 flex-column">
              <p class="flex-fill text-light mb-0">Username: <?php echo $commission_detail->row('USERNAME'); ?></p>
              <p class="flex-fill text-light mb-0">Credits: <?php echo number_format($commission_detail->row('CREDITS'), 2, '.', ','); ?></p>
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex p-2 flex-column">
              <p class="flex-fill text-light mb-0">Date Registered: <?php echo date('M d, Y', strtotime($commission_detail->row('DATE_MODIFIED'))) ?></p>
              <strong><p class="flex-fill text-light mb-0" style="font-size: 14px;">MTD Commission</p></strong>
              <hr class="dashed-style">
              <i><p class="flex-fill text-light mb-0">
                <?php
                  date_default_timezone_set('Asia/Manila');
                  $timestamp = time();
                  // MTD COMMISSION
                  $year = date('Y',$timestamp);
                  $month = date('m',$timestamp);
                  $day = '01';

                  $month_start = $year.'-'.$month.'-'.$day;
                  $month_day_today = date('Y-m-d',$timestamp);

                  // date time fix
                  $time = ' 23:59:59';
                  $month_day_today .= $time;

                  $mc_account_number_escaped = $this->db->escape($_SESSION['ACCOUNT_NUMBER']);
                  $mc_account_number = substr($mc_account_number_escaped, 1, -1);

                  if(isset($_GET['page_from']) && $_GET['page_from'] == 'dashboard')
                  {
                    $direct_downline_account_number = $commission_detail->row('ACCOUNT_NUMBER');

                    $Get_Total_Commission_Direct_Downline = $this->db->query("SELECT SUM(AMOUNT) AS AMOUNT FROM tblcommission WHERE _FROM = '$direct_downline_account_number' AND _TO = '$mc_account_number' AND DATE_MODIFIED BETWEEN '$month_start' AND '$month_day_today';");

                    $Total_Commission_Direct_Downline = $Get_Total_Commission_Direct_Downline->row('AMOUNT');

                    if($Total_Commission_Direct_Downline == null)
                    {
                      $Total_Commission_Direct_Downline = '0.00';
                    }

                    echo $Total_Commission_Direct_Downline;
                    // echo $direct_downline_account_number;
                  }

                  else
                  {
                    $sub_downline_account_number = $commission_detail->row('ACCOUNT_NUMBER');

                    // COMMISSION_PERCENT - ALSO FOR AUDIT TRAIL
                    $Get_Total_Commission_Sub_Downline = $this->db->query("SELECT SUM(AMOUNT) AS AMOUNT FROM tblcommission WHERE _FROM = '$sub_downline_account_number'AND _TO = '$mc_account_number' AND DATE_MODIFIED BETWEEN '$month_start' AND '$month_day_today';");

                    $Total_Commission_Sub_Downline = $Get_Total_Commission_Sub_Downline->row('AMOUNT');

                    if($Total_Commission_Sub_Downline == null)
                    {
                      $Total_Commission_Sub_Downline = '0.00';
                    }

                    echo $Total_Commission_Sub_Downline;
                  }
                ?>
              </p></i>
              <strong><p class="flex-fill text-light mb-0" style="font-size: 14px;">Lifetime Commission</p></strong>
              <hr class="dashed-style">
              <i><p class="flex-fill text-light mb-0">
                <?php
                  date_default_timezone_set('Asia/Manila');
                  $timestamp = time();
                  // MTD COMMISSION
                  $year = date('Y',$timestamp);
                  $month = date('m',$timestamp);
                  $day = '01';

                  $month_start = $year.'-'.$month.'-'.$day;
                  $month_day_today = date('Y-m-d',$timestamp);

                  // date time fix
                  $time = ' 23:59:59';
                  $month_day_today .= $time;

                  $mc_account_number_escaped = $this->db->escape($_SESSION['ACCOUNT_NUMBER']);
                  $mc_account_number = substr($mc_account_number_escaped, 1, -1);

                  if(isset($_GET['page_from']) && $_GET['page_from'] == 'dashboard')
                  {
                    $direct_downline_account_number = $commission_detail->row('ACCOUNT_NUMBER');

                    $Get_Total_Commission_Direct_Downline = $this->db->query("SELECT SUM(AMOUNT) AS AMOUNT FROM tblcommission WHERE _FROM = '$direct_downline_account_number' AND _TO = '$mc_account_number';");

                    $Total_Commission_Direct_Downline = $Get_Total_Commission_Direct_Downline->row('AMOUNT');

                    if($Total_Commission_Direct_Downline == null)
                    {
                      $Total_Commission_Direct_Downline = '0.00';
                    }

                    echo $Total_Commission_Direct_Downline;
                    // echo $direct_downline_account_number;
                  }

                  else
                  {
                    $sub_downline_account_number = $commission_detail->row('ACCOUNT_NUMBER');

                    // COMMISSION_PERCENT - ALSO FOR AUDIT TRAIL
                    $Get_Total_Commission_Sub_Downline = $this->db->query("SELECT SUM(AMOUNT) AS AMOUNT FROM tblcommission WHERE _FROM = '$sub_downline_account_number'AND _TO = '$mc_account_number';");

                    $Total_Commission_Sub_Downline = $Get_Total_Commission_Sub_Downline->row('AMOUNT');

                    if($Total_Commission_Sub_Downline == null)
                    {
                      $Total_Commission_Sub_Downline = '0.00';
                    }

                    echo $Total_Commission_Sub_Downline;
                  }
                ?>
              </p></i>
            </div>
          </div>
        </div>

        <hr class="dashed-style">

        <div class="row g-0 gx-md-4 bg-black sub-info">
          <div class="col-6">
            <div class="d-flex p-2 flex-column">
              <p class="flex-fill text-light mb-0">Contact #: <?php echo $commission_detail->row('CONTACT_NUMBER'); ?></p>
              <p class="flex-fill text-light mb-0">Email Address: <?php echo $commission_detail->row('EMAIL_ADDRESS'); ?></p>
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex p-2 flex-column">
              <p class="flex-fill text-light mb-0">Country: <?php echo $commission_detail->row('COUNTRY'); ?></p>
            </div>
          </div>
        </div>
        <?php else: //FOR SUBS ?>
        <div class="row g-0 gx-md-4 bg-black sub-info">
          <div class="col-6">
            <div class="d-flex p-2 flex-column">
              <p class="flex-fill text-light mb-0">Username: <?php echo $commission_detail->row('USERNAME'); ?></p>
              <p class="flex-fill text-light mb-0">Credits: <?php echo $commission_detail->row('CREDITS') != NULL ? number_format($commission_detail->row('CREDITS'), 2, '.', ',') : '0.00' ; ?></p>
              <p class="flex-fill text-light mb-0">Unpaid Comm: <?php echo $commission_detail->row('UNPAID_COMMISSION') != NULL ? number_format($commission_detail->row('UNPAID_COMMISSION'), 2, '.', ',') : '0.00' ; ?></p>
              <p class="flex-fill text-light mb-0">Commission: <?php echo $commission_detail->row('SUB_COORDINATOR_COMMISSION_PERCENT'); ?>%</p>
              <i><p class="flex-fill text-light mb-0">Your Commission: <?php echo number_format(2.00 - $commission_detail->row('SUB_COORDINATOR_COMMISSION_PERCENT'), 2, '.', ','); ?>%</p></i>
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex p-2 flex-column">
              <p class="flex-fill text-light mb-0">Date Registered: <?php echo date('M d, Y', strtotime($commission_detail->row('DATE_MODIFIED'))); ?></p>
              <strong><p class="flex-fill text-light mb-0" style="font-size: 14px;">Your MTD Comm</p></strong>
              <hr class="dashed-style">
              <i><p class="flex-fill text-light mb-0">MTD(Sub):
                <?php
                  date_default_timezone_set('Asia/Manila');
                  $timestamp = time();
                  // MTD COMMISSION
                  $year = date('Y',$timestamp);
                  $month = date('m',$timestamp);
                  $day = '01';

                  $month_start = $year.'-'.$month.'-'.$day;
                  $month_day_today = date('Y-m-d',$timestamp);

                  // date time fix
                  $time = ' 23:59:59';
                  $month_day_today .= $time;

                  $mc_account_number_escaped = $this->db->escape($_SESSION['ACCOUNT_NUMBER']);
                  $mc_account_number = substr($mc_account_number_escaped, 1, -1);

                  $sub_coordinator_account_number = $commission_detail->row('ACCOUNT_NUMBER');

                  $Get_Total_Commission_Sub = $this->db->query("SELECT SUM(AMOUNT) AS AMOUNT FROM tblcommission WHERE _FROM = '$sub_coordinator_account_number' AND _TO = '$mc_account_number' AND DATE_MODIFIED BETWEEN '$month_start' AND '$month_day_today';");

                  $Total_Commission_Sub = $Get_Total_Commission_Sub->row('AMOUNT');

                  if($Total_Commission_Sub == null)
                  {
                    $Total_Commission_Sub = '0.00';
                  }

                  echo $Total_Commission_Sub;
                ?>
              </p></i>

              <i><p class="flex-fill text-light mb-0">MTD(Sub&apos;s DL):
                <?php
                  $main_coordinator_account_number = $_SESSION['ACCOUNT_NUMBER'];
                  $sub_coordinator_account_number = $commission_detail->row('ACCOUNT_NUMBER');

                  $Get_Total_Commission_Sub_Downlines = $this->db->query("SELECT SUM(a.AMOUNT) AS AMOUNT FROM tblcommission a, tblnetwork b WHERE a._FROM = b.DOWNLINE AND b.UPLINE = '$sub_coordinator_account_number' AND a._TO = '$main_coordinator_account_number' AND a.DATE_MODIFIED BETWEEN '$month_start' AND '$month_day_today';");
                  // AND a._TO != '$sub_coordinator_account_number'

                  $Total_Commission_Sub_Downlines = $Get_Total_Commission_Sub_Downlines->row('AMOUNT');

                  if($Total_Commission_Sub_Downlines == null)
                  {
                    $Total_Commission_Sub_Downlines = '0.00';
                  }

                  echo $Total_Commission_Sub_Downlines;
                ?>
              </p></i>

              <i><p class="flex-fill text-light mb-0">MTD(Overall):
                <?php
                  $Grand_Total_Commission = number_format($Total_Commission_Sub + $Total_Commission_Sub_Downlines, 2, '.', ',');

                  if($Grand_Total_Commission == null)
                  {
                    $Grand_Total_Commission = '0.00';
                  }

                  echo $Grand_Total_Commission;
                ?>
              </p></i>
            </div>
          </div>
        </div>
        <hr class="dashed-style">

        <div class="row g-0 gx-md-4 bg-black sub-info">
          <div class="col-6">
            <div class="d-flex p-2 flex-column">
              <p class="flex-fill text-light mb-0">Contact #: <?php echo $commission_detail->row('CONTACT_NUMBER'); ?></p>
              <p class="flex-fill text-light mb-0">Email Address: <?php echo $commission_detail->row('EMAIL_ADDRESS'); ?></p>
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex p-2 flex-column">
              <p class="flex-fill text-light mb-0">Country: <?php echo $commission_detail->row('COUNTRY'); ?></p>
            </div>
          </div>
        </div>
        <?php endif; ?>


      <?php if(isset($_GET['is_downline']) && $_GET['is_downline'] == 'FALSE'): ?>

      <hr class="dashed-style">

      <div class="row g-0 gx-md-4 bg-black sub-info">
        <div class="col-6">
          <div class="d-flex p-2 flex-column">
            <!-- <p class="flex-fill text-light mb-0">Total Commission (Sub): <span class="ms-3">[999,999.00]</span></p>
            <p class="flex-fill text-light mb-0">Total Commission (Sub&apos;s Downlines): <span class="ms-3">[999,999.00]</span></p>
            <p class="flex-fill text-light mb-0">Grand Total Commission: <span class="ms-3">[999,999.00]</span></p> -->
            <strong><p class="flex-fill text-light mb-0" style="font-size: 14px;">Lifetime Commission</p></strong>
            <hr style="margin-left: 0px; margin-right: -15px; margin-top: 0px; margin-bottom: 0px; border-bottom: 3px solid #fff; background-color: #fff; color: #fff;">
            <i><p class="flex-fill text-light mb-0">Sub:
              <span class="ms-3">
                <?php
                  $mc_account_number_escaped = $this->db->escape($_SESSION['ACCOUNT_NUMBER']);
                  $mc_account_number = substr($mc_account_number_escaped, 1, -1);

                  $sub_coordinator_account_number = $commission_detail->row('ACCOUNT_NUMBER');

                  $Get_Total_Commission_Sub = $this->db->query("SELECT SUM(AMOUNT) AS AMOUNT FROM tblcommission WHERE _FROM = '$sub_coordinator_account_number'  AND _TO = '$mc_account_number';");

                  $Total_Commission_Sub = $Get_Total_Commission_Sub->row('AMOUNT');

                  if($Total_Commission_Sub == null)
                  {
                    $Total_Commission_Sub = '0.00';
                  }

                  echo $Total_Commission_Sub;
                ?>
              </span>
            </p></i>
            <i><p class="flex-fill text-light mb-0">Sub&apos;s Downlines:
              <span class="ms-3">
                <?php
                  $main_coordinator_account_number = $_SESSION['ACCOUNT_NUMBER'];
                  $sub_coordinator_account_number = $commission_detail->row('ACCOUNT_NUMBER');

                  $Get_Total_Commission_Sub_Downlines = $this->db->query("SELECT SUM(a.AMOUNT) AS AMOUNT FROM tblcommission a, tblnetwork b WHERE a._FROM = b.DOWNLINE AND b.UPLINE = '$sub_coordinator_account_number' AND a._TO = '$main_coordinator_account_number';");
                  // AND a._TO != '$sub_coordinator_account_number'

                  $Total_Commission_Sub_Downlines = $Get_Total_Commission_Sub_Downlines->row('AMOUNT');

                  if($Total_Commission_Sub_Downlines == null)
                  {
                    $Total_Commission_Sub_Downlines = '0.00';
                  }

                  echo $Total_Commission_Sub_Downlines;
                ?>
              </span>
            </p></i>
            <hr style="margin-left: 0px; margin-right: -15px; margin-top: 0px; margin-bottom: 0px; border-bottom: 3px solid #fff; background-color: #fff; color: #fff;">
            <strong><p class="flex-fill text-light mb-0" style="font-size: 14px;">Overall:
              <i><span class="ms-3">
                <?php
                  $Grand_Total_Commission = number_format($Total_Commission_Sub + $Total_Commission_Sub_Downlines, 2, '.', ',');

                  if($Grand_Total_Commission == null)
                  {
                    $Grand_Total_Commission = '0.00';
                  }

                  echo $Grand_Total_Commission;
                ?>
              </span></i>
            </p></strong>
          </div>
        </div>
        <div class="col-6">
          <div class="d-flex p-2">
            <a style="border-radius: .25rem !important;" class="btn bg-danger text-light mx-auto" href="<?php echo base_url('player/downline?account_number='. $sub_coordinator_account_number); ?>">
              <img class="img-fluid" src="<?php echo base_url('assets/images/player/downlines.png'); ?>" alt="VIEW_DOWNLINES" draggable="false">
              <p class="mb-0">VIEW DOWNLINES</p>
            </a>
          </div>
        </div>
      </div>

    <?php endif; ?>

      <div class="row g-0 gx-md-4 bg-black">
        <div class="col-12">
          <h5 class="mt-3 mb-0 text-center text-light"><span style="border-radius: .25rem !important;" class="bg-danger text-uppercase px-2">Betting History</span></h5>
          <!-- <h5 class="mt-3 mb-0 text-center text-light"><span style="border-radius: .25rem !important;" class="bg-danger text-uppercase px-2">
            <?php //echo $_SESSION['ACCOUNT_TYPE_NUMBER'].' - '.$_SESSION['ACCOUNT_NUMBER'];?>
          </span></h5> -->
        </div>
      </div>

      <div class="row g-0 gx-md-4 bg-light sub-bet-history">
        <div class="col-12">
          <div class="table-responsive mt-1">
            <table id="dataTableBettingHistory" class="table table-sm table-bordered table-striped compact nowrap" style="width: 100%;" cellpadding="0">
              <thead>
                <tr>
                  <th class="text-center">BET #</th>
                  <th class="text-center">DATE</th>
                  <th class="text-center">GAMETYPE</th>
                  <th class="text-center">STATUS<br>(WIN/LOSE)</th>
                  <th class="text-center">AMOUNT</th>
                  <?php
                    $account_type_number_escaped = $this->db->escape($_SESSION['ACCOUNT_TYPE_NUMBER']);
                    $account_type_number = substr($account_type_number_escaped, 1, -1);

                    if($account_type_number == 'ACC-TYPE-0004')
                    {
                      if($_GET['is_downline'] == 'FALSE')
                      {
                        echo '<th class="text-center">COMMISSION</th>';
                      }

                      else if($_GET['is_downline'] == 'TRUE')
                      {
                        if(isset($_GET['page_from']) && $_GET['page_from'] == 'dashboard')
                        {
                          echo '<th class="text-center">COMMISSION</th>';
                        }

                        else
                        {
                          echo '<th class="text-center">SUB COMMISSION</th>';
                          echo '<th class="text-center">YOUR COMMISSION</th>';
                          echo '<th class="text-center">TOTAL COMMISSION</th>';
                        }
                      }
                    }

                    else
                    {
                      echo '<th class="text-center">COMMISSION</th>';
                    }
                  ?>
                </tr>
              </thead>
               <tbody>
               </tbody>
            </table>
          </div>
        </div>
      </div>

    </main>

  </div>
</div> <!-- /.site-content -->

<script src="<?php echo base_url('assets/node_modules/moment/min/moment.min.js'); ?>"></script>

<!-- Datatables JS Library -->
<script src="<?php echo base_url('assets/datatables/pdfmake.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/datatables/vfs_fonts.js'); ?>"></script>
<script src="<?php echo base_url('assets/datatables/datatables.min.js'); ?>"></script>

<script type="text/javascript" src="<?php echo base_url('assets/js/player.commission-detail.js'); ?>"></script>
