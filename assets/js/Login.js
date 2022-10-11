"use strict"

import "../../assets/css/login.css";
import { Toast } from './Toast.js';

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

// console.log({ utils })
// utils.showToast({
//     type: "error",
//     msg: "ERROR CODE " + res.status_code + ": " + res.message
// });

