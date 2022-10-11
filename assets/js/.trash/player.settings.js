inputEmailAddress
inputContactNumber
btnSave


let input_email_address = document.getElementById('inputEmailAddress');
let input_contact_number = document.getElementById('inputContactNumber');
let btn_save = document.getElementById('btnSave');
btn_save.addEventListener('click', () => {
  killActiveAlerts();
  btn_save.innerHTML = 'Loading...';
  btn_save.disabled = true;
  validateRequiredFields();
});

function validateRequiredFields () {

  if (input_email_address.validity.valid == false || input_contact_number.validity.valid == false) {
    alertResponse( null, 'Please fill out the required fields.' );
    btn_save.innerHTML = 'Save';
    btn_save.disabled = false;
    return;
  } else {

    updateUserInfomation( input_email_address.value, input_contact_number.value );

  }

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


function updateUserInfomation (email_address, contact_number) {
  console.log(`contact_number=${contact_number} | email_address=${email_address}`);
  var xhr_update_user_information = new XMLHttpRequest();
  let updateUserInfomationURI = window.location.origin + `/player/update_personal_information?contact_number=${contact_number}&email_address=${email_address}`;
  xhr_update_user_information.open('GET', updateUserInfomationURI, true);
  xhr_update_user_information.onload = function() {
    let json = JSON.parse(this.response);
    if (json.statusCode == 200) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

    } else if (json.statusCode == 406) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    } else if (json.statusCode == 401) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    } else if (json.statusCode == 412) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    }

    alertResponse(json.statusCode, json.description);
    btn_save.innerHTML = 'Save';
    btn_save.disabled = false;
  }
  xhr_update_user_information.send();
}