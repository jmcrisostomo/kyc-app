let select_outlet_type = document.getElementById('selectOutletType');
let select_outlet = document.getElementById('selectOutlet');

let select_withdraw_type = document.getElementById('selectWithdrawType');
let span_unpaid_commission = document.getElementById('spanUnpaidCommission');
if (select_withdraw_type && span_unpaid_commission) {
  select_withdraw_type.addEventListener('change', () => {
    if (select_withdraw_type.options[select_withdraw_type.selectedIndex].value == 'CREDIT') {
      span_unpaid_commission.parentElement.classList.add('d-none');
    } else if (select_withdraw_type.options[select_withdraw_type.selectedIndex].value == 'COMMISSION') {
      span_unpaid_commission.parentElement.classList.remove('d-none');
    }
  });
}


// let select_outlet_account = document.getElementById('selectOutletAccount');

let required_fields = document.getElementById('requiredFields');

// let input_sender_account_name = document.getElementById('inputSenderAccountName');
// let input_sender_account_number = document.getElementById('inputSenderAccountNumber');
// let input_sender_card_number = document.getElementById('inputSenderCardNumber');

// let input_reference_number = document.getElementById('inputReferenceNumber');
// let input_control_number = document.getElementById('inputControlNumber');

let input_receiver_account_name = document.getElementById('inputReceiverAccountName');
let input_receiver_account_number = document.getElementById('inputReceiverAccountNumber');
let input_receiver_card_number = document.getElementById('inputReceiverCardNumber');


let input_amount = document.getElementById('inputAmount');
let span_min_withdraw = document.getElementById('spanMinWithdraw');
let span_max_withdraw = document.getElementById('spanMaxWithdraw');

// let text_area_notes = document.getElementById('textAreaNotes');

// let input_deposit_file = document.getElementById('inputDepositFile');

let btn_send_request = document.getElementById('btnSendRequest');

select_outlet_type.addEventListener('change', () => {
  select_outlet.innerHTML = '';
  // select_outlet_account.innerHTML = '';
  // input_reference_number.value = '';
  input_receiver_account_name.value = '';
  input_receiver_account_number.value = '';
  input_receiver_card_number.value = '';
  // input_control_number.value = '';
  // input_deposit_file.value = '';
  // text_area_notes.value = '';
  input_amount.value = '';
  required_fields.classList.add('d-none');

  if (select_outlet_type.value != '') {
    getOutlet (select_outlet_type.value);
    if (select_outlet_type.value == 'OUTLET-TYPE-0001') {
      // input_reference_number.disabled = false;
      // input_control_number.disabled = true;
      // input_sender_account_name.disabled = false;
      // input_sender_account_number.disabled = false;
      // input_sender_card_number.disabled = true;
      input_receiver_card_number.disabled = true;
      input_receiver_account_number.disabled = false;
      // input_reference_number.parentElement.classList.remove('d-none');
      // input_control_number.parentElement.classList.add('d-none');
      // input_sender_account_name.parentElement.classList.remove('d-none');
      // input_sender_account_number.parentElement.classList.remove('d-none');
      // input_sender_card_number.parentElement.classList.add('d-none');
      input_receiver_card_number.parentElement.classList.add('d-none');
      input_receiver_account_number.parentElement.classList.remove('d-none');

      // input_sender_account_name.previousElementSibling.innerHTML = 'Sender Account Name';
      input_receiver_account_name.previousElementSibling.innerHTML = 'Receiver Account Name';

    } else if (select_outlet_type.value == 'OUTLET-TYPE-0002') {
      // input_reference_number.disabled = false;
      // input_control_number.disabled = true;
      // input_sender_account_name.disabled = false;
      // input_sender_account_number.disabled = false;
      // input_sender_card_number.disabled = false;
      input_receiver_card_number.disabled = false;
      input_receiver_account_number.disabled = false;
      // input_reference_number.parentElement.classList.remove('d-none');
      // input_control_number.parentElement.classList.add('d-none');
      // input_sender_account_name.parentElement.classList.remove('d-none');
      // input_sender_account_number.parentElement.classList.remove('d-none');
      // input_sender_card_number.parentElement.classList.remove('d-none');
      input_receiver_card_number.parentElement.classList.remove('d-none');
      input_receiver_account_number.parentElement.classList.remove('d-none');

      // input_sender_account_name.previousElementSibling.innerHTML = 'Sender Account Name';
      input_receiver_account_name.previousElementSibling.innerHTML = 'Receiver Account Name';

    } else if (select_outlet_type.value == 'OUTLET-TYPE-0003') {
      // input_reference_number.disabled = true;
      // input_control_number.disabled = false;
      // input_sender_account_name.disabled = false;
      // input_sender_account_number.disabled = true;
      // input_sender_card_number.disabled = true;
      input_receiver_card_number.disabled = true;
      input_receiver_account_number.disabled = true;
      // input_reference_number.parentElement.classList.add('d-none');
      // input_control_number.parentElement.classList.remove('d-none');
      // input_sender_account_name.parentElement.classList.remove('d-none');
      // input_sender_account_number.parentElement.classList.add('d-none');
      // input_sender_card_number.parentElement.classList.add('d-none');
      input_receiver_card_number.parentElement.classList.add('d-none');
      input_receiver_account_number.parentElement.classList.add('d-none');

      // input_sender_account_name.previousElementSibling.innerHTML = 'Sender Name';
      input_receiver_account_name.previousElementSibling.innerHTML = 'Receiver Name';

    }
  }
});

select_outlet.addEventListener('change', () => {
  if (select_outlet.value != '') {
    span_min_withdraw.innerHTML = convertValueWithComma(select_outlet.options[select_outlet.selectedIndex].getAttribute('data-min-withdraw'));
    span_max_withdraw.innerHTML = convertValueWithComma(select_outlet.options[select_outlet.selectedIndex].getAttribute('data-max-withdraw'));
    // getOutletAccount (select_outlet.value);
    required_fields.classList.remove('d-none');
  }
});

// select_outlet_account.addEventListener('change', () => {
//   if (select_outlet_account.value != '') {
//     getOutletAccountDetails (select_outlet.value, select_outlet_account.value);
//     required_fields.classList.remove('d-none');
//   }
// });


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

      option.setAttribute('data-min-withdraw', convertValueWithComma(outlet_data.MIN_WITHDRAW));
      option.setAttribute('data-max-withdraw', convertValueWithComma(outlet_data.MAX_WITHDRAW));

      // span_min_withdraw.innerHTML = convertValueWithComma(outlet_data.MIN_WITHDRAW);
      // span_max_withdraw.innerHTML = convertValueWithComma(outlet_data.MAX_WITHDRAW);


      select_outlet.append(option);
      // console.log(outlet_type_data);
    });
  }
  xhr_get_outlet.send();
}

function getOutletAccount (outlet_number) {
  //SHOW LOADING
  // select_outlet_account.innerHTML = '<option value="" disabled selected>Loading...</option>';

  var xhr_get_outlet_account = new XMLHttpRequest();
  let getOutletAccountsURI = window.location.origin + '/player/get_outlet_account?outlet_number=' + outlet_number;
  xhr_get_outlet_account.open('GET', getOutletAccountsURI, true);
  xhr_get_outlet_account.onloadend = function() {
    // select_outlet_account.innerHTML = '<option value="" disabled selected>-- Select Outlet Accounts --</option>';

    let json = JSON.parse(this.response);
    json.data.forEach( function(outlet_acc_data) {

      let option = document.createElement('option');
      option.value = outlet_acc_data.OUTLET_ACCOUNT_NUMBER;
      option.innerHTML = outlet_acc_data.ACCOUNT_NAME;
      // select_outlet_account.append(option);



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
      console.log(outlet_acc_detail_data);

      // input_sender_account_name.value = outlet_acc_detail_data.ACCOUNT_NAME;
      // input_sender_account_number.value = outlet_acc_detail_data.ACCOUNT_NUMBER;
      // input_sender_card_number.value = outlet_acc_detail_data.CARD_NUMBER;

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
  if (select_outlet_type.validity.valid == false || select_outlet.validity.valid == false
    // ||select_outlet_account.validity.valid == false
    || input_amount.validity.valid == false
    // || input_deposit_file.validity.valid == false
    ) {
    // alert('Please fill out the required fields.');
    alertResponse( null, 'Please fill out the required fields.' );
    btn_send_request.innerHTML = 'Send Request';
    btn_send_request.disabled = false;
    return;
  } else {

    if (span_max_withdraw.innerHTML !== 'No Limit') {
      if (parseFloat(input_amount.value) < parseFloat((span_min_withdraw.innerHTML).replace(/,/g, ''))) {
        // alert('Amount cannot be less than minimum deposit');
        alertResponse( null, 'Amount cannot be less than minimum deposit.' );
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      } else if (parseFloat(input_amount.value) > parseFloat((span_max_withdraw.innerHTML).replace(/,/g, ''))) {
        // alert('Amount cannot be more than maximum deposit');
        alertResponse( null, 'Amount cannot be more than maximum deposit' );
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      }
    } else {
      if (parseFloat(input_amount.value) < parseFloat((span_min_withdraw.innerHTML).replace(/,/g, ''))) {
        // alert('Amount cannot be less than minimum deposit');
        alertResponse( null, 'Amount cannot be less than minimum deposit.' );
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      }
    }

    if (select_outlet_type.value == 'OUTLET-TYPE-0001') {
      if(
        // input_reference_number.validity.valid == false ||
        input_receiver_account_name.validity.valid == false
        || input_receiver_account_number.validity.valid == false){

        // alert('Please fill out the required fields.');
        alertResponse( null, 'Please fill out the required fields.' );
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      }
    } else if (select_outlet_type.value == 'OUTLET-TYPE-0002') {
      if (
        // input_reference_number.validity.valid == false ||
        input_receiver_account_name.validity.valid == false
        || input_receiver_account_number.validity.valid == false
        || input_receiver_card_number.validity.valid == false
        ) {
        // alert('Please fill out the required fields.');
        alertResponse( null, 'Please fill out the required fields.' );
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      }
    } else if (select_outlet_type.value == 'OUTLET-TYPE-0003') {
      if (
        // input_control_number.validity.valid == false ||
        input_receiver_account_name.validity.valid == false) {
        alertResponse( null, 'Please fill out the required fields.' );
        // alert('Please fill out the required fields.');
        btn_send_request.innerHTML = 'Send Request';
        btn_send_request.disabled = false;
        return;
      }
    }

    // console.log('send');
    sendWithdrawCredit();
  }
}

function sendWithdrawCredit () {

  var sendWithdrawCreditFormData = new FormData();
  // sendWithdrawCreditFormData.append('post_parameter', value_of_element);

  // outlet_type_number
  // outlet_number
  // outlet_account_number
  // amount
  // notes
  // file
  sendWithdrawCreditFormData.append('outlet_type_number', select_outlet_type.value);
  sendWithdrawCreditFormData.append('outlet_number', select_outlet.value);
  // sendWithdrawCreditFormData.append('outlet_account_number', select_outlet_account.value);
  sendWithdrawCreditFormData.append('amount', input_amount.value);
  // sendWithdrawCreditFormData.append('notes', text_area_notes.value);
  // sendWithdrawCreditFormData.append('Add_Image', input_deposit_file.files[0]);

  if (select_outlet_type.value == 'OUTLET-TYPE-0001') {
    // sendWithdrawCreditFormData.append('reference_number', input_reference_number.value);
    sendWithdrawCreditFormData.append('account_name', input_receiver_account_name.value);
    sendWithdrawCreditFormData.append('account_number', input_receiver_account_number.value);
  } else if (select_outlet_type.value == 'OUTLET-TYPE-0002') {
    // sendWithdrawCreditFormData.append('reference_number', input_reference_number.value);
    sendWithdrawCreditFormData.append('account_name', input_receiver_account_name.value);
    sendWithdrawCreditFormData.append('account_number', input_receiver_account_number.value);
    sendWithdrawCreditFormData.append('card_number', input_receiver_card_number.value);
  } else if (select_outlet_type.value == 'OUTLET-TYPE-0003') {
    // sendWithdrawCreditFormData.append('control_number', input_control_number.value);
    sendWithdrawCreditFormData.append('receiver_name', input_receiver_account_name.value);
  }




  var xhr_send_withdraw_credit = new XMLHttpRequest();
  let sendWithdrawURI = window.location.origin + '/player/send_credit_withdrawal';

  // if MAIN COORDINATOR / SUB COORDINATOR in SESSION
  if (select_withdraw_type && select_withdraw_type.options[select_withdraw_type.selectedIndex].value == 'COMMISSION') {
    sendWithdrawURI = window.location.origin + '/player/send_commission_withdrawal';
    console.log(sendWithdrawURI);
  }

  xhr_send_withdraw_credit.open('POST', sendWithdrawURI, true);
  xhr_send_withdraw_credit.onload = function() {
    let json = JSON.parse(this.response);
    if (json.statusCode == 201) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      console.log(json);
      if (select_withdraw_type.options[select_withdraw_type.selectedIndex].value == 'COMMISSION' ) {
        span_unpaid_commission.innerHTML = convertValueWithComma(json.unpaidCommmissionAmount);
      }

      select_outlet_type.innerHTML = '<option value="" disabled selected>-- Select Outlet Type --</option>';
      getOutletType();
      select_outlet.innerHTML = '';
      // select_outlet_account.innerHTML = '';
      // input_reference_number.value = '';
      input_receiver_account_name.value = '';
      input_receiver_account_number.value = '';
      input_receiver_card_number.value = '';
      // input_control_number.value = '';
      // input_deposit_file.value = '';
      // text_area_notes.value = '';
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
  xhr_send_withdraw_credit.send(sendWithdrawCreditFormData);
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