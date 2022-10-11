// RJ - CODES (Validation Reworked) --------------------------------------
let select_country = document.getElementById('selectCountry');
let flag_icon = document.getElementsByClassName('flag')[0];

let input_username = document.querySelector('[name="username"]');
let input_password = document.querySelector('[name="password"]');
let btn_create_account = document.getElementById('btnRegister');
let btn_eye = document.getElementById('btnEye');

let usernameMinLength = document.getElementById('usernameMinLength');
let usernameAvailable = document.getElementById('usernameAvailable');
let usernameNotAvailable = document.getElementById('usernameNotAvailable');

let select_account_type = document.getElementById('selectAccountType');
let select_upline = document.getElementById('selectUpline');
let display_select_upline = document.getElementById('displaySelectUpline');
let input_invitation_code = document.getElementById('inputInvitationCode');

const choices = new Choices(select_upline, {
  shouldSort: false,
  shouldSortItems: false,
  renderChoiceLimit: 10,
  position: 'bottom'
  // sorter: function(a, b) {
  //   console.log(a);
  //   return a.label.length - b.label.length;
  // },
});

let input_commission_percent = document.getElementById('inputCommissionPercent');

select_account_type.addEventListener('change', () => {
  // getUpline(select_account_type.options[select_account_type.selectedIndex].value);
  getUplineChoices(select_account_type.options[select_account_type.selectedIndex].value);
});

// function getUpline ( account_type_number ) {

//   select_upline.innerHTML = '<option value="" selected disabled>--- SELECT UPLINE ---</option>';

//   var xhr_get_upline = new XMLHttpRequest();
//   let getUplineURI = window.location.origin + '/admin/get_upline?account_type_number=' + account_type_number;
//   xhr_get_upline.open('GET', getUplineURI, true);
//   xhr_get_upline.onload = function () {
//     let json = JSON.parse(this.response);
//     if (json.statusCode == '200') {
//       console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
//       json.result.forEach( (upline) => {
//         let option = document.createElement('option');
//         option.value = upline.ACCOUNT_NUMBER;
//         option.innerHTML = upline.USERNAME;
//         select_upline.append(option);
//       });
//     } else {
//       console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
//     }
//   }
//   xhr_get_upline.send();
// }

function getUplineChoices ( account_type_number ) {

  if ( account_type_number == 'ACC-TYPE-0004' ) {
    input_commission_percent.classList.add('d-none');
    display_select_upline.classList.add('d-none');
    input_invitation_code.classList.remove('d-none');
  } else if ( account_type_number == 'ACC-TYPE-0005' ) {
    input_commission_percent.classList.remove('d-none');
    display_select_upline.classList.remove('d-none');
    input_invitation_code.classList.remove('d-none');
  } else if ( account_type_number == 'ACC-TYPE-0006' ) {
    input_commission_percent.classList.remove('d-none');
    display_select_upline.classList.remove('d-none');
    input_invitation_code.classList.add('d-none');
  }

  // body...
  choices.clearChoices();
  choices.clearInput();

  var xhr_get_upline = new XMLHttpRequest();
  let getUplineURI = window.location.origin + '/admin/get_upline?account_type_number=' + account_type_number;
  xhr_get_upline.open('GET', getUplineURI, true);
  xhr_get_upline.onload = function () {
    let json = JSON.parse(this.response);
    if (json.statusCode == '200') {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      let arr_choices = new Array();
      arr_choices.push({ value: '', label: '--- SELECT UPLINE ---', selected: true, disabled: true })
      json.result.forEach( (upline) => {

        if (upline.ACCOUNT_TYPE !== null) {
          arr_choices.push(
            // { value: upline.ACCOUNT_NUMBER, label: `[ ${upline.ACCOUNT_TYPE} ] ${upline.USERNAME}` }
            { value: upline.ACCOUNT_NUMBER, label: `<span class='me-2 fw-bold badge bg-dark'>${upline.ACCOUNT_TYPE}</span> ${upline.USERNAME}` }

          );
        } else {
          arr_choices.push(
            { value: upline.ACCOUNT_NUMBER, label: `${upline.USERNAME}` }
          );
        }


      });
      // console.log(arr_choices);

      choices.setChoices(arr_choices);
    } else {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    }
  }
  xhr_get_upline.send();

  // choices.setChoices(async () => {
  // try {
  //   const result = await fetch(getUplineURI);
  //   if (result) {
  //     let json = JSON.parse(result);
  //     json.result.forEach( (upline) => {
  //       let option = document.createElement('option');
  //       option.value = upline.ACCOUNT_NUMBER;
  //       option.innerHTML = upline.USERNAME;
  //       select_upline.append(option);
  //     });
  //   }
  //   return result.json();
  // } catch (err) {
  //   console.error(err);
  // }
// });

}


input_username.addEventListener('input', () =>
{
  if (input_username.value.length < 4)
  {
    usernameAvailable.classList.add('d-none');
    usernameNotAvailable.classList.add('d-none');
    usernameMinLength.classList.remove('d-none');
    btn_create_account.disabled = true;
  }

  else
  {
    validateUsername();
  }
});

window.addEventListener('load', () =>
{
  findVisitorCountry();

  btn_eye.addEventListener('click', () => {
    let eye = btn_eye.querySelector('.fa');
    let span = btn_eye.querySelector('span');
    if (eye.classList.contains('fa-eye-slash') == true) {
      input_password.setAttribute('type', 'password');
      eye.classList.remove('fa-eye-slash');
      eye.classList.add('fa-eye');
      span.innerHTML = 'SHOW';
    } else {
      input_password.setAttribute('type', 'text');
      eye.classList.add('fa-eye-slash');
      eye.classList.remove('fa-eye');
      span.innerHTML = 'HIDE';
    }
    });

});

function findVisitorCountry()
{
  var xhr_current_location = new XMLHttpRequest();
  xhr_current_location.open('GET', location.protocol + '//ip-api.com/json', true);
  xhr_current_location.onloadend = function() {
    console.log(this.response);
    let current_location = JSON.parse(this.response);

    flag_icon.classList.add('flag-' + current_location.countryCode.toLowerCase());
    select_country.value = current_location.country;
  }
  xhr_current_location.send();
}

function validateUsername()
{
  let username = input_username.value;
  var xhr_validate_username = new XMLHttpRequest();
  let validateUsernameURI = window.location.origin + '/admin/validate_username?username=' + username;
  xhr_validate_username.open('GET', validateUsernameURI, true);
  xhr_validate_username.onload = function() {
    let json = JSON.parse(this.response);

    usernameMinLength.classList.add('d-none');

    if(json.result == 'true')
    {
      console.log(`[Message]: ${json.message}`);

      usernameAvailable.classList.remove('d-none');
      usernameNotAvailable.classList.add('d-none');
      btn_create_account.disabled = false;
    }

    else if(json.result == 'false')
    {
      console.log(`[Message]: ${json.message}`);

      usernameAvailable.classList.add('d-none');
      usernameNotAvailable.classList.remove('d-none');
      btn_create_account.disabled = true;
    }
  }
  xhr_validate_username.send();
}

function validateRequiredFields () {

  if (select_upline.validity.valid == false) {
    alertResponse( null, 'Please fill out the required fields.' );
    // btn_send_request.innerHTML = 'Convert';
    // btn_send_request.disabled = false;
    return;
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

btn_create_account.addEventListener('click', () => {
  validateRequiredFields();
});