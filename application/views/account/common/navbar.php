<!-- #masthead -->
<header id="masthead" class="site-header navbar-static-top" role="banner">
  <nav class="navbar navbar-dark navbar-expand-lg navbar-expand-md fixed-top bg-danger flex-md-nowrap p-0 shadow">
    <!-- <div class="d-flex d-md-none align-items-center w-100">
      <div class="flex-fill">
        <p class="mb-0 text-light text-center pt-2 px-3" style="font-size: 12px; font-weight: 500;">SABONG REPUBLIC</p>
      </div>
    </div> -->

    <div class="container-fluid">


      <button class="navbar-toggler ml-auto" id="btnMobileSidebarToggle" aria-label="Toggle navigation">
        <span class="text-light">
          <i class="fas fa-bars fa-fw"></i>
        </span>
      </button>

      <a class="navbar-brand col col-md-2 mr-0" href="<?php echo base_url('player/arena'); ?>" hidden>
        <img src="https://dummyimage.com/50x50/000/fff" class="img-fluid" alt="Sabong Republic">
      </a>

      <script type="text/javascript">
        let btnMobileSidebarToggle = document.getElementById('btnMobileSidebarToggle');
        btnMobileSidebarToggle.addEventListener('click', function(evt){
          evt.preventDefault();
          document.getElementById('btnSidebarToggle').click();
        })
      </script>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <button id="btnSidebarToggle" class="btn btn-link">
            <span class="text-light">
              <i class="fas fa-bars"></i>
            </span>
            </button>
          </li>
        </ul>
      </div>

    </div>
  </nav>

</header>
<!-- /#masthead -->