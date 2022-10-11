let modal_create_outlet_account;
let modal_edit_outlet_account;
let modal_activate_outlet_account;
let modal_deactivate_outlet_account;
let modal_delete_outlet_account;


window.addEventListener('load', () => {

  modal_create_outlet_account = new bootstrap.Modal(document.getElementById('modalCreateOutletAccount'), {});
  modal_edit_outlet_account = new bootstrap.Modal(document.getElementById('modalUpdateOutletAccount'), {});
  modal_activate_outlet_account = new bootstrap.Modal(document.getElementById('modalActivateOutletAccount'), {});
  modal_deactivate_outlet_account = new bootstrap.Modal(document.getElementById('modalDeactivateOutletAccount'), {});
  modal_delete_outlet_account = new bootstrap.Modal(document.getElementById('modalDeleteOutletAccount'), {});



  let btn_create_new = document.getElementById('btnCreateNew');
  btn_create_new.addEventListener('click', () => {
    modal_create_outlet_account.show();
  });

  /////////////////////////

  let btn_modal_create_new = document.getElementById('btnModalCreateNew');
  btn_modal_create_new.addEventListener('click', () => {
    // let validation_result = validateMinMaxOnModalCreate();
    // submitModalCreate(validation_result, btn_modal_create_new)
    // console.log("create validation result: " + validation_result);
  });
  modalCreateOutletAccountFunction();


  /////////////////////////

  let btn_modal_save = document.getElementById('btnModalSave');
  btn_modal_save.addEventListener('click', () => {
    // let validation_result = validateMinMaxOnModalUpdate();
    // submitModalUpdate(validation_result, btn_modal_save)
    // console.log("validation result: " + validation_result);
  });


});


window.addEventListener("load", () => {

    // Geting the GET Paramaters for outlet_number
    let wt = window.location.search;
    let params = new URLSearchParams(wt);
    let outlet_number = params.get("outlet_number");
    console.log(outlet_number);

    //Execute jQuery
    (($) => {

      $('#dataTableOutlets').DataTable({
        scrollY: '50vh',
        responsive: true,
        scrollX: true,
        ajax: {
          url: window.location.origin + "/accounting/outlet_account_data?outlet_number="+outlet_number,
        },
        initComplete: function( settings, json ) {
          // addClassDataTableAcceptedTR();
        },
        deferRender: true,
        order: [],
        createdRow: function( row, data, dataIndex ) {
            // Set the data-status attribute, and add a class
            $( row )
                .attr('id', 'trOutletAcc'+ data[0].replace('OUTLET-ACC-000',''))
                .addClass('text-center');
            $( row ).find('td:eq(6)').addClass('text-start');
                // console.log(row);

            // $( row + "td").addClass('text-start');

            $(".table").on("click", "#btnEdit" + data[0].replace('OUTLET-ACC-000',''), function(){
                let outlet_acc_values = getDataTableDataFromTR(data[0].replace('OUTLET-ACC-000',''));
                modal_edit_outlet_account.show();
                modalUpdateOutletAccountFunction(outlet_acc_values);
            });

            $(".table").on("click", "#btnActivate" + data[0].replace('OUTLET-ACC-000',''), function(){
                let outlet_acc_values = getDataTableDataFromTR(data[0].replace('OUTLET-ACC-000',''));
                modal_activate_outlet_account.show();
                modalActivateOutletAccountFunction(outlet_acc_values);
            });

            $(".table").on("click", "#btnDeactivate" + data[0].replace('OUTLET-ACC-000',''), function(){
                let outlet_acc_values = getDataTableDataFromTR(data[0].replace('OUTLET-ACC-000',''));
                modal_deactivate_outlet_account.show();
                modalDeactivateOutletAccountFunction(outlet_acc_values);
            });

            $(".table").on("click", "#btnDelete" + data[0].replace('OUTLET-ACC-000',''), function(){
                let outlet_acc_values = getDataTableDataFromTR(data[0].replace('OUTLET-ACC-000',''));
                modal_delete_outlet_account.show();
                modalDeleteOutletAccountFunction(outlet_acc_values);
            });

        }
      });

      // column fix when tab switching
      // $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
      //   $('#dataTableAccepted, #dataTablePending, #dataTableDeclined').DataTable()
      //      .columns.adjust()
      //      .responsive.recalc();
      // });

    })(jQuery);

  });

function getDataTableDataFromTR(request_index) {
  let outlet_account_number;
  let state;
  let account_name;
  let receiver_name;
  let account_number;
  let card_number;

  let dt_tr = document.getElementById('trOutletAcc'+request_index);
  let el_children_td = dt_tr.children;

  outlet_account_number = el_children_td[0].innerHTML;
  state = el_children_td[1].innerHTML;
  account_name = el_children_td[2].innerHTML;
  receiver_name = el_children_td[3].innerHTML;
  account_number = el_children_td[4].innerHTML;
  card_number = el_children_td[5].innerHTML;

  let result = [
    outlet_account_number,
    state,
    account_name,
    receiver_name,
    account_number,
    card_number,
  ];

  return result;
}

function modalCreateOutletAccountFunction () {

  // Geting the GET Paramaters for outlet_type
  let url = window.location.search;
  let params = new URLSearchParams(url);
  let outlet_type = params.get('outlet_type');
  console.log(outlet_type);

  let input_account_name = document.getElementById('inputAccountName');
  let input_receiver_name = document.getElementById('inputReceiverName');
  let input_account_number = document.getElementById('inputAccountNumber');
  let input_card_number = document.getElementById('inputCardNumber');

  if (outlet_type == 'e-Wallet') {
    input_receiver_name.value = 'N/A';
    input_receiver_name.readOnly = true;
    input_card_number.value = 'N/A';
    input_card_number.readOnly = true;
  } else if (outlet_type == 'Bank') {
    input_receiver_name.value = 'N/A';
    input_receiver_name.readOnly = true;
  } else if (outlet_type == 'Remittance') {
    input_account_number.value = 'N/A';
    input_account_number.readOnly = true;
    input_card_number.value = 'N/A';
    input_card_number.readOnly = true;
  }

}

function modalUpdateOutletAccountFunction (outlet_acc_values) {

  // Geting the GET Paramaters for outlet_type
  let url = window.location.search;
  let params = new URLSearchParams(url);
  let outlet_type = params.get('outlet_type');

  let modal_update_span_outlet_account_number = document.getElementById('modalUpdateSpanOutletAccountNumber');

  let update_input_account_name = document.getElementById('updateInputAccountName');
  let update_input_receiver_name = document.getElementById('updateInputReceiverName')

  let update_input_account_number = document.getElementById('updateInputAccountNumber');
  let update_input_card_number = document.getElementById('updateInputCardNumber');
  let update_hidden_outlet_account_number = document.getElementById('updateHiddenOutletAccountNumber');

  modal_update_span_outlet_account_number.innerHTML = outlet_acc_values[0];
  update_input_account_name.value = outlet_acc_values[2];
  update_input_receiver_name.value = outlet_acc_values[3];
  update_input_account_number.value = outlet_acc_values[4];
  update_input_card_number.value = outlet_acc_values[5];
  update_hidden_outlet_account_number.value = outlet_acc_values[0];

   if (outlet_type == 'e-Wallet') {
      update_input_receiver_name.value = 'N/A';
      update_input_receiver_name.readOnly = true;
      update_input_card_number.value = 'N/A';
      update_input_card_number.readOnly = true;
    } else if (outlet_type == 'Bank') {
      update_input_receiver_name.value = 'N/A';
      update_input_receiver_name.readOnly = true;
    } else if (outlet_type == 'Remittance') {
      update_input_account_number.value = 'N/A';
      update_input_account_number.readOnly = true;
      update_input_card_number.value = 'N/A';
      update_input_card_number.readOnly = true;
    }

  console.log(outlet_acc_values);
}

function modalActivateOutletAccountFunction (outlet_acc_values) {
  let modal_activate_span_outlet_account_number = document.getElementById('modalActivateSpanOutletAccountNumber');
  let modal_activate_span_outlet_account = document.getElementById('modalActivateSpanOutletAccount');
  let update_hidden_outlet_account_number = document.getElementById('activateHiddenOutletAccountNumber');

  modal_activate_span_outlet_account_number.innerHTML = outlet_acc_values[0];
  modal_activate_span_outlet_account.innerHTML = outlet_acc_values[2];
  update_hidden_outlet_account_number.value = outlet_acc_values[0];
}

function modalDeactivateOutletAccountFunction (outlet_acc_values) {
  let modal_deactivate_span_outlet_account_number = document.getElementById('modalDeactivateSpanOutletAccountNumber');
  let modal_deactivate_span_outlet_account = document.getElementById('modalDeactivateSpanOutletAccount');
  let deactivate_hidden_outlet_account_number = document.getElementById('deactivateHiddenOutletAccountNumber');

  modal_deactivate_span_outlet_account_number.innerHTML = outlet_acc_values[0];
  modal_deactivate_span_outlet_account.innerHTML = outlet_acc_values[2];
  deactivate_hidden_outlet_account_number.value = outlet_acc_values[0];
}

function modalDeleteOutletAccountFunction (outlet_acc_values) {
  let modal_delete_span_outlet_account_number = document.getElementById('modalDeleteSpanOutletAccountNumber');
  let modal_delete_span_outlet_account = document.getElementById('modalDeleteSpanOutletAccount');
  let delete_hidden_outlet_account_number = document.getElementById('deleteHiddenOutletAccountNumber');

  modal_delete_span_outlet_account_number.innerHTML = outlet_acc_values[0];
  modal_delete_span_outlet_account.innerHTML = outlet_acc_values[2];
  delete_hidden_outlet_account_number.value = outlet_acc_values[0];
}