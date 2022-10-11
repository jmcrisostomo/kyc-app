window.addEventListener("load", () => {
    //Execute jQuery
    (($) => {

      $('#dataTableAccounts').DataTable({
        scrollY: '50vh',
        responsive: true,
        scrollX: true,
        ordering: false
      });

    })(jQuery);

});

// let modal_create_outlet;
// let modal_edit_outlet;
// let modal_activate_outlet;
// let modal_deactivate_outlet;
// let modal_delete_outlet;

// window.addEventListener('load', () => {

//   modal_create_outlet = new bootstrap.Modal(document.getElementById('modalCreateOutlet'), {});
//   modal_edit_outlet = new bootstrap.Modal(document.getElementById('modalUpdateOutlet'), {});
//   modal_activate_outlet = new bootstrap.Modal(document.getElementById('modalActivateOutlet'), {});
//   modal_deactivate_outlet = new bootstrap.Modal(document.getElementById('modalDeactivateOutlet'), {});
//   modal_delete_outlet = new bootstrap.Modal(document.getElementById('modalDeleteOutlet'), {});



//   let btn_create_new = document.getElementById('btnCreateNew');
//   btn_create_new.addEventListener('click', () => {
//     modal_create_outlet.show();
//   });

//   /////////////////////////

//   let btn_modal_create_new = document.getElementById('btnModalCreateNew');
//   btn_modal_create_new.addEventListener('click', () => {
//     let validation_result = validateMinMaxOnModalCreate();
//     submitModalCreate(validation_result, btn_modal_create_new)
//     console.log("create validation result: " + validation_result);
//   });
//   modalCreateOutletFunction();


//   /////////////////////////

//   let btn_modal_save = document.getElementById('btnModalSave');
//   btn_modal_save.addEventListener('click', () => {
//     let validation_result = validateMinMaxOnModalUpdate();
//     submitModalUpdate(validation_result, btn_modal_save)
//     console.log("validation result: " + validation_result);
//   });


// });

// window.addEventListener("load", () => {
//     //Execute jQuery
//     (($) => {

//       $('#dataTableOutlets').DataTable({
//         scrollY: '50vh',
//         responsive: true,
//         scrollX: true,
//         ajax: {
//           url: window.location.origin + "/accounting/outlet_data",
//         },
//         initComplete: function( settings, json ) {
//           // initDataTableFuntions();
//         },
//         deferRender: true,
//         order: [],
//         createdRow: function( row, data, dataIndex ) {
//             // Set the data-status attribute, and add a class
//             $( row )
//                 .attr('id', 'trOutlet'+ data[0].replace('OUTLET-000',''))
//                 .addClass('text-center');
//             $( row ).find('td:eq(8)').addClass('text-start');
//                 // console.log(row);

//             // $( row + "td").addClass('text-start');

//             $(".table").on("click", "#btnEdit" + data[0].replace('OUTLET-000',''), function(){
//                 let outlet_values = getDataTableDataFromTR(data[0].replace('OUTLET-000',''));
//                 modal_edit_outlet.show();
//                 modalUpdateOutletFunction(outlet_values);
//             });

//             $(".table").on("click", "#btnActivate" + data[0].replace('OUTLET-000',''), function(){
//                 let outlet_values = getDataTableDataFromTR(data[0].replace('OUTLET-000',''));
//                 modal_activate_outlet.show();
//                 modalActivateOutletFunction(outlet_values);
//             });

//             $(".table").on("click", "#btnDeactivate" + data[0].replace('OUTLET-000',''), function(){
//                 let outlet_values = getDataTableDataFromTR(data[0].replace('OUTLET-000',''));
//                 modal_deactivate_outlet.show();
//                 modalDeactivateOutletFunction(outlet_values);
//             });

//             $(".table").on("click", "#btnDelete" + data[0].replace('OUTLET-000',''), function(){
//                 let outlet_values = getDataTableDataFromTR(data[0].replace('OUTLET-000',''));
//                 modal_delete_outlet.show();
//                 modalDeleteOutletFunction(outlet_values);
//             });

//         }
//       });

//       // column fix when tab switching
//       // $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
//       //   $('#dataTableAccepted, #dataTablePending, #dataTableDeclined').DataTable()
//       //      .columns.adjust()
//       //      .responsive.recalc();
//       // });

//     })(jQuery);

// });

// function getDataTableDataFromTR(request_index) {
//   let outlet_number;
//   let outlet_type;
//   let state;
//   let outlet;
//   let min_deposit;
//   let max_deposit;
//   let min_withdraw;
//   let max_withdraw;

//   let dt_tr = document.getElementById('trOutlet'+request_index);
//   let el_children_td = dt_tr.children;

//   outlet_number = el_children_td[0].innerHTML;
//   outlet_type = el_children_td[1].innerHTML;
//   state = el_children_td[2].innerHTML;
//   outlet = el_children_td[3].innerHTML;
//   min_deposit = el_children_td[4].innerHTML;
//   max_deposit = el_children_td[5].innerHTML;
//   min_withdraw = el_children_td[6].innerHTML;
//   max_withdraw = el_children_td[7].innerHTML;

//   let result = [
//     outlet_number,
//     outlet_type,
//     state,
//     outlet,
//     min_deposit,
//     max_deposit,
//     min_withdraw,
//     max_withdraw
//   ];

//   return result;
// }

// function modalCreateOutletFunction() {
//   let input_maximum_deposit = document.getElementById('inputMaximumDeposit');
//   let input_maximum_withdrawal = document.getElementById('inputMaximumWithdrawal');
//   let checkbox_no_limit_deposit = document.getElementById('checkboxNoLimitDeposit');
//   let checkbox_no_limit_withdraw = document.getElementById('checkboxNoLimitWithdrawal');

//   checkbox_no_limit_deposit.addEventListener('change', () => {
//       if (checkbox_no_limit_deposit.checked == false) {
//         input_maximum_deposit.readOnly = false;
//         input_maximum_deposit.value = '';
//       } else {
//         input_maximum_deposit.readOnly = true;
//         input_maximum_deposit.value = 'No Limit';
//       }
//     });

//   checkbox_no_limit_withdraw.addEventListener('change', () => {
//     if (checkbox_no_limit_withdraw.checked == false) {
//       input_maximum_withdrawal.readOnly = false;
//       input_maximum_withdrawal.value = '';
//     } else {
//       input_maximum_withdrawal.readOnly = true;
//       input_maximum_withdrawal.value = 'No Limit';
//     }
//   });
// }

// function modalUpdateOutletFunction (outlet_values) {
//   let modal_update_span_outlet_number = document.getElementById('modalUpdateSpanOutletNumber');
//   let modal_update_parag_outlet_type = document.getElementById('modalUpdateParagOutletType')

//   let update_hidden_outlet_number = document.getElementById('updateHiddenOutletNumber');
//   let update_input_outlet = document.getElementById('updateInputOutlet');
//   let update_input_minimum_deposit = document.getElementById('updateInputMinimumDeposit');
//   let update_input_maximum_deposit = document.getElementById('updateInputMaximumDeposit');
//   let update_input_minimum_withdrawal = document.getElementById('updateInputMinimumWithdrawal');
//   let update_input_maximum_withdrawal = document.getElementById('updateInputMaximumWithdrawal');

//   let update_checkbox_no_limit_deposit = document.getElementById('updateCheckboxNoLimitDeposit');
//   let update_checkbox_no_limit_withdraw = document.getElementById('updateCheckboxNoLimitWithdrawal');

//   modal_update_span_outlet_number.innerHTML = outlet_values[0];
//   modal_update_parag_outlet_type.innerHTML = outlet_values[1];
//   update_hidden_outlet_number.value = outlet_values[0];
//   update_input_outlet.value = outlet_values[3];
//   update_input_minimum_deposit.value = outlet_values[4].replace(',', '');
//   update_input_maximum_deposit.value = outlet_values[5] == 'No Limit' ? outlet_values[5] : outlet_values[5].replace(',', '');
//   update_input_minimum_withdrawal.value = outlet_values[6].replace(',', '');
//   update_input_maximum_withdrawal.value = outlet_values[7] == 'No Limit' ? outlet_values[7] : outlet_values[7].replace(',', '');

//   // if the max deposit is no limit
//   if (outlet_values[5] == 'No Limit') {
//     update_input_maximum_deposit.readOnly = true;
//     update_checkbox_no_limit_deposit.checked = true;
//   } else {
//     update_input_maximum_deposit.readOnly = false;
//     update_checkbox_no_limit_deposit.checked = false;
//   }

//   // if the max deposit is no limit
//   if (outlet_values[7] == 'No Limit') {
//     update_input_maximum_withdrawal.readOnly = true;
//     update_checkbox_no_limit_withdraw.checked = true;
//   } else {
//     update_input_maximum_withdrawal.readOnly = false;
//     update_checkbox_no_limit_withdraw.checked = false;
//   }

//   update_checkbox_no_limit_deposit.addEventListener('change', () => {
//     if (update_checkbox_no_limit_deposit.checked == false) {
//       update_input_maximum_deposit.readOnly = false;
//       update_input_maximum_deposit.value = '';
//     } else {
//       update_input_maximum_deposit.readOnly = true;
//       update_input_maximum_deposit.value = 'No Limit';
//     }
//   });

//   update_checkbox_no_limit_withdraw.addEventListener('change', () => {
//     if (update_checkbox_no_limit_withdraw.checked == false) {
//       update_input_maximum_withdrawal.readOnly = false;
//       update_input_maximum_withdrawal.value = '';
//     } else {
//       update_input_maximum_withdrawal.readOnly = true;
//       update_input_maximum_withdrawal.value = 'No Limit';
//     }
//   });

//   console.log(outlet_values);
// }

// function modalActivateOutletFunction (outlet_values) {
//   let modal_activate_span_outlet_number = document.getElementById('modalActivateSpanOutletNumber');
//   let modal_activate_span_outlet = document.getElementById('modalActivateSpanOutlet');
//   let update_hidden_outlet_number = document.getElementById('activateHiddenOutletNumber');

//   modal_activate_span_outlet_number.innerHTML = outlet_values[0];
//   modal_activate_span_outlet.innerHTML = outlet_values[3];
//   update_hidden_outlet_number.value = outlet_values[0];
// }

// function modalDeactivateOutletFunction (outlet_values) {
//   let modal_deactivate_span_outlet_number = document.getElementById('modalDeactivateSpanOutletNumber');
//   let modal_deactivate_span_outlet = document.getElementById('modalDeactivateSpanOutlet');
//   let deactivate_hidden_outlet_number = document.getElementById('deactivateHiddenOutletNumber');

//   modal_deactivate_span_outlet_number.innerHTML = outlet_values[0];
//   modal_deactivate_span_outlet.innerHTML = outlet_values[3];
//   deactivate_hidden_outlet_number.value = outlet_values[0];
// }

// function modalDeleteOutletFunction (outlet_values) {
//   let modal_delete_span_outlet_number = document.getElementById('modalDeleteSpanOutletNumber');
//   let modal_delete_span_outlet = document.getElementById('modalDeleteSpanOutlet');
//   let delete_hidden_outlet_number = document.getElementById('deleteHiddenOutletNumber');

//   modal_delete_span_outlet_number.innerHTML = outlet_values[0];
//   modal_delete_span_outlet.innerHTML = outlet_values[3];
//   delete_hidden_outlet_number.value = outlet_values[0];
// }

// function validateMinMaxOnModalCreate(){

//   let result = 'fail';
//   let input_minimum_deposit = document.getElementById('inputMinimumDeposit');
//   let input_maximum_deposit = document.getElementById('inputMaximumDeposit');
//   let input_minimum_withdrawal = document.getElementById('inputMinimumWithdrawal');
//   let input_maximum_withdrawal = document.getElementById('inputMaximumWithdrawal');

//   if (input_minimum_deposit.value < 1) {
//     alert("Minimum deposit must be greater than 1");
//   } else if (input_minimum_withdrawal.value < 1) {
//     alert("Minimum withdrawal must be greater than 1");
//   } else if (input_maximum_deposit.value < 1) {
//     alert("Maximum deposit must be greater than 1");
//   } else if (input_maximum_withdrawal.value < 1) {
//     alert("Maximum withdrawal must be greater than 1");
//   } else if (input_maximum_deposit.value !== 'No limit' && parseFloat(input_maximum_deposit.value) < parseFloat(input_minimum_deposit.value)) {
//     alert("Maximum deposit must be greater than minimum deposit");
//   } else if (input_maximum_withdrawal.value !== 'No limit' && parseFloat(input_maximum_withdrawal.value) < parseFloat(input_minimum_withdrawal.value)) {
//     alert("Maximum withdrawal must be greater than minimum withdrawal");
//   } else {
//     result = 'success';
//   }

//   return result;
// }

// function submitModalCreate(validation_result, btn_modal_create_new){
//   let form_modal_create = document.getElementById('modalCreateOutlet').parentElement;
//   form_modal_create.addEventListener('submit', (evt) => {
//     if (validation_result == 'success') {
//       btn_modal_create_new.disabled = true;
//       return form_modal_create.submit();
//     } else {
//       return evt.preventDefault();
//     }
//   });
// }


// function validateMinMaxOnModalUpdate(){

//   let result = 'fail';
//   let update_input_minimum_deposit = document.getElementById('updateInputMinimumDeposit');
//   let update_input_maximum_deposit = document.getElementById('updateInputMaximumDeposit');
//   let update_input_minimum_withdrawal = document.getElementById('updateInputMinimumWithdrawal');
//   let update_input_maximum_withdrawal = document.getElementById('updateInputMaximumWithdrawal');

//   if (update_input_minimum_deposit.value < 1) {
//     alert("Minimum deposit must be greater than 1");
//   } else if (update_input_minimum_withdrawal.value < 1) {
//     alert("Minimum withdrawal must be greater than 1");
//   } else if (update_input_maximum_deposit.value < 1) {
//     alert("Maximum deposit must be greater than 1");
//   } else if (update_input_maximum_withdrawal.value < 1) {
//     alert("Maximum withdrawal must be greater than 1");
//   } else if (update_input_maximum_deposit.value !== 'No limit' && parseFloat(update_input_maximum_deposit.value) < parseFloat(update_input_minimum_deposit.value)) {
//     alert("Maximum deposit must be greater than minimum deposit");
//   } else if (update_input_maximum_withdrawal.value !== 'No limit' && parseFloat(update_input_maximum_withdrawal.value) < parseFloat(update_input_minimum_withdrawal.value)) {
//     alert("Maximum withdrawal must be greater than minimum withdrawal");
//   } else {
//     result = 'success';
//   }

//   return result;
// }

// function submitModalUpdate(validation_result, btn_modal_save){
//   let form_modal_update = document.getElementById('modalUpdateOutlet').parentElement;
//   form_modal_update.addEventListener('submit', (evt) => {
//     if (validation_result == 'success') {
//       btn_modal_save.disabled = true;
//       return form_modal_update.submit();
//     } else {
//       return evt.preventDefault();
//     }
//   });
// }