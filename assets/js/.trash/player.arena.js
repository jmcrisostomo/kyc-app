let modal_bet_team_a;
let modal_bet_team_b;
let input_bet_team_a;
let input_bet_team_b;

// GLOBAL MATCH NUMBER
let global_match_number = document.getElementById('hiddenGlobalMatchNumber');

// MATCH DETAIL
let parag_match_description = document.getElementById('paragMatchDescription');
let parag_match_date = document.getElementById('paragMatchDate');
let span_fight_count = document.getElementById('spanFightCount');
let span_match_status = document.getElementById('spanMatchStatus');

let parag_team_a = document.getElementById('paragTeamA');
let span_modal_team_a = document.getElementById('spanModalTeamA');
let parag_team_a_totalbet = document.getElementById('paragTeamATotalBet');
let parag_team_a_odds = document.getElementById('paragTeamAOdds');
let btn_bet_team_a = document.getElementById('btnBetTeamA');
let hidden_player_bet_to_team_a = document.getElementById('hiddenPlayerBetToTeamA');
let trend_legend_team_a = document.getElementById('trendLegendTeamA');

let parag_team_b = document.getElementById('paragTeamB');
let span_modal_team_b = document.getElementById('spanModalTeamB');
let parag_team_b_totalbet = document.getElementById('paragTeamBTotalBet');
let parag_team_b_odds = document.getElementById('paragTeamBOdds');
let btn_bet_team_b = document.getElementById('btnBetTeamB');
let hidden_player_bet_to_team_b = document.getElementById('hiddenPlayerBetToTeamB');
let trend_legend_team_b = document.getElementById('trendLegendTeamB');

// Bet All Ins
let btn_all_in_team_a = document.getElementById('btnAllInTeamA');
let btn_all_in_team_b = document.getElementById('btnAllInTeamB');

// Send Bet Buttons
let btn_send_bet_team_a = document.getElementById('btnSendBetTeamA');
let btn_send_bet_team_b = document.getElementById('btnSendBetTeamB');

// Current Credits
// let span_current_credits = document.getElementById('spanCurrentCredits');

// Message Winner
let message_winner = document.getElementById('messageWinner');
let span_winner_fight_count = document.getElementById('spanWinnerFightCount');
let span_winner_verdict = document.getElementById('spanWinnerVerdict');

// Display Bettor
let player_bet_status = document.getElementById('playerBetStatus');
let player_bet_team = document.getElementById('playerBetTeam');
let player_bet_credits = document.getElementById('playerBetCredits');

// Player Bet Validator
let player_has_bet;

// Bet History
let btn_load_bet_history = document.getElementById('btnLoadBetHistory');
let bet_history_table = document.querySelector('#betHistoryTable table');

// Arena Overlay
let stream_arena_overlay = document.getElementById('streamArenaOverlay');

btn_load_bet_history.addEventListener('click', () => {

  btn_load_bet_history.disabled = true;
  btn_load_bet_history.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
  btn_load_bet_history.innerHTML += ' Loading...';
  // btn_load_bet_history.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
  // btn_load_bet_history.innerHTML += '<span class="visually-hidden">Loading...</span>';

  let offset = 0;
  let table_tbody = bet_history_table.querySelector('tbody')
  if (table_tbody.childElementCount) {
    console.log(table_tbody.childElementCount);
    offset += table_tbody.childElementCount;
  }

  // console.log(`Offset: ${offset}`)

  // let generateTR = () => {
  //   let tr = document.createElement('tr');
  //   let td_match_number = document.createElement('td');
  //   let td_status = document.createElement('td');
  //   let td_bet_to = document.createElement('td');
  //   let td_amount = document.createElement('td');
  //   let td_amount_won = document.createElement('td');
  //   let td_date_modified = document.createElement('td');
  //   td_match_number.innerHTML = '[td_match_number]';
  //   td_status.innerHTML = '[td_status]';
  //   td_bet_to.innerHTML = '[td_bet_to]';
  //   td_amount.innerHTML = '[td_amount]';
  //   td_amount_won.innerHTML = '[td_amount_won]';
  //   td_date_modified.innerHTML = '[td_date_modified]';
  //   tr.append(td_match_number);
  //   tr.append(td_status);
  //   tr.append(td_bet_to);
  //   tr.append(td_amount);
  //   tr.append(td_amount_won);
  //   tr.append(td_date_modified);
  //   table_tbody.append(tr);
  // };

  // for (var i = 0; i < offset; i++) {
  //   generateTR();
  // }

  var xhr_get_bet_history = new XMLHttpRequest();
  let match_number = global_match_number.innerHTML;
  let getBetHistoryURI = window.location.origin + '/player/get_bet_history?match_number=' + match_number + '&offset=' + offset;
  xhr_get_bet_history.open('GET', getBetHistoryURI, true);
  xhr_get_bet_history.onload = function() {
    let json = JSON.parse(this.response);
    if (json.result != 'empty') {
      // statement
      json.betHistoryData.forEach( function(bet_history_data, index) {
          let tr = document.createElement('tr');
          let td_match_number = document.createElement('td');
          let td_status = document.createElement('td');
          // let td_bet_to = document.createElement('td');
          let td_amount = document.createElement('td');
          let td_amount_won = document.createElement('td');
          let td_date_modified = document.createElement('td');
          td_match_number.innerHTML = bet_history_data.MATCH_NUMBER;
          if (bet_history_data.STATUS == 'WIN') {
            td_status.innerHTML = '<span class="badge bg-success">' + bet_history_data.STATUS + '<span>';
            td_status.innerHTML += '<br><span class="badge bg-light text-dark">' + bet_history_data.BET_TO + '<span>';
          } else if (bet_history_data.STATUS == 'LOSE') {
            td_status.innerHTML = '<span class="badge bg-danger">' + bet_history_data.STATUS + '<span>';
            td_status.innerHTML += '<br><span class="badge bg-light text-dark">' + bet_history_data.BET_TO + '<span>';
          } else if (bet_history_data.STATUS == 'DRAW') {
            td_status.innerHTML = '<span class="badge bg-warning text-dark">' + bet_history_data.STATUS + '<span>';
            td_status.innerHTML += '<br><span class="badge bg-light text-dark">' + bet_history_data.BET_TO + '<span>';
          } else if (bet_history_data.STATUS == 'PENDING') {
            td_status.innerHTML = '<span class="badge bg-warning">' + bet_history_data.STATUS + '<span>';
            td_status.innerHTML += '<br><span class="badge bg-light text-dark">' + bet_history_data.BET_TO + '<span>';
          } else if (bet_history_data.STATUS == 'CANCELLED') {
            td_status.innerHTML = '<span class="badge bg-dark">' + bet_history_data.STATUS + '<span>';
            td_status.innerHTML += '<br><span class="badge bg-light text-dark">' + bet_history_data.BET_TO + '<span>';
          }
          // td_status.innerHTML = bet_history_data.STATUS;
          // td_bet_to.innerHTML = bet_history_data.BET_TO;
          td_amount.innerHTML = '<span class="text-dark">'+convertValueWithComma(bet_history_data.AMOUNT)+'</span>';
          if (bet_history_data.AMOUNT_WON == null) {
            td_amount.innerHTML += '<br><span class="text-dark">0.00</span>';

          } else {
            td_amount.innerHTML += '<br><span class="text-success"> +' + (bet_history_data.AMOUNT_WON == null ? '0.00' : convertValueWithComma(bet_history_data.AMOUNT_WON))  + '</span>';
          }
          td_date_modified.innerHTML = bet_history_data.DATE_MODIFIED;
          // tr.append(td_match_number);
          tr.append(td_status);
          // tr.append(td_bet_to);
          tr.append(td_amount);
          // tr.append(td_amount_won);
          tr.append(td_date_modified);
          table_tbody.append(tr);
      });
      if (json.result < 5) {
        btn_load_bet_history.classList.add('d-none');
      }
    } else if (json.result == 'empty') {
      btn_load_bet_history.classList.add('d-none');
      btn_load_bet_history.parentElement.innerHTML += '<span class="text-dark text-center">No Bet History found.</span>';
      // btn_load_bet_history.parentElement.innerHTML += '<button class="btn btn-dark"><i class="fas fa-redo"></i></button>';
      console.log('[WARN] Bet History data request is Empty or No Results');
    }
  }
  xhr_get_bet_history.onloadend = function() {
    btn_load_bet_history.disabled = false;
    btn_load_bet_history.innerHTML = 'Load Bet History';
  }
  xhr_get_bet_history.send();
})


function bet_preset_buttons (id_team) {
  let pn_casual = document.querySelectorAll('.pn-casual');
  let pn_hardcore = document.querySelectorAll('.pn-hardcore');
  let pn_betlord = document.querySelectorAll('.pn-betlord');
  let pn_wallstreet = document.querySelectorAll('.pn-wallstreet');

  pn_casual.forEach( (btn) => btn.style.display = 'block' );
  pn_hardcore.forEach( (btn) => btn.style.display = 'none' );
  pn_betlord.forEach( (btn) => btn.style.display = 'none' );
  pn_wallstreet.forEach( (btn) => btn.style.display = 'none' );

  pn_casual.forEach( (btn) => {
    btn.addEventListener('click', () => {
      id_team.value = btn.value;
      console.log(btn.value);
    });
  } );
  pn_hardcore.forEach( (btn) => btn.addEventListener('click', () => {
    id_team.value = btn.value;
  }) );
  pn_betlord.forEach( (btn) => btn.addEventListener('click', () => {
    id_team.value = btn.value;
  }) );
  pn_wallstreet.forEach( (btn) => btn.addEventListener('click', () => {
    id_team.value = btn.value;
  }) );
}

function bet_preset_selects (id_team) {
  let pn_casual = document.querySelectorAll('.pn-casual');
  let pn_hardcore = document.querySelectorAll('.pn-hardcore');
  let pn_betlord = document.querySelectorAll('.pn-betlord');
  let pn_wallstreet = document.querySelectorAll('.pn-wallstreet');

  id_team.addEventListener('change', () => {
    if (id_team.options[id_team.selectedIndex].value == 'BET-PN-0001') {
      pn_casual.forEach( (btn) => btn.style.display = 'block' );
      pn_hardcore.forEach( (btn) => btn.style.display = 'none' );
      pn_betlord.forEach( (btn) => btn.style.display = 'none' );
      pn_wallstreet.forEach( (btn) => btn.style.display = 'none' );
    } else if (id_team.options[id_team.selectedIndex].value == 'BET-PN-0002') {
      pn_casual.forEach( (btn) => btn.style.display = 'none' );
      pn_hardcore.forEach( (btn) => btn.style.display = 'block' );
      pn_betlord.forEach( (btn) => btn.style.display = 'none' );
      pn_wallstreet.forEach( (btn) => btn.style.display = 'none' );
    } else if (id_team.options[id_team.selectedIndex].value == 'BET-PN-0003') {
      pn_casual.forEach( (btn) => btn.style.display = 'none' );
      pn_hardcore.forEach( (btn) => btn.style.display = 'none' );
      pn_betlord.forEach( (btn) => btn.style.display = 'block' );
      pn_wallstreet.forEach( (btn) => btn.style.display = 'none' );
    } else if (id_team.options[id_team.selectedIndex].value == 'BET-PN-0004') {
      pn_casual.forEach( (btn) => btn.style.display = 'none' );
      pn_hardcore.forEach( (btn) => btn.style.display = 'none' );
      pn_betlord.forEach( (btn) => btn.style.display = 'none' );
      pn_wallstreet.forEach( (btn) => btn.style.display = 'block' );
    }
  });
}

window.addEventListener('load', () => {

  preloadArena ();

  input_bet_team_a = document.getElementById('inputBetTeamA');
  input_bet_team_b = document.getElementById('inputBetTeamB');
  bet_preset_buttons(input_bet_team_a);
  bet_preset_buttons(input_bet_team_b);

  let select_bet_preset_team_a = document.getElementById('selectBetPresetTeamA');
  let select_bet_preset_team_b = document.getElementById('selectBetPresetTeamB');
  bet_preset_selects(select_bet_preset_team_a);
  bet_preset_selects(select_bet_preset_team_b);

  modal_bet_team_a = new bootstrap.Modal(document.getElementById('modalBetTeamA'), {});
  modal_bet_team_b = new bootstrap.Modal(document.getElementById('modalBetTeamB'), {});

  btn_bet_team_a.addEventListener('click', () => {
    modal_bet_team_a.show();
  });

  btn_bet_team_b.addEventListener('click', () => {
    modal_bet_team_b.show();
  });

  btn_all_in_team_a.addEventListener('click', () => {
    input_bet_team_a.value = (span_current_credits.innerHTML).replace(/,/g, '');
  });

  btn_all_in_team_b.addEventListener('click', () => {
    input_bet_team_b.value = (span_current_credits.innerHTML).replace(/,/g, '');
  });

  btn_send_bet_team_a.addEventListener('click', () => {
    validateSendBet(
      (span_current_credits.innerHTML).replace(/,/g, ''),
      input_bet_team_a.value,
      global_match_number.innerHTML,
      hidden_player_bet_to_team_a.value,
      (input_bet_team_a.getAttribute('data-min-bet')).replace(/,/g, '')
    );
  });

  btn_send_bet_team_b.addEventListener('click', () => {
    validateSendBet(
      (span_current_credits.innerHTML).replace(/,/g, ''),
      input_bet_team_b.value,
      global_match_number.innerHTML,
      hidden_player_bet_to_team_b.value,
      (input_bet_team_b.getAttribute('data-min-bet')).replace(/,/g, '')
    );
  });

});

function validatePlayerBet(match_number){
  if (match_number) {
    var xhr_validate_player_bet = new XMLHttpRequest();
    let validateBetURI = window.location.origin + '/player/validate_bettor?match_number='+ match_number;
    xhr_validate_player_bet.open('GET', validateBetURI, true);
    xhr_validate_player_bet.onload = function() {
      // console.log(this.response);
      let json = JSON.parse(this.response);
      if (json.statusCode == '200') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
        player_has_bet = false;

        player_bet_status.classList.add('d-none');

      } else if (json.statusCode == '412') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

        player_has_bet = true;
        player_bet_team.innerHTML = json.betDetails.betTo;
        player_bet_credits.innerHTML = convertValueWithComma(json.betDetails.amount);
        player_bet_status.classList.remove('d-none');
      }
    }
    xhr_validate_player_bet.send();
  }
}

function validateSendBet(current_credits, input_bet, match_number, bet_to, min_bet){

  // console.log(`Current Credits: ${parseFloat(current_credits)}`)
  // console.log(`Bet Input Credits: ${parseFloat(input_bet)}`)
  console.log(`Min Input: ${parseFloat(min_bet)}`)
  if (parseFloat(input_bet) < parseFloat(min_bet)) {
    // alert('Please cannot be lower than minimum bet input');
    alertResponse (null, 'You cannot bet lower than minimum bet input.')
  } else {
    if (input_bet == '') {
      // alert('Please select bet input');
      alertResponse (null, 'Please select bet input.')
    } else if (parseFloat(input_bet) > parseFloat(current_credits)) {
      // alert('You cannot bet more than your current credits');
      alertResponse (null, 'You cannot bet more than your current credits.')
    } else {
      // do send bet_xhr
      // alert('validation passed');

      var xhr_send_bet = new XMLHttpRequest();
      let sendBetURI = window.location.origin + '/player/bet?match_number='+ match_number +'&bet_to='+ bet_to +'&amount='+ input_bet;
      xhr_send_bet.open('GET', sendBetURI, true);
      xhr_send_bet.onload = function() {
        // console.log(this.response);
        let json = JSON.parse(this.response);
        if (json.statusCode == '200') {
          console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

          // getPlayerInformation();

          if (modal_bet_team_a._element.classList.contains('show')) {
            modal_bet_team_a.hide();
          }

          if (modal_bet_team_b._element.classList.contains('show')) {
            modal_bet_team_b.hide();
          }

        } else if (json.statusCode == '412') {
          console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

          if (json.message == 'Insufficient Fund') {
            alert(json.description);
          }

          if (modal_bet_team_a._element.classList.contains('show')) {
            modal_bet_team_a.hide();
          }

          if (modal_bet_team_b._element.classList.contains('show')) {
            modal_bet_team_b.hide();
          }

        }

        // btn_bet_team_a.classList.add('d-none');
        // btn_bet_team_b.classList.add('d-none');
      }
      xhr_send_bet.send();
    }
  }

}

function validatePlayerCurrentCredit(current_credits, btn_bet, id_team){
  if (current_credits == 0) {
    btn_bet.innerHTML = 'PLEASE ADD CREDITS';
    btn_bet.disabled = true;
  } else {
    btn_bet.innerHTML = 'CHOOSE ' + id_team;
    btn_bet.disabled = false;
  }
}

function showTrends(){
  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");

  var xhr_show_trends = new XMLHttpRequest();
  let showTrendsURI = window.location.origin + '/player/trends?game_type_number='+gt_num;
  xhr_show_trends.open('GET', showTrendsURI, true);
  xhr_show_trends.onload = function() {

      let trends_tables = document.querySelector('.trends > tbody');
      trends_tables.innerHTML = '';
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(this.response, 'text/html');
      trends_tables.innerHTML = this.response;
      fillTable();

      // snippet from: https://stackoverflow.com/questions/6297591/how-to-invert-transpose-the-rows-and-columns-of-an-html-table/40213981
      const transposeTable = (tbody, newContainerType = "tbody") => {
        const rows = Array.from(tbody.querySelectorAll("tr"))
        const newTbody = document.createElement(newContainerType)

        for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
          const row = rows[rowIdx]
          const cells = Array.from(row.querySelectorAll("td, th"))

          for (let cellIdx = 0; cellIdx < cells.length; cellIdx++ ) {
            const cell = cells[cellIdx]
            const newRow = newTbody.children[cellIdx] || document.createElement("tr")
            if (!newTbody.children[cellIdx]) {
              newTbody.appendChild(newRow)
            }
            newRow.appendChild(cell.cloneNode(true))
          }
        }

        // Do live DOM manipulations only once for performance
        tbody.parentElement.appendChild(newTbody)
        tbody.parentElement.removeChild(tbody)
      }

      transposeTable(trends_tables)

  }
  xhr_show_trends.send();
}


function fillTable()
{
  let trends_tables = document.querySelector('.trends');
  let trs = trends_tables.getElementsByTagName('tr');
  let len = trs.length;
  let max = 0;
  let td;

  // SEARCH LONGEST TABLE ROW VIA NUMBER OF CHILDREN
  for (let i = len; i--;)
  {
    if(trs[i].children.length > max)
    {
      max = trs[i].children.length;
    }
  }

  // FILL OTHER ROWS USING THE FINAL VALUE OF MAX
  for (let j = len; j--;)
  {
    while (trs[j].children.length < max)
    {
      td = document.createElement('td');
      trs[j].appendChild(td);
    }
  }
}

fillTable();

function getMinimumBet () {
  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");

  var xhr_minimum_bet = new XMLHttpRequest();
  let minimumBetURI = window.location.origin + '/player/minimum_bet_checker?game_type_number='+gt_num;
  xhr_minimum_bet.open('GET', minimumBetURI, true);
  xhr_minimum_bet.onload = function() {

      let json = JSON.parse(this.response);
      if (json.statusCode == '200') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

        input_bet_team_a.setAttribute('data-min-bet', json.minimumBet);
        input_bet_team_a.setAttribute('placeholder', 'Minimum Bet: ' + convertValueWithComma(json.minimumBet));
        input_bet_team_b.setAttribute('data-min-bet', json.minimumBet);
        input_bet_team_b.setAttribute('placeholder', 'Minimum Bet: ' + convertValueWithComma(json.minimumBet));

      } else {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      }

  }
  xhr_minimum_bet.send();
}

function alertResponse (status_code, message) {

  let alert = document.createElement('div');
  alert.style.zIndex = 2000;
  alert.style.maxWidth = '450px';
  alert.style.position = 'fixed';
  alert.style.bottom = '15px';
  alert.style.right = '15px';
  alert.style.transition="opacity 500ms";


  alert.classList.add('alert', 'alert-dismissible', 'fade', 'in');
  alert.setAttribute('role', 'alert');

  if (status_code == 201 || status_code == 200) {
    alert.classList.add('alert-success');
    alert.innerHTML = message;
  } else {
    alert.classList.add('alert-warning');
    alert.innerHTML = message;
  }

  let btn_alert_dismiss = document.createElement('button');
  btn_alert_dismiss.setAttribute('type', 'button');
  btn_alert_dismiss.setAttribute('data-bs-dismiss', 'alert');
  btn_alert_dismiss.setAttribute('aria-label', 'Close');
  btn_alert_dismiss.classList.add('btn-close');

  alert.append(btn_alert_dismiss);

  document.body.append(alert);

  // for fade in
  setTimeout( ()=> {
    alert.style.opacity = "1";

    // auto dismiss for 5s
    setTimeout( () => {
      alert.style.opacity = "0";
      killActiveAlerts(); // Global Function; check player.common.js
    }, 3000);

  }, 250);
}

window.addEventListener('load', () => {
  getLatestMatch();
  getMinimumBet();
});

// function getPlayerInformation(){
//   var xhr_get_player_information = new XMLHttpRequest();
//   let getPlayerInfoURI = window.location.origin + '/player/get_player_information';
//   xhr_get_player_information.open('GET', getPlayerInfoURI, true);
//   xhr_get_player_information.onload = function() {
//     // console.log(this.response);
//     json = JSON.parse(this.response);
//     if (json.statusCode == 200) {
//       console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

//       span_current_credits.innerHTML = convertValueWithComma(json.playerInformation.Credits);

//     } else if (json.statusCode == 412) {
//       console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
//     }
//   }
//   xhr_get_player_information.send();
// }

function getLatestMatch() {

  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");
  // console.log(gt_num);

  var xhr_get_latest_match = new XMLHttpRequest();

  xhr_get_latest_match.open('GET', window.location.origin + '/player/get_latest_match?game_type_number=' + gt_num, true);

  let delay_trigger_match_status = '';

  xhr_get_latest_match.onload = function(){
    // console.log(this.response);
    json = JSON.parse(this.response);
    if (json.statusCode == 200) {

        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

        moment().utcOffset("+08:00");
        // let date_today = moment().format('YYYY-MM-DD');
        let match_date_modified = json.matchDetails.DateModified;
        // let format_date_modified = moment(match_date_modified).format('YYYY-MM-DD');
        // console.log(format_date_modified);

        global_match_number.innerHTML = json.matchDetails.MatchNumber;

        // setTimeout(updateMatchDetails(json.matchDetails), 5000);
        updateMatchDetails(json.matchDetails);


        if (json.matchDetails.MatchStatus == 'OPEN' || json.matchDetails.MatchStatus == 'LAST CALL') {
          getTotalBet(json.matchDetails.MatchStatus, gt_num, json.matchDetails.MatchNumber);
        } else {
          parag_team_a_totalbet.innerHTML = convertValueWithComma(json.matchDetails.TeamATotalBet);
          parag_team_b_totalbet.innerHTML = convertValueWithComma(json.matchDetails.TeamBTotalBet);
        }

        delay_trigger_match_status = json.matchDetails.MatchStatus;

    } else if (json.statusCode == 412) {
      // console.log(json);
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

        // createMatch();

    }

    // if (delay_trigger_match_status !== 'CANCELLED' || delay_trigger_match_status !== 'END') {
      triggerLatestMatch();
    // } else {
    //   console.log('TRIGGER DELAY HERE');
    //   setTimeout(() => triggerLatestMatch(), 10000);
    // }


  }
  xhr_get_latest_match.send();
}

function animateStatus(match_status){
  if (match_status == 'LAST CALL') {
    if (span_match_status.classList.contains('animated') === false ) {
      span_match_status.classList.add('animated', 'flash', 'infinite');
    }
  } else {
    span_match_status.classList.remove('animated','flash','infinite');
  }
}

function showMessageWinner(match_status, winner_verdict, fight_count, team_a, team_b) {
  if (match_status == 'END') {
    message_winner.classList.add('animated');
    message_winner.classList.remove('d-none');

    if (message_winner.classList.contains('fadeIn') === false) {
      // if (message_winner.classList.contains('fadeOut') == true) {
      //   message_winner.classList.remove('fadeOut');
      // }
      message_winner.classList.add('fadeIn');
    }
    span_winner_verdict.innerHTML = winner_verdict;

    if (winner_verdict == team_a) {
      span_winner_verdict.classList.remove('text-light');
      span_winner_verdict.classList.add('text-danger');
    } else if (winner_verdict == team_b) {
      span_winner_verdict.classList.remove('text-light');
      span_winner_verdict.classList.add('text-primary');
    } else if (winner_verdict == 'DRAW') {
      span_winner_verdict.classList.remove('text-light');
      span_winner_verdict.classList.add('text-warning');
    }

    span_winner_fight_count.innerHTML = fight_count;
  } else {
    // setTimeout(() => {

      // if (message_winner.classList.contains('fadeIn') == true) {
        // message_winner.classList.remove('fadeIn');
      // }

      if (message_winner.classList.contains('fadeOut') === false && message_winner.classList.contains('animated') == true) {
        message_winner.classList.add('fadeOut');
      }
      // message_winner.classList.remove('animated', 'fadeIn');
      // message_winner.classList.add('animated', 'fadeOut');
      span_winner_verdict.innerHTML = '';
      span_winner_fight_count.innerHTML = fight_count;

      if (message_winner.classList.contains('d-none') === false) {
        message_winner.classList.add('d-none');
      }

    // }, 3000);
  }
  // message_winner
  // span_winner_fight_count
  // span_winner_verdict
}


function getTotalBet(match_status, game_type_number, match_number){

  if (match_status == 'OPEN' ||  match_status == 'LAST CALL') {
    var xhrGetTotalBet = new XMLHttpRequest();
    let window_url = window.location.origin + '/player/get_total_bet?game_type_number=' + game_type_number + '&match_number=' + match_number;

    xhrGetTotalBet.open('GET', window_url, true);
    xhrGetTotalBet.onload = function(){

      // console.log(this.response);

      json = JSON.parse(this.response);
      if (json.statusCode == '200') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

        // check status ..
        if(json.MatchStatus == 'NOT OPEN' || json.MatchStatus == 'CANCELLED' || json.MatchStatus == 'END'){

            parag_team_a_totalbet.innerHTML = '0.00';
            parag_team_b_totalbet.innerHTML = '0.00';

        } else if (json.MatchStatus == 'OPEN' || json.MatchStatus == 'LAST CALL' || json.MatchStatus == 'CLOSED') {

          console.log()

           parag_team_a_totalbet.innerHTML = json.TeamATotalBet == '' ? '0.00' : convertValueWithComma(json.TeamATotalBet);
           parag_team_b_totalbet.innerHTML = json.TeamBTotalBet == '' ? '0.00' : convertValueWithComma(json.TeamBTotalBet);

        }

      } else if (json.statusCode == '412') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      } else if (json.statusCode == '406') {
        console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      }
    }
    xhrGetTotalBet.send();


  } else {
    console.log("Browser still loading please wait");
    // triggerTimeoutTotalBet();
  }
}

function forceCloseModalBets(match_status){

  if (match_status !== 'OPEN' && match_status !== 'LAST CALL') {

    if (modal_bet_team_a._element.classList.contains('show')) {
      modal_bet_team_a.hide();
    }

    if (modal_bet_team_b._element.classList.contains('show')) {
      modal_bet_team_b.hide();
    }
  }
}

function updateMatchDetails(latest_match_json){

  if (latest_match_json.MatchStatus == 'NOT OPEN') {
    span_match_status.classList.add('bg-danger');
    btn_bet_team_a.classList.add('d-none');
    btn_bet_team_b.classList.add('d-none');
    parag_team_a_odds.classList.add('d-none');
    parag_team_b_odds.classList.add('d-none');
    span_match_status.style.color = 'white';

  } else if (latest_match_json.MatchStatus == 'OPEN') {
    span_match_status.classList.add('bg-danger');
    if (player_has_bet == true) {
      btn_bet_team_a.classList.add('d-none');
      btn_bet_team_b.classList.add('d-none');
    } else if (player_has_bet == false) {
      btn_bet_team_a.classList.remove('d-none');
      btn_bet_team_b.classList.remove('d-none');
    }
  } else if(latest_match_json.MatchStatus == 'LAST CALL') {
    span_match_status.classList.remove('bg-danger');
    span_match_status.classList.add('bg-warning');
    span_match_status.style.color = 'black';
    if (player_has_bet == true) {
      btn_bet_team_a.classList.add('d-none');
      btn_bet_team_b.classList.add('d-none');
    } else if (player_has_bet == false) {
      btn_bet_team_a.classList.remove('d-none');
      btn_bet_team_b.classList.remove('d-none');
    }
  } else if (latest_match_json.MatchStatus == 'CLOSED') {
    btn_bet_team_a.classList.add('d-none');
    btn_bet_team_b.classList.add('d-none');
    span_match_status.classList.remove('bg-warning');
    span_match_status.classList.remove('bg-danger');
    span_match_status.classList.add('bg-secondary');
    span_match_status.style.color = 'white';

    parag_team_a_odds.innerHTML = '('+ latest_match_json.TeamAOddsNew +'%)';
    parag_team_b_odds.innerHTML = '('+ latest_match_json.TeamBOddsNew +'%)';
    parag_team_a_odds.classList.remove('d-none');
    parag_team_b_odds.classList.remove('d-none');
    parag_team_a.innerHTML = latest_match_json.TeamA;
    parag_team_a_totalbet.innerHTML = latest_match_json.TeamATotalBet;
    parag_team_b.innerHTML = latest_match_json.TeamB;
    parag_team_b_totalbet.innerHTML = latest_match_json.TeamBTotalBet;

  } else if ( latest_match_json.MatchStatus == 'CANCELLED') {
    span_match_status.classList.add('bg-danger');
    span_match_status.style.color = 'white';

    btn_bet_team_a.classList.add('d-none');
    btn_bet_team_b.classList.add('d-none');
    parag_team_a_odds.classList.add('d-none');
    parag_team_b_odds.classList.add('d-none');

  } else if (latest_match_json.MatchStatus == 'END'){
    span_match_status.classList.add('bg-danger');
  }




  parag_match_description.innerHTML = latest_match_json.Description;
  parag_match_date.innerHTML = moment(latest_match_json.DateModified).format('MMMM DD, YYYY');
  span_fight_count.innerHTML = latest_match_json.FightCount;

  parag_team_a.innerHTML = json.matchDetails.TeamA;
  parag_team_b.innerHTML = json.matchDetails.TeamB;

  span_modal_team_a.innerHTML = json.matchDetails.TeamA;
  span_modal_team_b.innerHTML = json.matchDetails.TeamB;

  hidden_player_bet_to_team_a.value = json.matchDetails.TeamA;
  hidden_player_bet_to_team_b.value = json.matchDetails.TeamB;

  trend_legend_team_a.innerHTML = json.matchDetails.TeamA;
  trend_legend_team_b.innerHTML = json.matchDetails.TeamB;

  span_match_status.innerHTML = latest_match_json.MatchStatus;

  // getPlayerInformation();
  showTrends();
  animateStatus(latest_match_json.MatchStatus);
  validatePlayerBet(global_match_number.innerHTML);
  showMessageWinner(latest_match_json.MatchStatus, latest_match_json.Winner, latest_match_json.FightCount, latest_match_json.TeamA, latest_match_json.TeamB );
  forceCloseModalBets(latest_match_json.MatchStatus);
  validatePlayerCurrentCredit((span_current_credits.innerHTML).replace(/,/g, ''), btn_bet_team_a, latest_match_json.TeamA);
  validatePlayerCurrentCredit((span_current_credits.innerHTML).replace(/,/g, ''), btn_bet_team_b, latest_match_json.TeamB);

  showArenaOverlay (latest_match_json.ArenaStatus);

}

function showArenaOverlay (arena_status) {
  if (arena_status == 'OPEN') {
    stream_arena_overlay.classList.add('d-none');
  } else if (arena_status == 'CLOSED') {
    stream_arena_overlay.classList.remove('d-none');
  }
}

function preloadArena () {
  // Geting the GET Paramaters for game_type_number
  let window_url = window.location.search;
  let params = new URLSearchParams(window_url);
  let gt_num = params.get("game_type_number");

  var xhr_preload_arena = new XMLHttpRequest();
  let preloadArenaURI = window.location.origin + '/player/preload_arena?game_type_number=' + gt_num;
  xhr_preload_arena.open('GET', preloadArenaURI, true);
  xhr_preload_arena.onload = function () {
    let json = JSON.parse(this.response);
    if (json.statusCode == '200') {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

      parag_match_description.innerHTML = json.gameDescription;
      parag_team_a.innerHTML = json.teamA;
      parag_team_b.innerHTML = json.teamB;
      trend_legend_team_a.innerHTML = json.teamA;
      trend_legend_team_b.innerHTML = json.teamB;

      showArenaOverlay(json.gameStatus);

    } else {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    }
  }
  xhr_preload_arena.send();


}

function triggerLatestMatch(){

  setTimeout(function() {

    getLatestMatch();

  }, 1000);

}