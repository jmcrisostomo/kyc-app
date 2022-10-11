window.addEventListener("load", () => {

  // Geting the GET Paramaters for account_number
  let currentUrl = window.location.search;
  let params = new URLSearchParams(currentUrl);
  let account_number = params.get("account_number");
  console.log(account_number);

  //Execute jQuery
  (($) => {

    $('#dataTableBettingHistory').DataTable({
      scrollY: '50vh',
      responsive: true,
      scrollX: true,
      dom: 'frtip',
      ajax: {
        url: window.location.origin + "/player/commission_detail?account_number="+account_number+"&json=TRUE",
      },
      initComplete: function( settings, json ) {
        addClassdataTableBettingHistoryTR();
      },
      deferRender: true,
      order: []
    });

  })(jQuery);

  let addClassdataTableBettingHistoryTR = () => {
    document.querySelectorAll('#dataTableBettingHistory > tbody > tr')
    .forEach( (element, index) => {
      element.classList.add('text-center');
    });
  }
});