let input_amount = document.getElementById('inputAmount');
let input_username = document.getElementById('autoCompleteUsername');
let btn_send_request = document.getElementById('btnSendRequest');

document.querySelector("#autoCompleteUsername").addEventListener("results", (event) => {
  console.log(event);
});

const autoCompleteJS = new autoComplete({
  name: "autosearch-username",
  data: {
    src: async function () {
      // Loading placeholder text
      document
        .querySelector("#autoCompleteUsername")
        .setAttribute("placeholder", "Loading...");
      // Fetch External Data Source
      const source = await fetch(
        // window.location.origin + "/assets/generic.json"
        window.location.origin + "/player/autocomplete_username?username=" + document.querySelector("#autoCompleteUsername").value
      );
      const data = await source.json();
      // Post loading placeholder text
      document
        .querySelector("#autoCompleteUsername")
        .setAttribute("placeholder", "Required");
      // Returns Fetched data
      return data.result;
    },
    key: ["accountUsername"],
    results: (list) => {
      // Filter duplicates
      const filteredResults = Array.from(
        new Set(list.map((value) => value.match))
      ).map((username) => {
        return list.find((value) => value.match === username);
      });

      return filteredResults;
    }
  },
  trigger: {
    event: ["input", "focus"]
  },
  selector: "#autoCompleteUsername",
  placeHolder: "Required",
  searchEngine: "strict",
  highlight: true,
  maxResults: 5,
  resultItem: {
    content: (data, element) => {
      // console.log(data);
      // Modify Results Item Style
      element.style = "display: flex; justify-content: space-between;";
      // Modify Results Item Content
      element.innerHTML = `<span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
        ${data.match}</span>
        <span style="display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.2);">
      ${data.value.accountType}</span>`;
    }
  },
  noResults: (dataFeedback, generateList) => {
    // Generate autoComplete List
    generateList(autoCompleteJS, dataFeedback, dataFeedback.results);
    // No Results List Item
    const result = document.createElement("li");
    result.setAttribute("class", "no_result");
    result.setAttribute("tabindex", "1");
    result.innerHTML = `<span style="display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.2);">Found No Results for "${dataFeedback.query}"</span>`;
    document
      .querySelector(`#${autoCompleteJS.resultsList.idName}`)
      .appendChild(result);
  },
  onSelection: (feedback) => {
    document.querySelector("#autoCompleteUsername").blur();
    // Prepare User's Selected Value
    const selection = feedback.selection.value[feedback.selection.key];
    // Render selected choice to selection div
    // document.querySelector(".selection").innerHTML = selection;
    // Replace Input value with the selected value
    document.querySelector("#autoCompleteUsername").value = selection;
    // Console log autoComplete data feedback
    console.log(feedback);
  }
});



btn_send_request.addEventListener('click', () => {
  killActiveAlerts();
  btn_send_request.innerHTML = 'Loading...';
  btn_send_request.disabled = true;
  validateRequiredFields();
});

function validateRequiredFields () {

  if (input_username.validity.valid == false || input_amount.validity.valid == false) {
    alertResponse( null, 'Please fill out the required fields.' );
    btn_send_request.innerHTML = 'Confirm';
    btn_send_request.disabled = false;
    return;
  } else {
    sendCredit(input_amount.value, input_username.value);
  }

}

function sendCredit (amount, send_to) {
  var xhr_send_credit = new XMLHttpRequest();
  let sendCreditURI = window.location.origin + `/player/send_credits?send_to=${send_to}&amount=${amount}`;
  xhr_send_credit.open('GET', sendCreditURI, true);
  xhr_send_credit.onload = function() {
    let json = JSON.parse(this.response);
    if (json.statusCode == 200) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
      input_amount.value = '';
      input_username.value = '';
    } else if (json.statusCode == 406) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    } else if (json.statusCode == 401) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    } else if (json.statusCode == 412) {
      console.log(`[${json.status.toUpperCase()}]: ${json.description}`);
    }

    alertResponse(json.statusCode, json.description);
    btn_send_request.innerHTML = 'Confirm';
    btn_send_request.disabled = false;
  }
  xhr_send_credit.send();
}

function alertResponse (status_code, message) {
  let alert = document.createElement('div');
  alert.style.maxWidth = '450px';
  alert.style.position = 'fixed';
  alert.style.bottom = '15px';
  alert.style.right = '15px';
  alert.style.transition="opacity 500ms";


  alert.classList.add('alert', 'alert-dismissible', 'fade', 'in');
  alert.setAttribute('role', 'alert');

  if (status_code == 200 || status_code == 201) {
    alert.classList.add('alert-success');
    alert.innerHTML = message;
  } else {
    alert.classList.add('alert-warning');
    alert.innerHTML = message;
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


window.addEventListener('load', () => {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    var tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: 'focus click'
    })

    document.querySelector('.input-group-box span').addEventListener('mouseleave', () => {
      tooltip.hide();
    });

    return tooltip;
  })

});