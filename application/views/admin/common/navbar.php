<!-- #masthead -->
<header id="masthead" class="site-header navbar-static-top" role="banner">
  <nav class="navbar navbar-dark navbar-expand-lg navbar-expand-md fixed-top bg-custom-dark flex-md-nowrap p-0 shadow">
    <div class="container-fluid">

      <button class="navbar-toggler" id="btnMobileSidebarToggle" aria-label="Toggle navigation">
        <i class="fas fa-bars fa-fw"></i>
      </button>

      <a class="navbar-brand ms-auto mb-2 mb-lg-0" href="<?php echo base_url('accounting/dashboard'); ?>">
        <!-- <img src="https://dummyimage.com/32x32/000/fff" class="img-fluid ml-3" alt="Sabong Republic"> -->
        <img class="img-fluid ms-3" src="<?php echo base_url('assets/images/landing_page/logo.png'); ?>" alt="logo" style="width: 48px;">
        <span>ADMIN</span>
      </a>

      <script type="text/javascript">
        let btnMobileSidebarToggle = document.getElementById('btnMobileSidebarToggle');
        btnMobileSidebarToggle.addEventListener('click', function(evt){
          evt.preventDefault();
          document.getElementById('btnSidebarToggle').click();
        })
      </script>

      <div class="collapse navbar-collapse" id="navbarSupportedContent" style="visibility: hidden;">
        <ul class="navbar-nav me-auto mb-2 ms-3 mb-lg-0">
          <li class="nav-item active">
            <button id="btnSidebarToggle" class="btn btn-link">
            <span class="text-light">
              <i class="fas fa-bars"></i>
            </span>
            </button>
          </li>
        </ul>
      </div>

      <span class="navbar-text text-light d-flex align-items-center"><?php echo (isset($_SESSION['USERNAME']) ? $_SESSION['USERNAME'] : '[Username]'); ?></span>

      <span class="span-logout navbar-text text-light d-flex align-items-center ms-3">
        <a href="<?php echo base_url('Auth/logout'); ?>" class="btn btn-danger"><i class="fas fa-sign-out-alt"></i></a>
      </span>
    </div>
  </nav>
</header>
<!-- /#masthead -->