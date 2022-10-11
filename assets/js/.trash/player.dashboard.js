let modal_invite_link;
let btn_invite_link = document.getElementById('btnInviteLink');

let btn_copy_link_url = document.getElementById('btnCopyLinkURL');
// let btn_qr_code_download = document.getElementById('btnQRCodeDownload');
// let span_invite_url = document.getElementById('spanInviteURL');

window.addEventListener('load', () => {
  modal_invite_link = new bootstrap.Modal(document.getElementById('modalInviteLink'), {});
  btn_invite_link.addEventListener('click', () => {
    modal_invite_link.show();
  });

  let clipboard_inv_link = new ClipboardJS(btn_copy_link_url);
  btn_copy_link_url.setAttribute('data-clipboard-target', '#spanInviteURL');
  btn_copy_link_url.setAttribute('data-clipboard-action', 'copy');

  btn_copy_link_url.addEventListener('click', () => {
    var popover = new bootstrap.Popover(btn_copy_link_url, {
      'content': 'Copied!',
      'placement': 'auto'
    });
    popover.show();

    setTimeout( () => {
      popover.hide()
      // setTimeout( () => popover.dispose(), 1000)
    }, 3000 );
  });

  // btn_qr_code_download.addEventListener('click', () => {
  //   window.location = btn_qr_code_download.getAttribute('data-qr-link');
  // });

  // btn_copy_link_url.setAttribute('data-bs-container', 'body');
  // btn_copy_link_url.setAttribute('data-bs-toggle', 'popover');
  // btn_copy_link_url.setAttribute('data-bs-placement', 'top');
  // btn_copy_link_url.setAttribute('data-bs-content', 'Copied!');
});

