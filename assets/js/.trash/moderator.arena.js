// STATUS BAR
let step_list = document.querySelectorAll('.status-container .step-list > li');
let temp_status = ['NOT OPEN', 'OPEN','LAST CALL','CLOSED','END'];
let count = 0;

// ARENA BUTTONS
let float_close_arena = document.getElementById('floatingCloseArena');
let modal_open_arena = document.getElementById('modalOpenArena');
let btn_open_arena = document.getElementById('btnOpenArena');
let btn_close_arena = document.getElementById('btnCloseArena');

let do_modal_arena = '';

// ARENA MODERATOR BUTTONS
let btn_next = document.getElementById('btnNext');
let btn_cancel = document.getElementById('btnCancel');
let btn_team_a = document.getElementById('btnTeamA');
let btn_team_b = document.getElementById('btnTeamB');
let btn_draw = document.getElementById('btnDraw');

// GLOBAL MATCH NUMBER
let global_match_number = document.getElementById('hiddenGlobalMatchNumber');

// MATCH DETAIL
let parag_match_description = document.getElementById('paragMatchDescription');
let parag_match_date = document.getElementById('paragMatchDate');
let span_fight_count = document.getElementById('spanFightCount');
let parag_team_a = document.getElementById('paragTeamA');
let parag_team_a_totalbet = document.getElementById('paragTeamATotalBet');
let parag_team_a_odds = document.getElementById('paragTeamAOdds');
let parag_team_b = document.getElementById('paragTeamB');
let parag_team_b_totalbet = document.getElementById('paragTeamBTotalBet');
let parag_team_b_odds = document.getElementById('paragTeamBOdds');

window.addEventListener('load', () => {

  // CHECK STATUS BAR
  checkGameStatus(temp_status[count]);

  // DECLARE BOOTSTRAP MODAL
  do_modal_arena = new bootstrap.Modal(modal_open_arena, {
    backdrop: 'static',
    keyboard: false,
    focus: false
  });

  // GETTING LATEST MATCH DETAILS
  getLatestMatch();

  triggerTimeoutTotalBet();

});

btn_open_arena.addEventListener('click', (evt) => {
  let dialog_confimation = confirm("Are you sure you want to Open the Arena?");
  if (dialog_confimation == true) {
    openArena();
  } else {
    // does nothing
  }
});

btn_close_arena.addEventListener('click', (evt) => {
  let dialog_confimation = confirm("Are you sure you want to Close the Arena?");
  if (dialog_confimation == true) {
    closedArena();
  } else {
    // does nothing
  }
});

btn_next.addEventListener('click', (evt) => {

  // console.log(temp_status[count + 1]);

  let dialog_confimation = confirm("Are you sure you want to change status to "+ temp_status[count + 1] + "?");
  if (dialog_confimation == true) {

    updateStatus();


  } else {
    // does nothing
  }
});

btn_team_a.addEventListener('click', (evt) => {

  let team_a_name = paragTeamA.innerHTML;

  let dialog_confimation = confirm("Are you sure "+team_a_name+" won?");
  if (dialog_confimation == true) {

    matchVerdict( team_a_name );

    count = 4;
    checkGameStatus(temp_status[count]);
    updateStatusList();
    statusBar(count);

    setTimeout( ()=>{
      count = 0;
      checkGameStatus(temp_status[count]);
      resetStatusList();
      statusBar(count);
    }, 3000);
  } else {
    // does nothing
  }
});

btn_team_b.addEventListener('click', (evt) => {

  let team_b_name = paragTeamB.innerHTML;

  let dialog_confimation = confirm("Are you sure "+team_b_name+" won?");
  if (dialog_confimation == true) {

    matchVerdict( team_b_name );

    count = 4;
    checkGameStatus(temp_status[count]);
    updateStatusList();
    statusBar(count);

    setTimeout( ()=>{
      count = 0;
      checkGameStatus(temp_status[count]);
      resetStatusList();
      statusBar(count);
    }, 3000);
  } else {
    // does nothing
  }
});


btn_draw.addEventListener('click', (evt) => {

  let draw_verdict = 'DRAW';

  let dialog_confimation = confirm("Are you sure the match is draw?");
  if (dialog_confimation == true) {

    matchVerdict( draw_verdict );

    count = 4;
    checkGameStatus(temp_status[count]);
    updateStatusList();
    statusBar(count);

    setTimeout( ()=>{
      count = 0;
      checkGameStatus(temp_status[count]);
      resetStatusList();
      statusBar(count);
    }, 3000);
  } else {
    // does nothing
  }
});

btn_cancel.addEventListener('click', () => {
  let dialog_confimation = confirm("Are you sure you want to cancel the match?");
  if (dialog_confimation == true) {

    cancelMatchFunc();

  } else {
    // does nothing
  }
});


/*================================================
=            CORE MODERATOR FUNCTIONS            =
================================================*/

function getLatestMatch () {

  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");

  var xhr_get_latest_match = new XMLHttpRequest();
  getLatestMatchURI = window.location.origin + '/moderator/get_latest_match?game_type_number=' + gt_num;
  xhr_get_latest_match.open('GET', getLatestMatchURI, true);
  xhr_get_latest_match.onload = function(){
    // console.log(this.response);
    json = JSON.parse(this.response);
    if (json.statusCode == 200) {

        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

        moment().utcOffset("+08:00");
        let date_today = moment().format('YYYY-MM-DD');
        let match_date_modified = json.matchDetails.DateModified;
        let format_date_modified = moment(match_date_modified).format('YYYY-MM-DD');

        global_match_number.innerHTML = json.matchDetails.MatchNumber;

        if (date_today > format_date_modified) {

          if ( json.matchDetails.MatchStatus == 'CANCELLED' || json.matchDetails.MatchStatus == 'END' ) {
            // createMatch();
            setTimeout(() => createMatch(), 3000);
          } else {
            cancelMatch(json.matchDetails.MatchNumber);
          }

        } else {
          if (json.matchDetails.MatchStatus == 'OPEN' || json.matchDetails.MatchStatus == 'LAST CALL') {
            // startTriggerTotalBet();
            // TriggerTotalBet('start');
          } else if (json.matchDetails.MatchStatus == 'CLOSED') {
            // stopTriggerTotalBet();
            // TriggerTotalBet('stop');

            parag_team_a_odds.innerHTML = '('+ json.matchDetails.TeamAOddsNew +'%)';
            parag_team_b_odds.innerHTML = '('+ json.matchDetails.TeamBOddsNew +'%)';
            parag_team_a_odds.classList.remove('d-none');
            parag_team_b_odds.classList.remove('d-none');

            parag_team_a.innerHTML = json.matchDetails.TeamA;
            parag_team_a_totalbet.innerHTML = convertValueWithComma(json.matchDetails.TeamATotalBet);
            parag_team_b.innerHTML = json.matchDetails.TeamB;
            parag_team_b_totalbet.innerHTML = convertValueWithComma(json.matchDetails.TeamBTotalBet);
          } else if ( json.matchDetails.MatchStatus == 'CANCELLED' ||  json.matchDetails.MatchStatus == 'END' ){
            // createMatch();
            setTimeout(() => createMatch(), 3000);
          }

          parag_match_description.innerHTML = json.matchDetails.Description;
          parag_match_date.innerHTML = moment(json.matchDetails.DateModified).format('MMMM DD, YYYY');
          span_fight_count.innerHTML = json.matchDetails.FightCount;

          parag_team_a.innerHTML = json.matchDetails.TeamA;
          parag_team_a_totalbet.innerHTML = convertValueWithComma(json.matchDetails.TeamATotalBet);
          parag_team_b.innerHTML = json.matchDetails.TeamB;
          parag_team_b_totalbet.innerHTML = convertValueWithComma(json.matchDetails.TeamBTotalBet);


          checkGameStatus(json.matchDetails.MatchStatus);

          // LOAD STATUS BAR
          let arr_stat = temp_status.indexOf(json.matchDetails.MatchStatus);
          for(var i = 0; i <= arr_stat; i++){
            count = i;
            updateStatusList();
          }
          statusBar(count);
        }

    } else if (json.statusCode == 412) {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
        // createMatch();
        setTimeout(() => createMatch(), 3000);
    }

  }
  xhr_get_latest_match.send();

}

function createMatch () {

  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");

  var xhr_create_match = new XMLHttpRequest();
  let createMatchURI = window.location.origin + '/moderator/create_match?game_type_number=' + gt_num;
  xhr_create_match.open('GET', createMatchURI, true);
  xhr_create_match.onload = function() {
    // console.log(this.response);
    json = JSON.parse(this.response);
    if (json.statusCode == 201) {

        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

        let match_number = json.MatchNumber;
        getMatchDetails(match_number);

    }
  }
  xhr_create_match.send();

}

function getMatchDetails (match_number) {

  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");

  var xhr_get_match_details = new XMLHttpRequest();
  let getMatchDetailsURI = window.location.origin + '/moderator/get_match_details?game_type_number=' + gt_num + '&match_number=' + match_number;
  xhr_get_match_details.open('GET', getMatchDetailsURI, true);
  xhr_get_match_details.onload = function(){
    // console.log(this.response);
    json = JSON.parse(this.response);
    if (json.statusCode == 200) {

        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

        global_match_number.innerHTML = match_number;

        if( json.matchDetails.MatchStatus == 'NOT OPEN' ){
          // stopTriggerTotalBet();
          // TriggerTotalBet('stop');
        }

        if (json.matchDetails.MatchStatus == 'OPEN' || json.matchDetails.MatchStatus == 'LAST CALL') {
          // startTriggerTotalBet();
          // TriggerTotalBet('start');
        } else if (json.matchDetails.MatchStatus == 'CLOSED') {
          // stopTriggerTotalBet();
          // TriggerTotalBet('stop');

          parag_team_a_odds.innerHTML = '('+ json.matchDetails.TeamAOddsNew +'%)';
          parag_team_b_odds.innerHTML = '('+ json.matchDetails.TeamBOddsNew +'%)';
          parag_team_a_odds.classList.remove('d-none');
          parag_team_b_odds.classList.remove('d-none');

          parag_team_a_totalbet.innerHTML = convertValueWithComma(json.matchDetails.TeamATotalBet);
          parag_team_b_totalbet.innerHTML = convertValueWithComma(json.matchDetails.TeamBTotalBet);
        } else if ( json.matchDetails.MatchStatus == 'CANCELLED' || json.matchDetails.MatchStatus == 'END' ){
          // createMatch();
          setTimeout(() => createMatch(), 3000);
        }

        parag_team_a.innerHTML = json.matchDetails.TeamA;
        parag_team_b.innerHTML = json.matchDetails.TeamB;
        parag_match_description.innerHTML = json.matchDetails.Description;
        parag_match_date.innerHTML = moment(json.matchDetails.DateModified).format('MMMM DD, YYYY');
        span_fight_count.innerHTML = json.matchDetails.FightCount;



        checkGameStatus(json.matchDetails.MatchStatus);

          // LOAD STATUS BAR
          let arr_stat = temp_status.indexOf(json.matchDetails.MatchStatus);
          for(var i = 0; i <= arr_stat; i++){
            count = i;
            updateStatusList();
          }
          statusBar(count);

    }

  }
  xhr_get_match_details.send();
}

function cancelMatch (match_number) {

  var xhr_cancel_match = new XMLHttpRequest();

  let cancelMatchURI = window.location.origin + '/moderator/cancel_match?match_number=' + match_number;
  xhr_cancel_match.open('GET', cancelMatchURI, true);
  xhr_cancel_match.onload = function(){

    // console.log(this.response);
    json = JSON.parse(this.response);
    if (json.statusCode == 200) {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

        setTimeout(() => createMatch(), 3000);
    } else {
      // console.log( this.response );
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    }

  }
  xhr_cancel_match.send();

}

function openArena () {

  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");

  var xhr_open_arena = new XMLHttpRequest();
  let openArenaURI = window.location.origin + '/moderator/open_arena?game_type_number=' + gt_num;
  xhr_open_arena.open('GET', openArenaURI, true);
  xhr_open_arena.onload = function(){
    // console.log(this.response);
    // console.log("ARENA IS OPEN HUZZAAAAAAAH");
    json = JSON.parse(this.response);
    console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
  }
  xhr_open_arena.send();

  do_modal_arena.hide();

  float_close_arena.classList.remove('d-none');

}

function closedArena () {

  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");

  var xhr_closed_arena = new XMLHttpRequest();
  let closedArenaURI = window.location.origin + '/moderator/close_arena?game_type_number=' + gt_num;
  xhr_closed_arena.open('GET', closedArenaURI, true);
  xhr_closed_arena.onload = function(){
    json = JSON.parse(this.response);
    if (json.statusCode == '200') {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      window.location.href = window.location.origin + '/moderator/game_select';
    } else if (json.statusCode == '412') {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      alert("412");
    } else if (json.statusCode == '406') {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      alert("406");
    }
    console.log(this.response);
    console.log("ARENA IS CLOSED");
  }
  xhr_closed_arena.send();

  // do_modal_arena.show();

  // float_close_arena.classList.add('d-none');

}

function updateStatus () {

  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");

  let match_number = global_match_number.innerHTML;

  var xhr_update_status = new XMLHttpRequest();
  let updateMatchStatusURI = window.location.origin + '/moderator/update_match_status?game_type_number=' + gt_num + '&match_number=' + match_number;

  xhr_update_status.open('GET', updateMatchStatusURI, true);
  xhr_update_status.onload = function(){
    // console.log(this.response);
    json = JSON.parse(this.response);
    if (json.statusCode == '200') {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

      getMatchDetails(match_number);
      count++;

      checkGameStatus(temp_status[count]);

      updateStatusList();

      statusBar(count);

    } else if (json.statusCode == '412') {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      alert(json.description);
    } else if (json.statusCode == '406') {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      alert(json.description);
    }
  }

  // ATTEMPT FOR LOADING BUTTONS
  xhr_update_status.onloadend = function () {
    btn_next.disabled = false;
    btn_next.innerHTML = ''; // clear first
    btn_next.innerHTML = 'Next';
  }
  xhr_update_status.onprogress = function () {
    btn_next.disabled = true;
    btn_next.innerHTML = ''; // clear first
    btn_next.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
    btn_next.innerHTML += '<span class="visually-hidden">Loading...</span>';
  }
  xhr_update_status.send();

}

function triggerTimeoutTotalBet () {

  setTimeout( () => getTotalBet(), 1000 );

}


function getTotalBet () {

  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");

  let match_number = global_match_number.innerHTML;

  if( match_number != '' ) {
    var xhr_get_total_bet = new XMLHttpRequest();
    let getTotalBetURI = window.location.origin + '/moderator/get_total_bet?game_type_number=' + gt_num + '&match_number=' + match_number;
    xhr_get_total_bet.open('GET', getTotalBetURI, true);
    xhr_get_total_bet.onload = function(){
      // console.log(this.response);
      json = JSON.parse(this.response);
      if (json.statusCode == '200') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

        // check status ..
        if(json.MatchStatus == 'NOT OPEN' || json.MatchStatus == 'CANCELLED' || json.MatchStatus == 'END'){

            parag_team_a_totalbet.innerHTML = '0.00';
            parag_team_b_totalbet.innerHTML = '0.00';

        } else if (json.MatchStatus == 'OPEN' || json.MatchStatus == 'LAST CALL' || json.MatchStatus == 'CLOSED') {

           parag_team_a_totalbet.innerHTML = json.TeamATotalBet == '' ? '0.00' : convertValueWithComma(json.TeamATotalBet);
           parag_team_b_totalbet.innerHTML = json.TeamBTotalBet == '' ? '0.00' : convertValueWithComma(json.TeamBTotalBet);

        }

      } else if (json.statusCode == '412') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      } else if (json.statusCode == '406') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      }

      triggerTimeoutTotalBet();
    }
    xhr_get_total_bet.send();
  } else {
    console.log("Browser still loading please wait");
    triggerTimeoutTotalBet();
  }

}

function matchVerdict (verdict) {

  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");

  let match = global_match_number.innerHTML;

  match_verdict = verdict;

  var xhr_match_verdict = new XMLHttpRequest();
  let matchVerdictURI = window.location.origin + '/moderator/match_verdict?game_type_number=' + gt_num + '&match_number=' + match + '&verdict=' + match_verdict;
  xhr_match_verdict.open('GET', matchVerdictURI, true);
  xhr_match_verdict.onload = function(){
    // console.log(this.response);
    json = JSON.parse(this.response);
    if (json.statusCode == '200') {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

      parag_team_a_totalbet.innerHTML = '0.00';
      parag_team_b_totalbet.innerHTML = '0.00';
      parag_team_a_odds.innerHTML = '';
      parag_team_b_odds.innerHTML = '';
      parag_team_a_odds.classList.add('d-none');
      parag_team_b_odds.classList.add('d-none');

      setTimeout(() => createMatch(), 3000);
    } else if (json.statusCode == '412') {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    } else if (json.statusCode == '406') {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    }
  }
  xhr_match_verdict.send();

}

function cancelMatchFunc () {

  let match_number = global_match_number.innerHTML;

  if( match_number != '' ) {
    var xhr_cancel_match = new XMLHttpRequest();
    let cancelMatchURI = window.location.origin + '/moderator/cancel_match?match_number=' + match_number;

    xhr_cancel_match.open('GET', cancelMatchURI, true);
    xhr_cancel_match.onload = function(){
      // console.log(this.response);
      json = JSON.parse(this.response);
      if (json.statusCode == '200') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

        setTimeout(() => createMatch(), 3000);

        count = 0;
        checkGameStatus(temp_status[count]);
        resetStatusList();
        statusBar(count);

      } else if (json.statusCode == '412') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      } else if (json.statusCode == '406') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      }

    }
    xhr_cancel_match.send();
  } else {
    console.log("[ERROR]: Empty match number");
  }

}









function statusBar (increasebar) {
  let steps_bar = document.querySelector('.status-container .steps-bar');
  let calculate = count * 25;
  steps_bar.style.width = parseFloat(calculate) + '%';
}

function percentwidth (elem) {
    var pa = elem.offsetParent || elem;
    return ((elem.offsetWidth/pa.offsetWidth)*100).toFixed(2);
}

function checkGameStatus (status) {
  if (status == 'NOT OPEN') {
    btn_next.disabled = false;
    btn_cancel.disabled = true;
    btn_team_a.disabled = true;
    btn_team_b.disabled = true;
    btn_draw.disabled = true;
    btn_close_arena.disabled = false;
  } else if (status == 'OPEN') {
    btn_next.disabled = false;
    btn_cancel.disabled = false;
    btn_team_a.disabled = true;
    btn_team_b.disabled = true;
    btn_draw.disabled = true;
    btn_close_arena.disabled = true;
  } else if (status == 'LAST CALL') {
    btn_next.disabled = false;
    btn_cancel.disabled = false;
    btn_team_a.disabled = true;
    btn_team_b.disabled = true;
    btn_draw.disabled = true;
    btn_close_arena.disabled = true;
  } else if (status == 'CLOSED') {
    btn_next.disabled = true;
    btn_cancel.disabled = true;
    btn_team_a.disabled = false;
    btn_team_b.disabled = false;
    btn_draw.disabled = false;
    btn_close_arena.disabled = true;
  } else if (status == 'END') {
    btn_next.disabled = true;
    btn_cancel.disabled = true;
    btn_team_a.disabled = true;
    btn_team_b.disabled = true;
    btn_draw.disabled = true;
    btn_close_arena.disabled = true;
  }

  return status;
}

function updateStatusList () {
  step_list.forEach(function(el, index){
    if (index == count) {
      setTimeout(()=>{
        el.classList.add('active');
      }, 750);
    }
  });
}

function resetStatusList () {
  step_list.forEach(function(el, index){
    if (index == 0) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}