let input_amount = document.getElementById('inputAmount');

let span_credits = document.getElementById('spanCredits');
let span_unpaid_commission = document.getElementById('spanUnpaidCommission');

let btn_send_request = document.getElementById('btnSendRequest');
btn_send_request.addEventListener('click', () => {
  killActiveAlerts();
  btn_send_request.innerHTML = 'Loading...';
  btn_send_request.disabled = true;
  validateRequiredFields();
});

function validateRequiredFields () {

  if (input_amount.validity.valid == false) {
    alertResponse( null, 'Please fill out the required fields.' );
    btn_send_request.innerHTML = 'Convert';
    btn_send_request.disabled = false;
    return;
  } else {
    convertCommission(input_amount.value);
  }

}

function convertCommission (amount) {
  var xhr_convert_commission = new XMLHttpRequest();
  let convertCommissionURI = window.location.origin + `/player/convert_commission?amount=${amount}`;
  xhr_convert_commission.open('GET', convertCommissionURI, true);
  xhr_convert_commission.onload = function() {
    let json = JSON.parse(this.response);
    if (json.statusCode == 200) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

      span_credits.innerHTML = convertValueWithComma(json.credits);
      span_unpaid_commission.innerHTML = convertValueWithComma(json.unpaidCommission);
      input_amount.value = '';

      console.log(json.credits)
      console.log(json.unpaidCommission)

    } else if (json.statusCode == 406) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    } else if (json.statusCode == 401) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    } else if (json.statusCode == 412) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    }

    alertResponse(json.statusCode, json.description);
    btn_send_request.innerHTML = 'Convert';
    btn_send_request.disabled = false;
  }
  xhr_convert_commission.send();
}

function alertResponse (status_code, message) {
  let alert = document.createElement('div');
  alert.style.maxWidth = '450px';
  alert.style.position = 'fixed';
  alert.style.bottom = '15px';
  alert.style.right = '15px';
  alert.style.transition="opacity 500ms";


  alert.classList.add('alert', 'alert-dismissible', 'fade', 'in');
  alert.setAttribute('role', 'alert');

  if (status_code == 200 || status_code == 201) {
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
      killActiveAlerts();
    }, 5000);

  }, 250);
}

function convertValueWithComma(value){
  if (value != null && value != '') {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
    return value;
  }
}

window.addEventListener('load', () => {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    var tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: 'focus click'
    })

    document.querySelector('.input-group-box span').addEventListener('mouseleave', () => {
      tooltip.hide();
    });

    return tooltip;
  })

});