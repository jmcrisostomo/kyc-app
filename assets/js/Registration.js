"use strict";
import "../../assets/css/registration.css";
import css from "flatpickr/dist/themes/light.css";

import {
    Config
} from './Config.js';
import {
    Toast
} from './Toast.js';
import "../jquery.ph-locations/jquery.ph-locations-v1.0.0.js";
import flatpickr from "flatpickr";
import "inputmask.dependencyLib";
import "inputmask";

// import { country-select } from '/assets/node_modules/country-select/dist/select2.min.js'
// Core.accountRegistration();

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
    inputs.addEventListener('focus', () => {
        setFocus(true);
    });
    inputs.addEventListener('blur', () => {
        setFocus(false);
    });
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

    let utils = Toast.utils();
	utils.showToast({ type: "info", msg: "AAAAAAAAAAAAAAAAAAA" });
});
btn_next_step_two.addEventListener('click', (evt) => {
    btn_next_step_call = btn_next_step_two
});

btn_register.addEventListener('click', (evt) => {
    evt.stopPropagation();
    console.log(document.querySelectorAll('form')[2].checkValidity());
    if (document.querySelectorAll('form')[2].checkValidity()) {
        evt.preventDefault();

        let sendRegistationFormData = new FormData();

        let attrs = document.querySelectorAll('input, select, textarea');
        attrs.forEach((fields) => {
            if (fields.getAttribute('name') !== null) {
                if (fields.getAttribute('type') == 'file') {
                    sendRegistationFormData.append(fields.getAttribute('name'), fields.files[0])
                } else {
                    sendRegistationFormData.append(fields.getAttribute('name'), fields.value)
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
    Config.conf_jquery_ph()
});

/**
 *
 * Inputmask config
 *
 */

window.addEventListener('load', (evt) => {
    Config.conf_input_mask()
});

/**
 *
 * flatpickr config
 *
 */

window.addEventListener('load', (evt) => {
    Config.conf_flatpickr()
});