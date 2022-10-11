window.addEventListener("load", () => {
    //Execute jQuery
    (($) => {

      $('#dataTableAccepted').DataTable({
        scrollY: '50vh',
        responsive: true,
        scrollX: true,
        ajax: {
          url: window.location.origin + "/accounting/transaction_data?transaction_type=DEPOSIT&status=ACCEPTED",
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
          url: window.location.origin + "/accounting/transaction_data?transaction_type=DEPOSIT&status=PENDING",
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
          url: window.location.origin + "/accounting/transaction_data?transaction_type=DEPOSIT&status=DECLINED",
        },
        initComplete: function( settings, json ) {
          addClassDataTableDeclinedTR();
        },
        deferRender: true,
        order: []
      });

      // column fix when tab switching
      // var tabEl = document.querySelector('a[data-bs-toggle="tab"]')
      // tabEl.addEventListener('shown.bs.tab', function (event) {
      //   $('#dataTableAccepted').DataTable()
      //      .columns.adjust()
      //      .responsive.recalc();

      //   $('#dataTablePending').DataTable()
      //      .columns.adjust()
      //      .responsive.recalc();

      //   $('#dataTableDeclined').DataTable()
      //      .columns.adjust()
      //      .responsive.recalc();
      // })
      $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        // $('#dataTableAccepted, #dataTablePending, #dataTableDeclined').DataTable()
        //    .columns.adjust()
        //    .responsive.recalc();
        $($.fn.dataTable.tables(true)).DataTable()
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