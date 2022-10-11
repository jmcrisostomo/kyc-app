"use strict"

export class Config {
    static conf_jquery_ph() {
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
    }

    static conf_input_mask() {
        let input_contact_number = document.getElementById('inputContactNumber');
        let im_contact_number = new Inputmask({
            mask: '9999 999 9999',
            greedy: false,
            placeholder: "",
            clearIncomplete: true
        });
        im_contact_number.mask(document.querySelector('#inputContactNumber'));

        let input_otp_code = document.getElementById('inputOTPCode');
        let im_otp_code = new Inputmask({
            mask: '9999999',
            greedy: false,
            placeholder: "",
            clearIncomplete: true
        });
        im_otp_code.mask(document.querySelector('#inputContactNumber'));
    }

    static conf_flatpickr() {
        let input_birth_date = document.getElementById('inputBirthdate');
        flatpickr(input_birth_date, {
            enableTime: false,
            disableMobile: true,
            allowInput: true,
            dateFormat: "Y-m-d",
        });
    }
}