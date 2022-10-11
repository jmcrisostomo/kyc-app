<?php $this->load->view('player/common/navbar'); ?>

<style type="text/css">
  html, body {
    background: #212529!important;
  }
</style>


<div id="content" class="site-content">

  <div class="row g-0 justify-content-center">

    <?php $this->load->view('player/common/sidebar'); ?>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10">

      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 offset-md-12 col-lg-6 offset-lg-6">
          <div class="container-fluid bg-danger">
            <div class="d-flex justify-content-center">
              <div class="bg-light ps-3 pe-3 pt-2 pb-1 shadow">
                <h5 class="text-danger m-0 " style="font-weight: 900;">Fight #<span id="spanFightCount"></span></h5>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <div class="ratio ratio-4x3 bg-dark">
            <div id="streamArenaOverlay" class="d-none">
              <span>Arena is closed.</span>
            </div>
            <!-- START LIVE STREAM API FRAME -->
            <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/sW9npZVpiMI" frameborder="0" allow="acceleroemter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4LRCMin5k8A?start=34" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/QriUh3kIETY?start=319" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            <!-- END LIVE STREAM API FRAME -->
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <div class="container pb-5">
            <div class="row" style="position: relative;">

              <div id="messageWinner" class="d-none">
                  <p class="text-light text-center fw-bold">Fight #<span id="spanWinnerFightCount">[fight_number]</span> Winner: <span id="spanWinnerVerdict" class="text-light">[winner]</span></p>
              </div>

              <div class="col-12">
                <div class="d-flex mt-3">
                  <div class="flex-fill">
                    <h5 class="text-light m-0"> <span class="text-danger"><i class="fas fa-circle"></i></span> <span id="paragMatchDescription"></span></h5>
                  </div>
                  <div class="flex-fill">
                    <p class="text-light text-end m-0"><span id="spanMatchStatus" class="badge bg-danger"></span></p>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="flex-fill">
                    <p id="paragMatchDate" class="text-light text-center m-0"></p>
                  </div>
                </div>
                <div class="">
                  <!-- for match number -->
                  <span id="hiddenGlobalMatchNumber" class="text-light d-none"></span>
                </div>
              </div>

              <div class="col-6">
                <div class="player-header shadow bg-danger">
                  <p id="paragTeamA" class="text-center m-0 h5 text-light"></p>
                </div>
                <div class="player-body">
                  <p id="paragTeamATotalBet" class="text-dark text-center mb-0"></p>
                  <p id="paragTeamAOdds" class="d-block text-center text-dark"></p>

                  <button id="btnBetTeamA" type="button" class="btn btn-danger d-none"></button>
                </div>
              </div>

              <div class="col-6">
                <div class="player-header shadow bg-primary">
                  <p id="paragTeamB" class="text-center m-0 h5 text-light"></p>
                </div>
                <div class="player-body">
                  <p id="paragTeamBTotalBet" class="text-dark text-center mb-0"></p>

                  <p id="paragTeamBOdds" class="d-block text-center text-dark"></p>

                  <button id="btnBetTeamB" type="button" class="btn btn-primary d-none"></button>
                </div>
              </div>

              <div class="col-12">
                <div id="playerBetStatus" class="text-center text-light mt-3 d-none">
                  You have bet on <span id="playerBetTeam" class="fw-bold">[TEAM]</span> for <span id="playerBetCredits" class="fw-bold">[Credits]</span>
                </div>
              </div>

              <div class="col-12">
                <div class="trends-container">
                  <!-- <p class="text-center text-light h5">History</p> -->
                  <p class="text-light h5">Win Streak <i class="fas fa-angle-double-right"></i></p>
                  <div class="trends-subbox table-responsive">
                    <table class="trends">
                      <tbody>
                        <!-- GENERATED JS HERE -->
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="legend p-3">
                  <p class="text-dark mb-1">Legend</p>
                  <div class="d-flex flex-wrap align-items-center">
                    <div class="w-25">
                      <div class="circle-team-a"></div>
                    </div>
                    <small class="text-dark w-25" id="trendLegendTeamA"></small>

                    <div class="w-25">
                      <div class="circle-team-b"></div>
                    </div>
                    <small class="text-dark w-25" id="trendLegendTeamB"></small>

                    <div class="w-25">
                      <div class="circle-draw"></div>
                    </div>
                    <small class="text-dark w-25">DRAW</small>

                    <div class="w-25">
                      <div class="circle-cancelled"></div>
                    </div>
                    <small class="text-dark w-25">CANCELLED</small>
                  </div>

                </div>
              </div>

              <div class="col-12">
                <p class="text-light h5 mt-3">Bet History</p>
                <div class="bet-history-container">
                  <div class="row">
                    <!-- <div class="col"></div> -->
                    <div id="betHistoryTable">
                      <div class="col-12">
                        <table class="table table-striped w-100" cellpadding="0">
                          <tbody>
                            <!-- GENERATED JS HERE -->
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="bet-history-refresh-container">
                        <div class="d-flex flex-column align-items-center justify-content-center w-100">
                          <button id="btnLoadBetHistory" class="btn btn-secondary mx-3 mb-3">
                            Load Bet History
                          </button>
                        </div>
                      </div>
                    </div>
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

<!-- modalBetTeamA -->
<div class="modal fade" id="modalBetTeamA" tabindex="-1" aria-labelledby="modalBetTeamALabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header justify-content-center bg-danger">
          <p class="text-center m-0 h3 text-light">BET <span id="spanModalTeamA"></span></p>
        </div>
      <div class="modal-body">
        <label for="selectBetPreset">Bet Preset</label>
        <select id="selectBetPresetTeamA" class="form-select">
          <?php
            $get_bet_preset_name = $this->db->query("SELECT BET_PRESET_NAME_NUMBER, BET_PRESET_NAME FROM tblbetpresetname WHERE STATE = 'ACTIVE'");
            if ($get_bet_preset_name->result() != NULL) {
              foreach ($get_bet_preset_name->result() as $bet_preset_name) {
                echo '<option value="'.$bet_preset_name->BET_PRESET_NAME_NUMBER.'">'.$bet_preset_name->BET_PRESET_NAME.'</option>';
              }
            } else {
              echo '<option value="">No Data</option>';
            }
          ?>
        </select>

        <div class="d-flex flex-wrap">
        <?php
          $get_bet_preset = $this->db->query("SELECT BET_PRESET_NAME_NUMBER, BET_PRESET_NUMBER, BET_PRESET FROM tblbetpreset WHERE STATE = 'ACTIVE'");
          if ($get_bet_preset->result() != NULL) {
            foreach ($get_bet_preset->result() as $bet_preset) {
              if ($bet_preset->BET_PRESET_NAME_NUMBER == 'BET-PN-0001') {
                echo '<button class="flex-fill btn btn-danger mt-2 me-1 pn-casual" value="'.$bet_preset->BET_PRESET.'">'.$bet_preset->BET_PRESET.'</button>';
              } elseif ($bet_preset->BET_PRESET_NAME_NUMBER == 'BET-PN-0002') {
                echo '<button class="flex-fill btn btn-danger mt-2 me-1 pn-hardcore" value="'.$bet_preset->BET_PRESET.'">'.$bet_preset->BET_PRESET.'</button>';
              } elseif ($bet_preset->BET_PRESET_NAME_NUMBER == 'BET-PN-0003') {
                echo '<button class="flex-fill btn btn-danger mt-2 me-1 pn-betlord" value="'.$bet_preset->BET_PRESET.'">'.$bet_preset->BET_PRESET.'</button>';
              } elseif ($bet_preset->BET_PRESET_NAME_NUMBER == 'BET-PN-0004') {
                echo '<button class="flex-fill btn btn-danger mt-2 me-1 pn-wallstreet" value="'.$bet_preset->BET_PRESET.'">'.$bet_preset->BET_PRESET.'</button>';
              }
            }
          }
        ?>
          <button id="btnAllInTeamA"  class="flex-fill btn btn-danger mt-2 me-1">All In</button>

        </div>

        <input class="form-control mt-2" id="inputBetTeamA" type="text" name="amount">
        <input id="hiddenPlayerBetToTeamA" type="hidden" name="bet_to">

      </div>
      <div class="modal-footer">
        <button id="btnSendBetTeamA" type="button" class="btn btn-danger">BET</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
      </div>
    </div>
  </div>
</div>

<!-- modalBetTeamB -->
<div class="modal fade" id="modalBetTeamB" tabindex="-1" aria-labelledby="modalBetTeamBLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header justify-content-center bg-primary">
          <p class="text-center m-0 h3 text-light">BET <span id="spanModalTeamB"></span></p>
        </div>
      <div class="modal-body">
        <label for="selectBetPreset">Bet Preset</label>
        <select id="selectBetPresetTeamB" class="form-select">
          <?php
            $get_bet_preset_name = $this->db->query("SELECT BET_PRESET_NAME_NUMBER, BET_PRESET_NAME FROM tblbetpresetname WHERE STATE = 'ACTIVE'");
            if ($get_bet_preset_name->result() != NULL) {
              foreach ($get_bet_preset_name->result() as $bet_preset_name) {
                echo '<option value="'.$bet_preset_name->BET_PRESET_NAME_NUMBER.'">'.$bet_preset_name->BET_PRESET_NAME.'</option>';
              }
            } else {
              echo '<option value="">No Data</option>';
            }
          ?>
        </select>

        <div class="d-flex flex-wrap">
        <?php
          $get_bet_preset = $this->db->query("SELECT BET_PRESET_NAME_NUMBER, BET_PRESET_NUMBER, BET_PRESET FROM tblbetpreset WHERE STATE = 'ACTIVE'");
          if ($get_bet_preset->result() != NULL) {
            foreach ($get_bet_preset->result() as $bet_preset) {
              if ($bet_preset->BET_PRESET_NAME_NUMBER == 'BET-PN-0001') {
                echo '<button class="flex-fill btn btn-primary mt-2 me-1 pn-casual" value="'.$bet_preset->BET_PRESET.'">'.$bet_preset->BET_PRESET.'</button>';
              } elseif ($bet_preset->BET_PRESET_NAME_NUMBER == 'BET-PN-0002') {
                echo '<button class="flex-fill btn btn-primary mt-2 me-1 pn-hardcore" value="'.$bet_preset->BET_PRESET.'">'.$bet_preset->BET_PRESET.'</button>';
              } elseif ($bet_preset->BET_PRESET_NAME_NUMBER == 'BET-PN-0003') {
                echo '<button class="flex-fill btn btn-primary mt-2 me-1 pn-betlord" value="'.$bet_preset->BET_PRESET.'">'.$bet_preset->BET_PRESET.'</button>';
              } elseif ($bet_preset->BET_PRESET_NAME_NUMBER == 'BET-PN-0004') {
                echo '<button class="flex-fill btn btn-primary mt-2 me-1 pn-wallstreet" value="'.$bet_preset->BET_PRESET.'">'.$bet_preset->BET_PRESET.'</button>';
              }
            }
          }
        ?>
          <button id="btnAllInTeamB"  class="flex-fill btn btn-primary mt-2 me-1">All In</button>
        </div>

        <input class="form-control mt-2" id="inputBetTeamB" type="text">
        <input id="hiddenPlayerBetToTeamB" type="hidden" name="bet_to">

      </div>
      <div class="modal-footer">
        <button id="btnSendBetTeamB" type="button" class="btn btn-primary">BET</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript" src="<?php echo base_url('assets/js/player.arena.js'); ?>"></script>
