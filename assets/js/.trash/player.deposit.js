let select_outlet_type = document.getElementById('selectOutletType');
let select_outlet = document.getElementById('selectOutlet');
let select_outlet_account = document.getElementById('selectOutletAccount');

let required_fields = document.getElementById('requiredFields');

let input_receiver_account_name = document.getElementById('inputReceiverAccountName');
let input_receiver_account_number = document.getElementById('inputReceiverAccountNumber');
let input_receiver_card_number = document.getElementById('inputReceiverCardNumber');

let input_reference_number = document.getElementById('inputReferenceNumber');
let input_control_number = document.getElementById('inputControlNumber');

let input_sender_account_name = document.getElementById('inputSenderAccountName');
let input_sender_account_number = document.getElementById('inputSenderAccountNumber');
let input_sender_card_number = document.getElementById('inputSenderCardNumber');


let input_amount = document.getElementById('inputAmount');
let span_min_deposit = document.getElementById('spanMinDeposit');
let span_max_deposit = document.getElementById('spanMaxDeposit');

let text_area_notes = document.getElementById('textAreaNotes');

let input_deposit_file = document.getElementById('inputDepositFile');

let btn_send_request = document.getElementById('btnSendRequest');

select_outlet_type.addEventListener('change', () => {
  select_outlet.innerHTML = '';
  select_outlet_account.innerHTML = '';
  input_reference_number.value = '';
  input_sender_account_name.value = '';
  input_sender_account_number.value = '';
  input_sender_card_number.value = '';
  input_control_number.value = '';
  input_deposit_file.value = '';
  text_area_notes.value = '';
  input_amount.value = '';
  required_fields.classList.add('d-none');

  if (select_outlet_type.value != '') {
    getOutlet (select_outlet_type.value);
    if (select_outlet_type.value == 'OUTLET-TYPE-0001') {
      input_reference_number.disabled = false;
      input_control_number.disabled = true;
      input_receiver_account_name.disabled = false;
      input_receiver_account_number.disabled = false;
      input_receiver_card_number.disabled = true;
      input_sender_card_number.disabled = true;
      input_sender_account_number.disabled = false;
      input_reference_number.parentElement.classList.remove('d-none');
      input_control_number.parentElement.classList.add('d-none');
      input_receiver_account_name.parentElement.classList.remove('d-none');
      input_receiver_account_number.parentElement.classList.remove('d-none');
      input_receiver_card_number.parentElement.classList.add('d-none');
      input_sender_card_number.parentElement.classList.add('d-none');
      input_sender_account_number.parentElement.classList.remove('d-none');

      input_receiver_account_name.previousElementSibling.innerHTML = 'Receiver Account Name';
      input_sender_account_name.previousElementSibling.innerHTML = 'Sender Account Name';

    } else if (select_outlet_type.value == 'OUTLET-TYPE-0002') {
      input_reference_number.disabled = false;
      input_control_number.disabled = true;
      input_receiver_account_name.disabled = false;
      input_receiver_account_number.disabled = false;
      input_receiver_card_number.disabled = false;
      input_sender_card_number.disabled = false;
      input_sender_account_number.disabled = false;
      input_reference_number.parentElement.classList.remove('d-none');
      input_control_number.parentElement.classList.add('d-none');
      input_receiver_account_name.parentElement.classList.remove('d-none');
      input_receiver_account_number.parentElement.classList.remove('d-none');
      input_receiver_card_number.parentElement.classList.remove('d-none');
      input_sender_card_number.parentElement.classList.remove('d-none');
      input_sender_account_number.parentElement.classList.remove('d-none');

      input_receiver_account_name.previousElementSibling.innerHTML = 'Receiver Account Name';
      input_sender_account_name.previousElementSibling.innerHTML = 'Sender Account Name';

    } else if (select_outlet_type.value == 'OUTLET-TYPE-0003') {
      input_reference_number.disabled = true;
      input_control_number.disabled = false;
      input_receiver_account_name.disabled = false;
      input_receiver_account_number.disabled = true;
      input_receiver_card_number.disabled = true;
      input_sender_card_number.disabled = true;
      input_sender_account_number.disabled = true;
      input_reference_number.parentElement.classList.add('d-none');
      input_control_number.parentElement.classList.remove('d-none');
      input_receiver_account_name.parentElement.classList.remove('d-none');
      input_receiver_account_number.parentElement.classList.add('d-none');
      input_receiver_card_number.parentElement.classList.add('d-none');
      input_sender_card_number.parentElement.classList.add('d-none');
      input_sender_account_number.parentElement.classList.add('d-none');

      input_receiver_account_name.previousElementSibling.innerHTML = 'Receiver Name';
      input_sender_account_name.previousElementSibling.innerHTML = 'Sender Name';

    }
  }
});

select_outlet.addEventListener('change', () => {

  select_outlet_account.innerHTML = '';
  input_reference_number.value = '';
  input_sender_account_name.value = '';
  input_sender_account_number.value = '';
  input_sender_card_number.value = '';
  input_control_number.value = '';
  input_deposit_file.value = '';
  text_area_notes.value = '';
  input_amount.value = '';
  required_fields.classList.add('d-none');

  if (select_outlet.value != '') {
    span_min_deposit.innerHTML = convertValueWithComma(select_outlet.options[select_outlet.selectedIndex].getAttribute('data-min-deposit'));
    span_max_deposit.innerHTML = convertValueWithComma(select_outlet.options[select_outlet.selectedIndex].getAttribute('data-max-deposit'));
    getOutletAccount (select_outlet.value);
  }
});

select_outlet_account.addEventListener('change', () => {
  if (select_outlet_account.value != '') {
    getOutletAccountDetails (select_outlet.value, select_outlet_account.value);
    required_fields.classList.remove('d-none');
  }
});


btn_send_request.addEventListener('click', () => {

  killActiveAlerts();

  btn_send_request.innerHTML = 'Loading...';
  btn_send_request.disabled = true;

  // document.getElementById('your_input_id').validity.valid
  // console.log(input_amount.validity.valid);
  validateRequiredFields();
});

window.addEventListener('load', () => {
  getOutletType();
});

function getOutletType () {
  var xhr_get_outlet_type = new XMLHttpRequest();
  let getOutletTypeURI = window.location.origin + '/player/get_outlet_type';
  xhr_get_outlet_type.open('GET', getOutletTypeURI, true);
  xhr_get_outlet_type.onload = function() {
    let json = JSON.parse(this.response);
    json.data.forEach( function(outlet_type_data) {

      let option = document.createElement('option');
      option.value = outlet_type_data.OUTLET_TYPE_NUMBER;
      option.innerHTML = outlet_type_data.OUTLET_TYPE;

      select_outlet_type.append(option);
      // console.log(outlet_type_data);
    });
  }
  xhr_get_outlet_type.send();
}

function getOutlet (outlet_type_number) {
  //SHOW LOADING
  select_outlet.innerHTML = '<option value="" disabled selected>Loading...</option>';

  var xhr_get_outlet = new XMLHttpRequest();
  let getOutletURI = window.location.origin + '/player/get_outlet?outlet_type_number=' + outlet_type_number;
  xhr_get_outlet.open('GET', getOutletURI, true);
  xhr_get_outlet.onloadend = function() {
    select_outlet.innerHTML = '<option value="" disabled selected>-- Select Outlet --</option>';

    let json = JSON.parse(this.response);
    json.data.forEach( function(outlet_data) {

      let option = document.createElement('option');
      option.value = outlet_data.OUTLET_NUMBER;
      option.innerHTML = outlet_data.OUTLET;

      option.setAttribute('data-min-deposit', convertValueWithComma(outlet_data.MIN_DEPOSIT));
      option.setAttribute('data-max-deposit', convertValueWithComma(outlet_data.MAX_DEPOSIT));

      // span_min_deposit.innerHTML = convertValueWithComma(outlet_data.MIN_DEPOSIT);
      // span_max_deposit.innerHTML = convertValueWithComma(outlet_data.MAX_DEPOSIT);


      select_outlet.append(option);
      // console.log(outlet_type_data);
    });
  }
  xhr_get_outlet.send();
}

function getOutletAccount (outlet_number) {
  //SHOW LOADING
  select_outlet_account.innerHTML = '<option value="" disabled selected>Loading...</option>';

  var xhr_get_outlet_account = new XMLHttpRequest();
  let getOutletAccountsURI = window.location.origin + '/player/get_outlet_account?outlet_number=' + outlet_number;
  xhr_get_outlet_account.open('GET', getOutletAccountsURI, true);
  xhr_get_outlet_account.onloadend = function() {
    select_outlet_account.innerHTML = '<option value="" disabled selected>-- Select Outlet Accounts --</option>';

    let json = JSON.parse(this.response);
    json.data.forEach( function(outlet_acc_data) {

      let option = document.createElement('option');
      option.value = outlet_acc_data.OUTLET_ACCOUNT_NUMBER;
      option.innerHTML = outlet_acc_data.ACCOUNT_NAME;
      select_outlet_account.append(option);



      // console.log(outlet_type_data);
    });
  }
  xhr_get_outlet_account.send();
}

function getOutletAccountDetails (outlet_number, outlet_acc_number) {

  var xhr_get_outlet_acc_detail = new XMLHttpRequest();
  let getOutletAccDetailURI = window.location.origin + '/player/get_outlet_account?outlet_number=' + outlet_number + '&outlet_account_number=' + outlet_acc_number;
  xhr_get_outlet_acc_detail.open('GET', getOutletAccDetailURI, true);
  xhr_get_outlet_acc_detail.onloadend = function() {

    let json = JSON.parse(this.response);
    json.data.forEach( function(outlet_acc_detail_data) {
      // console.log(outlet_acc_detail_data);

      input_receiver_account_name.value = outlet_acc_detail_data.ACCOUNT_NAME;
      input_receiver_account_number.value = outlet_acc_detail_data.ACCOUNT_NUMBER;
      input_receiver_card_number.value = outlet_acc_detail_data.CARD_NUMBER;

      // let option = document.createElement('option');
      // option.value = outlet_acc_data.OUTLET_ACCOUNT_NUMBER;
      // option.innerHTML = outlet_acc_data.ACCOUNT_NAME;

      // select_outlet_account.append(option);
      // console.log(outlet_type_data);
    });
  }
  xhr_get_outlet_acc_detail.send();

}

function validateRequiredFields () {
  if (select_outlet_type.validity.valid == false || select_outlet.validity.valid == false ||select_outlet_account.validity.valid == false || input_amount.validity.valid == false || input_deposit_file.validity.valid == false) {
    // alert('Please fill out the required fields.');
    alertResponse( null, 'Please fill out the required fields.' );
    btn_send_request.innerHTML = 'Send Request';
    btn_send_request.disabled = false;
    return;
  } else {

    if (span_max_deposit.innerHTML !== 'No Limit') {
      if (parseFloat(input_amount.value) < parseFloat((span_min_deposit.innerHTML).replace(/,/g, ''))) {
        // alert('Amount cannot be less than minimum deposit');
        alertResponse( null, 'Amount cannot be less than minimum deposit.' );
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      } else if (parseFloat(input_amount.value) > parseFloat((span_max_deposit.innerHTML).replace(/,/g, ''))) {
        // alert('Amount cannot be more than maximum deposit');
        alertResponse( null, 'Amount cannot be more than maximum deposit' );
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      }
    } else {
      if (parseFloat(input_amount.value) < parseFloat((span_min_deposit.innerHTML).replace(/,/g, ''))) {
        // alert('Amount cannot be less than minimum deposit');
        alertResponse( null, 'Amount cannot be less than minimum deposit.' );
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      }
    }

    if (select_outlet_type.value == 'OUTLET-TYPE-0001') {
      if(input_reference_number.validity.valid == false || input_sender_account_name.validity.valid == false || input_sender_account_number.validity.valid == false){
        // alert('Please fill out the required fields.');
        alertResponse( null, 'Please fill out the required fields.' );
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      }
    } else if (select_outlet_type.value == 'OUTLET-TYPE-0002') {
      if (input_reference_number.validity.valid == false || input_sender_account_name.validity.valid == false || input_sender_account_number.validity.valid == false || input_sender_card_number.validity.valid == false) {
        // alert('Please fill out the required fields.');
        alertResponse( null, 'Please fill out the required fields.' );
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      }
    } else if (select_outlet_type.value == 'OUTLET-TYPE-0003') {
      if (input_control_number.validity.valid == false || input_sender_account_name.validity.valid == false) {
        // alert('Please fill out the required fields.');
        alertResponse( null, 'Please fill out the required fields.' );
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      }
    }

    // console.log('send');
    sendDeposit();
  }
}

function sendDeposit () {

  var sendDepositFormData = new FormData();
  // sendDepositFormData.append('post_parameter', value_of_element);

  // outlet_type_number
  // outlet_number
  // outlet_account_number
  // amount
  // notes
  // file
  sendDepositFormData.append('outlet_type_number', select_outlet_type.value);
  sendDepositFormData.append('outlet_number', select_outlet.value);
  sendDepositFormData.append('outlet_account_number', select_outlet_account.value);
  sendDepositFormData.append('amount', input_amount.value);
  sendDepositFormData.append('notes', text_area_notes.value);
  sendDepositFormData.append('Add_Image', input_deposit_file.files[0]);

  if (select_outlet_type.value == 'OUTLET-TYPE-0001') {
    sendDepositFormData.append('reference_number', input_reference_number.value);
    sendDepositFormData.append('account_name', input_sender_account_name.value);
    sendDepositFormData.append('account_number', input_sender_account_number.value);
  } else if (select_outlet_type.value == 'OUTLET-TYPE-0002') {
    sendDepositFormData.append('reference_number', input_reference_number.value);
    sendDepositFormData.append('account_name', input_sender_account_name.value);
    sendDepositFormData.append('account_number', input_sender_account_number.value);
    sendDepositFormData.append('card_number', input_sender_card_number.value);
  } else if (select_outlet_type.value == 'OUTLET-TYPE-0003') {
    sendDepositFormData.append('control_number', input_control_number.value);
    sendDepositFormData.append('sender_name', input_sender_account_name.value);
  }

  var xhr_send_deposit = new XMLHttpRequest();
  let sendDepositURI = window.location.origin + '/player/send_deposit';
  xhr_send_deposit.open('POST', sendDepositURI, true);
  xhr_send_deposit.onload = function() {
    let json = JSON.parse(this.response);
    if (json.statusCode == 201) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);

      select_outlet_type.innerHTML = '<option value="" disabled selected>-- Select Outlet Type --</option>';
      getOutletType();
      select_outlet.innerHTML = '';
      select_outlet_account.innerHTML = '';
      input_reference_number.value = '';
      input_sender_account_name.value = '';
      input_sender_account_number.value = '';
      input_sender_card_number.value = '';
      input_control_number.value = '';
      input_deposit_file.value = '';
      text_area_notes.value = '';
      input_amount.value = '';
      required_fields.classList.add('d-none');

    } else if (json.statusCode == 406) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    } else if (json.statusCode == 409) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    } else if (json.statusCode == 412) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    }

    alertResponse(json.statusCode, json.description);
    btn_send_request.innerHTML = 'Send Request';
    btn_send_request.disabled = false;
  }
  xhr_send_deposit.send(sendDepositFormData);
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

  if (status_code == 201) {
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

function killActiveAlerts() {
  var alertList = document.querySelectorAll('.alert')
  alertList.forEach(function (alert) {
    new bootstrap.Alert(alert).close();
  })
}

function convertValueWithComma(value){
  if (value != null && value != '') {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
    return value;
  }
}