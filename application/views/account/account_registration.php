<?php //$this->load->view('player/common/navbar'); ?>
<!-- <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/node_modules/flatpickr/dist/flatpickr.min.css'); ?>">
<script type="text/javascript" src="<?php echo base_url('assets/node_modules/flatpickr/dist/flatpickr.min.js'); ?>"></script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script> -->
<!-- <script type="text/javascript" src="<?php echo base_url('assets/node_modules/inputmask/dist/inputmask.min.js'); ?>"></script> -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"> -->
<!-- <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/registration.css'); ?>"> -->
<!-- <link rel="stylesheet" href="<?php echo base_url('assets/country-select/app/css/country-select.css'); ?>"> -->
<div id="content" class="site-content">
  <section id="login">
    <div class="container">
      <div class="d-flex flex-row align-items-center justify-content-center">
        <img class="img-fluid d-block ml-auto p-3 w-25" src="<?php echo base_url('assets/images/landing_page/worker-icon.png'); ?>">
        <h3 class="fw-bold">Registration</h3>
      </div>
      <div class="row step-forms p-3 shadow g-1">
        <!-- Personal Information -->
        <form class="step-forms-section col-md-12" action="">
          <legend>Account Information</legend>
          <!-- <div class="col-md-12">
            <div class="input-box">
              <label for="inputCustomerUID" class="input-label">Customer ID</label>
              <input id="inputCustomerUID" type="text" class="form-control mb-3" name="customer_id" maxlength="24" required>
            </div>
          </div> -->
          <div class="col-md-12">
            <div class="input-box">
              <label for="inputUsername" class="input-label">Username</label>
              <input id="inputUsername" type="text" class="form-control" name="username" minlength="4" maxlength="32" required>
            </div>
            <div class="mb-3">
              <small id="usernameMinLength" class="text-danger d-none">Username must be minimum of 4 characters or more.</small>
              <small id="usernameAvailable" class="text-success d-none">Username is Available.</small>
              <small id="usernameNotAvailable" class="text-danger d-none">Username already exist.</small>
            </div>
          </div>
          <div class="col-md-12">
            <div class="input-box">
              <label for="inputContactNumber" class="input-label">Contact Number</label>
              <input id="inputContactNumber" type="text" class="form-control mb-3" name="contact_number" maxlength="13" required>
            </div>
          </div>
          <div class="col-md-12">
            <div class="input-box">
              <label for="inputEmailAddress" class="input-label">Email Address</label>
              <input id="inputEmailAddress" type="email" class="form-control mb-3" name="email_address" maxlength="254" required>
            </div>
          </div>
          <div class="col-md-12">
            <div class="input-box d-flex align-items-center">
              <label for="inputPassword" class="input-label">Password</label>
              <input id="inputPassword" type="password" class="form-control" aria-label="Password" aria-describedby="button-addon2" name="password" minlength="6" maxlength="64" required>
              <i id="btnEye" style="margin-left: -30px; cursor: pointer;" class="fa fa-eye-slash"></i>
            </div>
          </div>
          <button id="btnNextStepOne" type="submit" class="btn btn-lg d-block text-light bg-custom mb-1 w-100">Next</button>
        </form>
        <!-- Account Information / Terms and Conditions -->
        <form class="step-forms-section col-md-12" style="display: none;" action="">
          <div class="row g-1">
            <legend>Personal Information</legend>
            <div class="col-4 g-1">
              <div class="input-box">
                <label class="input-label" for="inputFirstName">First Name</label>
                <input id="inputFirstName" type="text" class="form-control mb-3" placeholder="" name="first_name" required>
              </div>
            </div>
            <div class="col-4 g-1">
              <div class="input-box">
                <label class="input-label" for="inputMiddleName">Middle Name</label>
                <input id="inputMiddleName" type="text" class="form-control mb-3" name="middle_name" required>
              </div>
            </div>
            <div class="col-4 g-1">
              <div class="input-box">
                <label class="input-label" for="inputLastName">Last Name</label>
                <input id="inputLastName" type="text" class="form-control mb-3" name="last_name" required>
              </div>
            </div>
            <div class="col-6">
              <div class="input-box">
                <label class="input-label" for="inputBirthdate">Birthdate (YYYY-MM-DD)</label>
                <input id="inputBirthdate" type="text" class="form-control mb-3" placeholder="" name="birth_date" required>
              </div>
            </div>
            <div class="col-6">
              <div class="input-box">
                <label class="input-label" for="selectGender">Gender</label>
                <select id="selectGender" class="form-select" name="gender" required>
                  <option selected disabled value=""></option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <div class="input-box">
                <label class="input-label" for="selectCivilStatus">Civil Status</label>
                <select id="selectCivilStatus" class="form-select" name="civil_status" required>
                  <option selected disabled value=""></option>
                  <option value="SINGLE">SINGLE</option>
                  <option value="MARRIED">MARRIED</option>
                  <option value="WIDOWED">WIDOWED</option>
                  <option value="DIVORCED">DIVORCED</option>
                  <option value="LEGALLY SEPARATED">LEGALLY SEPARATED</option>
                  <option value="ANNULLED">ANNULLED</option>
                  <option value="NULLIFIED">NULLIFIED</option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <div class="input-box">
                <label class="input-label" for="inputNationality">Nationality</label>
                <input id="inputNationality" type="text" class="form-control mb-3" name="nationality" required>
              </div>
            </div>
            <div class="col-12">
              <div class="input-box">
                <label class="input-label" for="inputAddress">Address</label>
                <textarea id="inputAddress" type="text" class="form-control mb-3" placeholder="" name="address" rows="2" required></textarea>
              </div>
            </div>
            <div class="col-6">
              <div class="input-box">
                <label class="input-label" for="selectRegion">Region</label>
                <select id="selectRegion" class="form-select" name="region" required>
                  <option value="" disabled selected></option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <div class="input-box">
                <label class="input-label" for="selectProvince">Province</label>
                <select id="selectProvince" class="form-select" name="province" required>
                  <option value="" disabled selected></option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <div class="input-box">
                <label class="input-label" for="selectCity">City</label>
                <select id="selectCity" class="form-select" name="city" required>
                  <option value="" disabled selected></option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <div class="input-box">
                <label class="input-label" for="selectBarangay">Barangay</label>
                <select id="selectBarangay" class="form-select" name="barangay" required>
                  <option value="" disabled selected></option>
                </select>
              </div>
            </div>
            <div>
              <input type="hidden" name="hidden_region" id="hiddenRegion">
              <input type="hidden" name="hidden_province" id="hiddenProvince">
              <input type="hidden" name="hidden_city" id="hiddenCity">
              <input type="hidden" name="hidden_barangay" id="hiddenBarangay">
            </div>
            <div class="col-6">
              <div class="input-box">
                <label class="input-label" for="inputZipcode">Zip Code</label>
                <input id="inputZipcode" type="text" class="form-control mb-3" name="zip_code" required>
              </div>
            </div>
            <div class="col-6">
              <div class="input-box focus">
                <label class="input-label focus" for="inputCountry">Country</label>
                <input id="inputCountry" type="text" class="form-control mb-3" name="country" value="PHILIPPINES" required readonly>
              </div>
            </div>
            <button id="btnNextStepTwo" type="submit" class="btn btn-lg d-block text-light bg-custom mb-1 w-100">Next</button>
          </div>
        </form>
        
        <!-- Image Information (KYC) -->
        <form class="step-forms-section col-md-12" style="display: none;" action="">
          <div class="row g-1">
            <legend>Document Requirements</legend>
            <div class="col-12">
              <div class="input-box">
                <label class="input-label" for="selectPresentingDocuments">Documents to be Presented</label>
                <select id="selectPresentingDocuments" class="form-select" name="presenting_document" required>
                  <option value="" disabled selected></option>
                  <?php foreach ($requirements_data->result() as $req): ?>
                  <option value="<?php echo $req->REQUIREMENT_NUMBER; ?>"><?php echo $req->REQUIREMENT_NAME; ?></option>
                  <?php endforeach ?>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="mb-3">
                <label for="inputfileDocumentRequirement" class="form-label">Upload Document</label>
                <input class="form-control" type="file" id="inputfileDocumentRequirement" accept="image/*" name="upload_document" capture required>
                <div class="d-flex align-items-center">
                  <img id="previewImageDocument" src="" class="img-fluid w-50 m-3 mx-auto">
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="mb-3">
                <label for="inputfileDocumentWithSelfie" class="form-label">Upload Your Photo/Selfie with the Document</label>
                <input class="form-control" type="file" id="inputfileDocumentWithSelfie" accept="image/*" name="upload_document_with_selfie" capture required>
                <div class="d-flex align-items-center">
                  <img id="previewImageDocumentSelfie" src="" class="img-fluid w-50 m-3 mx-auto">
                </div>
              </div>
            </div>
          </div>
          <button id="btnRegister" type="submit" class="btn btn-lg d-block text-light bg-custom mb-1 w-100 d-none">Submit</button>
        </form>
        
        <!-- OTP Verification -->
        <form class="step-forms-section col-md-12" style="display: none;" action="">
          <div class="row g-1">
            <legend>OTP Verification</legend>
            <div class="col-12">
              <div class="input-box">
                <label class="input-label" for="inputOTPCode">OTP Code</label>
                <input id="inputOTPCode" type="text" class="form-control mb-3" placeholder="" name="otp_code" required>
              </div>
            </div>
            <button id="btnNextStepThree" type="submit" class="btn btn-lg d-block text-light bg-custom mb-1 w-100">Next</button>
          </div>
        </form>

        <button id="btnBackStep" type="button" class="btn btn-lg btn-secondary d-block mb-1 w-100 d-none">Back</button>

        <div class="col-md-12">
          <hr style="height: 1px; background-color: #000; border: none;">
        </div>
        <div class="col-md-12">
          <a href="<?php echo base_url('home/login'); ?>" type="button" class="btn btn-lg d-block w-100 border">Back to Login</a>
        </div>
      </div>
      <!-- </form> -->
    </div>
  </section>
  </div> <!-- /.site-content -->

  <!-- <script
    src="https://code.jquery.com/jquery-3.1.0.js"
    integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
    crossorigin="anonymous"
  ></script> -->
  <script type="module" src="<?php echo base_url('assets/js/dist/registration.bundle.js'); ?>"></script>
  <!-- <script type="module" src="<?php echo base_url('assets/jquery.ph-locations/jquery.ph-locations-v1.0.0.js'); ?>"></script> -->


  <!-- <script type="text/javascript" src="<?php echo base_url('assets/country-select/app/js/country-select.js'); ?>"></script> -->
  <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/inputmask/4.0.9/inputmask/inputmask.min.js"></script> -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/inputmask/4.0.9/inputmask/dependencyLibs/inputmask.dependencyLib.min.js" integrity="sha512-b+0AfljGJrModvgOwccNQNSxHHD8vDLBZ9H4bf+dZL89QDJsa2OlGU94bVs5yxLEsAL92/mUcuSp1hJJ6390eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
  <!-- <script type="text/javascript" src="<?php echo base_url('assets/js/account.registration.js'); ?>"></script> -->