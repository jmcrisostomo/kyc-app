"use strict"

import "../../assets/css/toast-notification.css";

export class Toast {
    static utils () {
        const utils = {
            //init: () => 

            goTo: (url) => {
                window.location = url;
            },

            goBack: () => {
                window.history.back();
            },

            getQS: (key) => {
                let r = '',
                    s = unescape(window.location.search);

                if (s != '') {
                    s = s.substr(1);
                    let p = s.split('&');

                    for (let i = 0; i < p.length; i++) {
                        let val = p[i].split('=');

                        if (val[0] == key) {
                            r = val[1];
                            break;
                        }
                    }
                }

                return r;
            },

            getLabel: (param) => {
                let r = '';

                try {
                    r = labels[param.group][param.key];
                } catch (err) {
                    //do nothing
                }

                return r;
            },

            getSetting: (param) => {
                let r = false;

                try {
                    r = siteSetting[param.group][param.key];
                } catch (err) {
                    //do nothing
                }

                return r;
            },

            getGame: (gameCode) => {
                let r;

                try {
                    r = gameSetting.game.filter(function(game) {
                        return game.code == gameCode;
                    })[0];
                } catch (err) {
                    //do nothing
                }

                return r;
            },

            showToast: (param) => {
                let handle = $("#popNotifications"),
                    css = '';

                //reset
                handle.removeClass("show")
                handle.find(".toast").removeClass(css);

                switch (param.type) {
                    case "error":
                        css = 'toast-error';
                        break;
                    case "info":
                    default:
                        css = 'toast-info';
                        break;
                }

                handle.find("p").html(param.msg);

                handle.addClass("show");

                handle.find(".toast").addClass(css);

                setTimeout(function() {
                    handle.removeClass("show")
                    handle.find(".toast").removeClass(css);
                }, 5 * 1000);
            },

            getNumGrp: (param) => {
                let r = "";

                try {

                    if (param.gameCode in gameSetting.numberGrp) {

                        $.each(gameSetting.numberGrp[param.gameCode], function(idx, item) {
                            let k = Object.keys(item)[0],
                                v = item[k],
                                min = Number(v.split("-")[0]),
                                max = Number(v.split("-")[1]);

                            if (Number(param.num) >= min && Number(param.num) <= max) {
                                r = k;
                                return false;
                            }

                        });

                    }

                } catch (err) {
                    //do nothing
                }

                // var a = { a1: 'hello' };
                // Object.keys(a)[0];
                // var key = Object.keys(a)[0];
                // a[key]; // yields "hello"

                //utils.getNumGrp({gameCode: gameData.code, num: num});

                // "120210607153851": [
                //     { "blue1": "1-11" },
                //     { "red": "12-23" },
                //     { "yellow": "24-35" },
                //     { "blue2": "36-45" }
                // ]

                return r;
            }
        }

        return utils
    }

    static api () {
    	const api = {
            post: function(url, dto, success, error) {
                $.ajax({
                    type: "post",
                    dataType: "json",
                    url: url,
                    //headers: { 'token': token },
                    data: (dto == null) ? '' : 'data=' + JSON.stringify(dto),
                    timeout: 10000,
                    success: function(d) {
                        success(d);
                    },
                    error: function(r, s, e) {
                        if (s === "timeout") {
                            console.log("TIMEOUT ERROR");
                        } else {
                            if (r != undefined && r.status != undefined) {
                                success(r.responseJSON);
                                // if (r.responseJSON && r.responseJSON.code) {
                                //     if (u.processReturnCode(r.responseJSON)) {
                                //         error(r.responseJSON.code);
                                //     }                            
                                // }
                                // else {
                                //     error('HTTP' + r.status);
                                // }
                            } else {
                                error(e);
                            }
                        }
                    },
                    complete: function(r, s) {
                        console.log("SUBMIT COMPLETE");
                    }
                });
            },
        }
        return api
    }

}




// }
// }