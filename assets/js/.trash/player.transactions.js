
window.addEventListener("load", () => {
    //Execute jQuery
    (($) => {

      $('#dataTableWithdraw').DataTable({
        scrollY: '50vh',
        responsive: true,
        scrollX: true,
        ajax: {
          url: window.location.origin + "/player/get_transaction_data?transaction_type=WITHDRAW",
        },
        initComplete: function( settings, json ) {
          dtAddClass('dataTableWithdraw');
        },
        deferRender: true,
        order: []
      });

      $('#dataTableDeposit').DataTable({
        scrollY: '50vh',
        responsive: true,
        scrollX: true,
        ajax: {
          url: window.location.origin + "/player/get_transaction_data?transaction_type=DEPOSIT",
        },
        initComplete: function( settings, json ) {
          dtAddClass('dataTableDeposit');
        },
        deferRender: true,
        order: []
      });

      $('#dataTableBetHistory').DataTable({
        scrollY: '50vh',
        responsive: true,
        scrollX: true,
        ajax: {
          url: window.location.origin + "/player/get_transaction_data?transaction_type=BET",
        },
        initComplete: function( settings, json ) {
          dtAddClass('dataTableBetHistory');
        },
        deferRender: true,
        order: []
      });

      $('#dataTableSendCredits').DataTable({
        scrollY: '50vh',
        responsive: true,
        scrollX: true,
        ajax: {
          url: window.location.origin + "/player/get_transaction_data?transaction_type=SEND_CREDITS",
        },
        initComplete: function( settings, json ) {
          dtAddClass('dataTableSendCredits');
        },
        deferRender: true,
        order: []
      });

      $('#dataTableConvertCommission').DataTable({
        scrollY: '50vh',
        responsive: true,
        scrollX: true,
        ajax: {
          url: window.location.origin + "/player/get_transaction_data?transaction_type=CONVERT_COMMISSION",
        },
        initComplete: function( settings, json ) {
          dtAddClass('dataTableConvertCommission');
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
      $('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {

        $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust()
        .responsive.recalc();

      });

    })(jQuery);

    let dtAddClass = (id) => {
      document.querySelectorAll('#'+ id +' > tbody > tr')
      .forEach( (element, index) => {
        element.classList.add('text-center');
      });
    }
  });