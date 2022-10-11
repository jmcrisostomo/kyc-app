<?php $this->load->view('admin/common/navbar'); ?>


<link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/node_modules/choices.js/public/assets/styles/choices.min.css'); ?>">


<link rel="stylesheet" href="<?php echo base_url('assets/country-select/app/css/country-select.css'); ?>">

<style type="text/css">
  html, body {
    margin-top: 2em;
  }

  .btn {
    border-radius: 0;
  }

  .site-content .dashboard {
    height: 100vh;
  }

  @media only screen and (max-device-width:480px){
    .site-content {
      /*margin-top: 5em;*/
    }
    .site-content .dashboard {
      height: unset;
    }
  }

  .choices__inner {
    background-color: unset;
  }

</style>


<div id="content" class="site-content">
  <div class="row g-0 justify-content-center">

    <?php $this->load->view('admin/common/sidebar'); ?>

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 offset-md-3 offset-lg-2">

      <div class="container p-3" style="max-width: 700px;">
        <div class="mb-3">
          <h3 class="my-3 text-dark">
            <i class="fas fa-user-plus"></i>
            Add Account
          </h3>
        </div>


        <form method="POST" action="<?php echo base_url('admin/create_account'); ?>">
          <div class="row">
            <div class="col-md-12">
              <select id="selectAccountType" class="form-select mb-3" name="account_type">
                <option value="" selected disabled>--- SELECT ACCOUNT TYPE ---</option>
                <?php $get_account_type = $this->db->query("SELECT * FROM tblaccounttype WHERE ACCOUNT_TYPE_NUMBER IN ('ACC-TYPE-0004', 'ACC-TYPE-0005', 'ACC-TYPE-0006')"); ?>
                <?php if ($get_account_type->result()): ?>
                  <?php foreach ($get_account_type->result() as $account_type): ?>
                          <option value="<?php echo $account_type->ACCOUNT_TYPE_NUMBER; ?>"><?php echo $account_type->ACCOUNT_TYPE; ?></option>
                  <?php endforeach ?>
                <?php endif ?>
              </select>
            </div>

            <div id="displaySelectUpline" style="margin-bottom: 1em; z-index: 10;">
                <div class="col-md-12">
                    <select id="selectUpline" class="form-select mb-3" name="upline_account_number">
                        <option value="" selected disabled>--- SELECT UPLINE ---</option>
                        <!-- -- GENERATED JS HERE -- -->
                    </select>
                </div>
            </div>

            <div class="col-md-12">
                <input id="inputCommissionPercent" type="text" class="form-control mb-3 d-none" placeholder="Commision Percent" name="commission_percent">
            </div>

            <div class="col-md-12">
              <select id="selectCountry" class="flags form-select mb-3" name="country" placeholder="Select a country" required>
                <option class="flag flag-af">Afghanistan</option>
                <option class="flag flag-al">Albania</option>
                <option class="flag flag-dz">Algeria</option>
                <option class="flag flag-as">American Samoa</option>
                <option class="flag flag-ad">Andorra</option>
                <option class="flag flag-ao">Angola</option>
                <option class="flag flag-ai">Anguilla</option>
                <option class="flag flag-ag">Antigua and Barbuda</option>
                <option class="flag flag-ar">Argentina</option>
                <option class="flag flag-am">Armenia</option>
                <option class="flag flag-aw">Aruba</option>
                <option class="flag flag-au">Australia</option>
                <option class="flag flag-at">Austria</option>
                <option class="flag flag-az">Azerbaijan</option>
                <option class="flag flag-bs">Bahamas</option>
                <option class="flag flag-bh">Bahrain</option>
                <option class="flag flag-bd">Bangladesh</option>
                <option class="flag flag-bb">Barbados</option>
                <option class="flag flag-by">Belarus</option>
                <option class="flag flag-be">Belgium</option>
                <option class="flag flag-bz">Belize</option>
                <option class="flag flag-bj">Benin</option>
                <option class="flag flag-bm">Bermuda</option>
                <option class="flag flag-bt">Bhutan</option>
                <option class="flag flag-bo">Bolivia</option>
                <option class="flag flag-ba">Bosnia and Herzegovina</option>
                <option class="flag flag-bw">Botswana</option>
                <option class="flag flag-bv">Bouvet Island</option>
                <option class="flag flag-br">Brazil</option>
                <option class="flag flag-io">British Indian Ocean Territory</option>
                <option class="flag flag-bn">Brunei Darussalam</option>
                <option class="flag flag-bg">Bulgaria</option>
                <option class="flag flag-bf">Burkina Faso</option>
                <option class="flag flag-bi">Burundi</option>
                <option class="flag flag-kh">Cambodia</option>
                <option class="flag flag-cm">Cameroon</option>
                <option class="flag flag-ca">Canada</option>
                <option class="flag flag-cv">Cape Verde</option>
                <option class="flag flag-ky">Cayman Islands</option>
                <option class="flag flag-cf">Central African Republic</option>
                <option class="flag flag-td">Chad</option>
                <option class="flag flag-cl">Chile</option>
                <option class="flag flag-cn">China</option>
                <option class="flag flag-co">Colombia</option>
                <option class="flag flag-km">Comoros</option>
                <option class="flag flag-cg">Congo</option>
                <option class="flag flag-cd">Congo, The Democratic Republic of the</option>
                <option class="flag flag-ck">Cook Islands</option>
                <option class="flag flag-cr">Costa Rica</option>
                <option class="flag flag-ci">Côte D'Ivoire</option>
                <option class="flag flag-hr">Croatia</option>
                <option class="flag flag-cu">Cuba</option>
                <option class="flag flag-cy">Cyprus</option>
                <option class="flag flag-cz">Czech Republic</option>
                <option class="flag flag-dk">Denmark</option>
                <option class="flag flag-dj">Djibouti</option>
                <option class="flag flag-dm">Dominica</option>
                <option class="flag flag-do">Dominican Republic</option>
                <option class="flag flag-ec">Ecuador</option>
                <option class="flag flag-eg">Egypt</option>
                <option class="flag flag-sv">El Salvador</option>
                <option class="flag flag-gq">Equatorial Guinea</option>
                <option class="flag flag-er">Eritrea</option>
                <option class="flag flag-ee">Estonia</option>
                <option class="flag flag-et">Ethiopia</option>
                <option class="flag flag-fk">Falkland Islands (Malvinas)</option>
                <option class="flag flag-fo">Faroe Islands</option>
                <option class="flag flag-fj">Fiji</option>
                <option class="flag flag-fi">Finland</option>
                <option class="flag flag-fr">France</option>
                <option class="flag flag-gf">French Guiana</option>
                <option class="flag flag-pf">French Polynesia</option>
                <option class="flag flag-tf">French Southern Territories</option>
                <option class="flag flag-ga">Gabon</option>
                <option class="flag flag-gm">Gambia</option>
                <option class="flag flag-ge">Georgia</option>
                <option class="flag flag-de">Germany</option>
                <option class="flag flag-gh">Ghana</option>
                <option class="flag flag-gi">Gibraltar</option>
                <option class="flag flag-gr">Greece</option>
                <option class="flag flag-gl">Greenland</option>
                <option class="flag flag-gd">Grenada</option>
                <option class="flag flag-gp">Guadeloupe</option>
                <option class="flag flag-gu">Guam</option>
                <option class="flag flag-gt">Guatemala</option>
                <option class="flag flag-gg">Guernsey</option>
                <option class="flag flag-gn">Guinea</option>
                <option class="flag flag-gw">Guinea-Bissau</option>
                <option class="flag flag-gy">Guyana</option>
                <option class="flag flag-ht">Haiti</option>
                <option class="flag flag-hm">Heard Island and McDonald Islands</option>
                <option class="flag flag-va">Holy See (Vatican City State)</option>
                <option class="flag flag-hn">Honduras</option>
                <option class="flag flag-hk">Hong Kong</option>
                <option class="flag flag-hu">Hungary</option>
                <option class="flag flag-is">Iceland</option>
                <option class="flag flag-in">India</option>
                <option class="flag flag-id">Indonesia</option>
                <option class="flag flag-ir">Iran, Islamic Republic of</option>
                <option class="flag flag-iq">Iraq</option>
                <option class="flag flag-ie">Ireland</option>
                <option class="flag flag-im">Isle of Man</option>
                <option class="flag flag-il">Israel</option>
                <option class="flag flag-it">Italy</option>
                <option class="flag flag-jm">Jamaica</option>
                <option class="flag flag-jp">Japan</option>
                <option class="flag flag-je">Jersey</option>
                <option class="flag flag-jo">Jordan</option>
                <option class="flag flag-kz">Kazakhstan</option>
                <option class="flag flag-ke">Kenya</option>
                <option class="flag flag-ki">Kiribati</option>
                <option class="flag flag-kp">Korea, Democratic People's Republic of</option>
                <option class="flag flag-kr">Korea, Republic of</option>
                <option class="flag flag-kw">Kuwait</option>
                <option class="flag flag-kg">Kyrgyzstan</option>
                <option class="flag flag-la">Lao People's Democratic Republic</option>
                <option class="flag flag-lv">Latvia</option>
                <option class="flag flag-lb">Lebanon</option>
                <option class="flag flag-ls">Lesotho</option>
                <option class="flag flag-lr">Liberia</option>
                <option class="flag flag-ly">Libyan Arab Jamahiriya</option>
                <option class="flag flag-li">Liechtenstein</option>
                <option class="flag flag-lt">Lithuania</option>
                <option class="flag flag-lu">Luxembourg</option>
                <option class="flag flag-mo">Macao</option>
                <option class="flag flag-mk">Macedonia, The Former Yugoslav Republic of</option>
                <option class="flag flag-mg">Madagascar</option>
                <option class="flag flag-mw">Malawi</option>
                <option class="flag flag-my">Malaysia</option>
                <option class="flag flag-mv">Maldives</option>
                <option class="flag flag-ml">Mali</option>
                <option class="flag flag-mt">Malta</option>
                <option class="flag flag-mh">Marshall Islands</option>
                <option class="flag flag-mq">Martinique</option>
                <option class="flag flag-mr">Mauritania</option>
                <option class="flag flag-mu">Mauritius</option>
                <option class="flag flag-yt">Mayotte</option>
                <option class="flag flag-mx">Mexico</option>
                <option class="flag flag-fm">Micronesia, Federated States of</option>
                <option class="flag flag-md">Moldova, Republic of</option>
                <option class="flag flag-mc">Monaco</option>
                <option class="flag flag-mn">Mongolia</option>
                <option class="flag flag-me">Montenegro</option>
                <option class="flag flag-ms">Montserrat</option>
                <option class="flag flag-ma">Morocco</option>
                <option class="flag flag-mz">Mozambique</option>
                <option class="flag flag-mm">Myanmar</option>
                <option class="flag flag-na">Namibia</option>
                <option class="flag flag-nr">Nauru</option>
                <option class="flag flag-np">Nepal</option>
                <option class="flag flag-nl">Netherlands</option>
                <option class="flag flag-an">Netherlands Antilles</option>
                <option class="flag flag-nc">New Caledonia</option>
                <option class="flag flag-nz">New Zealand</option>
                <option class="flag flag-ni">Nicaragua</option>
                <option class="flag flag-ne">Niger</option>
                <option class="flag flag-ng">Nigeria</option>
                <option class="flag flag-nu">Niue</option>
                <option class="flag flag-nf">Norfolk Island</option>
                <option class="flag flag-mp">Northern Mariana Islands</option>
                <option class="flag flag-no">Norway</option>
                <option class="flag flag-om">Oman</option>
                <option class="flag flag-pk">Pakistan</option>
                <option class="flag flag-pw">Palau</option>
                <option class="flag flag-ps">Palestinian Territory, Occupied</option>
                <option class="flag flag-pa">Panama</option>
                <option class="flag flag-pg">Papua New Guinea</option>
                <option class="flag flag-py">Paraguay</option>
                <option class="flag flag-pe">Peru</option>
                <option class="flag flag-ph">Philippines</option>
                <option class="flag flag-pn">Pitcairn</option>
                <option class="flag flag-pl">Poland</option>
                <option class="flag flag-pt">Portugal</option>
                <option class="flag flag-pr">Puerto Rico</option>
                <option class="flag flag-qa">Qatar</option>
                <option class="flag flag-re">Réunion</option>
                <option class="flag flag-ro">Romania</option>
                <option class="flag flag-ru">Russian Federation</option>
                <option class="flag flag-rw">Rwanda</option>
                <option class="flag flag-sh">Saint Helena, Ascension and Tristan Da Cunha</option>
                <option class="flag flag-kn">Saint Kitts and Nevis</option>
                <option class="flag flag-lc">Saint Lucia</option>
                <option class="flag flag-pm">Saint Pierre and Miquelon</option>
                <option class="flag flag-vc">Saint Vincent and The Grenadines</option>
                <option class="flag flag-ws">Samoa</option>
                <option class="flag flag-sm">San Marino</option>
                <option class="flag flag-st">Sao Tome and Principe</option>
                <option class="flag flag-sa">Saudi Arabia</option>
                <option class="flag flag-sn">Senegal</option>
                <option class="flag flag-rs">Serbia</option>
                <option class="flag flag-sc">Seychelles</option>
                <option class="flag flag-sl">Sierra Leone</option>
                <option class="flag flag-sg">Singapore</option>
                <option class="flag flag-sk">Slovakia</option>
                <option class="flag flag-si">Slovenia</option>
                <option class="flag flag-sb">Solomon Islands</option>
                <option class="flag flag-so">Somalia</option>
                <option class="flag flag-za">South Africa</option>
                <option class="flag flag-gs">South Georgia and The South Sandwich Islands</option>
                <option class="flag flag-es">Spain</option>
                <option class="flag flag-lk">Sri Lanka</option>
                <option class="flag flag-sd">Sudan</option>
                <option class="flag flag-sr">Suriname</option>
                <option class="flag flag-sz">Swaziland</option>
                <option class="flag flag-se">Sweden</option>
                <option class="flag flag-ch">Switzerland</option>
                <option class="flag flag-sy">Syrian Arab Republic</option>
                <option class="flag flag-tw">Taiwan, Province of China</option>
                <option class="flag flag-tj">Tajikistan</option>
                <option class="flag flag-tz">Tanzania, United Republic of</option>
                <option class="flag flag-th">Thailand</option>
                <option class="flag flag-tl">Timor-Leste</option>
                <option class="flag flag-tg">Togo</option>
                <option class="flag flag-tk">Tokelau</option>
                <option class="flag flag-to">Tonga</option>
                <option class="flag flag-tt">Trinidad and Tobago</option>
                <option class="flag flag-tn">Tunisia</option>
                <option class="flag flag-tr">Turkey</option>
                <option class="flag flag-tm">Turkmenistan</option>
                <option class="flag flag-tc">Turks and Caicos Islands</option>
                <option class="flag flag-tv">Tuvalu</option>
                <option class="flag flag-ug">Uganda</option>
                <option class="flag flag-ua">Ukraine</option>
                <option class="flag flag-ae">United Arab Emirates</option>
                <option class="flag flag-gb">United Kingdom</option>
                <option class="flag flag-us">United States</option>
                <option class="flag flag-um">United States Minor Outlying Islands</option>
                <option class="flag flag-uy">Uruguay</option>
                <option class="flag flag-uz">Uzbekistan</option>
                <option class="flag flag-vu">Vanuatu</option>
                <option class="flag flag-ve">Venezuela, Bolivarian Republic of</option>
                <option class="flag flag-vn">Vietnam</option>
                <option class="flag flag-vg">Virgin Islands, British</option>
                <option class="flag flag-vi">Virgin Islands, U.S.</option>
                <option class="flag flag-wf">Wallis and Futuna</option>
                <option class="flag flag-eh">Western Sahara</option>
                <option class="flag flag-ye">Yemen</option>
                <option class="flag flag-zm">Zambia</option>
                <option class="flag flag-zw">Zimbabwe</option>
              </select>
            </div>

            <div class="col-md-12">
              <input type="text" class="form-control" placeholder="Username" name="username" minlength="4" required>
              <div class="mb-3">
                <small id="usernameMinLength" class="text-danger d-none">Username must be minimum of 4 characters or more.</small>
                <small id="usernameAvailable" class="text-success d-none">Username is Available.</small>
                <small id="usernameNotAvailable" class="text-danger d-none">Username already exist.</small>
              </div>
            </div>

            <div class="col-md-12">
              <input type="number" class="form-control mb-3" placeholder="Contact Number" name="contact_number" required>
            </div>

            <div class="col-md-12">
              <input type="email" class="form-control mb-3" placeholder="Email" name="email_address" required>
            </div>

            <div class="col-md-12">
              <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="button-addon2" name="password" minlength="6" required>

                <button id="btnEye" class="btn" type="button" style="z-index: 3; background-color: #DB0500; color: #fff;"><i class="fa fa-eye"></i> <span>SHOW</span></button>
              </div>
            </div>

            <div class="col-md-12">
              <input id="inputInvitationCode" type="text" class="form-control mb-3 d-none" placeholder="Invitation Code" name="invitation_code">
            </div>

            <div class="col-md-12">
              <button id="btnRegister" type="submit" class="btn btn-lg btn-danger">Create Account</button>
            </div>
          </div>
        </form>
      </div>
    </main>


  </div>
</div> <!-- /.site-content -->



<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="<?php echo base_url('assets/country-select/app/js/country-select.js'); ?>"></script>

<script type="text/javascript" src="<?php echo base_url('assets/node_modules/choices.js/public/assets/scripts/choices.min.js'); ?>"></script>

<script type="text/javascript" src="<?php echo base_url('assets/js/admin.add-account.js'); ?>"></script>


