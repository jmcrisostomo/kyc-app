// Misc

 // SNIPPET, IF NETWORK CONNECTION IS SLOW
// var slowLoad = window.setTimeout( function() {
//         alert( "the page is taking its sweet time loading" );
//     }, 10 );

//     window.addEventListener( 'load', function() {
//         window.clearTimeout( slowLoad );
//     }, false );

const log_style_warn_1 = [
  'background-image: url("https://i.imgflip.com/2zo9l7.jpg")',
  'background-size: cover',
  'background-position: center bottom',
  'color: #fff',
  'padding: 100px 200px',
  'line-height: 35px'
  ].join(';');
console.log('%c ', log_style_warn_1);

const log_style_warn_2 = [
  'font-size: 36px',
  'color: red',
  '-webkit-text-stroke: 1px black'
  ].join(';');
console.log('%cDear haxxor,\n\n ples habbe merci. \n\nwith love, Devs. 🥺', log_style_warn_2);


function updateWebpageStatus (conn_status) {
  if (conn_status == 'online') {
    window.location.reload();
  } else if (conn_status == 'offline') {
    let overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.right = 0;
    overlay.style.bottom = 0;
    overlay.style.left = 0;
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.zIndex = 10000;
    overlay.style.opacity = 0;
    overlay.style.transition = 'all 125ms ease-in';

    let message = document.createElement('span');
    message.style.position = 'inherit';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%,-50%)';
    message.style.color = '#fff';
    message.innerHTML = 'Your Device is Offline.';

    overlay.append(message);
    document.body.append(overlay);
    document.body.style.overflow = 'hidden';

    setTimeout(() => { overlay.style.opacity = 1 }, 1000);
  }
}


function makeAlert(conn_status){
  let alert = document.createElement('div');
  alert.style.width = '350px';
  alert.style.position = 'fixed';
  alert.style.bottom = '15px';
  alert.style.right = '15px';
  alert.style.transition="opacity 500ms";


  alert.classList.add('alert', 'alert-dismissible', 'fade', 'in');
  alert.setAttribute('role', 'alert');

  if (conn_status == 'online') {
    alert.classList.add('alert-success');
    alert.innerHTML = "Your internet connection was restored.";
  } else if (conn_status == 'offline') {
    alert.classList.add('alert-danger');
    alert.innerHTML = "You are currently offline.";
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

window.addEventListener('online', () => {
  console.log('came online');
  // killActiveAlerts();
  // makeAlert('online');
  updateWebpageStatus('online');

});

window.addEventListener('offline', () => {
  console.log('came offline');
  // killActiveAlerts();
  // makeAlert('offline');
  updateWebpageStatus('offline');

});


let btnSidebarToggle = document.getElementById('btnSidebarToggle');
if (btnSidebarToggle) {
  let sidebar = document.querySelector('.sidebar');
  // let sidebar_overlay = document.querySelector('.sidebar-overlay');
  // let btn_close_sidebar = document.querySelector('.btn-close-sidebar');
  btnSidebarToggle.addEventListener('click', function(evt){
    evt.preventDefault();

    if ( sidebar.classList.contains('close-sidebar') ) {
      sidebar.classList.remove('close-sidebar');
    } else {
      sidebar.classList.add('close-sidebar');
    }
  });

  // btn_close_sidebar.addEventListener('click', () => {
  //   sidebar_overlay.click();
  // });

  // sidebar_overlay.addEventListener('click', (evt) => {
  //   if ( sidebar.classList.contains('close-sidebar') ) {
  //     sidebar.classList.remove('close-sidebar');
  //   } else {
  //     sidebar.classList.add('close-sidebar');
  //   }
  // });
}

function convertValueWithComma(value){
  if (value != null && value != '') {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
    return value;
  }
}