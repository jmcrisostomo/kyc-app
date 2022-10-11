window.addEventListener("load", () => {

    // Geting the GET Paramaters for is_comission
    let wt = window.location.search;
    let params = new URLSearchParams(wt);
    let is_commission = params.get("wt");
    console.log(is_commission);

    //Execute jQuery
    (($) => {

      $('#dataTableAccepted').DataTable({
        scrollY: '50vh',
        responsive: true,
        scrollX: true,
        ajax: {
          url: window.location.origin + "/accounting/transaction_data?transaction_type=WITHDRAW&status=ACCEPTED&is_commission="+is_commission,
        },
        initComplete: function( settings, json ) {
          addClassDataTableAcceptedTR();
        },
        deferRender: true,
        order: []
      });

      $('#dataTablePending').DataTable({
        scrollY: '50vh',
        responsive: true,
        scrollX: true,
        ajax: {
          url: window.location.origin + "/accounting/transaction_data?transaction_type=WITHDRAW&status=PENDING&is_commission="+is_commission,
        },
        initComplete: function( settings, json ) {
          addClassDataTablePendingTR();
        },
        deferRender: true,
        order: []
      });

      $('#dataTableDeclined').DataTable({
        scrollY: '50vh',
        responsive: true,
        scrollX: true,
        ajax: {
          url: window.location.origin + "/accounting/transaction_data?transaction_type=WITHDRAW&status=DECLINED&is_commission="+is_commission,
        },
        initComplete: function( settings, json ) {
          addClassDataTableDeclinedTR();
        },
        deferRender: true,
        order: []
      });

      // column fix when tab switching
      $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('#dataTableAccepted, #dataTablePending, #dataTableDeclined').DataTable()
           .columns.adjust()
           .responsive.recalc();
      });

    })(jQuery);

    let addClassDataTableAcceptedTR = () => {
      document.querySelectorAll('#dataTableAccepted > tbody > tr')
      .forEach( (element, index) => {
        element.classList.add('text-center');
      });
    }

    let addClassDataTablePendingTR = () => {
      document.querySelectorAll('#dataTablePending > tbody > tr')
      .forEach( (element, index) => {
        element.classList.add('text-center');
      });
    }

    let addClassDataTableDeclinedTR = () => {
      document.querySelectorAll('#dataTableDeclined > tbody > tr')
      .forEach( (element, index) => {
        element.classList.add('text-center');
      });
    }
  });