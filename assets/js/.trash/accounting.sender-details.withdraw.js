let btn_accept = document.getElementById('btnAccept');
let btn_decline = document.getElementById('btnDecline');

window.addEventListener("load", () => {
  let modal_accept = new bootstrap.Modal(document.getElementById('modalAccept'), {});
  let modal_decline = new bootstrap.Modal(document.getElementById('modalDecline'), {});

  btn_accept.addEventListener('click', () => {
    modal_accept.show();
  });

  btn_decline.addEventListener('click', () => {
    modal_decline.show();
  });
});

// Modal Accept Input
let checkbox_accept_has_image = document.getElementById('checkboxAcceptHasImage');
// let btn_accept_file = document.getElementById('btnAcceptFile');
let input_accept_file = document.getElementById('inputAcceptFile');
// let checkbox_edit_amount = document.getElementById('checkboxEditAmount');
// let input_edit_amount = document.getElementById('inputEditAmount');

checkbox_accept_has_image.addEventListener('click', (evt) => {
  if (checkbox_accept_has_image.checked == false) {
    input_accept_file.disabled = true;
    input_accept_file.value = "";
    input_accept_file.removeAttribute('required');
  } else {
    input_accept_file.disabled = false;
    input_accept_file.setAttribute('required', 'required');
  }
});

// checkbox_edit_amount.addEventListener('click', (evt) => {
//   if (checkbox_edit_amount.checked == false) {
//     input_edit_amount.disabled = true;
//     input_edit_amount.value = "";
//     input_edit_amount.removeAttribute('required');
//   } else {
//     input_edit_amount.disabled = false;
//     input_edit_amount.setAttribute('required', 'required');
//   }
// });

input_accept_file.addEventListener('change', (evt) => {
  const fileName = evt.target.files[0].name;
  console.log(fileName);
  // btn_accept_file.innerHTML = fileName;
});




// Modal Decline Input
let checkbox_decline_has_image = document.getElementById('checkboxDeclineHasImage');
let input_decline_file = document.getElementById('inputDeclineFile');

checkbox_decline_has_image.addEventListener('click', (evt) => {
  if (checkbox_decline_has_image.checked == false) {
    input_decline_file.disabled = true;
    input_decline_file.value = "";
    input_decline_file.removeAttribute('required');
  } else {
    input_decline_file.disabled = false;
    input_decline_file.setAttribute('required', 'required');
  }
});

input_decline_file.addEventListener('change', (evt) => {
  const fileName = evt.target.files[0].name;
  console.log(fileName);
  // btn_decline_file.innerHTML = fileName;
});