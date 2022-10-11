/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Common.js":
/*!*******************!*\
  !*** ./Common.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Common": () => (/* binding */ Common)
/* harmony export */ });
class Common {
	static init () {
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
		  let sidebar_overlay = document.querySelector('.sidebar-overlay');
		  let btn_close_sidebar = document.querySelector('.btn-close-sidebar');
		  btnSidebarToggle.addEventListener('click', function(evt){
		    evt.preventDefault();

		    if ( sidebar.classList.contains('close-sidebar') ) {
		      sidebar.classList.remove('close-sidebar');
		    } else {
		      sidebar.classList.add('close-sidebar');
		    }
		  });

		  btn_close_sidebar.addEventListener('click', () => {
		    sidebar_overlay.click();
		  });

		  sidebar_overlay.addEventListener('click', (evt) => {
		    if ( sidebar.classList.contains('close-sidebar') ) {
		      sidebar.classList.remove('close-sidebar');
		    } else {
		      sidebar.classList.add('close-sidebar');
		    }
		  });
		}

		function convertValueWithComma(value){
		  if (value != null && value != '') {
		    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
		  } else {
		    return value;
		  }
		}
	}
}

/***/ }),

/***/ "./Core.js":
/*!*****************!*\
  !*** ./Core.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Core": () => (/* binding */ Core)
/* harmony export */ });
class Core {
	static accountLogin() {
		let input_password = document.querySelector('[name="password"]');
		let btn_eye = document.getElementById('btnEye');
		btn_eye.addEventListener('click', () => {
		    let eye = btn_eye.querySelector('.fa');
		    let span = btn_eye.querySelector('span');
		    if (eye.classList.contains('fa-eye-slash') == true) {
		        input_password.setAttribute('type', 'text');
		        eye.classList.remove('fa-eye-slash');
		        eye.classList.add('fa-eye');
		    } else {
		        input_password.setAttribute('type', 'password');
		        eye.classList.add('fa-eye-slash');
		        eye.classList.remove('fa-eye');
		    }
		});
	}

	static accountRegistration() {

		let select_country = document.getElementById('selectCountry');
		let flag_icon = document.getElementsByClassName('flag')[0];
		let input_username = document.querySelector('[name="username"]');
		let input_password = document.querySelector('[name="password"]');
		let btn_eye = document.getElementById('btnEye');
		let usernameMinLength = document.getElementById('usernameMinLength');
		let usernameAvailable = document.getElementById('usernameAvailable');
		let usernameNotAvailable = document.getElementById('usernameNotAvailable');
		let focusEffect = document.querySelectorAll('input, select, textarea');
		// input_username.addEventListener('input', () => {
		//         if (input_username.value.length < 4) {
		//                 usernameAvailable.classList.add('d-none');
		//                 usernameNotAvailable.classList.add('d-none');
		//                 usernameMinLength.classList.remove('d-none');
		//                 btn_register.disabled = true;
		//         } else {
		//                 validateUsername();
		//         }
		// });

		window.addEventListener('load', () => {
		    findVisitorCountry();

		    btn_eye.addEventListener('click', () => {
		        let eye = btn_eye;
		        if (eye.classList.contains('fa-eye-slash') == true) {
		            input_password.setAttribute('type', 'text');
		            eye.classList.remove('fa-eye-slash');
		            eye.classList.add('fa-eye');
		        } else {
		            input_password.setAttribute('type', 'password');
		            eye.classList.add('fa-eye-slash');
		            eye.classList.remove('fa-eye');
		        }
		    });
		});

		function findVisitorCountry() {
		    var xhr_current_location = new XMLHttpRequest();
		    xhr_current_location.open('GET', location.protocol + '//ip-api.com/json', true);
		    xhr_current_location.onloadend = function() {
		        console.log(this.response);
		        let current_location = JSON.parse(this.response);

		        flag_icon.classList.add('flag-' + current_location.countryCode.toLowerCase());
		        select_country.value = current_location.country;
		    }
		    // xhr_current_location.send();
		}

		function validateUsername() {
		    let username = input_username.value;
		    var xhr_validate_username = new XMLHttpRequest();
		    let validateUsernameURI = window.location.origin + '/home/validate_username?username=' + username;
		    xhr_validate_username.open('GET', validateUsernameURI, true);
		    xhr_validate_username.onload = function() {
		        let json = JSON.parse(this.response);

		        usernameMinLength.classList.add('d-none');

		        if (json.result == 'true') {
		            console.log(`[Message]: ${json.message}`);

		            usernameAvailable.classList.remove('d-none');
		            usernameNotAvailable.classList.add('d-none');
		            btn_register.disabled = false;
		        } else if (json.result == 'false') {
		            console.log(`[Message]: ${json.message}`);

		            usernameAvailable.classList.add('d-none');
		            usernameNotAvailable.classList.remove('d-none');
		            btn_register.disabled = true;
		        }
		    }
		    xhr_validate_username.send();
		}

		focusEffect.forEach((inputs) => {
			inputs.addEventListener( 'focus', () => { setFocus(true); } );
			inputs.addEventListener( 'blur', () => { setFocus(false); } );
		});
		const setFocus = (on) => {
		    var element = document.activeElement;
		    if (on) {
		        setTimeout(function() {
		            element.parentNode.classList.add("focus");
		        });
		    } else {
		        let box = document.querySelector(".input-box");
		        box.classList.remove("focus");
		        $("input, textarea, select").each(function() {
		            var $input = $(this);
		            var $parent = $input.closest(".input-box");
		            if ($input.val()) $parent.addClass("focus");
		            else $parent.removeClass("focus");
		        });
		    }
		}

		/**
		 *
		 * Form Steps Configuration
		 *
		 */

		let steps_offset = 0;
		const steps_movement = (offset) => {
		    let step_forms = document.querySelectorAll('.step-forms-section');
		    step_forms.forEach(
		        (elem, index) => {
		            if (index == offset) {
		                elem.style.opacity = '1'
		                setTimeout(() => {
		                    elem.style.display = 'block'
		                }, 250)
		            } else {
		                elem.style.opacity = '0'
		                setTimeout(() => {
		                    elem.style.display = 'none'
		                }, 250)
		            }
		        }
		    );
		}

		const step_buttons_state = (next, prev, register, offset) => {
		    switch (offset) {
		        case 0:
		            next.classList.remove('d-none')
		            prev.classList.add('d-none')
		            register.classList.add('d-none')
		            break;
		        case 1:
		            next.classList.remove('d-none')
		            prev.classList.remove('d-none')
		            register.classList.add('d-none')
		            break;
		        case 2:
		            next.classList.add('d-none')
		            register.classList.remove('d-none')
		            break;
		        default:
		            // statements_def
		            // does nothing
		            break;
		    }
		}

		let forms = document.querySelectorAll('form');
		forms.forEach((form, index) => {
		    form.addEventListener('submit', (event) => {
		        console.log(form.checkValidity());
		        if (form.checkValidity() && steps_offset < 2) {
		          event.preventDefault()
		          event.stopPropagation()
		            steps_offset = steps_offset + 1;
		            steps_movement(steps_offset);
		            step_buttons_state(btn_next_step_call, btn_back_step, btn_register, steps_offset)
		        }
		    });
		});

		var btn_next_step_call;
		let btn_next_step_one = document.getElementById('btnNextStepOne');
		let btn_next_step_two = document.getElementById('btnNextStepTwo');
		let btn_register = document.getElementById('btnRegister');
		let btn_back_step = document.getElementById('btnBackStep');
		btn_next_step_one.addEventListener('click', (evt) => {
		  btn_next_step_call = btn_next_step_one
		});
		btn_next_step_two.addEventListener('click', (evt) => {
		  btn_next_step_call = btn_next_step_two
		});

		btn_register.addEventListener('click', (evt) => {
		  evt.stopPropagation();
		  console.log(document.querySelectorAll('form')[2].checkValidity());
		  if (document.querySelectorAll('form')[2].checkValidity()){
		    evt.preventDefault();

		    let sendRegistationFormData = new FormData();

		    let attrs = document.querySelectorAll('input, select, textarea');
		    attrs.forEach((fields) => {
		      if(fields.getAttribute('name') !== null){
		        if (fields.getAttribute('type') == 'file'){
		          sendRegistationFormData.append( fields.getAttribute('name'), fields.files[0] )
		        } else {
		          sendRegistationFormData.append( fields.getAttribute('name'), fields.value )
		        }
		      }
		      console.log(fields.getAttribute('name'));
		    });

		    let xhr_register_account = new XMLHttpRequest();
		    xhr_register_account.open('POST', window.location.origin + '/account/register_api', true);
		    xhr_register_account.onload = function() {
		        let json_response = JSON.parse(this.response);
		        console.log(json_response);
		        if (json_response.response == 200) {
		            window.location.href = window.location.origin + '/home/login';
		        } else {
		            console.log(`[${json_response.status}] ${json_response.message}`);
		        }

		    }
		    xhr_register_account.send(sendRegistationFormData);
		  }
		  
		});

		btn_back_step.addEventListener('click', (evt) => {
		    if (steps_offset > 0) {
		        steps_offset = steps_offset - 1;
		        steps_movement(steps_offset);
		        step_buttons_state(btn_next_step_call, btn_back_step, btn_register, steps_offset)
		    }
		});


		/**
		 *
		 * flatpickr configs
		 *
		 */


		let input_birth_date = document.getElementById('inputBirthdate');
		flatpickr(input_birth_date, {
		    enableTime: false,
		    disableMobile: true,
		    allowInput: true,
		    dateFormat: "Y-m-d",
		});

		/**
		 *
		 * 
		 *
		 */


		let inputfile_document_requirement = document.getElementById('inputfileDocumentRequirement');
		inputfile_document_requirement.addEventListener('change', (evt) => {
		  let file = inputfile_document_requirement.files[0];
		  console.log(file);
		  document.getElementById('previewImageDocument').src = URL.createObjectURL(file);
		  document.getElementById('previewImageDocument').classList.remove('d-none');
		  // Send file here either by adding it to a `FormData` object 
		  // and sending that via XHR, or by simply passing the file into 
		  // the `send` method of an XHR instance.
		}, false);

		let inputfile_document_with_selfie = document.getElementById('inputfileDocumentWithSelfie');
		inputfile_document_with_selfie.addEventListener('change', (evt) => {
		  let file = inputfile_document_with_selfie.files[0];
		  console.log(file);
		  document.getElementById('previewImageDocumentSelfie').src = URL.createObjectURL(file);
		  document.getElementById('previewImageDocumentSelfie').classList.remove('d-none');
		  // Send file here either by adding it to a `FormData` object 
		  // and sending that via XHR, or by simply passing the file into 
		  // the `send` method of an XHR instance.
		}, false);


		/**
		 *
		 * jQuery PH Locations Config
		 *
		 */

		window.addEventListener('load', (evt) => {

		    let select_region = document.getElementById('selectRegion');
		    let select_province = document.getElementById('selectProvince');
		    let select_city = document.getElementById('selectCity');
		    let select_barangay = document.getElementById('selectBarangay');

		    // instantiate jQuery
		    (($) => {
		        var my_handlers = {

		            fill_provinces: function() {

		                var region_code = $(this).val();
		                $('#selectProvince').ph_locations('fetch_list', [{
		                    "region_code": region_code
		                }]);
		                // $('#selectProvince').focus()

		                // $('#selectProvince').change()
		                $('#selectProvince').addClass('focus');
		                $('#selectProvince').parent().addClass('focus');

		                $('#selectCity, #selectBarangay').find('option')
		                    .remove()
		                    .end()
		                    .append('<option value="-1" disabled selected></option>')
		                $('#selectCity, #selectBarangay').parent().removeClass('focus');
		                $('#selectCity, #selectBarangay').removeClass('focus');
		            },

		            fill_cities: function() {

		                var province_code = $(this).val();
		                $('#selectCity').ph_locations('fetch_list', [{
		                    "province_code": province_code
		                }]);
		                // $('#selectCity').focus().change();
		                // $('#selectCity').focus();
		                // $('#selectCity').change();
		                $('#selectCity').addClass('focus');
		                $('#selectCity').parent().addClass('focus');

		                $('#selectBarangay').find('option')
		                    .remove()
		                    .end()
		                    .append('<option value="-1" disabled selected></option>')
		                $('#selectBarangay').parent().removeClass('focus');
		                $('#selectBarangay').removeClass('focus');
		            },


		            fill_barangays: function() {

		                var city_code = $(this).val();
		                $('#selectBarangay').ph_locations('fetch_list', [{
		                    "city_code": city_code
		                }]);
		                $('#selectBarangay').addClass('focus');
		                $('#selectBarangay').parent().addClass('focus');
		            }
		        };

		        $(function() {
		            $('#selectRegion').on('change', my_handlers.fill_provinces);
		            $('#selectProvince').on('change', my_handlers.fill_cities);
		            $('#selectCity').on('change', my_handlers.fill_barangays);

		            $('#selectProvince').on('focus', my_handlers.fill_cities)
		            $('#selectCity').on('focus', my_handlers.fill_barangays)
		            // $('#selectBarangay').on('click', my_handlers.fill_barangays);

		            $('#selectRegion').ph_locations({
		                'location_type': 'regions'
		            });
		            $('#selectProvince').ph_locations({
		                'location_type': 'provinces'
		            });
		            $('#selectCity').ph_locations({
		                'location_type': 'cities'
		            });
		            $('#selectBarangay').ph_locations({
		                'location_type': 'barangays'
		            });


		            // var load_api_once = 1; //temporary fix hehe
		            select_region.addEventListener('focus', (evt) => {
		                //     if (load_api_once == 1) {
		                $('#selectRegion').ph_locations('fetch_list');
		                // $('#selectRegion').on('focus', my_handlers.fill_provinces)
		                //         load_api_once = 0;
		                //     }
		                //     console.log(select_region.value);
		            });

		            // $('#selectRegion').ph_locations('fetch_list');
		        });

		        function setRegionTxt(ddl) {
		            document.getElementById('txtRegion').value = ddl.options[ddl.selectedIndex].text;
		        }

		        function setProvinceTxt(ddl) {
		            document.getElementById('txtProvince').value = ddl.options[ddl.selectedIndex].text;
		        }

		        function setCityTxt(ddl) {
		            document.getElementById('txtCity').value = ddl.options[ddl.selectedIndex].text;
		        }


		        select_region.addEventListener('change', () => {
		            document.getElementById('hiddenRegion').value = select_region.options[select_region.selectedIndex].text;
		        });

		        select_province.addEventListener('change', () => {
		            document.getElementById('hiddenProvince').value = select_province.options[select_province.selectedIndex].text;
		        });

		        select_city.addEventListener('change', () => {
		            document.getElementById('hiddenCity').value = select_city.options[select_city.selectedIndex].text;
		        });

		        select_barangay.addEventListener('change', () => {
		            document.getElementById('hiddenBarangay').value = select_barangay.options[select_barangay.selectedIndex].text;
		        });

		    })(jQuery);

		});


		/**
		 *
		 * Inputmask config
		 *
		 */

		let input_contact_number = document.getElementById('inputContactNumber');
		let im_contact_number = new Inputmask({
		    mask: '9999 999 9999',
		    greedy: false,
		    placeholder: "",
		    clearIncomplete: true
		});
		im_contact_number.mask(document.querySelector('#inputContactNumber'));
	}
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core.js */ "./Core.js");
/* harmony import */ var _Common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Common.js */ "./Common.js");



_Common_js__WEBPACK_IMPORTED_MODULE_1__.Common.init();
_Core_js__WEBPACK_IMPORTED_MODULE_0__.Core.accountLogin();
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map