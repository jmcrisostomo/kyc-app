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

<div id="content" class="site-content">

  <div class="row g-0 justify-content-center">

    <?php $this->load->view('player/common/sidebar'); ?>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10">

      <div class="row bg-light">
        <div class="col-12">
          <div class="container " style="max-width: 700px;">
            <div class="row">
              <div class="col-12">
                <div class="d-flex">
                  <div class="flex-fill text-start">
                    <div class="diy-breadcrumb">
                      VIEW <i class="fas fa-arrow-right"></i>
                      SUB <i class="fas fa-arrow-right"></i> DOWNLINES
                    </div>
                  </div>
                  <div class="flex-fill text-end">
                    <?php
                      $return_url = 'player/dashboard';
                      if (isset($_GET['account_number']) && $_GET['account_number'] != '') {
                        $return_url = 'player/commission_detail?account_number='.$_GET['account_number'].'&is_downline=FALSE';
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

      <!-- <div class="row g-0 gx-md-4 bg-black sub-info">
        <div class="col-6">
          <div class="d-flex p-2 flex-column">
            <p class="flex-fill text-light mb-0">Username: <?php echo $sub_coordinator_username; ?></p>
            <p class="flex-fill text-light mb-0">Credits: <?php echo $sub_coordinator_credits; ?></p>
            <p class="flex-fill text-light mb-0">Commission %: <?php echo $sub_coordinator_commission_percent; ?>%</p>
          </div>
        </div>
        <div class="col-6">
          <div class="d-flex p-2 flex-column">
            <p class="flex-fill text-light mb-0">Date Registered: <?php echo $sub_coordinator_date_registered; ?></p>
          </div>
        </div>
      </div> -->


      <div class="row g-0 gx-md-4 bg-black sub-info">
        <div class="col-6">
          <div class="d-flex p-2 flex-column">
            <p class="flex-fill text-light mb-0">Username: <?php echo $sub_coordinator_username; ?></p>
            <p class="flex-fill text-light mb-0">Credits: <?php echo $sub_coordinator_credits != NULL ? number_format($sub_coordinator_credits, 2, '.', ',') : '0.00' ; ?></p>
            <p class="flex-fill text-light mb-0">Unpaid Comm: <?php echo $sub_coordinator_unpaid_commission != NULL ? number_format($sub_coordinator_unpaid_commission, 2, '.', ',') : '0.00' ; ?></p>
            <p class="flex-fill text-light mb-0">Sub Commission: <?php echo $sub_coordinator_commission_percent; ?>%</p>
            <i><p class="flex-fill text-light mb-0">Your Commission: <?php echo number_format(2.00 - $sub_coordinator_commission_percent, 2, '.', ','); ?>%</p></i>
          </div>
        </div>
        <div class="col-6">
          <div class="d-flex p-2 flex-column">
            <p class="flex-fill text-light mb-0">Date Registered: <?php echo date('M d, Y', strtotime($sub_coordinator_date_registered)); ?></p>
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

                // sub_coordinator_account_number is the name of key in array, from public function downline()
                $sub_coordinator_account_number = $sub_coordinator_account_number;

                $Get_Total_Commission_Sub = $this->db->query("SELECT SUM(AMOUNT) AS AMOUNT FROM tblcommission WHERE _FROM = '$sub_coordinator_account_number' AND DATE_MODIFIED BETWEEN '$month_start' AND '$month_day_today';");

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
                // sub_coordinator_account_number is the name of key in array, from public function downline()
                $sub_coordinator_account_number = $sub_coordinator_account_number;

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

      <div class="row g-0 gx-md-4 bg-black">
        <div class="col-12">
          <div class="container">
            <p class="title">
              <span>DOWNLINES</span>
            </p>
          </div>
        </div>
        <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
          <!-- DO DOWNLINE LOOP HERE -->
          <?php if ($sub_coordinator_downlines_data->result() != NULL): ?>
            <?php foreach ($sub_coordinator_downlines_data->result() as $sub_coord_downline): ?>
              <div class="card mb-3 mx-3">
                <div class="row g-0">
                  <div class="col-10">
                    <div class="card-body top-subs p-1">
                      <div class="row g-0">
                        <div class="col-8">
                          <p class="mb-0">Username</p>
                          <strong><p class="ms-3 mb-0" style="font-size: 14px">
                          <?php
                            // if (strlen($sub_coord_downline->USERNAME) > 15) {
                            //   $temp_char = str_split($sub_coord_downline->USERNAME, 15);
                            //   $arr_build_name = array();
                            //   foreach ($temp_char as $value) {
                            //       $arr_build_name[] = strtoupper($value);
                            //   }
                            //   echo implode('<br>', $arr_build_name);
                            // }

                            // else {
                              echo strtoupper($sub_coord_downline->USERNAME);
                            // }
                          ?>
                          </p></strong>
                          <p class="ms-3 mb-0">Credits: <span><?php echo number_format($sub_coord_downline->CREDITS, 2, '.', ','); ?></span></p>
                        </div>
                        <div class="col-4">
                          <?php

                            // WHEN YOU LOGGED IN AS MC THEN CLICKED DASHBOARD -> SUB -> DOWNLINES THE MTD Comm of SUB COORDINATOR'S DOWNLINE IS THE MTD OF SUB COORDINATOR, MUST ALSO SHOW THE MTD OF THE MC (THE ONE WHO IS LOGGED IN)
                            // date_default_timezone_set('Asia/Manila');
                            // $timestamp = time();
                            // // MTD COMMISSION
                            // $year = date('Y',$timestamp);
                            // $month = date('m',$timestamp);
                            // $day = '01';
                            //
                            // $month_start = $year.'-'.$month.'-'.$day;
                            // $month_day_today = date('Y-m-d',$timestamp);
                            //
                            // // date time fix
                            // $time = ' 23:59:59';
                            // $month_day_today .= $time;
                            //
                            // $downline_account_number = $sub_coord_downline->ACCOUNT_NUMBER;
                            // $sub_coordinator_account_number = $this->db->escape($_GET['account_number']);
                            // $Get_MTD_Commission = $this->db->query("SELECT SUM(AMOUNT) FROM tblcommission WHERE _FROM = '$downline_account_number' AND _TO = $sub_coordinator_account_number AND DATE_MODIFIED BETWEEN '$month_start' AND '$month_day_today';");
                            //
                            // $downline_mtd_commission = $Get_MTD_Commission->row("SUM(AMOUNT)");
                            // if($downline_mtd_commission == null)
                            // {
                            //   $downline_mtd_commission = '0.00';
                            // }

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

                            $main_coordinator_account_number = $this->db->escape($_SESSION['ACCOUNT_NUMBER']);
                            $sub_coordinator_account_number = $this->db->escape($_GET['account_number']);
                            $downline_account_number = $sub_coord_downline->ACCOUNT_NUMBER;

                            $Get_MTD_Commission_Of_Main = $this->db->query("SELECT SUM(AMOUNT) AS AMOUNT FROM tblcommission WHERE _FROM = '$downline_account_number' AND _TO = $main_coordinator_account_number AND DATE_MODIFIED BETWEEN '$month_start' AND '$month_day_today';");

                            $downline_mtd_commission_of_main = $Get_MTD_Commission_Of_Main->row("AMOUNT");
                            if($downline_mtd_commission_of_main == null)
                            {
                              $downline_mtd_commission_of_main = '0.00';
                            }

                            $Get_MTD_Commission_Of_Sub = $this->db->query("SELECT SUM(AMOUNT) AS AMOUNT FROM tblcommission WHERE _FROM = '$downline_account_number' AND _TO = $sub_coordinator_account_number AND DATE_MODIFIED BETWEEN '$month_start' AND '$month_day_today';");

                            $downline_mtd_commission_of_sub = $Get_MTD_Commission_Of_Sub->row("AMOUNT");
                            if($downline_mtd_commission_of_sub == null)
                            {
                              $downline_mtd_commission_of_sub = '0.00';
                            }
                          ?>
                          <p class="mb-0">MTD Comm of Sub</p>
                          <p class="ms-3 mb-0" style="font-size: 14px"><?php echo $downline_mtd_commission_of_sub;?></p>
                          <strong><p class="mb-0" style="font-size: 14px;">Your MTD Comm</p></strong>
                          <strong><i><p class="ms-3 mb-0" style="font-size: 14px"><?php echo $downline_mtd_commission_of_main;?></p></i></strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-2">
                    <a class="btn bg-danger text-light w-100 p-1" href="<?php echo base_url('player/commission_detail?account_number='.$sub_coord_downline->ACCOUNT_NUMBER.'&is_downline=TRUE'); ?>">
                      <div class="d-flex align-content-center align-items-center flex-wrap" style="height: inherit;">
                        <img class="img-fluid" src="<?php echo base_url('assets/images/player/view.png'); ?>" alt="VIEW" draggable="false" style="width: auto;">
                        <!-- <p class="mb-0">VIEW</p> -->
                      </div>
                    </a>

                  </div>
                </div>
              </div>
            <?php endforeach ?>
          <?php else: ?>
            <div class="card mb-3 mx-3">
              <div class="row g-0">
                <div class="col-12">
                  <div class="card-body top-subs p-3">
                    <div class="d-flex">
                      <div class="flex-fill text-center">
                        <p class="text-dark mb-0">You don't have downlines.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <?php endif ?>
          <!-- <div class="card mb-3 mx-3">
            <div class="row g-0">
              <div class="col-10">
                <div class="card-body top-subs p-1">
                  <div class="d-flex">
                    <div class="flex-fill">
                      <p class="mb-0">Username</p>
                      <p class="ms-3 mb-0">[MONSTER0903]</p>
                      <p class="ms-3 mb-0">Credits: <span>[6999.99]</span></p>
                      <p class="ms-3 mb-0">Commission %: <span>[1999.99%]</span></p>
                    </div>
                    <div class="flex-fill">
                      <p class="mb-0">MTD Comm</p>
                      <p class="ms-3 mb-0">[1999.99]</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <a class="btn bg-danger text-light w-100" href="<?php echo base_url('player/commission_detail?is_downline=true'); ?>">
                  <img class="img-fluid" src="<?php echo base_url('assets/images/player/view.png'); ?>" alt="VIEW" draggable="false">
                  <p class="mb-0">VIEW</p>
                </a>
              </div>
            </div>
          </div> -->
          <!-- DO DOWNLINE LOOP HERE -->
        </div>
      </div>
    </main>

  </div>
</div> <!-- /.site-content -->

<!-- <script type="text/javascript" src="<?php echo base_url('assets/js/player.Withdraw.credit.js'); ?>"></script> -->
